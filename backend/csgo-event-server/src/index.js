
import dotenv from 'dotenv';
dotenv.config(); // Load .env file

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import * as configUtils from './utils/config.js';
import { getFreePorts } from './utils/network.js';

export default async function createEventServer({ port, staticFilePath }) {

    if (!port) {

        // Set up ports for the server to listen on
        port = (await getFreePorts())[0]
        if (process.env.PORT) port = process.env.PORT

    }

    let appName = process.env.APP_NAME || process.env.npm_package_name

    // Try to create a configuration file on the host computer
    const hasCSGO = configUtils.installed.csgo
    if (hasCSGO) configUtils.save(port, `gamestate_integration_${appName}.cfg`)

    // Setup the event server using Express
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // Serve the example HTML page
    if (staticFilePath) app.use(express.static(staticFilePath));

    // Track all connected clients and send them game state updates
    let clients = [];

    function gameStateHander(req, res) {
        clients.forEach(client => client.response.write(`data: ${JSON.stringify(req.body)}\n\n`))
        res.sendStatus(200)
    }

    function eventsHandler(request, response) {

        response.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Connection': 'keep-alive',
            'Cache-Control': 'no-cache'
        });

        response.write(`data: ${JSON.stringify({ willEmitEvents: hasCSGO })}\n\n`);

        const clientId = Date.now();

        const newClient = { id: clientId, response };

        clients.push(newClient);

        request.on('close', () => {
            console.log(`${clientId} Connection closed`);
            clients = clients.filter(client => client.id !== clientId);
        });
    }

    app.get('/installed', (req, res) => {
        res.send(configUtils.installed)
    });

    app.get('/events', eventsHandler);
    app.post('*', gameStateHander);

    // Start the event server
    return app.listen(port, () => {
        console.log(`View real-time events from CS:GO at http://127.0.0.1:${port}`) // NOTE: This will always be local
    })

}