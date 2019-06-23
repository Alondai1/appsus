export default {
    props: ['noteTypes'],
    template: `
    <section class="note-add-note flex">
        <input :type="fieldType" v-model="input" :placeholder="placeholder"/>
        <div v-for="(noteType, idx) in noteTypes" @click="selectType(idx)"><i :class="noteType.icon"></i></div>
    </section>
    `,
    data() {
        return {
            newNote: {
                id: '',
                type: 'text',
                isPinned: false,
            },
            input: ''

        }
    },
    methods: {
        selectType(idx) {
            this.newNote.type = idx
            console.log('selected:', idx);
        }
    },
    computed: {
        placeholder() {
            return this.noteTypes[this.newNote.type].placeholder
        },
        fieldType() {
            return this.noteTypes[this.newNote.type].placeholder
        }
    },
}