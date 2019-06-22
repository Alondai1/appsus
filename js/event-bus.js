var bus = new Vue();

export const MAIL_ID = 'mail-id'

bus.$on(MAIL_ID, (ev) => {
    console.log('Mail id is:', ev);
})

export default bus;