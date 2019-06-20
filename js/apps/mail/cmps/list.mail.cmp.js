import mailService from '../services/mail.service.js'


export default {
template: `
<section class="mail-list">

<ul v-if="mailsDB">
    <li v-for="mail, idx in mailsDB"> 
         <span class="mail-list-from">{{mail.sentFrom}}</span>
         <span :class="isRead">{{mail.subject}}</span>
         <span :class="isRead">{{shortedBody(mail.body)}}</span>
    </li>

</ul>

</section>

`
,

created() {
    mailService.query()
        .then (dataBase=> {
            this.mailsDB = dataBase
        }) 
},

data() {
    return {
        mailsDB:[]
    }
},

methods: {
    shortedBody(txt) {
        return txt.substr(0, 30) + '...'
    }
},

computed: {
   isRead() {
    
   }
},


}