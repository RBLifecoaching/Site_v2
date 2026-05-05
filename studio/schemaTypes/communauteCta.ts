import {defineField, defineType} from 'sanity'

export const communauteCta = defineType({
  name: 'communauteCta',
  title: '⑤ Rejoindre la communauté',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre du bloc',
      description: 'Ex : "Prête à nous rejoindre ?"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'texte',
      title: 'Texte',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'boutonTexte',
      title: 'Texte du bouton',
      type: 'string',
    }),
    defineField({
      name: 'boutonLien',
      title: 'Lien du bouton',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    prepare() {
      return {title: '⑤ Rejoindre la communauté'}
    },
  },
})
