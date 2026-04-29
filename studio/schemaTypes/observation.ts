import {defineField, defineType} from 'sanity'

export const observation = defineType({
  name: 'observation',
  title: 'Tu es au bon endroit si...',
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
      description: 'Les petites phrases en bas. Ex : "Ce n\'est pas un manque de volonté."',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'conclusionMiseEnAvant',
      title: 'Phrase mise en avant (en gras)',
      description: 'Ex : "C\'est le signe que ton système intérieur est saturé."',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'titre'},
  },
})
