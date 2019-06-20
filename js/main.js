'use strict';
import routes from './routes.js'

const appRouter = new VueRouter({
    routes: routes
})

let app = new Vue({
    el: '#app',
    template: `
    <section>
        <router-view></router-view>
        <footer class="footer">copyrights © 2019</footer>
    </section>
    `,
    router: appRouter,
})