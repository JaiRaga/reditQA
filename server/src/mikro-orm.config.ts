import { __prod__ } from './constants'
import { Post } from './entities/Post'
import { MikroORM } from '@mikro-orm/core'
import path from 'path'

export default {
	migrations: {
		path: path.join(__dirname, './migrations'), // path to the folder with migrations
		pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
	},
	name: 'redit',
	type: 'postgresql',
	dbName: 'reditDB',
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	entities: [Post],
	debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0]
