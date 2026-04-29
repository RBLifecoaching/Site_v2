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
      name: 'titrePartie1',
      title: 'Titre — partie 1 (avant le mot en couleur)',
      description: 'Ex : "Entre deux"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titreMot1',
      title: 'Titre — 1er mot en couleur',
      description: 'Ex : "mondes"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titrePartie2',
      title: 'Titre — partie 2',
      description: 'Ex : ", j\'ai appris à"',
      type: 'string',
    }),
    defineField({
      name: 'titreMot2',
      title: 'Titre — 2ème mot en couleur',
      description: 'Ex : "naviguer"',
      type: 'string',
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
      description: 'Ex : "#services" pour pointer vers la section services',
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
