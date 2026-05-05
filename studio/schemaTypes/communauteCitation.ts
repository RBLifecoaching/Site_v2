import {defineField, defineType} from 'sanity'

export const communauteCitation = defineType({
  name: 'communauteCitation',
  title: '② Citation',
  type: 'document',
  fields: [
    defineField({
      name: 'citation',
      title: 'Citation mise en avant',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'auteur',
      title: 'Auteur / accroche sous la citation',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {title: '② Citation'}
    },
  },
})
