import mailService from '../services/mail.service.js'
import eventBus from '../../../event-bus.js'


export default {
    template: `
<section class="mail-list">

<ul v-if="mails">
    <li v-for="mail, idx in mails" class="mail-item" @click="sendMailId(mail.id)">
         <span :class="{fav : mail.isFav}" @click.stop="toggleFav(mail.id)"> <i class="fas fa-star"></i> </span>
         <span :class="{bold : !mail.isRead}">{{mail.sentFrom}}</span>
         <span :class="{bold : !mail.isRead}">{{mail.subject}}</span>
         <span class="mail-item-txt">{{shortedBody(mail.body)}}</span>
             <span @click.stop="deleteMail(mail.id)" class="mail-trash" v-if="folder!=='trash'"> <i class="far fa-trash-alt"></i> </span>
        </span>
         <span @click.stop="restoreMail(mail.id)" class="mail-trash" v-if="folder==='trash'"><i class="fas fa-undo"></i> </span>
    </li>
</ul>

</section>

`,

    created() {

    },

    data() {
        return {

        }
    },

    props: ['mails', 'folder'],

    methods: {
        shortedBody(txt) {
            return txt.substr(0, 70) + '...'
        },

        deleteMail(id) {
            mailService.deleteMail(id)
                .then(console.log('deleted on page - show alert'))
        },

        toggleFav(id) {
            mailService.toggleFav(id)
                .then(console.log('added to fav on page - show alert'))
        },
        restoreMail(id) {
            console.log(this.folder);

            mailService.restoreMail(id)
                .then(console.log('restored on page - show alert'))
        },
        sendMailId(id) {
            eventBus.$emit('mail-id', id)
        }

    },

    computed: {
        isRead(idx) {
            // if(!mail.isRead)
            console.log(idx);

            return 'bold'

        },
    },


}