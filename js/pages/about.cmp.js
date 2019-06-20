import menu from '../apps/cmps/menu-header.cmp.js'


export default {
    template: `
    <section class="about-container">
    <menu-header></menu-header>
        <h1>About Page</h1>
    </section>
    `,


components: {
    'menu-header': menu,
}



}