import keepService from '../services/keep.service.js'

export default {

    template: `
    <section class="keep-note-list flex">
        <div class="note-item" 
                v-for="note in notes" 
                :key="note.id" >
            <h1>{{note.title}}</h1>
            <textarea v-if="note.type==='text'" cols="30" rows="10">{{note.body}}</textarea>
            <img v-if="note.type==='img'" :src="note.url"/>
            <span @click.stop="deleteNote(note.id)"> <i class="far fa-trash-alt"></i> </span>
        </div>
    </section>
    
    
    `,

    methods: {
        deleteNote(id) {
            keepService.deleteNote(id)
                .then(console.log('deleted on page - show alert'))
        }
    },


props: ['notes']



}