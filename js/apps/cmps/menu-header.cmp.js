export default {

    template: `


<div class="menu-element popover-trigger"> 
<ui-popover :raised="true" animation="shift-away">
    <router-link exact to="/">
    <img src="./././img/home.png"/>
    <span>Home</span>
    </router-link>
    <router-link to="/about">
    <img src="./././img/about.png"/>
    <span>About</span>
    </router-link>
    <router-link to="/mail">
        <img src="./././img/gmail-icon.png"/>
        <span>Mail</span>
    </router-link>           
    <router-link to="/keep">
    <img src="./././img/keep.png"/>
    <span>Keep</span>
    </router-link> 
   
</ui-popover>

</div>

    `

}