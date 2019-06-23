import utilService from '../../../services/utils.service.js'

const NOTES_KEY = 'notes';
let notesDB = [];

function query() {
  let notes = utilService.load(NOTES_KEY);
  if (!notes) {
    notes = [{
        title: 'myPhoto',
        id: utilService.makeId(),
        type: 'img',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
        isPinned: true,
        isOnEdit: false
      },
      {
        title: 'Ronaldo',
        id: utilService.makeId(),
        type: 'youtube',
        url: 'https://www.youtube.com/embed/9LoLCBjkgno',
        isPinned: false,
        isOnEdit: false

      },
      {
        title: 'test',
        id: utilService.makeId(),
        type: 'text',
        body: 'hello world',
        isPinned: true,
        isOnEdit: false
      },

      {
        title: 'My todos',
        id: utilService.makeId(),
        type: 'todo',
        body: [{
            todo: 'hello world',
            isDone: false,
            id: utilService.makeId()
          },
          {
            todo: 'hello world',
            isDone: false,
            id: utilService.makeId()
          },
          {
            todo: 'hello world',
            isDone: false,
            id: utilService.makeId()
          }
        ],
        isPinned: true,
        isOnEdit: false
      },

    ];
  }
  notesDB = notes;
  utilService.store(NOTES_KEY, notes);
  return Promise.resolve(notesDB);
}

function deleteNote(id) {
  const note = notesDB.findIndex(note => note.id === id);
  notesDB.splice(note, 1);
  utilService.store(NOTES_KEY, notesDB)
  return Promise.resolve()
}

function togglePin(id) {
  const note = notesDB.find(note => note.id === id);
  note.isPinned = !note.isPinned;
  utilService.store(NOTES_KEY, notesDB)
  return Promise.resolve()
}

function saveChanges(id, type, change) {
  const note = notesDB.find(note => note.id === id);
  if (type === 'youtube' || type === 'img') note.url = change;
  if (type === 'text') note.body = change;
  console.log(note);

  utilService.store(NOTES_KEY, notesDB)
  return Promise.resolve()
}

function toggleTodo(noteId, todoId) {
  const note = notesDB.find(note => note.id === noteId);
  const todo = note.body.find(todo => todo.id === todoId);
  todo.isDone = !todo.isDone
  utilService.store(NOTES_KEY, notesDB)
  return Promise.resolve()
}

function toggleEdit(id) {
  const note = notesDB.find(note => note.id === id);
  note.isOnEdit = !note.isOnEdit;
  utilService.store(NOTES_KEY, notesDB)
  console.log(note.isOnEdit);

  return Promise.resolve()
}

function duplicateNote(id) {
  const oldNote = notesDB.find(note => note.id === id);
  // const note = Object.assign({}, oldNote)
  const note = {
    ...oldNote
  }
  // const note = JSON.parse(JSON.stringify(oldNote))
  note.id = utilService.makeId()
  const noteIdx = notesDB.findIndex(note => note.id === oldNote.id);
  notesDB.splice(noteIdx, 0, note)
  utilService.store(NOTES_KEY, notesDB)
  return Promise.resolve()
}

function addNote(input, data) {
  data.id = utilService.makeId()

  if (data.type === 'text') {
    console.log('text added');
  } else if (data.type === 'img') {
    console.log('img added');
  } else if (data.type === 'youtube') {
    console.log('todo added');
  } else if (data.type === 'todo') {
    console.log('img added');
  }

}


export default {
  query,
  deleteNote,
  togglePin,
  duplicateNote,
  toggleTodo,
  toggleEdit,
  saveChanges,
  addNote
}