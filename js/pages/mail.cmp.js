import menu from '../apps/cmps/menu-header.cmp.js'
import mailService from '../apps/mail/services/mail.service.js'
import mailList from '../apps/mail/cmps/list.mail.cmp.js'
import mailBar from '../apps/mail/cmps/mail-bar.cmp.js'
import createMail from '../apps/mail/cmps/create-mail.cmp.js'



export default {
    template: `
    <section class="mail-container">
    <menu-header></menu-header>
        <h1>Mail Page</h1>
        <section class="maill-app-container flex">
            <mail-bar @setFolder="showFolder"></mail-bar>
            <list-mail :mails="mailsToShow" :folder="folder"></list-mail>
        </section>
        <mail-form></mail-form>
    </section>
    `,

    methods: {
        showFolder(data) {
            //console.log(data);
            this.folder = data
        },
    },

    created() {
        mailService.query()
            .then(dataBase => {
                this.mailsDB = dataBase;
            })
    },

    data() {
        return {
            mailsDB: [],
            filterBy: '',
            folder: '',
        }
    },

    computed: {
        mailsToShow() {
            if (this.folder === 'starred') {
                return this.mailsDB.filter(mail => (mail.isFav) && (!mail.isDeleted))
            } else if (this.folder === 'trash') {
                return this.mailsDB.filter(mail => (mail.isDeleted))
            } else if (this.folder === 'inbox') {
                return this.mailsDB.filter(mail => (!mail.isDeleted))
            } else return this.mailsDB;
        }
    },

    components: {
        'menu-header': menu,
        'list-mail': mailList,
        'mail-bar': mailBar,
        'mail-form': createMail
    }
}