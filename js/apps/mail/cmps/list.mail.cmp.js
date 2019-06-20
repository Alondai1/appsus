import mailService from '../services/mail.service.js'


export default {
template: `
<section class="mail-list">

<ul v-if="mails">
    <li v-for="mail, idx in mails"> 
         <span class="mail-list-from">{{mail.sentFrom}}</span>
         <span :class="isRead">{{mail.subject}}</span>
         <span :class="isRead">{{shortedBody(mail.body)}}</span>
         <button @click.stop="deleteMail(mail.id)"> delele </button>
    </li>
</ul>

</section>

`
,

created() {
   
},

data() {
    return {
       
    }
},

props: 
    ['mails'],

methods: {
    shortedBody(txt) {
        return txt.substr(0, 30) + '...'
    } ,

    deleteMail(id) { 
        mailService.deleteMail(id)
            .then(console.log('deleted on page - show alert'))
    }
},

computed: {
    isRead() {
        
    }
},


}