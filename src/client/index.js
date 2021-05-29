
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

import './media/ad_b&w_1.png'
import './media/ad_b&w_2.png'
import './media/ad_extras.png'
import './media/ad_guidance.png'
import './media/ad_layover.png'
import './media/ad_priceclarity.png'
import './media/whole_diagram.png'
import './media/customer_journey_map.jpg'




import './media/logo.png'

import './media/CBAirlines.pdf'
import './media/DoireannNiGhrioghair_Project5.pdf'
import './media/CustomerJourneyMap.pdf'

export{openNav}
export{activeSection}
export{activeArticle}
export{activeQuote}
export{activeTitle}
