import utilService from '../../../services/utils.service.js'

const NOTES_KEY = 'notes';
let notesDB = [];

function query() {
  let notes = utilService.load(NOTES_KEY);
  if (!notes) {
    notes = [{
        title: 'Funny Meme',
        id: utilService.makeId(),
        type: 'img',
        url: 'https://www.probytes.net/wp-content/uploads/2018/01/4-1.png',
        isPinned: true,
        isOnEdit: false,
        bgc: '#C3F9FF'
      },
      {
        title: 'myPhoto',
        id: utilService.makeId(),
        type: 'img',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
        isPinned: true,
        isOnEdit: false,
        bgc: 'white'
      },
      {
        title: 'Photo',
        id: utilService.makeId(),
        type: 'img',
        url: 'https://pl.scdn.co/images/pl/default/c9d50f0f80f52324b45bd2849a19b566119ddab5',
        isPinned: false,
        isOnEdit: false,
        bgc: 'white'
      },
      {
        title: 'Funny Quote',
        id: utilService.makeId(),
        type: 'text',
        body: 'Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes! — Billy Connolly',
        isPinned: true,
        isOnEdit: false,
        bgc: '#9B89B3'
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
        title: 'Queen - Bohemian Rhapsody',
        id: utilService.makeId(),
        type: 'youtube',
        url: 'https://www.youtube.com/embed/fJ9rUzIMcZQ',
        isPinned: true,
        isOnEdit: false,
        bgc: '#D5ECF5'

      },
      {
        title: 'Lorem Ipsum',
        id: utilService.makeId(),
        type: 'text',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat sem in venenatis volutpat. In hac habitasse platea dictumst. Nam mollis est diam, in efficitur arcu consectetur ac. Aliquam eu consectetur felis. Donec ornare diam vitae augue posuere, quis consequat quam scelerisque. Mauris at eros massa. Nulla non eros nec ex pellentesque mattis. Nam egestas magna in varius interdum. Donec tincidunt feugiat ante quis fringilla. Integer id dolor finibus, consequat tellus nec, luctus nibh. Sed eros arcu, tempor vel massa eu, iaculis dignissim leo. ',
        isPinned: false,
        isOnEdit: false,
        bgc: 'yellow'
      },
      {
        title: 'My todos',
        id: utilService.makeId(),
        type: 'todo',
        body: [{
            todo: 'Learn Vue',
            isDone: false,
            id: utilService.makeId()
          },
          {
            todo: 'Learn MySQL',
            isDone: false,
            id: utilService.makeId()
          },
          {
            todo: 'Take an English Classes',
            isDone: false,
            id: utilService.makeId()
          }
        ],
        isPinned: true,
        isOnEdit: false,
        bgc: 'green'
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
  if (type === 'img') note.url = input;
  if (type === 'text') note.body = input;
  if (type === 'youtube') {
    input = input.replace(/^http.*v=/gi, '')
    note.url = `https://www.youtube.com/embed/${input}`
  }
  if (type === 'todo') {
    let todos = input.split(',')
    for (var i = 0; i < todos.length; i++) {
      note.body[i].todo = todos[i]
    }
  }

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
  console.log(data);

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