import eventBus from '../../../event-bus.js'
import mailService from '../services/mail.service.js'
import utilsService from '../../../services/utils.service.js';

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
    {{humanDate(mail.sendAt)}}
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
    methods: {
        humanDate(timestamp) {
            return utilsService.getHumanHours(timestamp)
        }
    },
    data() {
        return {
            mail: null,
        }
    },
}