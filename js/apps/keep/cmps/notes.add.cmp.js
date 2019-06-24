import keepService from '../services/keep.service.js'

export default {
    props: ['noteTypes'],
    template: `
    <section class="keep-add-note flex">
        <div class="keep-input flex">
            <div class="keep-input-field">
                <input :type="fieldType" v-model="input" :placeholder="placeholder" @keyup.enter="addNote" />
            </div>
            <div class="keep-icons flex">
                <div v-for="(noteType, idx) in noteTypes" @click="selectType(idx)" class="keep-input-icon">
                    <i :class="noteType.icon"></i>
                </div>
            </div>
        </div>
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
            input: '',

        }
    },
    methods: {
        selectType(idx) {
            this.input = ''
            this.newNote.type = idx
            console.log('selected:', idx);
        },
        addNote() {
            const note = {
                ...this.newNote
            }
            keepService.addNote(this.input, note)
            this.input = ''
            console.log('note added', this.input);
        },
    },
    computed: {
        placeholder() {
            return this.noteTypes[this.newNote.type].placeholder
        },
        fieldType() {
            return this.noteTypes[this.newNote.type].field
        },
    },
}