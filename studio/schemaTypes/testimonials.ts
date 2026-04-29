import {defineField, defineType, defineArrayMember} from 'sanity'

export const testimonials = defineType({
  name: 'testimonials',
  title: 'Ce qu\'elles en disent (Témoignages)',
  type: 'document',
  description: 'Section des témoignages de clientes. Ajoutez, modifiez ou supprimez des témoignages.',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre de la section',
      description: 'Ex : "Ce qu\'elles en disent"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'temoignages',
      title: 'Les témoignages',
      description: 'Chaque témoignage a un texte et le prénom de la personne.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'temoignage',
          title: 'Témoignage',
          fields: [
            defineField({
              name: 'texte',
              title: 'Texte du témoignage',
              description: 'Collez ici la citation telle quelle, avec les guillemets si souhaité.',
              type: 'text',
              rows: 5,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'prenom',
              title: 'Prénom de la cliente',
              description: 'Ex : "Monique"',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'photo',
              title: 'Photo de la cliente (optionnel)',
              type: 'image',
              options: {hotspot: true},
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Description de la photo',
                  type: 'string',
                }),
              ],
            }),
          ],
          preview: {
            select: {title: 'prenom', subtitle: 'texte', media: 'photo'},
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
