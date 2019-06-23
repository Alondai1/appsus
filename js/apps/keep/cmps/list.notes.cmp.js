import keepService from '../services/keep.service.js'
import notePreview from './notePreview.cmp.js'

export default {

    template: `
    <section class="keep-note-list flex pinned-section">
            <div class="flex" v-for="note in  notesToShow" :key="note.id+1" >
                <note-preview v-if="note.isPinned" :note="note"> </note-preview>
            </div>
<hr/>
            <div class="flex" v-for="note in  notesToShow" :key="note.id" >
                <note-preview v-if="!note.isPinned"   :note="note"> </note-preview>
            </div>
    </section>
    
    
    `,

    methods: {
       
        
    },

    data() {
        return {
        }
    },


props: ['notes', 'filterBy'],



components: {
    'note-preview':notePreview
},

computed: {
    notesToShow() {
return  this.notes.filter(note => note.title.includes(this.filterBy))
    }
},



}