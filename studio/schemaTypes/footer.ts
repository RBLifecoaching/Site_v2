import {defineField, defineType} from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Pied de page (Footer)',
  type: 'document',
  description: 'Les informations en bas de toutes les pages : copyright, liens et réseaux sociaux.',
  fields: [
    defineField({
      name: 'copyright',
      title: 'Texte de copyright',
      description: 'Ex : "© 2026 Je réussis ma transition - Rachida Coach | Ramonville Saint-Agne"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lienMentionsLegales',
      title: 'Lien "Mentions Légales"',
      description: 'URL de la page des mentions légales.',
      type: 'string',
    }),
    defineField({
      name: 'lienCgv',
      title: 'Lien "CGV"',
      description: 'URL de la page des conditions générales de vente.',
      type: 'string',
    }),
    defineField({
      name: 'lienPolitiqueConfidentialite',
      title: 'Lien "Politique de confidentialité"',
      description: 'URL de la page de politique de confidentialité.',
      type: 'string',
    }),
    defineField({
      name: 'lienRendezVous',
      title: 'Lien "Prendre RDV" (Calendly)',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'lienLinkedIn',
      title: 'Lien LinkedIn',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'lienInstagram',
      title: 'Lien Instagram',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    select: {title: 'copyright'},
    prepare() {
      return {title: 'Pied de page'}
    },
  },
})
