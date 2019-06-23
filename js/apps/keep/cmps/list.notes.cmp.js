import keepService from '../services/keep.service.js'
import notePreview from './notePreview.cmp.js'

export default {

    template: `
    <section class="keep-note-list flex">
        <div class="note-item flex" 
                v-for="note in notes" 
                :key="note.id" >
                <note-preview :note="note"> </note-preview>

            </div>

        </div>
    </section>
    
    
    `,

    methods: {
       
        
    },

    data() {
        return {
        }
    },


props: ['notes'],

components: {
    'note-preview':notePreview
}



}