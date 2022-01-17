import dotenv from 'dotenv'
import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import { Post } from './entities/Post'
import microConfig from './mikro-orm.config'

dotenv.config()

const main = async () => {
	try {
		const orm = await MikroORM.init(microConfig)
		await orm.getMigrator().up()
		const post = orm.em.create(Post, { itle: 'My First Post' })
		await orm.em.persistAndFlush(post)
		console.log('*************************Sql2*******************************')
		await orm.em.nativeInsert(Post, { title: 'My Second Post' })
	} catch (err) {
		console.error(err)
	}
}

main()
