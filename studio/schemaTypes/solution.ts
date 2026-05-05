import {defineField, defineType} from 'sanity'

export const solution = defineType({
  name: 'solution',
  title: 'Solutions (changer en douceur)',
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
      name: 'contenu',
      title: 'Contenu',
      description:
        "Écris ton texte ici. Tu peux mettre des mots en gras ou en italique via la barre d'outils.",
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Gras', value: 'strong'},
              {title: 'Italique', value: 'em'},
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'illustration',
      title: 'Illustration (image à droite)',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: "Description de l'image (accessibilité)",
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
