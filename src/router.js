import Vue from 'vue'
import Router from 'vue-router'
// importar los componentes que se van llamar en cada route
import Main from './components/Main.vue'
// lazy loading
const FichaUser = () => import('./components/FichaUser.vue')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Main
        },
        {
            path: '/details/:id',
            name: 'details',
            component: FichaUser,
            // esto permite pasar los params de la ruta como data
            props: true
        }
    ]
})