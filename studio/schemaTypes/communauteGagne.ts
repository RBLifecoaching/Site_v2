import {defineField, defineType, defineArrayMember} from 'sanity'

export const communauteGagne = defineType({
  name: 'communauteGagne',
  title: '④ Ce que tu gagnes',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre de la section',
      description: 'Ex : "Ce que tu gagnes en rejoignant l\'aventure"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cartes',
      title: 'Les cartes bénéfices',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'carte',
          title: 'Bénéfice',
          fields: [
            defineField({
              name: 'icone',
              title: 'Icône',
              type: 'image',
              options: {hotspot: true},
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Description de l\'icône',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
            defineField({
              name: 'titre',
              title: 'Titre du bénéfice',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'texte',
              title: 'Description',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'titre', media: 'icone'},
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return {title: '④ Ce que tu gagnes'}
    },
  },
})
