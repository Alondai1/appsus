import keepService from '../services/keep.service.js'

let timeout;
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
        <span v-if="showError">Please, enter a valid URL</span>
    </section>
    `,
    data() {
        return {

            showError: false,
            newNote: {
                id: '',
                type: 'text',
                isPinned: false,
                isOnEdit: false,
                bgc: 'white'
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
            if (this.newNote.type === 'img' ||
                this.newNote.type === 'youtube') {
                if (!this.input.includes('http')) {
                    this.showError = true;
                    timeout = setTimeout(() => {
                        this.showError = false;
                    }, 1500);
                }
            }
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
    destroyed() {
        clearTimeout(timeout)
    },
}