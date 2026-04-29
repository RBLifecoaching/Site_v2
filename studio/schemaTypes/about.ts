import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'Pourquoi je fais ce que je fais',
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
      name: 'paragraphe1',
      title: 'Premier paragraphe',
      description: 'Le texte qui commence par "Pendant longtemps, j\'ai cru..."',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'citation',
      title: 'Citation mise en avant',
      description: 'La citation encadrée au centre. Ex : "Ce n\'est pas la dualité qui pose problème..."',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'paragraphes',
      title: 'Paragraphes suivants',
      description: 'Les autres paragraphes après la citation. Ajoutez-en autant que nécessaire.',
      type: 'array',
      of: [{type: 'text'}],
      validation: (Rule) => Rule.required().min(1),
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
