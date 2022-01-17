import { __prod__ } from './constants'
import { Post } from './entities/Post'
import { MikroORM } from '@mikro-orm/core'
import path from 'path'

export default {
	migrations: {
		path: path.join(__dirname, './migrations'),
		pattern: /^[\w-]+\d+\.[tj]s$/,
	},
	name: 'redit',
	type: 'postgresql',
	dbName: 'reditDB',
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	entities: [Post],
	debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0]
