import menu from '../../cmps/menu-header.cmp.js'
import mailBar from '../../mail/cmps/mail-bar.cmp.js'
import createMail from '../../mail/cmps/create-mail.cmp.js'

export default {
    template: `
    
    <section class="mail-container">
    <header class="mail-header"> 
            <menu-header></menu-header>
            <img src="../../img/gmail-icon.png"/>
        </header>
    </section>
    <section class="mail-app-container flex">
            <mail-bar @compose="composeMail" @setFolder="showFolder" :mails="mailsDB"></mail-bar>
            <!-- <img v-if="showLoader" src="../../img/loader.svg"/> -->
    </section>
    `,

    components: {
        'menu-header': menu,
        'mail-bar': mailBar,
        'mail-form': createMail
    }
}