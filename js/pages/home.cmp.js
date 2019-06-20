export default {
    template: `
    <header class="home-header">
        <h1>Welcome to Book Shop</h1>
        <nav>
            <router-link exact to="/">Home</router-link>
            <router-link to="/about">About us</router-link>
            <router-link to="/mail">Mail App</router-link>
            <router-link to="/keep">Keep App</router-link>
        </nav>
    </header>
    `
}