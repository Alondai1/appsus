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
            <img src="../../img/gmail-icon.png"/>
            <!-- <img src="../../img/gmail-icon.png"/> -->
            <div class="mail-filter-section flex">
            <ui-textbox
                color="green"
                floating-label
                label="Search"
                placeholder="Search"
                v-model="filterBy.txt">
            </ui-textbox>

            <select v-model="filterBy.kind" class="mail-select-filter">
                <option>All</option>
                <option>Unread</option>
                <option>Read</option>
            </select>
            </div>
        </header>
        <section class="mail-app-container flex">
            <mail-bar @compose="composeMail" @setFolder="showFolder" :mails="mailsDB"></mail-bar>
            <list-mail :mails="mailsToShow" :folder="folder"></list-mail>
        </section>
        <mail-form @delete-form="deleteForm" v-if="showComposeForm" @email-sent="emailSent"></mail-form>
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
            this.showComposeForm = false
        },
        emailSent() {
            console.log('email sent, show alert');
            this.showComposeForm=false;
            this.fake = !this.fake;
            
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
            tempDB:[],
            filterBy: {
                txt:'',
                kind:'All'
            },
            folder: '',
            showComposeForm: false
        }
    },

    computed: {
        mailsToShow() {
if(this.filterBy.kind==='All'){
    this.tempDB =  this.tempDB = this.mailsDB.filter(mail =>mail.subject.includes(this.filterBy.txt))
} 
else if(this.filterBy.kind==='Unread') {
    this.tempDB = this.mailsDB.filter(mail => (!mail.isRead)&&(mail.subject.includes(this.filterBy.txt)))
}
else if(this.filterBy.kind==='Read') {
    this.tempDB = this.mailsDB.filter(mail => (mail.isRead)&&(mail.subject.includes(this.filterBy.txt)))
}
            if (this.folder === 'starred') {
                return this.tempDB.filter(mail => (mail.isFav) && (!mail.isDeleted))
            } else if (this.folder === 'trash') {
                return this.tempDB.filter(mail => (mail.isDeleted))
            } else if (this.folder === 'inbox') {
                return this.tempDB.filter(mail => (!mail.isDeleted))
            } else return this.tempDB.filter(mail => (!mail.isDeleted))
        },
    },

    components: {
        'menu-header': menu,
        'list-mail': mailList,
        'mail-bar': mailBar,
        'mail-form': createMail
    }
}