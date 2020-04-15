const express = require('express');
const next = require('next');
const request = require('request');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

require('dotenv').config();

const apiURL = 'https://api-v3.igdb.com';

(async () => {
    try {
        await app.prepare();
        const server = express();

        server.all('/api/*', function(req, res) {
            const query = req.url.replace('/api', '');
            request(apiURL + query, {
                headers: {
                    'user-key': process.env.API_KEY,
                }
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