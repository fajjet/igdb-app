import next from 'next';
import express, { Response, Request } from 'express';
import { ApiOptions } from './types';

import request from 'request-promise';

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

require('dotenv').config();

const apiURL = 'https://api-v3.igdb.com';

const apiTokens = {
    genres: {
        endpoint: '/genres',
        options: {
            fields: '*',
            limit: process.env.MAX_REQUEST_LIMIT,
        }
    }
};

const combineOptions = (options: ApiOptions) : string => {
  return Object.keys(options).reduce((acc, name) => {
      const value = options[name];
      return acc + `${name} ${value};`;
  }, '');
};

(async () => {
    try {
        await app.prepare();
        const server = express();

        server.use(express.json());

        server.all('/api/*', function(req: Request, res: Response) {
            const point = req.params[0];
            const token = apiTokens[point];
            request(apiURL + token.endpoint, {
                headers: {
                    'Accept': 'application/json',
                    'user-key': process.env.API_KEY,
                },
                body: combineOptions(token.options),
            }).pipe(res);
        });

        server.all("*", (req: Request, res: Response) => {
            return handle(req, res);
        });

        server.listen(port, (err?: any) => {
            if (err) throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });

    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
