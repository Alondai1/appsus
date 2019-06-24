import menu from '../apps/cmps/menu-header.cmp.js'
import mailService from '../apps/mail/services/mail.service.js'
import mailList from '../apps/mail/cmps/list.mail.cmp.js'
import mailBar from '../apps/mail/cmps/mail-bar.cmp.js'
import createMail from '../apps/mail/cmps/create-mail.cmp.js'
import fullMail from '../apps/mail/cmps/full-mail.cmp.js'
import eventBus from '../event-bus.js'



export default {
    template: `
    <section class="mail-container">
        <header class="mail-header"> 
            <menu-header></menu-header>
        <span  @click="toggleHamburger">
        <i class="hamburger fas fa-bars"></i>
        </span> 
            <img class="logo animated fadeIn delay-0.7s slow" src="img/gmail-icon.png"/>
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
            <img v-if="showLoader" src="img/loader.svg" class="mail-loading-img">
            <list-mail :loader="showLoader" :mails="mailsToShow" :folder="folder" v-if="showList"></list-mail>
            <full-mail v-if="showFullMail" :mailid="mailId"></full-mail>
        </section>
        <mail-form @delete-form="deleteForm" v-if="showComposeForm" @email-sent="emailSent"></mail-form>
    </section>
    `,

    methods: {
        showFolder(data) {
            //console.log(data);
            this.folder = data
            this.showList = true;
            this.showFullMail = false;
        },

        composeMail() {
            this.showComposeForm = true;
        },

        deleteForm() {
            this.showComposeForm = false
        },
        emailSent() {
            console.log('email sent, show alert');
            this.showComposeForm = false;
            console.log(this.folder);

        },
        setKindFilter() {
            this.showComposeForm = false;

        },
        toggleHamburger() {
            mailService.toggleHamburger()
        }

    },

    created() {
        mailService.query()
            .then(dataBase => {

                setTimeout(() => {
                    this.showLoader = false
                    this.mailsDB = dataBase;
                }, 1000)
            }),
            eventBus.$on('mail-id', (id) => {
                this.showList = false;
                this.showFullMail = true;
                this.mailId = id;
                console.log('Mail id is:', this.mailId);

            })

    },

    data() {
        return {
            mailsDB: [],
            tempDB: [],
            filterBy: {
                txt: '',
                kind: 'All'
            },
            folder: 'inbox',
            showComposeForm: false,
            showLoader: true,
            showList: true,
            showFullMail: false,
            mailId: '',
        }
    },

    computed: {
        mailsToShow() {
            if (this.filterBy.kind === 'All') {
                this.tempDB = this.tempDB = this.mailsDB.filter(mail => mail.subject.includes(this.filterBy.txt))
            } else if (this.filterBy.kind === 'Unread') {
                this.tempDB = this.mailsDB.filter(mail => (!mail.isRead) && (mail.subject.includes(this.filterBy.txt)))
            } else if (this.filterBy.kind === 'Read') {
                this.tempDB = this.mailsDB.filter(mail => (mail.isRead) && (mail.subject.includes(this.filterBy.txt)))
            }
            if (this.folder === 'starred') {
                return this.tempDB.filter(mail => (mail.isFav) && (!mail.isDeleted))
            } else if (this.folder === 'trash') {
                return this.tempDB.filter(mail => (mail.isDeleted))
            } else if (this.folder === 'sent') {
                return this.tempDB.filter(mail => (mail.isSent) && (!mail.isDeleted) )
            } else if (this.folder === 'inbox') {
                return this.tempDB.filter(mail => (!mail.isDeleted))
            } else return this.tempDB.filter(mail => (!mail.isDeleted))
        },
    },

    components: {
        'menu-header': menu,
        'list-mail': mailList,
        'mail-bar': mailBar,
        'mail-form': createMail,
        'full-mail': fullMail
    }
}