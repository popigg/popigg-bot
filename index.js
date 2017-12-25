'use strict';

const builder = require('botbuilder');
const restify = require('restify');

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID || '36157f91-00fa-4358-8d5f-bb2a693e7057',
    appPassword: process.env.MICROSOFT_APP_PASSWORD || 'B@YN/pkOi)I-imzj'
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
const bot = new builder.UniversalBot(connector, (session) => {
    session.send('You said: %s', session.message.text);
});
