import keepService from '../services/keep.service.js'

export default {


    template: `

<section :style="test" class="note-item">
  <h1>{{note.title}}</h1>
  
            <div class="note-text" v-if="note.type==='text'">{{note.body}}</div>
            <img v-if="note.type==='img'" :src="note.url"/>
            <iframe v-if="note.type==='youtube'" width="300" height="300"
            :src="note.url">
            </iframe>
            <ul v-if="note.type==='todo'">
                <li v-for="todo in note.body"
                 :class="{done: todo.isDone}" 
                 @click.stop="toggleTodo(note.id, todo.id)"> {{todo.todo}}</li>
            </ul>

                <ui-confirm
                    confirm-button-text="Delete" deny-button-text="Keep" ref="deleteConfirm"
                    title="Delete Note"
                    type="danger"
                    @confirm="deleteNote(note.id)"
                    @deny="">
                    Are you sure you want to delete the note?
                </ui-confirm>
                <div class="keep-tool-bar">
                    <div @click.stop="showConfirm('deleteConfirm')"> <i class="far fa-trash-alt"></i> </div>
                    <div :class="{pinned: note.isPinned}" @click.stop="togglePin(note.id)"><i class="fas fa-thumbtack"></i></div>
                    <div  @click.stop="duplicateNote(note.id)"> <i class="fas fa-copy"></i> </div>
                    <div  @click.stop="editNote(note.id)"> <i class="far fa-edit"></i> </div>
                </div>

                <div v-if="note.isOnEdit" class="edit-section"> 
                    <input placeholder="Photo url" v-model="newData" v-if="note.type==='img'">
                    <input placeholder="Video url" v-model="newData" v-if="note.type==='youtube'">
                    <input v-model="newData" v-if="note.type==='todo'">
                    <input :placeholder="note.body" v-model="newData" v-if="note.type==='text'"/>
                    <button  @click.stop="saveChanges(note.id , note.type)">save</button>
                </div>

</section>

`,

    methods: {
        deleteNote(id) {
            keepService.deleteNote(id)
                .then(console.log('deleted on page - show alert'))
        },

        showConfirm(ref) {

            this.$refs[ref].open()
        },

        togglePin(id) {
            keepService.togglePin(id)
                .then(console.log('pin toggled'))
        },

        duplicateNote(id) {
            keepService.duplicateNote(id)
                .then(console.log('duplicated on page - show alert'))
        },

        toggleTodo(noteId, todoId) {
            keepService.toggleTodo(noteId, todoId)
                .then(console.log('todo toggled'))
        },

        editNote(id) {
            keepService.toggleEdit(id)
                .then(console.log('edit'))
        },
        saveChanges(id, type) {
            keepService.saveChanges(id, type, this.newData)
                .then(console.log('edited'))
        }

    },

    data() {
        return {
            newData: ''
        }
    },

    props: ['note'],

    computed: {
        test() {
            return {
                color: 'white',
                backgroundColor: 'blue'
            }
        }
    },

}