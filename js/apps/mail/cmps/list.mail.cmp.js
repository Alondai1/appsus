import mailService from '../services/mail.service.js'
import eventBus from '../../../event-bus.js'
import utilsService from '../../../services/utils.service.js';

export default {
    template: `
<section class="mail-list">

<ul v-if="mails">
    <li v-for="mail, idx in mails" :class="{
           'mail-item flex dark-background' : (idx%2===0),
           'mail-item flex' : (idx%2!==0)}"
              @click="sendMailId(mail.id)">
         <div :class="{fav : mail.isFav}" @click.stop="toggleFav(mail.id)"> <i class="fas fa-star"></i> </div>
         <div :class="{bold : !mail.isRead}">{{mail.sentFrom}}</div>
         <div :class="{bold : !mail.isRead}">{{mail.subject}}</div>
         <div class="mail-item-txt">{{mail.body}}</div>
         <div>{{humanDate(mail.sendAt)}}</div>
         <div>
             <span @click.stop="deleteMail(mail.id)" class="mail-trash" v-if="folder!=='trash'"> <i class="far fa-trash-alt"></i> </span> 
        </div>
         <div>
             <span @click.stop="restoreMail(mail.id)" class="mail-trash" v-if="folder==='trash'"><i class="fas fa-undo"></i> </span>
        </div>
    </li>
</ul>

</section>

`,
    data() {
        return {
            style: 0
        }
    },

    props: ['mails', 'folder'],

    methods: {
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
            eventBus.$emit('mail-is-read', true)
        },
        humanDate(timestamp) {
            let time;
            let currTime = Date.now()
            let diff = currTime - timestamp
            let d = new Date(diff)

            if (d.getHours() < 24) {
                time = utilsService.getHumanHours(timestamp)
            } else {
                time = utilsService.getHumanDays(timestamp)
            }
            return time;
        }
    },

    computed: {
        itemStyle() {
            if (this.style % 2) return 'mail-item flex dark-background'
            return 'mail-item flex'
        }
    },
}