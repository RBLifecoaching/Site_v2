import {post} from './post'
import {hero} from './hero'
import {intro} from './intro'
import {solution} from './solution'
import {about} from './about'
import {approche} from './approche'
import {services} from './services'
import {testimonials} from './testimonials'
import {faq} from './faq'
import {observation} from './observation'
import {cherche} from './cherche'
import {newsletter} from './newsletter'
import {footer} from './footer'
import {communaute} from './communaute'

export const schemaTypes = [
  // Blog
  post,
  // Sections de la page d'accueil
  hero,
  intro,
  observation,
  cherche,
  solution,
  about,
  approche,
  services,
  testimonials,
  faq,
  newsletter,
  // Éléments communs
  footer,
  // Pages secondaires
  communaute,
]
