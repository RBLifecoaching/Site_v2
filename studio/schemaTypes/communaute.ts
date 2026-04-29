import {defineField, defineType, defineArrayMember} from 'sanity'

export const communaute = defineType({
  name: 'communaute',
  title: 'Page Communauté CaptainLumen',
  type: 'document',
  description: 'Toute la page dédiée à la communauté #CaptainLumen.',
  fields: [
    // --- Section Hero ---
    defineField({
      name: 'heroTitre',
      title: '① Titre principal de la page',
      description: 'Ex : "La Communauté des #CaptainLumen"',
      group: 'hero',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSousTitre',
      title: '① Sous-titre',
      description: 'Ex : "Pour ne plus être seule à relever les défis."',
      group: 'hero',
      type: 'string',
    }),
    defineField({
      name: 'heroBoutonTexte',
      title: '① Texte du bouton hero',
      description: 'Ex : "Je rejoins la communauté"',
      group: 'hero',
      type: 'string',
    }),
    defineField({
      name: 'heroBoutonLien',
      title: '① Lien du bouton hero',
      group: 'hero',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'heroImage',
      title: '① Illustration du hero',
      group: 'hero',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Description de l\'image',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // --- Citation ---
    defineField({
      name: 'citation',
      title: '② Citation mise en avant',
      description: 'La grande citation entre guillemets. Ex : "Rejoins une communauté des exploratrices..."',
      group: 'citation',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'citationAuteur',
      title: '② Auteur de la citation',
      description: 'Ex : "Rejoins-nous dans la communauté bienveillante des CaptainLumen !"',
      group: 'citation',
      type: 'string',
    }),

    // --- Esprit collectif ---
    defineField({
      name: 'espritTitre',
      title: '③ Titre "Esprit collectif"',
      description: 'Ex : "Esprit collectif et d\'aventure"',
      group: 'esprit',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'espritImage',
      title: '③ Image de la section',
      group: 'esprit',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Description de l\'image',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'espritParagraphes',
      title: '③ Paragraphes',
      description: 'Les textes qui décrivent l\'esprit de la communauté.',
      group: 'esprit',
      type: 'array',
      of: [{type: 'text'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'espritListe',
      title: '③ Liste des valeurs',
      description: 'Ex : "Des pionnières de la clarté intérieure"...',
      group: 'esprit',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'espritBoutonTexte',
      title: '③ Texte du bouton',
      group: 'esprit',
      type: 'string',
    }),
    defineField({
      name: 'espritBoutonLien',
      title: '③ Lien du bouton',
      group: 'esprit',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),

    // --- Ce que tu gagnes ---
    defineField({
      name: 'gagneTitre',
      title: '④ Titre "Ce que tu gagnes"',
      description: 'Ex : "Ce que tu gagnes en rejoignant l\'aventure"',
      group: 'gagne',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gagneCartes',
      title: '④ Les cartes bénéfices',
      description: 'Chaque carte a une icône, un titre et un texte.',
      group: 'gagne',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'carte',
          title: 'Bénéfice',
          fields: [
            defineField({
              name: 'icone',
              title: 'Icône',
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
              name: 'titre',
              title: 'Titre du bénéfice',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'texte',
              title: 'Description',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'titre', media: 'icone'},
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    // --- CTA final ---
    defineField({
      name: 'ctaTitre',
      title: '⑤ Titre du bloc final',
      description: 'Ex : "Prête à nous rejoindre ?"',
      group: 'cta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaTexte',
      title: '⑤ Texte du bloc final',
      description: 'Ex : "Prends ta place parmi les CaptainLumen..."',
      group: 'cta',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ctaBoutonTexte',
      title: '⑤ Texte du bouton final',
      group: 'cta',
      type: 'string',
    }),
    defineField({
      name: 'ctaBoutonLien',
      title: '⑤ Lien du bouton final',
      group: 'cta',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
  ],
  groups: [
    {name: 'hero', title: '① Section d\'accueil'},
    {name: 'citation', title: '② Citation'},
    {name: 'esprit', title: '③ Esprit collectif'},
    {name: 'gagne', title: '④ Ce que tu gagnes'},
    {name: 'cta', title: '⑤ Rejoindre la communauté'},
  ],
  preview: {
    select: {title: 'heroTitre', media: 'heroImage'},
    prepare() {
      return {title: 'Page Communauté CaptainLumen'}
    },
  },
})
