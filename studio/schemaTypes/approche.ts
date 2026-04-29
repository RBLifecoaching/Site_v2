import {defineField, defineType, defineArrayMember} from 'sanity'

export const approche = defineType({
  name: 'approche',
  title: 'Mon approche',
  type: 'document',
  description: 'Section avec les 3 piliers de l\'accompagnement et le tableau des résultats attendus.',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre de la section',
      description: 'Ex : "Mon approche"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sousTitre',
      title: 'Sous-titre',
      description: 'Ex : "Mon accompagnement repose sur trois piliers complémentaires."',
      type: 'string',
    }),
    defineField({
      name: 'piliers',
      title: 'Les 3 piliers',
      description: 'Chaque pilier a un numéro, un titre et un texte explicatif.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'pilier',
          title: 'Pilier',
          fields: [
            defineField({
              name: 'numero',
              title: 'Numéro',
              description: 'Ex : "01"',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'titre',
              title: 'Titre du pilier',
              description: 'Ex : "Les neurosciences comportementales"',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'texte',
              title: 'Description du pilier',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'titre', subtitle: 'numero'},
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'titreResultats',
      title: 'Titre du bloc résultats',
      description: 'Ex : "Les résultats que tu peux attendre"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resultats',
      title: 'Tableau des transformations (avant → après)',
      description: 'Chaque ligne montre ce qui change : état de départ → état d\'arrivée.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'resultat',
          title: 'Transformation',
          fields: [
            defineField({
              name: 'avant',
              title: 'Avant (situation difficile)',
              description: 'Ex : "Confusion et fatigue mentale"',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'apres',
              title: 'Après (résultat positif)',
              description: 'Ex : "Clarté et sérénité"',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'avant', subtitle: 'apres'},
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
