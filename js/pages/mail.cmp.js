import menu from '../apps/cmps/menu-header.cmp.js'
import mailService from '../apps/mail/services/mail.service.js'
import mailList from '../apps/mail/cmps/list.mail.cmp.js'



export default {
    template: `
    <section class="mail-container">
    <menu-header></menu-header>
        <h1>Mail Page</h1>
        <list-mail :mails="mailsDB"> </list-mail>
    </section>
    ` ,

created() {
    mailService.query()
    .then (dataBase=> {
        this.mailsDB = dataBase
    }) 
},

data() {
    return {
        mailsDB:[],
        filterBy:''
    }
},

components: {
    'menu-header': menu,
    'list-mail': mailList
}
}