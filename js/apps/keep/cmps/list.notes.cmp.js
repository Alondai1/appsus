import keepService from '../services/keep.service.js'
import notePreview from './notePreview.cmp.js'

export default {

    template: `
    <section class="keep-note-list flex">
        <div class="keep-column">
            <div class="pinned-section " v-for="note in  notesToShow">
                <note-preview v-if="note.isPinned" :note="note"> </note-preview>
            </div>
        </div>

            <hr v-if="notes.length"/>
        <div class="keep-column">
            <div  v-for="note in  notesToShow">
                <note-preview v-if="!note.isPinned"   :note="note"> </note-preview>
            </div>
        </div>
    </section>
    
    
    `,

    data() {
        return {}
    },


    props: ['notes', 'filterBy', 'filterByType'],



    components: {
        'note-preview': notePreview
    },

    computed: {
        notesToShow() {

            if (!this.filterByType) return this.notes
            if (this.filterByType === 'text') {
                return this.notes.filter(note => note.type === this.filterByType && note.body.includes(this.filterBy))
            }
            return this.notes.filter(note => note.type === this.filterByType)

        }
    },



}