export default {
  name: 'intro',
  title: 'Intro',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string'
    },
    {
      name: 'paragraphes',
      title: 'Paragraphes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'texte',
              title: 'Texte',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
}
