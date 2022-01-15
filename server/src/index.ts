import dotenv from 'dotenv'
import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import { Post } from './entities/Post'

dotenv.config()

const main = async () => {
	try {
		const orm = await MikroORM.init({
			name: 'redit',
			type: 'postgresql',
			dbName: 'reditDB',
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			entities: [Post],
			debug: !__prod__,
		})

		const post = orm.em.create(Post, { itle: 'My First Post' })
		await orm.em.persistAndFlush(post)
		console.log('*************************Sql2*******************************')
		await orm.em.nativeInsert(Post, { title: 'My Second Post' })
	} catch (err) {
		console.error(err)
	}
}

main()
