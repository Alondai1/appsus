import keepService from '../services/keep.service.js'

export default {
    props: ['noteTypes'],
    template: `
    <section class="note-add-note flex">
        <input :type="fieldType" v-model="input" :placeholder="placeholder" @keyup.enter="addNote" />
        <div v-for="(noteType, idx) in noteTypes" @click="selectType(idx)"><i :class="noteType.icon"></i></div>
    </section>
    `,
    data() {
        return {
            newNote: {
                id: '',
                type: 'text',
                isPinned: false,
                isOnEdit: false,
            },
            input: ''

        }
    },
    methods: {
        selectType(idx) {
            this.input = ''
            this.newNote.type = idx
            console.log('selected:', idx);
        },
        addNote() {
            keepService.addNote(this.input, this.newNote)
            this.input = ''
            console.log('note added', this.input);
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