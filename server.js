const express = require('express');
const next = require('next');
const request = require('request');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

require('dotenv').config();

const apiURL = 'https://api-v3.igdb.com';

const apiTokens = {
    feed: {
        endpoint: '/games',
        options: {
            fields: '*',
            where: 'total_rating > 97',
            limit: 100,
            sort: 'total_rating desc'
        }
    },
};

const combineOptions = options => {
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

        server.all('/api/*', function(req, res) {
            const point = req.params[0];
            const token = apiTokens[point];
            request(apiURL + token.endpoint, {
                headers: {
                    'user-key': process.env.API_KEY,
                },
                body: combineOptions(token.options),
            }).pipe(res);
        });

        server.all("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });

    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
