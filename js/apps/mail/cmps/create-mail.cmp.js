export default {
    template: `
    <section class="mail-form">
        <div class="mail-form-title flex">
            <div>New message</div>
            <div class="close-form" @click="deleteForm"><i class="fas fa-times"></i></div>
        </div>
        <form action="" class="flex">
            <div>
                <ui-textbox label="To:" v-model="sentFrom" :floatingLabel="true"></ui-textbox>
                <ui-textbox label="Subject:" v-model="subject" :floatingLabel="true"></ui-textbox>
                <ui-textbox label="Message:" v-model="message" :rows="7" :floatingLabel="true" :multiLine="true"></ui-textbox>
            </div>
            <div class="mail-btns flex">
                <ui-button @click.prevent size="normal" type="primary"color="primary">Send</ui-button>
                <button @click.prevent="deleteForm"><i class="fas fa-trash"></i></button>
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
    methods: {
        deleteForm() {
            this.$emit('deleteForm')
        }
    },
}