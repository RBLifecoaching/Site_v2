import {defineField, defineType, defineArrayMember} from 'sanity'

export const intro = defineType({
  name: 'intro',
  title: 'Tu ne sais plus où tu en es ?',
  type: 'document',
  description: 'La section avec les 3 cartes "La Bonne Élève", "La Surcharge", "La Transition".',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre de la section',
      description: 'Ex : "Tu ne sais plus où tu en es ?"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cartes',
      title: 'Les 3 cartes',
      description: 'Chaque carte a une image, un titre et un texte.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'carte',
          title: 'Carte',
          fields: [
            defineField({
              name: 'image',
              title: 'Image de la carte',
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
            }),
            defineField({
              name: 'titre',
              title: 'Titre de la carte',
              description: 'Ex : "La Bonne Élève"',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'texte',
              title: 'Texte de la carte',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'titre', media: 'image'},
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
