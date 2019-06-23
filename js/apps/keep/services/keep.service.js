import utilService from '../../../services/utils.service.js'

const NOTES_KEY = 'notes';
let notesDB = [];

function query() {
  let notes = utilService.load(NOTES_KEY);
  if (!notes) {
    notes = [
      {
        title: 'myPhoto',
        id: utilService.makeId(),
        type: 'img',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
        isPinned : true
      },
      {
        title:'Ronaldo',
        id: utilService.makeId(),
        type: 'youtube',
        videoUrl: 'https://www.youtube.com/embed/9LoLCBjkgno',
        isPinned : false

      },
      {
        title: 'test',
        id: utilService.makeId(),
        type: 'text',
        body: 'hello world',
        isPinned : true
      },
      
    ];
  }
  notesDB = notes;
  utilService.store(NOTES_KEY, notes);
  return Promise.resolve(notesDB);
}

function deleteNote(id) {
  const note = notesDB.findIndex(note => note.id === id);
  notesDB.splice(note,1);
  utilService.store(NOTES_KEY, notesDB)
  return Promise.resolve()
}

function togglePin(id) {
  const note = notesDB.find(note => note.id === id);
  note.isPinned = !note.isPinned;
  utilService.store(NOTES_KEY, notesDB)
  return Promise.resolve()
}

function duplicateNote(id) {
  const notesDB = utilService.load(NOTES_KEY);
  const note = notesDB.find(note => note.id === id);
  note.id = utilService.makeId()
  const noteIdx = notesDB.findIndex(note => note.id === id);
  notesDB.splice(noteIdx, 0, note)
  utilService.store(NOTES_KEY, notesDB)
  return Promise.resolve()
}


export default {
  query,
  deleteNote,
  togglePin,
  duplicateNote
}