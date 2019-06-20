import menu from '../apps/cmps/menu-header.cmp.js'
import mailList from '../apps/mail/cmps/list.mail.cmp.js'
import mailBar from '../apps/mail/cmps/mail-bar.cmp.js'



export default {
    template: `
    <section class="mail-container">
    <menu-header></menu-header>
        <h1>Mail Page</h1>
        <router-link to="/mail/">Mail Info</router-link>
        <mail-bar @setFolder="showFolder"></mail-bar>
        <list-mail> </list-mail>
    </section>
    `,
    data() {
        return {
            folder: '',
        }
    },
    methods: {
        showFolder(data) {
            this.folder = data
            console.log(this.folder);

        }

    },

    components: {
        'menu-header': menu,
        'list-mail': mailList,
        'mail-bar': mailBar
    }
}