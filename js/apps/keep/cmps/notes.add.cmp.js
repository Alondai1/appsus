export default {
    props: ['noteType'],
    template: `
    <section class="note-add-note">
        <input type="text" v-model="userData"/>
    </section>
    `,
    data() {
        return {
            userData: '',

        }
    },
}