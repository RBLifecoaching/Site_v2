import {defineField, defineType} from 'sanity'

export const communauteEsprit = defineType({
  name: 'communauteEsprit',
  title: '③ Esprit collectif',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre de la section',
      description: 'Ex : "Esprit collectif et d\'aventure"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image de la section',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Description de l\'image',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'contenu',
      title: 'Contenu',
      description: 'Écris ton texte ici. Tu peux ajouter des listes à puces via le bouton "•" de la barre d\'outils.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [{title: 'Liste à puces', value: 'bullet'}],
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
      return {title: '③ Esprit collectif'}
    },
  },
})
