'use strict';

const builder = require('botbuilder');

const connector = new builder.ConsoleConnector().listen();
const bot = new builder.UniversalBot(connector, (session) => {
    session.send(`You just said: ${session.message.text}`);
});
