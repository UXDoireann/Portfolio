
import {openNav} from './js/Nav.js'
import {activeSection} from './js/fadein.js'
import {activeArticle} from './js/fadein.js'
import {activeQuote} from './js/fadein.js'
import {activeTitle} from './js/fadein.js'

//Event Listener for Menu
document.getElementById('burger').addEventListener('click', openNav);

//Event Listener for Opacity on Scroll
document.addEventListener('scroll', activeSection)
document.addEventListener('scroll', activeArticle)
document.addEventListener('scroll', activeQuote)
document.addEventListener('scroll', activeTitle)

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

import './media/CB1.jpg'
import './media/CB2.jpg'
import './media/CB3.jpg'
import './media/CB4.jpg'

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

import './media/ad_b&w_1.jpg'
import './media/ad_b&w_2.jpg'
import './media/ad_b&w_3.jpg'
import './media/ad_baggage.jpg'
import './media/ad_changes.jpg'
import './media/ad_extras.jpg'
import './media/ad_guidance.jpg'
import './media/ad_infonotseen.jpg'
import './media/ad_interactivity.jpg'
import './media/ad_landingpage.jpg'
import './media/ad_layover.jpg'
import './media/ad_priceclarity.jpg'
import './media/ad_seats.jpg'
import './media/ad_signin.jpg'
import './media/ad_toomuchtext.jpg'
import './media/whole_diagram.jpg'




import './media/logo.png'

import './media/CBAirlines.pdf'
import './media/DoireannNiGhrioghair_Project5.pdf'

export{openNav}
export{activeSection}
export{activeArticle}
export{activeQuote}
export{activeTitle}
