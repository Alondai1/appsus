import menu from '../apps/cmps/menu-header.cmp.js'
import keepService from '../apps/keep/services/keep.service.js'
import noteList from '../apps/keep/cmps/list.notes.cmp.js'



export default {
    template: `
    <section class="keep-container">
    <header class="keep-header"> 
            <img class="animated fadeIn delay-0.7s slow" src="img/keep.png"/>
            <div class="mail-filter-section flex">
            <ui-textbox
                floating-label
                label="Search"
                placeholder="Search"
                v-model="filterBy">
            </ui-textbox>
            </div>
    <menu-header></menu-header>
    </header>
    <img v-if="showLoader" class="keep-loader" src="../../img/loader.svg"/>
    <note-list :filterBy="filterBy" :notes="notesDB" ></note-list>
    </section>
    `,

created() {
    keepService.query()
    .then(dataBase => {
        this.showLoader = true
        setTimeout(()=> {
            this.showLoader=false
            this.notesDB = dataBase;
        }, 1300)  
    })
},

data() {
    return {
        showLoader :false,
        notesDB: [],
        filterBy: ''

    }
},


components: {
    'menu-header': menu,
    'note-list': noteList
}
}