import menu from '../apps/cmps/menu-header.cmp.js'
import keepService from '../apps/keep/services/keep.service.js'
import noteList from '../apps/keep/cmps/list.notes.cmp.js'
import noteAdd from '../apps/keep/cmps/notes.add.cmp.js'



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
    <img v-if="showLoader" class="keep-loader" src="img/loader.svg"/>
    <note-add :noteTypes="noteTypes"></note-add>
    <note-list :filterBy="filterBy" :notes="notesDB" ></note-list>
    </section>
    `,

    created() {
        keepService.query()
            .then(dataBase => {
                this.showLoader = true
                setTimeout(() => {
                    this.showLoader = false
                    this.notesDB = dataBase;
                }, 1300)
            })
    },

    data() {
        return {
            showLoader: false,
            notesDB: [],
            filterBy: '',
            noteTypes: {
                text: {
                    field: 'text',
                    icon: 'fas fa-font',
                    placeholder: 'Enter your text..'
                },
                img: {
                    field: 'url',
                    icon: 'far fa-image',
                    placeholder: 'Enter image URL...'
                },
                youtube: {
                    field: 'url',
                    icon: 'fab fa-youtube',
                    placeholder: 'Enter youtube URL...'
                },
                todo: {
                    field: 'text',
                    icon: 'fas fa-list',
                    placeholder: 'Enter your todo list (comma separated)...'
                }
            }

        }
    },


    components: {
        'menu-header': menu,
        'note-list': noteList,
        'note-add': noteAdd
    }
}