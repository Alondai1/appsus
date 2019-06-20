import homePageCmp from './pages/home.cmp.js'
import aboutCmp from './pages/about.cmp.js'
import keepCmp from './pages/keep.cmp.js'
import mailCmp from './pages/mail.cmp.js'
import mailInfo from './apps/mail/pages/mail-info.cmp.js'

export default [{
    path: '/',
    component: homePageCmp
}, {
    path: '/about',
    component: aboutCmp
}, {
    path: '/keep',
    component: keepCmp
}, {
    path: '/mail',
    component: mailCmp
}, {
    path: '/mail/:mailId',
    component: mailInfo
}]