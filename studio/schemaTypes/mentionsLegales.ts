import {defineField, defineType} from 'sanity'

export const mentionsLegales = defineType({
  name: 'mentionsLegales',
  title: 'Mentions légales',
  type: 'document',
  description: 'Informations légales du site à compléter et mettre à jour.',
  fields: [
    defineField({
      name: 'titre',
      title: 'Description de l\'éditeur',
      description: 'Ex : "Rachida Blanchard — Coach professionnelle, accompagnement des femmes sensibles et anxieuses (« Je réussis ma transition »)."',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'adresse',
      title: 'Adresse complète',
      description: 'Ex : "12 rue des Lilas, 31520 Ramonville-Saint-Agne, France"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email de contact',
      description: 'Adresse email publique affichée dans les mentions (et utilisée pour les droits RGPD).',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'telephone',
      title: 'Téléphone',
      description: 'Ex : "+33 6 12 34 56 78"',
      type: 'string',
    }),
    defineField({
      name: 'siret',
      title: 'Numéro SIRET',
      description: 'Ex : "123 456 789 00012"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'formeJuridique',
      title: 'Forme juridique',
      description: 'Ex : "Micro-entreprise", "EI", "EURL"…',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'creditsPhotos',
      title: 'Crédits photos',
      description: 'Ex : "Rachida Blanchard" ou "Studio XYZ"',
      type: 'string',
    }),
    defineField({
      name: 'creditsDev',
      title: 'Crédits conception & développement',
      description: 'Ex : "Envolée numérique"',
      type: 'string',
    }),
    defineField({
      name: 'dateMiseAJour',
      title: 'Date de dernière mise à jour',
      type: 'date',
      options: {dateFormat: 'DD MMMM YYYY'},
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Mentions légales'}
    },
  },
})
