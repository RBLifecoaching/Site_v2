import {defineField, defineType} from 'sanity'

export const observation = defineType({
  name: 'observation',
  title: 'Observation (Tu es au bon endroit si...)',
  type: 'document',
  description: 'Section avec la liste des situations qui résonnent et la conclusion.',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre de la section',
      description: 'Ex : "Tu es au bon endroit si..."',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'situations',
      title: 'La liste des situations',
      description: 'Chaque élément est une situation courte. Ex : "ton mental ne s\'arrête jamais"',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'conclusionPhrases',
      title: 'Phrases de conclusion',
      description:
        'Écris une phrase par ligne — chaque retour à la ligne crée un nouveau paragraphe.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'conclusionMiseEnAvant',
      title: 'Phrase mise en avant',
      description:
        'La phrase finale en évidence. Ex : "C\'est le signe que ton système intérieur est saturé."',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'conclusionMots',
      title: 'Mots en vert (phrase mise en avant)',
      description:
        'Les mots ou groupes de mots à colorier en vert dans la phrase ci-dessus, un par ligne.',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {title: 'titre'},
  },
})
