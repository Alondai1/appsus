import menu from '../apps/cmps/menu-header.cmp.js'


export default {
    template: `
    <section class="about-container flex">
        <header>
            <menu-header></menu-header> 
        </header>
<div class="flex cards-container">
    <div class="card">
        <img src="img/dima.png" alt="Avatar">
        <div class="container">
            <h4><b>John Doe</b></h4> 
            <h5>Architect & Engineer</h5> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero ad, numquam maiores fuga di.
</p> 
        </div>
    </div>
    <div class="card">
        <img src="img/dima.png" alt="Avatar">
        <div class="container">
            <h4><b>John Doe</b></h4> 
            <h5>Architect & Engineer</h5> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero ad, numquam maiores fuga di.
</p> 
        </div>
    </div>
	
</div>

    </section>
    `,


components: {
    'menu-header': menu,
}



}