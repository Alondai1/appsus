import menu from '../apps/cmps/menu-header.cmp.js'
import keepService from '../apps/keep/services/keep.service.js'
import noteList from '../apps/keep/cmps/list.notes.cmp.js'



export default {
    template: `
    <section class="keep-container">
    <menu-header></menu-header>
    <h1>Keep Page</h1>
    <note-list :notes="notesDB" ></note-list>
    </section>
    `,

created() {
    keepService.query()
    .then(dataBase => {

        setTimeout(()=> {
            this.showLoader=false
            this.notesDB = dataBase;
        }, 1300)  
    })
},

data() {
    return {
        notesDB: []
    }
},


components: {
    'menu-header': menu,
    'note-list': noteList
}
}