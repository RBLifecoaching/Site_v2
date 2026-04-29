import {defineField, defineType, defineArrayMember} from 'sanity'

export const services = defineType({
  name: 'services',
  title: 'Mes Accompagnements',
  type: 'document',
  description: 'Section avec les 3 offres : Communauté, Lumen\'Essence, Coaching individuel.',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre de la section',
      description: 'Ex : "Mes Accompagnements"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'offres',
      title: 'Les offres',
      description: 'Chaque offre est une carte avec icône, titre, texte et bouton.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'offre',
          title: 'Offre',
          fields: [
            defineField({
              name: 'icone',
              title: 'Icône / Illustration',
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
              name: 'badge',
              title: 'Badge (optionnel)',
              description: 'Ex : "Programme phare". Laissez vide si pas de badge.',
              type: 'string',
            }),
            defineField({
              name: 'titre',
              title: 'Titre de l\'offre',
              description: 'Ex : "Lumen\'Essence"',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'texte',
              title: 'Description courte (pour les cartes simples)',
              description: 'Un ou deux phrases de description. Laissez vide si vous utilisez une liste.',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'listeBenefices',
              title: 'Liste des bénéfices (pour le programme phare)',
              description: 'Ex : "Apaiser ton mental", "Accueillir tes émotions..."',
              type: 'array',
              of: [{type: 'string'}],
            }),
            defineField({
              name: 'boutonTexte',
              title: 'Texte du bouton',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'boutonLien',
              title: 'Lien du bouton',
              description: 'URL ou ancre (ex : "#" ou "communaute.html")',
              type: 'string',
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
    select: {title: 'titre'},
  },
})
