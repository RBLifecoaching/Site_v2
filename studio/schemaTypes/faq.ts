import {defineField, defineType, defineArrayMember} from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'Questions fréquentes (FAQ)',
  type: 'document',
  description: 'Les questions-réponses affichées sur la page d\'accueil. Ajoutez ou modifiez les questions.',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre de la section',
      description: 'Ex : "Questions fréquentes"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'questions',
      title: 'Questions et réponses',
      description: 'Chaque entrée est une question avec sa réponse. Glissez-déposez pour réordonner.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'question',
          title: 'Question',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'reponse',
              title: 'Réponse',
              type: 'text',
              rows: 5,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'question'},
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'titre'},
  },
})
