import {defineField, defineType} from 'sanity'

export const newsletter = defineType({
  name: 'newsletter',
  title: 'Newsletter du Lundi',
  type: 'document',
  description: 'Le bloc d\'inscription à la newsletter visible sur la page d\'accueil.',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      description: 'Ex : "La newsletter du Lundi"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'texte',
      title: 'Texte de description',
      description: 'Ex : "Chaque lundi, recevez une dose d\'inspiration..."',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'boutonTexte',
      title: 'Texte du bouton',
      description: 'Ex : "Je m\'abonne à la newsletter"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'boutonLien',
      title: 'Lien du bouton',
      description: 'L\'URL vers laquelle le bouton redirige. Ex : "https://jereussismatransition.substack.com"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'titre'},
  },
})
