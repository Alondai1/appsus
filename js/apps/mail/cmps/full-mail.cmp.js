import eventBus from '../../../event-bus.js'
import mailService from '../services/mail.service.js'

export default {
    props: ['mailid'],
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
    {{mail.sendAt}}
    </p>
    </section>

    `,
    created() {
        mailService.getMailById(this.mailid)
            .then(mail => {
                this.mail = mail;
                console.log(this.mail);
            })
    },
    data() {
        return {
            mail: null,
        }
    },
}