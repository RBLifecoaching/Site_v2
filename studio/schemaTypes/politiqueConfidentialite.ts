import {defineField, defineType, defineArrayMember} from 'sanity'

export const politiqueConfidentialite = defineType({
  name: 'politiqueConfidentialite',
  title: 'Politique de confidentialité',
  type: 'document',
  description: 'Page Politique de confidentialité du site.',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre de la page',
      description: 'Ex : "Politique de confidentialité"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contenu',
      title: 'Contenu',
      description:
        'Contenu de la page. Supporte titres, citations, listes à puces, gras/italique et liens.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Paragraphe', value: 'normal'},
            {title: 'Titre H2', value: 'h2'},
            {title: 'Titre H3', value: 'h3'},
            {title: 'Citation', value: 'blockquote'},
          ],
          lists: [
            {title: 'Puces', value: 'bullet'},
            {title: 'Numérotée', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Gras', value: 'strong'},
              {title: 'Italique', value: 'em'},
              {title: 'Souligné', value: 'underline'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Lien',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Ouvrir dans un nouvel onglet',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Politique de confidentialité'}
    },
  },
})
