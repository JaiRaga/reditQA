"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
dotenv_1.default.config();
const main = async () => {
    try {
        const orm = await core_1.MikroORM.init({
            name: 'redit',
            type: 'postgresql',
            dbName: 'reditDB',
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            entities: [Post_1.Post],
            debug: !constants_1.__prod__,
        });
        const post = orm.em.create(Post_1.Post, { itle: 'My First Post' });
        await orm.em.persistAndFlush(post);
        console.log('*************************Sql2*******************************');
        await orm.em.nativeInsert(Post_1.Post, { title: 'My Second Post' });
    }
    catch (err) {
        console.error(err);
    }
};
main();
//# sourceMappingURL=index.js.map