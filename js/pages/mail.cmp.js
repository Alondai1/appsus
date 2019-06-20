import menu from '../apps/cmps/menu-header.cmp.js'
import mailService from '../apps/mail/services/mail.service.js'
import mailList from '../apps/mail/cmps/list.mail.cmp.js'
import mailBar from '../apps/mail/cmps/mail-bar.cmp.js'
import createMail from '../apps/mail/cmps/create-mail.cmp.js'



export default {
    template: `
    <section class="mail-container">
        <header class="mail-header"> 
            <menu-header></menu-header>
            <img src="../../../img/gmail-icon.png"/>
            
            <ui-textbox
                color="green"
                floating-label
                label="Search"
                placeholder="Search"
                v-model="mailSearch">
            </ui-textbox>
          
        </header>
        <section class="mail-app-container flex">
            <mail-bar @compose="composeMail" @setFolder="showFolder"></mail-bar>
            <list-mail :mails="mailsToShow" :folder="folder"></list-mail>
        </section>
        <mail-form @deleteForm="deleteForm" v-if="showComposeForm"></mail-form>
    </section>
    `,

    methods: {
        showFolder(data) {
            //console.log(data);
            this.folder = data
        },

        composeMail() {
            this.showComposeForm = true;
        },

        deleteForm() {
            this.showComposeForm= false
        }
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
            mailSearch: '',
            showComposeForm: false
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
            } else return this.mailsDB.filter(mail => (!mail.isDeleted))

        }
    },

    components: {
        'menu-header': menu,
        'list-mail': mailList,
        'mail-bar': mailBar,
        'mail-form': createMail
    }
}