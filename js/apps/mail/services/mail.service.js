import utilService from '../../../services/utils.service.js'

const MAILS_KEY = 'mails';
let mailsDB = [];

function query() {
  let mails = utilService.load(MAILS_KEY);
  if (!mails) {
    mails = [{
        "id": "5d0e313bd4a067facf23a322",
        "subject": "Id reprehenderit qui officia esse",
        "sentFrom": "Ware Travis",
        "body": "Esse voluptate eu in irure laborum deserunt do quis pariatur. Id duis excepteur nulla proident eu amet eu occaecat est cillum amet. Ut occaecat esse ipsum ea nisi fugiat proident pariatur culpa et. Id fugiat nostrud elit laboris dolore mollit irure nisi aliqua pariatur eiusmod pariatur. Sunt minim id ex laborum do incididunt tempor fugiat non ut. Dolore ea non minim amet sint veniam officia in. Laborum proident pariatur et dolore amet irure pariatur eiusmod laboris aliquip elit do. Esse id aliquip sit esse cillum. Nisi fugiat ea commodo nulla laboris aliquip exercitation non incididunt irure tempor. Ad aliquip ullamco occaecat duis sunt eu aute et exercitation fugiat ullamco quis. Culpa et laborum ea cupidatat aliqua consequat Lorem eiusmod irure ex commodo dolore cillum. Sit voluptate officia nisi qui esse ullamco dolor consectetur sunt ullamco culpa pariatur adipisicing. Ipsum sit consectetur in occaecat deserunt deserunt sit magna magna fugiat elit sunt consequat. Voluptate qui quis et adipisicing. Cupidatat esse deserunt non cillum consequat ex exercitation excepteur amet magna pariatur. Laboris esse consequat ipsum laboris. Consequat id anim est exercitation Lorem et magna. Aute occaecat reprehenderit ullamco anim ipsum dolor adipisicing ut incididunt anim ea tempor aute fugiat. Sit sint sit laboris labore. Ad laborum ad dolor velit Lorem velit laboris et occaecat sint.",
        "isRead": false,
        "sendAt": utilService.getTime(20),
        "isDeleted": false,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313b2204eea33a864da0",
        "subject": "Officia commodo voluptate dolore occaecat",
        "sentFrom": "Dominique Gonzalez",
        "body": "Non cupidatat enim deserunt ad excepteur cupidatat culpa. Qui nisi nulla qui anim. Consectetur proident est duis nostrud. Est sit do duis nulla ut in minim. Dolor adipisicing adipisicing do anim. Consectetur sint do cillum nisi do velit nostrud sint consequat amet magna dolore irure minim. Duis Lorem duis ipsum dolor sit laborum sit est. Pariatur enim duis ut et proident. Tempor laborum aliqua nostrud labore aliqua magna velit in in amet in enim. Nisi aute consectetur ut labore ex sit commodo nostrud eiusmod. Consectetur veniam do labore eu laborum cupidatat voluptate dolore mollit. Voluptate nulla laboris ipsum voluptate ex elit. Deserunt ullamco laboris eiusmod dolor quis nisi enim amet qui esse adipisicing Lorem mollit non. Sit do excepteur fugiat duis exercitation deserunt est officia. Sint irure cupidatat occaecat officia Lorem quis reprehenderit. Deserunt reprehenderit velit non ipsum reprehenderit dolor reprehenderit quis esse incididunt. Labore ut dolor eu non duis minim sunt consequat. Aliqua tempor laborum veniam commodo fugiat veniam labore occaecat sint amet irure. Et est aliqua nostrud ad elit mollit voluptate sit adipisicing officia mollit labore. Pariatur minim mollit ad cillum aliqua.",
        "isRead": false,
        "sendAt": utilService.getTime(60),
        "isDeleted": false,
        "toDelete": false,
        "isFav": true
      },
      {
        "id": "5d0e313bd1604814430a1522",
        "subject": "Velit ex irure duis cillum",
        "sentFrom": "Galloway Dudley",
        "body": "Dolor duis velit pariatur in eiusmod ad Lorem eu voluptate. Nostrud anim occaecat exercitation aute labore tempor adipisicing in. Eiusmod adipisicing cupidatat qui Lorem est irure do ullamco reprehenderit id elit. Labore adipisicing exercitation anim non duis non quis. Ex pariatur ut reprehenderit quis ullamco ad. Est mollit ex sit exercitation fugiat nostrud nostrud. Duis ut exercitation officia commodo id occaecat non amet dolor. Nulla laborum eiusmod nostrud quis reprehenderit esse reprehenderit. Nostrud cupidatat eiusmod cupidatat dolor fugiat commodo. Ullamco et reprehenderit est laboris pariatur quis officia adipisicing. Fugiat sint nostrud pariatur dolor quis et minim duis esse qui enim. Amet voluptate enim amet qui sit exercitation anim mollit sunt ad. Enim ex incididunt dolore anim nulla qui nostrud sint non exercitation officia excepteur. Eiusmod adipisicing culpa nulla sit labore sint amet occaecat aliqua laboris dolore cillum. Esse ex pariatur sint qui aliquip eiusmod ipsum labore. Minim excepteur laboris deserunt amet eiusmod laboris laboris do nulla duis incididunt ipsum nostrud. Consequat amet cupidatat adipisicing laborum culpa exercitation. Ut aliqua aliquip laboris amet velit excepteur excepteur ipsum Lorem ullamco. Laboris mollit tempor non pariatur ut est excepteur irure aute in cupidatat culpa minim Lorem. Exercitation velit ipsum irure ad aliquip cupidatat enim irure in magna irure nostrud eiusmod.",
        "isRead": false,
        "sendAt": utilService.getTime(120),
        "isDeleted": false,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313b0f76d0133ff097c1",
        "subject": "Fugiat irure occaecat esse do",
        "sentFrom": "Puckett Willis",
        "body": "Enim ut aute duis fugiat laborum sunt aute sit culpa in dolore ad. Irure dolor nulla pariatur nostrud irure veniam commodo nostrud. Dolore aute anim quis laborum nulla fugiat do eiusmod magna. Mollit proident consectetur consectetur aliquip ullamco ex occaecat nisi aliqua. Incididunt culpa laboris do eiusmod sunt. Officia quis veniam velit elit aliqua anim aliquip do cupidatat ipsum. Eu est minim consequat quis cillum laboris duis commodo irure. Nisi occaecat ad id qui ipsum reprehenderit aliquip elit Lorem officia. Sit aute eiusmod quis magna pariatur enim dolore consectetur culpa officia mollit ipsum eu. Excepteur eu nostrud consequat nulla magna esse dolore consectetur eiusmod occaecat reprehenderit non est non. Velit est elit qui laboris fugiat minim voluptate. Sit proident eu officia ipsum. Sit qui adipisicing adipisicing officia ut. Laboris eiusmod laboris exercitation esse tempor. Officia in deserunt consequat ut adipisicing tempor enim officia ipsum qui irure. Aliquip dolor proident fugiat pariatur irure aliquip sit. In culpa labore eiusmod nostrud. Ut exercitation consectetur incididunt occaecat enim adipisicing dolor non elit do labore eu. Laboris adipisicing proident non ullamco duis sunt do reprehenderit sint. Ipsum nostrud cupidatat enim ullamco sunt nulla exercitation anim aute sint ullamco.",
        "isRead": true,
        "sendAt": utilService.getTime(300),
        "isDeleted": false,
        "toDelete": false,
        "isFav": true
      },
      {
        "id": "5d0e313b292bdb790c43f636",
        "subject": "Voluptate eiusmod magna officia aliquip",
        "sentFrom": "Ella Phillips",
        "body": "Ullamco dolore incididunt aliquip ea minim qui est quis culpa reprehenderit. Tempor ad velit nisi ullamco reprehenderit qui proident labore est in cillum. In magna nisi minim officia velit. Proident et laborum ut laborum sit. Enim ut enim culpa occaecat occaecat dolor. Reprehenderit deserunt tempor dolore eiusmod excepteur ipsum aute. Occaecat reprehenderit occaecat exercitation dolore Lorem voluptate esse dolor sit fugiat nulla. Adipisicing magna minim ipsum commodo eiusmod occaecat magna veniam Lorem sit magna aute. Officia ea dolor minim do ut aute ut magna. Occaecat id voluptate minim ipsum et labore magna aliqua laboris quis irure anim ipsum. Nostrud in et et dolor deserunt irure sunt in ipsum adipisicing Lorem mollit. Ad ea non velit ipsum ea ea nisi quis. Officia est nulla sint et qui amet irure est magna. Culpa nulla enim dolor officia tempor dolore sunt ut dolor occaecat sit mollit. Anim magna non non excepteur velit quis. Cillum minim aute ut cupidatat sit voluptate non magna proident nostrud elit. Aute exercitation cupidatat amet duis deserunt occaecat quis. Ipsum est est labore velit proident anim officia enim anim velit ipsum. Excepteur in aliqua ea dolore eiusmod commodo deserunt aliqua aliquip sint anim. Exercitation id ipsum dolor enim ut adipisicing ad irure irure irure proident sit ea non.",
        "isRead": true,
        "sendAt": utilService.getTime(6000),
        "isDeleted": false,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313bf16b1a28007f4a3b",
        "subject": "Culpa veniam pariatur et elit",
        "sentFrom": "Phelps Michael",
        "body": "Cillum laboris sint eiusmod duis minim in dolore. Occaecat reprehenderit id occaecat magna esse velit. Dolore deserunt enim sit aliqua enim aliquip ex nostrud eu ipsum qui. Cupidatat magna qui proident id voluptate sunt et eu nostrud. In sint sint proident ipsum deserunt irure non voluptate et pariatur consectetur do. Officia nisi aliqua voluptate consequat. Laborum exercitation nostrud ea minim id excepteur dolor adipisicing dolore reprehenderit non nisi proident esse. Culpa id cupidatat sunt excepteur est deserunt. Qui in magna reprehenderit ad Lorem magna nostrud do. Sint mollit mollit irure id id veniam pariatur consectetur veniam ipsum sit. Culpa nisi Lorem consequat mollit anim elit ea in sint aliqua magna. Ea irure enim laborum laborum non aliquip ut nisi anim reprehenderit. Quis irure amet qui in non veniam qui occaecat. Fugiat amet culpa sint eiusmod eu fugiat. Consequat voluptate Lorem anim pariatur duis velit Lorem magna est exercitation ullamco esse id. Adipisicing voluptate deserunt culpa enim et eiusmod nostrud aliqua ea est officia nostrud in. Do sint sint deserunt officia ea consequat enim exercitation adipisicing do. Adipisicing incididunt laboris consectetur ullamco eu sit. Adipisicing consequat commodo exercitation duis anim. Duis ut ex ad irure amet ullamco ullamco.",
        "isRead": false,
        "sendAt": utilService.getTime(10000),
        "isDeleted": false,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313b6e068924e384068e",
        "subject": "Proident tempor deserunt in et",
        "sentFrom": "Kitty Pittman",
        "body": "Ad ipsum est ullamco veniam minim qui. Tempor dolor officia occaecat dolor ea cillum eu adipisicing aliquip nulla exercitation exercitation minim. Labore fugiat adipisicing consequat nulla magna sint proident voluptate Lorem nisi et Lorem reprehenderit. Cillum quis aliqua eiusmod est veniam mollit in. Enim Lorem id eiusmod cupidatat consequat excepteur aute aliqua dolore qui in aute non dolore. Culpa elit incididunt sint dolor eiusmod deserunt elit tempor commodo esse exercitation sit Lorem excepteur. Sit amet id aute esse sunt qui occaecat commodo in nisi veniam nisi mollit. Dolore id esse anim mollit. Sint in Lorem amet pariatur sunt aliquip incididunt qui deserunt duis. Incididunt laborum minim aliqua qui nisi voluptate eu in mollit anim. Tempor sint est exercitation laborum mollit et incididunt aliquip sint consectetur aliqua. Ut ut ipsum cupidatat est ad dolore minim cillum in. Labore esse est nostrud sit sunt. Nulla sit occaecat do ex est magna. Commodo veniam enim tempor proident laborum minim. Sint duis enim tempor eiusmod laborum incididunt magna Lorem esse exercitation aliqua consectetur deserunt. Qui occaecat enim irure qui id aute duis sit veniam qui exercitation incididunt do. Nisi cupidatat ea commodo est consectetur ullamco elit quis. Exercitation enim et commodo duis commodo exercitation ipsum consequat. Aliquip officia velit consequat adipisicing laborum laboris sit voluptate Lorem sit dolor sit cillum fugiat.",
        "isRead": false,
        "sendAt": utilService.getTime(11000),
        "isDeleted": false,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313b5625796bfc7df6e6",
        "subject": "Anim Lorem nostrud dolor ex",
        "sentFrom": "Lambert Collier",
        "body": "Officia dolore ullamco eu qui veniam et sint eiusmod adipisicing mollit nisi incididunt. Nostrud veniam dolor aliqua deserunt aliquip deserunt commodo culpa. Veniam irure nisi mollit excepteur laborum ea laborum adipisicing. Consectetur ullamco sint laborum exercitation. Aute labore sint et aliquip nulla id enim mollit. Dolore et aute elit veniam. Consectetur ea mollit qui incididunt pariatur id commodo culpa esse cupidatat in consequat deserunt. Lorem nulla aliqua deserunt nostrud nulla dolore esse dolor proident proident qui excepteur tempor. Lorem cillum laboris sunt velit consectetur commodo laborum in sit. Aute quis elit ex tempor sit consectetur velit eu pariatur ad quis reprehenderit. Est amet veniam occaecat fugiat sunt non occaecat. Ea aute excepteur officia aute enim proident ad nisi aliquip proident excepteur laborum. Nisi do ex excepteur sint exercitation qui cupidatat ipsum nulla duis irure. Non eu eu voluptate reprehenderit ipsum magna minim sunt ipsum in elit cillum Lorem. Nostrud irure aute amet consectetur mollit adipisicing do quis consequat. Reprehenderit Lorem laboris velit magna nulla dolor velit. Incididunt sit ea laboris officia exercitation labore occaecat do. Do irure mollit est laborum. Ipsum laboris culpa irure ex ullamco aute enim. Voluptate et esse incididunt velit fugiat adipisicing duis dolor laborum.",
        "isRead": false,
        "sendAt": utilService.getTime(12000),
        "isDeleted": false,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313b0d2ed493e4c73d32",
        "subject": "elit tempor magna dolor adipisicing",
        "sentFrom": "Meyers Peters",
        "body": "Incididunt excepteur voluptate excepteur adipisicing ullamco est occaecat exercitation. Sit aliquip consectetur ea esse. Lorem magna duis quis eu. Est occaecat amet eiusmod voluptate mollit laborum nulla. Cupidatat consequat cillum laboris elit commodo anim anim occaecat commodo nulla aliqua. Occaecat deserunt commodo eiusmod cupidatat mollit irure tempor voluptate. Minim pariatur adipisicing ipsum laborum non cillum mollit elit aliqua ullamco. Eiusmod nisi officia dolor et. Officia dolore commodo officia ipsum duis ad sunt nostrud sint commodo dolor ex ut. Veniam laboris exercitation duis cillum veniam dolor nulla commodo exercitation. Fugiat consequat occaecat mollit consequat eu ut eiusmod tempor velit est ipsum ullamco occaecat duis. Et et aute quis irure amet proident incididunt. Incididunt ex commodo exercitation exercitation aute sit in dolore excepteur laborum irure et. Veniam proident sunt aute eu. Ipsum non id ea dolor non. Ea minim adipisicing consectetur qui esse mollit aute aliqua. Consectetur nulla dolor culpa laboris dolor ipsum incididunt voluptate excepteur. Consectetur id voluptate ad aute nisi in ea in proident pariatur fugiat ex. Officia mollit eu culpa ad. Consectetur aliqua mollit ex non consectetur ullamco irure voluptate cillum anim dolor velit deserunt velit.",
        "isRead": false,
        "sendAt": utilService.getTime(12500),
        "isDeleted": false,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313b2ecf5704e5283868",
        "subject": "Dolore culpa sint excepteur nisi",
        "sentFrom": "Lenora Witt",
        "body": "Duis cupidatat dolor incididunt aute minim veniam quis enim laboris veniam ullamco est anim quis. Et qui ex consequat incididunt nisi. Dolore cupidatat mollit nostrud sint cupidatat duis id commodo mollit voluptate qui eiusmod pariatur dolore. In ut excepteur eu id fugiat proident elit laboris. Nisi sint proident duis ut irure tempor nisi. Nostrud ut esse sint proident ipsum ipsum ea proident cupidatat minim proident duis ea non. Ad id sunt esse in velit minim. Cupidatat pariatur culpa officia fugiat anim sunt do elit ad sint culpa exercitation consectetur officia. Excepteur quis exercitation incididunt ex quis ad culpa dolore dolor consequat aliqua. Eiusmod nostrud et amet eu officia et pariatur ea mollit labore voluptate culpa ipsum. Aute sunt ullamco mollit reprehenderit ut Lorem consequat ex amet fugiat dolor est. Cillum eiusmod consectetur enim duis ad ea elit elit ut. Non nostrud consequat commodo dolore ad minim nulla sit. Amet magna ex reprehenderit nulla. Cillum duis eu pariatur cillum incididunt aute deserunt proident laborum eiusmod. Est ad reprehenderit tempor quis Lorem irure esse irure eiusmod eu. Irure esse proident aliqua consequat quis ea qui aliqua. Dolor aute ut anim sint aliquip reprehenderit incididunt nostrud anim dolor. Aliquip ex proident occaecat incididunt non irure officia aute laboris. Nostrud ad esse et ipsum exercitation sunt magna tempor magna aliquip dolore.",
        "isRead": true,
        "sendAt": utilService.getTime(20000),
        "isDeleted": false,
        "toDelete": false,
        "isFav": true
      },
      {
        "id": "5d0e313b8933f044c095c888",
        "subject": "Eiusmod dolore quis duis eu",
        "sentFrom": "Bond Lambert",
        "body": "Laboris non elit fugiat ad in adipisicing aute nisi sint. Voluptate eu qui enim officia commodo do. Occaecat consectetur elit et aliqua aliqua minim sint Lorem ex do anim fugiat mollit minim. Est dolore incididunt nostrud amet fugiat ullamco nostrud aliquip dolore fugiat sint. Qui exercitation pariatur deserunt excepteur dolore commodo. Laboris est nulla enim mollit adipisicing reprehenderit pariatur labore ut laborum tempor elit. In pariatur nostrud dolor irure. Lorem occaecat irure enim dolore fugiat magna elit aliquip excepteur. Ex in culpa deserunt ut incididunt sit irure est. Non commodo sit aute irure cupidatat. Eu laboris deserunt esse eu pariatur sit duis officia laborum qui amet. Laboris anim Lorem sunt exercitation incididunt cillum in irure anim adipisicing ex. Tempor irure aliqua elit esse elit aute eu eu consectetur ut do nostrud nostrud. Adipisicing velit aute ullamco et id ullamco velit do anim eu eu sit exercitation sunt. Tempor quis culpa irure non. Excepteur incididunt reprehenderit consectetur ut irure nisi nisi anim Lorem laboris adipisicing adipisicing. In qui enim eiusmod ea dolor dolore quis. Aliqua officia incididunt reprehenderit velit consectetur magna et id laborum cupidatat. Cillum nisi ea id exercitation cupidatat officia id incididunt sunt deserunt pariatur irure. Deserunt velit ea anim in.",
        "isRead": false,
        "sendAt": utilService.getTime(36000),
        "isDeleted": false,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313bc13c952253ee53de",
        "subject": "Magna nostrud labore id laborum",
        "sentFrom": "Reilly Booth",
        "body": "Tempor magna aute aute eu consequat amet voluptate minim. Amet est enim anim excepteur velit dolor aliqua esse sint fugiat. Non labore cillum do reprehenderit id sit amet excepteur reprehenderit. Ad est exercitation fugiat reprehenderit ut exercitation duis anim consectetur quis id ipsum nostrud amet. Culpa do incididunt et Lorem esse dolor qui commodo reprehenderit. Ex enim occaecat Lorem aliqua sit labore tempor fugiat est reprehenderit voluptate. Amet ea laboris amet commodo. Velit id velit labore officia reprehenderit nostrud amet laboris excepteur magna cupidatat non. Reprehenderit do consectetur anim et est mollit anim exercitation ullamco eu magna esse commodo. In reprehenderit elit reprehenderit cillum. Eu anim nulla nostrud nisi. Irure ad eiusmod in et quis ullamco incididunt nulla commodo. Qui ipsum incididunt ex nulla voluptate pariatur anim. Ut non laborum est proident excepteur veniam mollit deserunt laboris proident aute id minim non. Reprehenderit cillum aliqua qui duis id. Non duis duis dolore aute cupidatat sunt tempor voluptate. Ea amet adipisicing sit voluptate nulla aute. Quis reprehenderit ut Lorem anim labore sunt tempor et ea consectetur nulla voluptate commodo. Anim cupidatat occaecat labore duis irure nisi. Id elit elit aute incididunt aliqua.",
        "isRead": false,
        "sendAt": utilService.getTime(39800),
        "isDeleted": false,
        "toDelete": false,
        "isFav": true
      },
      {
        "id": "5d0e313bf8a2ab837158440f",
        "subject": "Irure cupidatat aute et excepteur",
        "sentFrom": "Zimmerman Hood",
        "body": "Irure nisi culpa et ullamco velit duis sunt. Qui sunt duis occaecat ipsum elit consectetur consequat fugiat ipsum Lorem. Nostrud qui irure in cillum velit. Nulla minim nisi qui velit ullamco excepteur id consequat do est ad occaecat reprehenderit aliquip. Reprehenderit pariatur consectetur fugiat quis voluptate voluptate nisi Lorem. Amet labore amet velit aliqua reprehenderit laborum in elit minim consequat aliquip. Nisi quis voluptate culpa quis laboris laborum enim dolore in cillum mollit. Irure cillum incididunt et dolor eiusmod adipisicing. Labore dolor velit sit incididunt in quis Lorem occaecat ut nisi duis. In ipsum ad commodo et ex mollit laboris adipisicing officia veniam minim nulla. Ad veniam dolore reprehenderit ea eu irure velit nisi commodo sint aliquip mollit incididunt qui. Sit laborum exercitation reprehenderit consequat amet aliquip est elit incididunt et anim aliquip. Est exercitation esse sit ut tempor deserunt irure tempor sunt. Sint consequat ullamco eiusmod aliquip cillum. Reprehenderit ipsum aliquip veniam sit. Id est magna dolor ad pariatur. Labore mollit duis excepteur sint ipsum. Labore nulla dolore id aliquip ut ullamco. Nostrud dolore eiusmod ullamco adipisicing aute labore id et nisi minim cupidatat dolore ipsum ipsum. Incididunt officia quis adipisicing ut.",
        "isRead": true,
        "sendAt": utilService.getTime(42300),
        "isDeleted": false,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313bae1359b6046a9533",
        "subject": "nostrud ut ex aliquip nulla",
        "sentFrom": "Manuela Wiggins",
        "body": "Eu consectetur laboris et non deserunt minim. Cupidatat non incididunt sunt voluptate proident occaecat id consectetur velit ipsum esse ipsum non deserunt. Nostrud enim voluptate magna sit dolor commodo duis ea commodo fugiat aute minim. Et aliquip ex et fugiat culpa do. Dolor aliqua irure elit ad qui officia nostrud consequat aute qui enim occaecat. Ea aliqua cillum veniam est do magna tempor ipsum. Deserunt sunt proident pariatur ea esse magna ea. Esse enim do enim incididunt excepteur excepteur sint. Incididunt ad tempor in ut reprehenderit et. Pariatur pariatur sit ipsum esse elit incididunt eiusmod eiusmod consequat. Anim consectetur mollit eiusmod proident excepteur aute mollit dolore quis laborum voluptate officia dolore occaecat. Amet non amet nulla voluptate dolore. Eu exercitation fugiat Lorem id aliqua non aute minim sit est occaecat. Incididunt nulla esse cillum exercitation. Amet non do elit nostrud officia cillum pariatur. Eiusmod est qui incididunt ullamco ipsum culpa quis proident. Ut aliquip aliquip eu cupidatat anim dolore in velit voluptate qui fugiat dolor. In in voluptate occaecat do id voluptate do deserunt cupidatat. Officia do voluptate nostrud laborum anim aliquip sint est. Lorem elit incididunt esse ex officia enim do incididunt reprehenderit.",
        "isRead": false,
        "sendAt": utilService.getTime(42300),
        "isDeleted": true,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313b862bd19e2f0f25c3",
        "subject": "AAliquip aliquip eiusmod elit deserunt",
        "sentFrom": "Foley Barnett",
        "body": "Aliqua ut minim quis culpa incididunt eu cillum voluptate cupidatat officia. Sit culpa tempor dolore excepteur ex. Aliqua ea irure nulla duis voluptate ad velit nulla proident excepteur consectetur. Ut laboris qui elit duis quis duis labore deserunt ea incididunt. Culpa do aliquip qui minim culpa eiusmod id non ut. Adipisicing veniam nisi nulla do do labore. Irure nostrud sit laborum dolor ex consectetur nulla commodo eu nostrud ipsum aliquip. Consectetur ut ad cupidatat elit ea excepteur tempor amet adipisicing. Esse voluptate commodo occaecat culpa mollit adipisicing est pariatur commodo anim sint. Voluptate est eiusmod minim magna consectetur. Eu est reprehenderit nostrud ipsum aliquip aute elit velit. Consequat est nulla do fugiat. Lorem culpa irure aliqua eiusmod incididunt elit. Ipsum in sit eu irure sit nostrud ad exercitation mollit officia. Minim ipsum deserunt amet nulla ea commodo in dolor exercitation cupidatat quis proident. In anim enim tempor dolor nostrud ipsum proident ullamco. Enim eiusmod ipsum eu id. Ipsum elit mollit enim in nostrud sit in occaecat quis duis culpa laborum eiusmod mollit. Enim sint tempor voluptate veniam enim ipsum duis non ex excepteur in duis. Aliquip eu deserunt ex non anim.",
        "isRead": false,
        "sendAt": utilService.getTime(97200),
        "isDeleted": true,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313b6238024734df7959",
        "subject": "commodo labore nostrud consequat ad",
        "sentFrom": "Sally Mitchell",
        "body": "Duis est adipisicing tempor et esse fugiat. Non qui excepteur laboris nostrud cupidatat ea cupidatat qui qui ex duis qui nulla anim. Non pariatur duis irure consectetur consequat. Velit adipisicing eu nostrud ad culpa exercitation tempor ad ex velit culpa laboris proident nulla. Culpa et adipisicing irure veniam veniam ut do pariatur et esse quis non nostrud culpa. Eiusmod proident sint minim cupidatat enim ullamco nostrud. Nisi id velit officia Lorem consequat fugiat proident ea officia. Culpa ad ullamco velit ullamco ad minim id velit dolore reprehenderit veniam. Aliqua qui ad sit cupidatat commodo duis labore. Ut eiusmod exercitation ea ea laboris deserunt aliqua eiusmod dolor laborum magna. Aliquip pariatur aute labore eu non fugiat adipisicing voluptate veniam fugiat ullamco amet fugiat. Dolor aliqua proident ea magna occaecat proident irure cupidatat. Sunt minim pariatur ut enim nulla exercitation amet cupidatat. Quis nostrud amet pariatur enim ad exercitation nostrud incididunt ex dolore et ex adipisicing. Qui ipsum mollit cillum et irure nisi qui do cupidatat irure sunt culpa culpa. Magna Lorem do aliqua officia. Aliquip nulla eu voluptate sit magna aliquip cillum minim elit fugiat magna. Voluptate ipsum est mollit eu irure esse non anim laborum officia. Magna commodo ullamco anim deserunt qui tempor irure officia. Laboris dolore enim consectetur elit dolore et ut aliqua.",
        "isRead": false,
        "sendAt": utilService.getTime(90000),
        "isDeleted": true,
        "toDelete": true,
        "isFav": false
      },
      {
        "id": "5d0e313bcce9579dd441a452",
        "subject": "nostrud id consequat in id",
        "sentFrom": "Hurley Curtis",
        "body": "Consequat cillum et ex quis minim consequat irure magna occaecat velit. Aute nulla tempor amet labore non. Duis duis fugiat voluptate quis laboris nisi exercitation dolor tempor officia anim. Consectetur elit aliqua magna commodo consectetur in minim. Officia elit elit voluptate non magna commodo fugiat. Id commodo duis proident aute enim enim. Commodo proident duis laborum do laboris enim. Exercitation nisi nulla voluptate excepteur veniam enim eu irure aute minim minim voluptate. Occaecat magna dolore ipsum mollit anim eu excepteur. Lorem ea quis consequat cillum esse qui eu. Ut occaecat ex Lorem ullamco fugiat ut incididunt laborum labore consectetur est. Consequat proident irure non pariatur aliquip labore. Dolore voluptate non laborum exercitation ad do labore velit laborum minim sit officia amet ut. Elit ipsum consectetur nostrud deserunt cupidatat esse exercitation ut laboris aliqua commodo nostrud anim. Dolor in amet ex excepteur sunt quis magna ex sunt esse tempor. Ea occaecat sint ea est do nostrud ex laboris. Est anim eu aliqua ipsum eiusmod eu commodo. Et laborum voluptate exercitation incididunt ad consectetur do consequat commodo est officia. Reprehenderit exercitation in nostrud voluptate consectetur ut. Minim duis dolor exercitation veniam esse do.",
        "isRead": false,
        "sendAt": utilService.getTime(86400),
        "isDeleted": true,
        "toDelete": true,
        "isFav": false
      },
      {
        "id": "5d0e313b007663257728161e",
        "subject": "quis minim magna commodo aute",
        "sentFrom": "Lula Moran",
        "body": "Amet quis in consectetur dolor eu veniam nisi ut minim non non. Commodo minim nostrud veniam excepteur eu anim aliquip in. Amet est nisi ex aute ea eu proident nulla nulla. Ut sunt reprehenderit sint aliquip. Eiusmod quis laboris cupidatat amet enim in in. Tempor occaecat eu consequat exercitation minim culpa. Lorem cupidatat exercitation incididunt aute culpa culpa sit. Cupidatat ad proident veniam officia duis consectetur elit ex quis irure veniam non. Exercitation mollit exercitation occaecat excepteur qui commodo elit sit ullamco excepteur voluptate. Eu officia anim reprehenderit culpa ea ipsum. Esse ut amet id ex irure cupidatat ut enim. Cupidatat nulla dolor enim commodo sit eu ipsum in aliqua nulla sit nulla esse. Dolor do sint ut labore nisi irure consectetur aliqua in esse laboris in ad. Qui sint veniam proident ex pariatur esse aliquip ea ullamco pariatur occaecat tempor deserunt minim. Sunt fugiat adipisicing id anim. Voluptate velit sunt adipisicing eiusmod enim duis culpa ipsum. Velit laborum eiusmod consectetur deserunt magna dolore. Mollit incididunt ullamco sunt veniam pariatur nisi eu reprehenderit ad esse. Aliquip magna culpa laborum consequat exercitation adipisicing proident exercitation incididunt consequat labore id. Est minim ex exercitation laborum esse reprehenderit fugiat in qui irure consequat culpa.",
        "isRead": true,
        "sendAt": utilService.getTime(86400),
        "isDeleted": false,
        "toDelete": false,
        "isFav": true
      },
      {
        "id": "5d0e313b965cb03401e84733",
        "subject": "labore enim do aute in",
        "sentFrom": "Santos Shaw",
        "body": "Cupidatat anim ipsum laborum laborum magna laborum dolor sint aliqua tempor. Magna exercitation consequat consectetur esse dolore. Aute reprehenderit ex magna consectetur. Consectetur irure eu culpa quis minim voluptate reprehenderit pariatur laborum qui sit. Adipisicing nulla elit enim mollit consectetur irure non ad enim duis cillum. Dolor proident duis eiusmod nulla occaecat tempor non commodo officia cupidatat commodo sint. Laborum ullamco nostrud id cillum nostrud ea consequat et adipisicing elit qui ea nisi enim. Occaecat velit dolore aute anim dolore aliqua ad cupidatat voluptate est et non. Velit do excepteur ut cupidatat et in eu. Laboris id ex consequat cillum aliqua ad ullamco nulla mollit nisi cillum sint. Nulla dolore amet quis cupidatat sint. Non aliqua ipsum ipsum magna fugiat nisi est ullamco laboris minim aute velit aute. Et sit do labore fugiat nostrud veniam incididunt. Nostrud esse esse in magna ipsum adipisicing amet dolor in minim excepteur dolor sit minim. Et exercitation excepteur anim officia irure tempor cillum do fugiat officia. Aliqua eu ea sunt dolor culpa enim nulla do. Duis cillum aliqua nisi qui aliqua occaecat duis eu ea. Pariatur sunt duis esse pariatur veniam officia anim deserunt reprehenderit aliqua enim dolore duis cupidatat. Tempor est excepteur esse aliqua nulla. Cupidatat cillum nostrud esse amet deserunt sint deserunt aliquip in nulla amet nulla amet officia.",
        "isRead": false,
        "sendAt": utilService.getTime(86400),
        "isDeleted": false,
        "toDelete": false,
        "isFav": true
      },
      {
        "id": "5d0e313bcdb8661228006917",
        "subject": "eiusmod esse velit enim exercitation",
        "sentFrom": "Mckee Castillo",
        "body": "Proident laborum cillum esse aute cillum eu. Adipisicing eu et in sit ex dolore irure culpa sit excepteur ea sunt. Culpa tempor ullamco ea non est. Reprehenderit commodo dolore ut voluptate laboris ut excepteur non. Velit veniam et sint qui. Sunt adipisicing elit excepteur non qui laborum veniam amet ea sit officia culpa Lorem. Adipisicing proident officia anim id minim est. Lorem ipsum ex eiusmod Lorem Lorem voluptate consectetur do pariatur ea minim. Ut est sint dolor pariatur ex est. Eiusmod consectetur irure adipisicing anim consequat cillum elit officia sunt sit ex nostrud. Aliquip laboris proident ullamco ut labore nisi ea dolore nulla enim anim occaecat. Exercitation ut sunt incididunt aliquip ea nisi in mollit fugiat tempor esse enim. Nostrud velit enim quis fugiat incididunt do ex fugiat adipisicing consequat nulla ad irure nostrud. Officia sint nostrud amet quis. Id culpa quis et irure minim adipisicing eiusmod excepteur occaecat. Exercitation ullamco ad eu elit minim commodo ad nostrud excepteur sunt tempor velit eiusmod consequat. Consequat voluptate amet cupidatat consequat occaecat aliquip. Ipsum nisi aute ullamco irure tempor. Ullamco consequat dolore ea elit sint laboris est officia. Nostrud consectetur eiusmod tempor Lorem est sint nulla ex duis aute eiusmod occaecat occaecat.",
        "isRead": true,
        "sendAt": utilService.getTime(86400),
        "isDeleted": false,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313bbdd1c7e6f47701a6",
        "subject": "labore labore aliqua veniam culpa",
        "sentFrom": "Tabitha Oneill",
        "body": "Laboris consequat officia consectetur et ipsum. Elit ullamco culpa adipisicing excepteur. Proident commodo magna esse sunt consectetur nostrud aliqua qui commodo cillum nostrud Lorem duis adipisicing. Irure exercitation deserunt incididunt laboris aliqua ullamco mollit cillum voluptate tempor ad. Aute dolor nisi laborum eu esse reprehenderit elit deserunt ullamco elit eu velit. Lorem ullamco excepteur qui cillum sunt duis nisi commodo laboris ad nisi. Proident sit ad veniam proident ea enim. Ullamco anim velit do consequat ad exercitation est proident qui consectetur voluptate ullamco elit ex. Sint anim culpa est eu ex occaecat quis fugiat aliquip proident in id sint. Fugiat in incididunt veniam exercitation eu aliquip ad culpa ea incididunt amet. Duis proident mollit veniam deserunt cillum ea nulla occaecat quis cillum aliqua fugiat adipisicing. Fugiat irure deserunt non amet. Non irure exercitation minim exercitation adipisicing non officia reprehenderit enim. Do nisi non esse fugiat ad laborum esse incididunt sit cupidatat ad commodo anim. Adipisicing esse velit ipsum ipsum officia proident consectetur proident ad amet non. Aute exercitation ipsum pariatur voluptate dolor. Aliquip amet nisi est eiusmod pariatur exercitation quis pariatur laborum minim ex ad occaecat. Nulla do ea deserunt consectetur quis velit. Aliquip adipisicing elit sunt duis. Reprehenderit minim ex eu duis eiusmod id dolor consectetur id sunt sint anim.",
        "isRead": true,
        "sendAt": utilService.getTime(86400),
        "isDeleted": false,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313b9c8d5144a9c5e0c9",
        "subject": "labore cillum esse et nostrud",
        "sentFrom": "Jerri Burt",
        "body": "Pariatur laboris labore eu labore. Nostrud do enim ex labore commodo ea cillum nisi dolore nostrud ut cupidatat ut adipisicing. Ipsum ut officia cillum occaecat. Cupidatat fugiat minim eiusmod elit dolore laborum veniam est deserunt elit aute reprehenderit. Velit exercitation minim est laborum. Enim reprehenderit dolor sint minim. Consectetur irure laboris magna est velit qui. Excepteur eiusmod proident anim veniam sunt fugiat culpa occaecat sit aute officia. Ad enim labore consequat elit eu qui occaecat incididunt ea id aliqua eu et laborum. Occaecat duis sint tempor veniam anim cillum sunt. Aliquip voluptate id laboris quis. Amet magna commodo ut incididunt dolor mollit ipsum exercitation non ex non ea excepteur qui. Elit est commodo consequat laboris reprehenderit veniam sint eu sunt ullamco nostrud magna. Dolore dolore consectetur quis aliquip est elit eiusmod ut culpa. Duis consectetur aliquip laboris dolore ullamco commodo non. Cupidatat dolore tempor Lorem sint. Lorem deserunt sit aliquip velit Lorem reprehenderit anim dolore aute qui commodo. Esse sit amet aliqua labore. Id adipisicing ut veniam duis minim culpa cillum Lorem est ut et magna proident in. Eu est proident minim aute reprehenderit ex ad officia nulla.",
        "isRead": true,
        "sendAt": utilService.getTime(86400),
        "isDeleted": true,
        "toDelete": true,
        "isFav": true
      },
      {
        "id": "5d0e313b71dc3c3800d23704",
        "subject": "ea ipsum enim minim incididunt",
        "sentFrom": "Amelia Mosley",
        "body": "Quis sint consectetur exercitation amet quis. Proident anim laborum exercitation minim deserunt consequat tempor nisi commodo exercitation exercitation. Aute ut nulla id magna sunt veniam eiusmod nostrud incididunt occaecat minim. Nostrud cupidatat cillum excepteur veniam velit commodo. In enim sit minim proident reprehenderit cupidatat eiusmod est enim. Exercitation amet adipisicing in id velit ullamco anim deserunt Lorem ad cillum eiusmod nostrud amet. Minim excepteur aliquip cupidatat anim anim aliqua ullamco officia laborum enim eu reprehenderit. Amet nulla ex dolore aliqua aute duis consequat duis ut ad nostrud id et aute. Eu incididunt cillum dolore duis veniam amet proident veniam ad exercitation elit nisi non velit. Occaecat velit laboris excepteur sunt veniam deserunt adipisicing qui velit. Deserunt aliquip Lorem nostrud est laborum. Laboris amet laboris qui anim mollit aute amet velit enim aliqua. Ex est ea cillum duis elit sint ex incididunt. Irure consectetur culpa ea id irure ad do pariatur ipsum voluptate culpa excepteur reprehenderit laborum. Laboris id dolore consequat ullamco ad sit ea ipsum cillum. Magna culpa nostrud cillum exercitation ipsum eiusmod voluptate do occaecat consequat mollit aliquip id quis. Aliqua cillum esse irure cupidatat irure voluptate occaecat consectetur sit deserunt sint eiusmod cupidatat. Non consequat officia laborum fugiat nostrud laboris veniam laboris nulla commodo ullamco veniam nostrud. Officia elit excepteur tempor commodo anim consequat non ut laboris. Est tempor nulla id pariatur cillum culpa adipisicing consequat nostrud in deserunt.",
        "isRead": true,
        "sendAt": utilService.getTime(86400),
        "isDeleted": true,
        "toDelete": true,
        "isFav": false
      },
      {
        "id": "5d0e313bf675ed2a53f7d0c0",
        "subject": "et veniam ipsum officia sit",
        "sentFrom": "Salazar Welch",
        "body": "Esse irure esse reprehenderit officia duis ut officia dolor commodo ad. Velit elit minim elit proident et duis voluptate quis. Et incididunt excepteur anim non eu nulla est reprehenderit est elit ipsum nostrud. Tempor in culpa est sint aute ut laboris ullamco. Cupidatat velit dolor sunt do reprehenderit velit eu dolor est in. Ipsum incididunt dolor minim incididunt magna sunt est consequat cupidatat qui commodo duis ullamco. Cillum id consectetur sint enim eu et laboris proident cupidatat. Ex consequat esse id irure culpa ipsum culpa tempor velit ipsum do incididunt est. Ex ut dolor dolore sint est velit cupidatat et. Commodo laborum ipsum id dolor consectetur pariatur sit aliquip minim occaecat laboris laboris eu. Ullamco laborum incididunt Lorem cillum in. Esse qui commodo ea velit. Laborum pariatur aliqua duis ad. Adipisicing mollit laboris amet ut reprehenderit pariatur do aliqua in commodo minim qui. In aute culpa fugiat veniam cupidatat. Exercitation laborum officia voluptate esse ullamco sint occaecat commodo officia fugiat. Non amet sit reprehenderit incididunt esse consectetur enim non in veniam cupidatat. Elit ut pariatur et adipisicing nostrud occaecat consectetur deserunt cupidatat consectetur laboris Lorem et. Ea cillum aliquip occaecat mollit dolore labore. Excepteur non duis dolore do pariatur ullamco.",
        "isRead": false,
        "sendAt": utilService.getTime(86400),
        "isDeleted": true,
        "toDelete": true,
        "isFav": true
      },
      {
        "id": "5d0e313b7980979bcbc624d4",
        "subject": "id cupidatat cupidatat est excepteur",
        "sentFrom": "Barlow Landry",
        "body": "Ullamco ipsum non et minim incididunt cupidatat irure sint officia sunt ex deserunt. Proident consectetur culpa proident non pariatur ut do magna aliquip. Exercitation consequat ut velit pariatur. Reprehenderit fugiat dolore quis minim aute id ut minim labore commodo mollit id eu consectetur. Fugiat velit aliqua pariatur pariatur. Dolore aliquip commodo dolor deserunt minim id aliqua consequat quis. Labore consectetur labore culpa mollit aute consectetur do. Commodo fugiat nisi veniam occaecat. Ad sit excepteur qui ex anim consectetur nisi sunt elit consequat culpa ipsum proident. Id anim id proident do eu quis ea nisi labore nisi consequat. Id anim fugiat nisi aliquip nulla velit voluptate officia anim velit occaecat ex in mollit. Consectetur laborum nostrud in nisi dolor. Cupidatat reprehenderit voluptate in consequat aliquip aute aliquip excepteur tempor duis. Duis aliqua consectetur voluptate exercitation elit. Consectetur esse deserunt est ex nostrud magna nulla amet commodo. Nulla dolore esse deserunt reprehenderit elit veniam do. Nostrud ea duis culpa sunt laborum. Tempor tempor ex reprehenderit nisi consectetur fugiat commodo ipsum ut ex ipsum. Magna ullamco qui anim nostrud eu ea eiusmod amet culpa nulla qui aliqua nostrud aliquip. Laboris in laborum ea esse velit exercitation.",
        "isRead": true,
        "sendAt": utilService.getTime(86400),
        "isDeleted": false,
        "toDelete": true,
        "isFav": false
      },
      {
        "id": "5d0e313b4f3637dce61aae2e",
        "subject": "ut reprehenderit proident sit mollit",
        "sentFrom": "Carson Glover",
        "body": "Duis voluptate excepteur esse ex adipisicing labore enim velit reprehenderit et culpa. Deserunt mollit esse excepteur fugiat laboris in laborum Lorem aliqua in. Ex tempor ad adipisicing nisi aliqua laborum sunt ullamco magna excepteur consectetur. Nisi aute elit aliquip elit eiusmod ipsum et. Excepteur ullamco laboris aliqua id sunt. Est fugiat in nostrud esse fugiat. Minim do officia sunt cupidatat minim tempor. Enim officia elit ut enim ex ipsum exercitation. Esse nulla deserunt mollit minim irure mollit. Nisi et aliqua laborum nostrud minim incididunt ad tempor enim anim. Occaecat sunt id Lorem et. Pariatur pariatur consectetur minim duis. Ex incididunt excepteur eu anim proident consectetur adipisicing sint duis tempor officia sunt laboris mollit. Labore sit nostrud reprehenderit enim qui magna veniam nostrud dolore nisi id eiusmod. Deserunt ea et reprehenderit eu proident excepteur non. Excepteur magna nostrud in mollit nostrud. Labore in anim do nostrud eiusmod dolore ex. Nisi veniam sint aute velit incididunt proident laborum magna amet eu minim commodo anim incididunt. Consequat ex proident mollit ut dolore fugiat magna proident dolore dolor anim. Velit laborum voluptate exercitation laborum.",
        "isRead": true,
        "sendAt": utilService.getTime(86400),
        "isDeleted": false,
        "toDelete": true,
        "isFav": true
      },
      {
        "id": "5d0e313bcf7b592e361de6cf",
        "subject": "ad aliqua cillum aliquip reprehenderit",
        "sentFrom": "Barrera Foley",
        "body": "Officia nulla labore fugiat pariatur pariatur fugiat aliqua eiusmod ea elit cupidatat non. Excepteur officia tempor magna elit minim Lorem reprehenderit. Et minim commodo dolor culpa Lorem minim. Aute do sunt consectetur excepteur amet duis exercitation irure aute dolor mollit. Lorem ipsum duis labore tempor duis sit nulla. Sint anim tempor consectetur officia consequat deserunt commodo officia labore veniam pariatur ea mollit eu. Qui adipisicing nisi est sit sint laborum ipsum adipisicing deserunt irure. Sit incididunt sint duis dolore reprehenderit cupidatat ut. Elit excepteur ea minim nulla ullamco ullamco cillum ipsum et. Mollit laboris ipsum sunt cillum laborum dolor deserunt culpa mollit dolor Lorem qui. Occaecat eu aliqua et nisi ea nulla do. Et enim duis cillum sint eu sit non est laborum excepteur reprehenderit. Aliqua elit amet ea nostrud ullamco nostrud ut incididunt officia aliqua irure non et dolor. Enim adipisicing commodo cupidatat sit occaecat duis non occaecat laboris cillum eiusmod. Esse laboris do ipsum elit labore velit pariatur eiusmod et nisi. Exercitation occaecat officia consequat nisi. Nostrud non excepteur incididunt et mollit et irure. Pariatur consectetur proident ea sit magna ea exercitation anim ut incididunt laboris ea sint. Sint enim occaecat qui qui sit aute exercitation ea sunt in duis ipsum dolore exercitation. Consectetur magna sunt sint ut.",
        "isRead": false,
        "sendAt": utilService.getTime(86400),
        "isDeleted": false,
        "toDelete": true,
        "isFav": false
      },
      {
        "id": "5d0e313b7773d440f71611dd",
        "subject": "excepteur minim aliqua deserunt qui",
        "sentFrom": "Jennifer Adams",
        "body": "Duis minim consequat id irure adipisicing irure ut ad amet consequat fugiat. Quis fugiat duis esse nostrud. Est consequat eu id ipsum ipsum aliquip reprehenderit nisi laboris aliquip ea. Eu id deserunt sint dolor velit. Sit in nostrud adipisicing aliquip dolor eu non ad sunt non pariatur. Et officia pariatur reprehenderit officia exercitation et non do ut esse ut sunt minim. Aliqua id consequat esse exercitation elit eu in veniam consectetur veniam fugiat incididunt ut. Consectetur mollit esse ea cupidatat laboris. Aute esse cillum cupidatat ad sint fugiat aliquip cupidatat. Officia voluptate ad sint deserunt minim ea voluptate labore. Irure non officia sint veniam id exercitation cillum laboris veniam qui deserunt magna anim. Consequat dolore in cupidatat commodo officia aliqua deserunt minim sit ut ipsum velit eiusmod ea. Aliqua esse cillum id magna sit aute dolor dolore est. Duis fugiat ullamco esse nostrud eiusmod aute amet adipisicing eu qui anim. Sunt proident laborum et sint consequat do. Commodo velit nulla consequat amet aliqua non sunt pariatur id dolor. Et minim consectetur culpa proident qui aliquip excepteur cillum proident in deserunt ipsum ipsum nostrud. Qui dolor aliqua consectetur tempor. Voluptate do occaecat excepteur sint dolor anim sunt. Sit nostrud officia consequat nisi.",
        "isRead": true,
        "sendAt": utilService.getTime(86400),
        "isDeleted": true,
        "toDelete": false,
        "isFav": false
      },
      {
        "id": "5d0e313b45a0c54604ff0a94",
        "subject": "non Lorem occaecat consectetur Lorem",
        "sentFrom": "Hillary Morin",
        "body": "Non culpa do quis mollit voluptate duis incididunt. Anim sunt ipsum do laboris tempor culpa. Est proident ad cupidatat ut incididunt sunt in occaecat ex nisi labore. Aliqua nostrud ea incididunt consequat duis nulla labore culpa Lorem officia aliqua. Cupidatat do anim amet ipsum id non. Nulla sunt sunt aliqua consectetur commodo. Consequat ut enim adipisicing cupidatat in nisi sit minim. Sint veniam occaecat reprehenderit enim sunt laborum amet quis anim culpa. Non nostrud elit aute aliqua est. Enim ea ipsum irure laboris dolore occaecat excepteur cillum laborum consequat ipsum. Ullamco non ex nisi cillum. Magna quis duis est exercitation sit do. Esse aliqua voluptate mollit sint labore eu quis aliqua. Ex esse commodo fugiat cillum cupidatat non ut. Pariatur laborum ipsum anim occaecat non anim cupidatat et officia fugiat aliqua. Exercitation consequat Lorem aliqua enim nulla nisi magna. Laborum eiusmod occaecat laborum nostrud eu qui eiusmod laborum sunt laborum adipisicing fugiat ipsum. Quis quis esse nulla aliqua quis nulla fugiat do nostrud excepteur ipsum quis. Sit deserunt duis amet fugiat ipsum id commodo in esse velit laboris do sunt. Ut ullamco nostrud in laborum nulla non enim cupidatat.",
        "isRead": false,
        "sendAt": utilService.getTime(86400),
        "isDeleted": true,
        "toDelete": true,
        "isFav": false
      },
      {
        "id": "5d0e313b6e8dd0d65f0e7abd",
        "subject": "Pariatur cupidatat cillum nostrud magna",
        "sentFrom": "Shanna Gallagher",
        "body": "Deserunt mollit irure amet sint do voluptate aute anim mollit cupidatat excepteur Lorem incididunt veniam. Nostrud dolor culpa voluptate sunt qui anim proident elit incididunt anim ea. Id nulla aliqua nulla fugiat occaecat ex sint consectetur et laboris aliquip minim. Fugiat id fugiat do magna proident commodo duis et fugiat adipisicing culpa laborum. Aliquip aliqua nisi sint veniam. Laboris commodo proident id veniam Lorem est enim exercitation esse velit veniam quis. Id Lorem voluptate occaecat est do deserunt mollit consectetur aliquip mollit aute. Nostrud minim elit eu non Lorem aliqua. Eu cupidatat et veniam laboris commodo velit tempor elit qui do ex id proident. Mollit ex irure ea id incididunt cupidatat aliqua. Dolore ex consequat esse sit id reprehenderit amet mollit tempor eu anim. Amet aliquip sunt elit est velit. Anim ut occaecat do do pariatur. Laborum in ad esse ipsum amet nostrud occaecat cillum laborum. Laboris consectetur laborum officia qui amet nisi. Deserunt officia veniam aliquip dolore culpa ipsum fugiat ipsum. Irure tempor cillum proident qui non dolor adipisicing aute velit cillum. Ullamco consequat in consequat minim amet quis. Deserunt ut consectetur consectetur sint anim cillum quis. Voluptate pariatur fugiat eiusmod enim Lorem.",
        "isRead": true,
        "sendAt": utilService.getTime(86400),
        "isDeleted": true,
        "toDelete": false,
        "isFav": false
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
  mailsDB.unshift(email)
  utilService.store(MAILS_KEY, mailsDB)
  //console.log(email);
  return Promise.resolve()
}

function restoreMail(id) {
  const mail = mailsDB.find(mail => mail.id === id);
  mail.isDeleted = false;
  utilService.store(MAILS_KEY, mailsDB)
  return Promise.resolve()
}

function getMailById(id) {
  let mails = utilService.load(MAILS_KEY);
  let mail = mails.find(mail => mail.id === id);
  mail.isRead = true;
  utilService.store(MAILS_KEY, mails)
  return Promise.resolve(mail)
}


export default {
  query,
  deleteMail,
  toggleFav,
  sendMail,
  restoreMail,
  getMailById,
}