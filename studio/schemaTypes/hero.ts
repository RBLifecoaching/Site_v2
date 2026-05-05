import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Section d\'accueil (Hero)',
  type: 'document',
  description: 'La grande section en haut de la page d\'accueil avec la photo de Rachida.',
  fields: [
    defineField({
      name: 'tag',
      title: 'Étiquette (petite ligne au-dessus du titre)',
      description: 'Ex : "Accompagnement des femmes sensibles et anxieuses"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titre',
      title: 'Titre',
      description: 'Le titre complet, ex : "Entre deux mondes, j\'ai appris à naviguer."',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'motsEnCouleur',
      title: 'Mots en vert',
      description: 'Les mots du titre à afficher en couleur, un par ligne. Ex : "mondes", "naviguer".',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'anaphore',
      title: 'Les trois phrases "Entre..."',
      description: 'Les petites phrases poétiques sous le titre, une par ligne.',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'sousTitre',
      title: 'Paragraphe de présentation',
      description: 'Le texte qui présente Rachida et sa mission.',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'boutonTexte',
      title: 'Texte du bouton',
      description: 'Ex : "Découvrir Lumen\'Essence"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'boutonLien',
      title: 'Lien du bouton',
      description: 'Ancre vers une section : "#services", "#faq"… ou URL complète : "https://…" (s\'ouvre dans un nouvel onglet)',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Photo de Rachida',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texte alternatif (décrivez la photo pour l\'accessibilité)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'tag', media: 'photo'},
  },
})
