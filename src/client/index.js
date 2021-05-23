
import {openNav} from './js/Nav.js'
import {activeSection} from './js/function.js'
import {activeArticle} from './js/function.js'

//Event Listener for Menu
document.getElementById('burger').addEventListener('click', openNav);

//Event Listener for Opacity on Scroll
document.addEventListener('scroll', activeSection)
document.addEventListener('scroll', activeArticle)

import './styles/about.scss'
import './styles/contact.scss'
import './styles/cv.scss'
import './styles/index.scss'
import './styles/projects.scss'
import './styles/menu.scss'
import './styles/pageload.scss'
import './styles/flyux.scss'


import './media/flyux_header.jpg'
import './media/flyux_footer.jpg'
import './media/CD.jpg'
import './media/survey.jpg'
import './media/Fionnuala_b&w.jpg'
import './media/Fionnuala_1.png'
import './media/Fionnuala_2.png'
import './media/Fionnuala_2.png'
import './media/Michele_1.png'
import './media/Michele_2.png'
import './media/Michele_3.png'
import './media/Michele_4.png'
import './media/Michele_5.png'
import './media/Michele_6.png'



import './media/logo.png'

import './media/CBAirlines.pdf'

export{openNav}
export{activeSection}
export{activeArticle}
