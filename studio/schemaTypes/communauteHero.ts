import {defineField, defineType} from 'sanity'

export const communauteHero = defineType({
  name: 'communauteHero',
  title: '① Section d\'accueil',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre principal',
      description: 'Ex : "La Communauté des #CaptainLumen"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sousTitre',
      title: 'Sous-titre',
      type: 'string',
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
    defineField({
      name: 'image',
      title: 'Illustration',
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
  ],
  preview: {
    prepare() {
      return {title: '① Section d\'accueil'}
    },
  },
})
