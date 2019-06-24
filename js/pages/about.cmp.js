import menu from '../apps/cmps/menu-header.cmp.js'


export default {
    template: `
    <section class="about-container flex">
        <header>
            <menu-header></menu-header> 
        </header>

	

    </section>
    `,


components: {
    'menu-header': menu,
}



}