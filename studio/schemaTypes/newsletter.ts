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
      description: 'Ex : "Je m\'inscris"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'placeholderEmail',
      title: 'Texte indicatif du champ email',
      description: 'Ex : "Votre adresse email"',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'titre'},
  },
})
