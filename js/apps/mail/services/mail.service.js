import utilService from '../../../services/utils.service.js'

const MAILS_KEY = 'mails';
let mailsDB = [];

function query() {
  let mails = utilService.load(MAILS_KEY);
  if (!mails) {
    mails = [{
        "id": "5d0b6d600bf88d42df844686",
        "subject": 'Hello sir',
        "body": "Sint in voluptate ea ea ad. Velit excepteur et labore ut excepteur ex nisi aliquip ullamco nulla enim. Tempor ad eu sint est sit anim dolore eiusmod sint nostrud laborum. Qui eu commodo ea esse exercitation. Do commodo ea excepteur tempor est mollit enim eu labore.\r\n",
        "isRead": true,
        "sendAt": "2019-05-07T04:19:14 -03:00",
        "isDeleted": false,
        "toDelete": true,
        "isFav": true,
        "sentFrom": "Tanisha Morrison"
      },
      {
        "id": "5d0b6d601f598f93b2d9b516",
        "subject": 'good morning',
        "body": "Laborum consectetur do incididunt culpa esse elit eiusmod et mollit pariatur minim. Sint nulla magna duis est magna dolor minim eiusmod nulla dolor. Ea ad mollit dolor ut tempor enim aute incididunt laborum.\r\n",
        "isRead": true,
        "sendAt": "2016-01-27T07:43:31 -02:00",
        "isDeleted": false,
        "toDelete": true,
        "isFav": false,
        "sentFrom": "Wiggins Shannon"
      },
      {
        "id": "5d0b6d60a24e97550d1f63b5",
        "subject": 'how are you',
        "body": "Irure ut excepteur et exercitation ex pariatur non est magna. Pariatur nisi culpa anim commodo aliquip exercitation nisi. Do qui nostrud ad fugiat. Dolore non ad occaecat nisi deserunt et pariatur dolore anim proident. Amet cillum sint eu mollit ex enim amet officia dolor.\r\n",
        "isRead": true,
        "sendAt": "2014-04-03T01:47:37 -03:00",
        "isDeleted": false,
        "toDelete": false,
        "isFav": true,
        "sentFrom": "Marsh Wise"
      },
      {
        "id": "5d0b6d6023dd57fa23babc26",
        "subject": 'fine thanks',
        "body": "Duis et eiusmod labore est quis voluptate irure commodo aliquip cupidatat cillum. Adipisicing cupidatat esse cupidatat ex laborum velit officia veniam et ut culpa eiusmod mollit nulla. Aliquip minim voluptate laboris pariatur in sit qui. Adipisicing amet in Lorem duis amet qui excepteur commodo sint. Ipsum ut ex proident exercitation. Amet fugiat veniam ex officia commodo officia tempor commodo id et quis nisi.\r\n",
        "isRead": false,
        "sendAt": "2015-09-04T06:31:00 -03:00",
        "isDeleted": false,
        "toDelete": false,
        "isFav": true,
        "sentFrom": "Lynnette Brennan"
      },
      {
        "id": "5d0b6d60f1b11346c097f36b",
        "subject": 'ok bye',
        "body": "Ex nulla nisi Lorem consequat excepteur magna est labore laborum sit cillum amet. Deserunt est cillum aliquip enim ex ex aliquip ullamco Lorem elit cillum ipsum mollit. Irure ad occaecat in tempor.\r\n",
        "isRead": false,
        "sendAt": "2018-10-22T01:36:59 -03:00",
        "isDeleted": false,
        "toDelete": true,
        "isFav": false,
        "sentFrom": "Contreras Baird"
      }
    ];
  }
  mailsDB = mails;
  utilService.store(MAILS_KEY, mails);
  return Promise.resolve(mailsDB);
}

function deleteMail(id) {
  const mail = mailsDB.find(mail => mail.id === id);
  mail.isDeleted = true;
  utilService.store(MAILS_KEY, mailsDB)
  return Promise.resolve()
}

function toggleFav(id) {
  const mail = mailsDB.find(mail => mail.id === id);
  mail.isFav = !mail.isFav;
  utilService.store(MAILS_KEY, mailsDB)
  return Promise.resolve()
}

function sendMail(email) {
  let mails = utilService.load(MAILS_KEY);
  mails.unshift(email)
  utilService.store(MAILS_KEY, mails)
  console.log(email);
  
  return Promise.resolve()
}




export default {
  query,
  deleteMail,
  toggleFav,
  sendMail
}