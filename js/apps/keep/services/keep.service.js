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
        url: 'https://www.dsautomobiles.co.il/images/ds3crossback/model-list-ds3-c_700X385.png'
      },
      {
        title: 'test',
        id: utilService.makeId(),
        type: 'text',
        body: 'hello world'
      }
    ];
  }
  notesDB = notes;
  utilService.store(NOTES_KEY, notes);
  return Promise.resolve(notesDB);
}


export default {
  query,
}