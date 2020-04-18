import next from 'next';
import express, { Response, Request } from 'express';
import request from 'request-promise';

import { ApiOptions } from './types';

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
            fields: 'id, name, slug',
            limit: process.env.MAX_REQUEST_LIMIT,
        }
    },
    feeds: {
        endpoint: '/games',
        options: {
            fields: '*',
            sort: 'popularity desc',
            limit: 50,
        }
    }
};

const combineOptions = (options: ApiOptions) : string => {
  return Object.keys(options).reduce((acc, name) => {
      const value = options[name];
      const option = Array.isArray(value) ?
        value.reduce(((a, v, i) => a + v + (i === value.length - 1 ? '' : ' & ')), '') :
        value;
      return acc + `${name} ${option};`;
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
            const body = combineOptions(token.options);
            console.log(body)
            request(apiURL + token.endpoint, {
                headers: {
                    'Accept': 'application/json',
                    'user-key': process.env.API_KEY,
                },
                body,
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
