import {defineField, defineType} from 'sanity'

export const solution = defineType({
  name: 'solution',
  title: 'Changer en douceur',
  type: 'document',
  description: 'Section avec le texte "Changer en douceur" et l\'illustration à droite.',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre de la section',
      description: 'Ex : "Changer en douceur"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phraseItalique',
      title: 'Phrase en italique (accroche)',
      description: 'La première phrase en italique sous le titre.',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'paragraphes',
      title: 'Paragraphes',
      description: 'Les textes qui suivent l\'accroche. Ajoutez un paragraphe par entrée.',
      type: 'array',
      of: [{type: 'text'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'illustration',
      title: 'Illustration (image à droite)',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Description de l\'image (accessibilité)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'titre', media: 'illustration'},
  },
})
