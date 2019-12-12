import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'
import store from './store'

Vue.use(Meta)

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    if (to.meta.metaInfo)
        store.commit("CAHNGE_META_INFO", to.meta.metaInfo)
    next()
});

new Vue({
    router,
    store,
    metaInfo(){
        return {
            title: this.$store.state.metaInfo.title,
            meta: [
                {
                    name: "keywords",
                    content: this.$store.state.metaInfo.keywords
                }, {
                    name: "description",
                    content: this.$store.state.metaInfo.description
                }
            ]
        }
    },
    render: function (h) {
        return h(App)
    },
	mounted() {
		document.dispatchEvent(new Event('render-event'))
	}
}).$mount('#app')