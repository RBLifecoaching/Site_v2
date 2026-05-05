import {post} from './post'
import {hero} from './hero'
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
import {navbar} from './navbar'
import {mentionsLegales} from './mentionsLegales'
import {communauteHero} from './communauteHero'
import {communauteCitation} from './communauteCitation'
import {communauteEsprit} from './communauteEsprit'
import {communauteGagne} from './communauteGagne'
import {communauteCta} from './communauteCta'

export const schemaTypes = [
  // Blog
  post,
  // Sections de la page d'accueil
  hero,
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
  navbar,
  footer,
  mentionsLegales,
  // Pages secondaires
  communauteHero,
  communauteCitation,
  communauteEsprit,
  communauteGagne,
  communauteCta,
]
