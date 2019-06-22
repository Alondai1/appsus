export default {

    template: `
    <section class="note-list">
        <div class="note-item" 
                v-for="note in notes" 
                :key="note.id" >
    
            <h1>{{note.title}}</h1>
            <textarea v-if="note.type==='text'" cols="30" rows="10">{{note.body}}</textarea>
            <img v-if="note.type==='img'" :src="note.url"/>
        </div>
    </section>
    
    
    `,


props: ['notes']



}