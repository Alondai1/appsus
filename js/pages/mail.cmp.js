import menu from '../apps/cmps/menu-header.cmp.js'
import mailService from '../apps/mail/services/mail.service.js'
import mailList from '../apps/mail/cmps/list.mail.cmp.js'
import mailBar from '../apps/mail/cmps/mail-bar.cmp.js'



export default {
    template: `
    <section class="mail-container">
    <menu-header></menu-header>
        <h1>Mail Page</h1>
        <section class="maill-app-container flex">
            <mail-bar @setFolder="showFolder"></mail-bar>
            <list-mail :mails="mailsDB"> </list-mail>
        </section>
    </section>
    `,

    methods: {
        showFolder(data) {
            this.folder = data
            console.log(this.folder);
        },
    },

        created() {
        mailService.query()
            .then(dataBase => {
                this.mailsDB = dataBase
            })
    },

    data() {
        return {
            mailsDB: [],
            filterBy: '',
            folder: ''
        }
    },

    components: {
        'menu-header': menu,
        'list-mail': mailList,
        'mail-bar': mailBar
    }
}
