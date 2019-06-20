import menu from '../apps/cmps/menu-header.cmp.js'



export default {
    template: `
    <section class="mail-container">
    <menu-header></menu-header>

        <h1>Mail Page</h1>
        <router-link to="/mail/">Mail Info</router-link>
    </section>
    ` ,

components: {
    'menu-header': menu,
}
}