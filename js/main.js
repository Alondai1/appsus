'use strict';
import routes from './routes.js'

const appRouter = new VueRouter({
    routes: routes
})

let app = new Vue({
    el: '#app',
    template: `
    <section class="body flex">
        <router-view></router-view>
        <footer class="flex"><span>copyrights © 2019</span></footer>
    </section>
    `,
    router: appRouter,
})