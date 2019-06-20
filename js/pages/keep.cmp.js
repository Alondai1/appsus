import menu from '../apps/cmps/menu-header.cmp.js'

export default {
    template: `
    <section class="keep-container">
    <menu-header></menu-header>
    <h1>Keep Page</h1>

    </section>
    `,


components: {
    'menu-header': menu,
}
}