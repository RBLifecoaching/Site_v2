import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Sections qui n'existent qu'en un seul exemplaire (pas de liste)
const singletonTypes = [
  'hero',
  'intro',
  'observation',
  'cherche',
  'solution',
  'about',
  'approche',
  'services',
  'testimonials',
  'faq',
  'newsletter',
  'navbar',
  'footer',
  'communauteHero',
  'communauteCitation',
  'communauteEsprit',
  'communauteGagne',
  'communauteCta',
  'mentionsLegales',
]

export default defineConfig({
  name: 'default',
  title: 'JRMT',

  projectId: 'eqczuptd',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu du site')
          .items([
            S.listItem()
              .title('📝 Articles de blog')
              .child(S.documentTypeList('post').title('Articles de blog')),

            S.divider(),

            S.listItem()
              .title("🏠 Page d'accueil")
              .child(
                S.list()
                  .title("Sections de la page d'accueil")
                  .items([
                    S.listItem()
                      .title("① Section d'accueil (Hero)")
                      .id('hero')
                      .child(S.document().schemaType('hero').documentId('hero')),
                    S.listItem()
                      .title('② Tu ne sais plus où tu en es ?')
                      .id('intro')
                      .child(S.document().schemaType('intro').documentId('intro')),
                    S.listItem()
                      .title('③ Tu es au bon endroit si...')
                      .id('observation')
                      .child(S.document().schemaType('observation').documentId('observation')),
                    S.listItem()
                      .title('④ Tu ne cherches pas / Tu cherches')
                      .id('cherche')
                      .child(S.document().schemaType('cherche').documentId('cherche')),
                    S.listItem()
                      .title('⑤ Changer en douceur')
                      .id('solution')
                      .child(S.document().schemaType('solution').documentId('solution')),
                    S.listItem()
                      .title('⑥ Pourquoi je fais ce que je fais')
                      .id('about')
                      .child(S.document().schemaType('about').documentId('about')),
                    S.listItem()
                      .title('⑦ Mon approche')
                      .id('approche')
                      .child(S.document().schemaType('approche').documentId('approche')),
                    S.listItem()
                      .title('⑧ Mes Accompagnements')
                      .id('services')
                      .child(S.document().schemaType('services').documentId('services')),
                    S.listItem()
                      .title("⑨ Ce qu'elles en disent")
                      .id('testimonials')
                      .child(S.document().schemaType('testimonials').documentId('testimonials')),
                    S.listItem()
                      .title('⑩ Questions fréquentes (FAQ)')
                      .id('faq')
                      .child(S.document().schemaType('faq').documentId('faq')),
                    S.listItem()
                      .title('⑪ Newsletter du Lundi')
                      .id('newsletter')
                      .child(S.document().schemaType('newsletter').documentId('newsletter')),
                  ]),
              ),

            S.divider(),

            S.listItem()
              .title('👥 Page Communauté CaptainLumen')
              .child(
                S.list()
                  .title('Page Communauté CaptainLumen')
                  .items([
                    S.listItem()
                      .title("① Section d'accueil")
                      .id('communauteHero')
                      .child(S.document().schemaType('communauteHero').documentId('communauteHero')),
                    S.listItem()
                      .title('② Citation')
                      .id('communauteCitation')
                      .child(S.document().schemaType('communauteCitation').documentId('communauteCitation')),
                    S.listItem()
                      .title('③ Esprit collectif')
                      .id('communauteEsprit')
                      .child(S.document().schemaType('communauteEsprit').documentId('communauteEsprit')),
                    S.listItem()
                      .title('④ Ce que tu gagnes')
                      .id('communauteGagne')
                      .child(S.document().schemaType('communauteGagne').documentId('communauteGagne')),
                    S.listItem()
                      .title('⑤ Rejoindre la communauté')
                      .id('communauteCta')
                      .child(S.document().schemaType('communauteCta').documentId('communauteCta')),
                  ]),
              ),

            S.divider(),

            S.listItem()
              .title('📋 Mentions légales')
              .id('mentionsLegales')
              .child(S.document().schemaType('mentionsLegales').documentId('mentionsLegales')),

            S.listItem()
              .title('🧭 Barre de navigation')
              .id('navbar')
              .child(S.document().schemaType('navbar').documentId('navbar')),

            S.listItem()
              .title('⚙️ Pied de page')
              .id('footer')
              .child(S.document().schemaType('footer').documentId('footer')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Empêche la création de plusieurs instances des sections singleton
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.includes(schemaType)),
  },
})
