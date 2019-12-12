import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home,
		meta: {
			metaInfo: {
				title: "首页",
				keywords: "资讯,新闻,财经,房产,视频,NBA,科技,腾讯网,腾讯,QQ,Tencent",
				description: "腾讯网从2003年创立至今，已经成为集新闻信息……"

			}
		}
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			metaInfo: {
				title: "不是首页",
				keywords: "打架,新闻,财经,房产,视频,NBA,科技,腾讯网,腾讯,QQ,Tencent",
				description: "打架网从2003年创立至今，已经成为集新闻信息……"

			}
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
