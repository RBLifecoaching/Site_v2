import {defineField, defineType} from 'sanity'

export const navbar = defineType({
  name: 'navbar',
  title: 'Barre de navigation',
  type: 'document',
  description: 'Logo, liens du menu et bouton de prise de rendez-vous.',
  fields: [
    defineField({
      name: 'logo',
      title: 'Image du logo',
      description: 'Logo affiché en haut à gauche de la navigation.',
      type: 'image',
      options: {hotspot: false},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texte alternatif',
          type: 'string',
          description: 'Description pour les lecteurs d\'écran (ex : "Logo Rachida Blanchard")',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lienLogo',
      title: 'Lien du logo',
      description: 'Page vers laquelle pointe le logo (ex : "index.html")',
      type: 'string',
    }),
    defineField({
      name: 'liens',
      title: 'Liens du menu',
      description: 'Les entrées du menu de navigation (titre + URL).',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'titre',
              title: 'Titre du lien',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'lien',
              title: 'URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'titre', subtitle: 'lien'},
          },
        },
      ],
    }),
    defineField({
      name: 'boutonTexte',
      title: 'Texte du bouton CTA',
      description: 'Ex : "Prendre RDV"',
      type: 'string',
    }),
    defineField({
      name: 'boutonLien',
      title: 'Lien du bouton CTA',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Barre de navigation'}
    },
  },
})
