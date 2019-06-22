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
        isDeleted: false,
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png'
      },
      {
        title: 'test',
        id: utilService.makeId(),
        type: 'text',
        body: 'hello world',
        isDeleted: false
      }
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


export default {
  query,
  deleteNote
}