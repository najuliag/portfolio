"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const app_1 = require("./app");
const server = app_1.app.listen(process_1.env.PORT, () => console.log('HTTP Server Running! 🚀'));
process.on('SIGINT', () => {
    server.close();
    console.log('App encerrado :/');
});
