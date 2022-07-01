"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const URLController_1 = require("./controller/URLController");
const MongoConnection_1 = require("./database/MongoConnection");
const express = require("express");
const api = express();
api.use(express.json());
const database = new MongoConnection_1.MongoConnection();
database.connect();
const urlController = new URLController_1.URLController();
api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);
api.listen(5000, () => console.log("Express Listening"));
//# sourceMappingURL=index.js.map