export default {
    template: `
    <section class="mail-form">
        <div class="mail-form-title">New message</div>
        <form action="">
            <ui-textbox label="To:" v-model="sentFrom" :floatingLabel="true"></ui-textbox>
            <ui-textbox label="Subject:" v-model="subject" :floatingLabel="true"></ui-textbox>
            <ui-textbox label="Message:" v-model="message" :floatingLabel="true" :multiLine="true"></ui-textbox>
            <div>
                <ui-button @click.prevent size="normal" type="primary"color="primary">Send</ui-button>
                <button @click.prevent><i class="fas fa-trash"></i></button>
            </div>
        </form>
    </section>
    `,
    data() {
        return {
            sentFrom: '',
            subject: '',
            message: '',
        }
    },
}