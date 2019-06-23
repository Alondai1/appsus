import utilsService from '../../../services/utils.service.js'
import mailService from '../services/mail.service.js'

export default {
    template: `
    <section class="mail-form">
        <div class="mail-form-title flex">
            <div>New message</div>
            <div class="close-form" @click="deleteForm"><i class="fas fa-times"></i></div>
        </div>
        <form class="flex">
            <div>
                <ui-textbox 
                label="To:" 
                v-model="email.sentFrom" 
                :floatingLabel="true" 
                :required="true" 
                type="email" 
                :multiLine="false"
                @input="deleteErrorMsg">
                </ui-textbox>
                <ui-textbox label="Subject:" v-model="email.subject" :floatingLabel="true" :required="true"></ui-textbox>
                <ui-textbox label="Message:" v-model.trim="email.body" :rows="10" :floatingLabel="true" :multiLine="true"></ui-textbox>
            </div>
            <div class="mail-btns flex">
                <ui-button @click.prevent="sendMessage" size="normal" type="primary"color="primary">Send</ui-button> {{errorMsg}}
                <button @click.prevent="deleteForm"><i class="fas fa-trash"></i></button>
            </div>
        </form>
    </section>
    `,
    data() {
        return {
            email: {
                id: utilsService.makeId(10),
                sentFrom: '',
                subject: '',
                body: '',
                isRead: false,
                isDeleted: false,
                toDelete: false,
                isFav: false,
                sendAt: null,
                isSent: true
            },
            errorMsg: '',
        }
    },
    methods: {
        deleteForm() {
            this.$emit('delete-form')
        },
        sendMessage() {
            if (!this.email.sentFrom) {
                console.log('error');
                this.errorMsg = 'Please enter an email recipient'
            } else {
                this.email.sendAt = Date.now();
                mailService.sendMail(this.email)
                    .then(this.$emit('email-sent'))
            }

        },
        deleteErrorMsg() {
            this.errorMsg = '';
        }
    },
}