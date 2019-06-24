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
      isOnEdit: false,
      bgc: 'red'
    },
    {
      title: 'Ronaldo',
      id: utilService.makeId(),
      type: 'youtube',
      url: 'https://www.youtube.com/embed/9LoLCBjkgno',
      isPinned: false,
      isOnEdit: false,
      bgc: 'blue'

    },
    {
      title: 'test',
      id: utilService.makeId(),
      type: 'text',
      body: 'hello world',
      isPinned: true,
      isOnEdit: false,
      bgc: 'yellow'
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

function changeColor(id, color) {
  const note = notesDB.find(note => note.id === id);
  note.bgc = color;
  utilService.store(NOTES_KEY, notesDB)
  return Promise.resolve()
}

function saveChanges(id, type, input) {
  const note = notesDB.find(note => note.id === id);
  if (type === 'youtube' || type === 'img') note.url = input;
  if (type === 'text') note.body = input;
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
    data.body = input
  } else if (data.type === 'img') {
    data.url = input;
  } else if (data.type === 'youtube') {

    input = input.replace(/^http.*v=/gi, '')
    data.url = `https://www.youtube.com/embed/${input}`
    console.log('clean youtube:', data.url);

  } else if (data.type === 'todo') {
    data.body = []
    let todos = input.split(',')
    for (var i = 0; i < todos.length; i++) {
      let todoBody = {
        todo: todos[i],
        isDone: false,
        id: utilService.makeId()
      }
      data.body.push(todoBody)
    }
    console.log('todo added', data);
  }

  notesDB.unshift(data)
  console.log(notesDB);
  utilService.store(NOTES_KEY, notesDB)
}


export default {
  query,
  deleteNote,
  togglePin,
  duplicateNote,
  toggleTodo,
  toggleEdit,
  saveChanges,
  addNote,
  changeColor
}