'use strict';
import routes from './routes.js'

const appRouter = new VueRouter({
    routes: routes
})

let app = new Vue({
    el: '#app',
    template: `
    <section class="body">
        <router-view></router-view>
        <footer>copyrights © 2019</footer>
    </section>
    `,
    router: appRouter,
})