import eventBus from '../../../event-bus.js'
import keepService from '../../keep/services/keep.service.js'
import mailService from '../services/mail.service.js'
import utilsService from '../../../services/utils.service.js';

export default {
    props: ['mailid' , 'folder'],
    template: `
    <section v-if="mail" class="mail-full">
    <p>
    {{mail.sentFrom}}
    </p>
    <p>
    {{mail.subject}}
    </p>
    <p>
    {{mail.body}}
    </p>
    <p>
    {{humanDate(mail.sendAt)}}
    </p>

    <div class="btns-container">    
        <button class="back-btn" @click="backToMails"> Back </button>
    <button @click.stop ="mailToForm(mail)" class="save-email-btn">Save As A Note</button>
    <span class="saved-popup animated bounceIn" v-if="savedPopupModal"> Mail saved as a note</span>
    </div>
    </section>

    `,
    created() {
        mailService.getMailById(this.mailid)
            .then(mail => {
                this.mail = mail;
                //console.log(this.mail);
            })      
    },
    methods: {
        humanDate(timestamp) {
            return utilsService.getHumanHours(timestamp)
        },

        mailToForm(mail) {
            this.savedPopupModal=true;
           this.timeOut = setTimeout (()=>this.savedPopupModal=false , 3000)
            let newNote = {
                id: '',
                type: 'text',
                isPinned: false,
                isOnEdit: false,
                bgc: 'white'
            }
            keepService.addNote(mail.body, newNote)
            
        },

        backToMails() {
            this.$emit('backToMails', this.folder)
        }
    },
    data() {
        return {
            mail: null,
            savedPopupModal: false,
            timeOut:null
        }
    },

    destroyed() {
        clearTimeout(this.timeOut)
    },
}