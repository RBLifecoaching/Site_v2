import {defineField, defineType} from 'sanity'

export const cherche = defineType({
  name: 'cherche',
  title: 'Tu ne cherches pas / Tu cherches surtout',
  type: 'document',
  description: 'Section avec deux colonnes : ce que tu ne cherches pas (Non) et ce que tu cherches (Oui).',
  fields: [
    defineField({
      name: 'titrePasRecherche',
      title: 'Titre colonne "Non"',
      description: 'Ex : "Tu ne cherches pas"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'listePasRecherche',
      title: 'Liste "Tu ne cherches pas"',
      description: 'Ex : "à devenir quelqu\'un d\'autre", "à positiver à tout prix"...',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'titreRecherche',
      title: 'Titre colonne "Oui"',
      description: 'Ex : "Tu cherches surtout"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'listeRecherche',
      title: 'Liste "Tu cherches surtout"',
      description: 'Ex : "du calme mental", "de la clarté"...',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'titrePasRecherche'},
    prepare() {
      return {title: 'Tu ne cherches pas / Tu cherches surtout'}
    },
  },
})
