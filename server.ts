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

const combineOptions = (options: ApiOptions) : string => {
  return Object.keys(options).reduce((acc, name) => {
      const value = options[name];
      const option = Array.isArray(value) ?
        value.reduce(((a, v, i) => a + v + (i === value.length - 1 ? '' : ' & ')), '') :
        value;
      return acc + `${name} ${option};`;
  }, '');
};

const defaultBodyOptions = {
    limit: process.env.MAX_REQUEST_LIMIT,
};

(async () => {
    try {
        await app.prepare();
        const server = express();

        server.use(express.json());

        server.all('/api*', function(req: Request, res: Response) {
            const point = req.params[0];
            const requestBody = req.body || {};
            const body = combineOptions({ ...defaultBodyOptions, ...requestBody });
            console.log('body = ' + body);
            request(apiURL + point, {
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
