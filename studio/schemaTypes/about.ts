import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'A propos',
  type: 'document',
  description: 'Section de présentation de Rachida avec sa photo et son histoire.',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre de la section',
      description: 'Ex : "Pourquoi je fais ce que je fais"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo de Rachida',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Description de la photo (accessibilité)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contenu',
      title: 'Contenu',
      description:
        'Écris tes paragraphes ici. Pour une citation stylisée, sélectionne le texte et choisis le style "Citation" dans la barre d\'outils.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Citation', value: 'blockquote'},
          ],
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
      name: 'boutonTexte',
      title: 'Texte du bouton',
      description: 'Ex : "Je réserve mon appel clarté offert"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'boutonLien',
      title: 'Lien du bouton (URL Calendly)',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    select: {title: 'titre', media: 'photo'},
  },
})
