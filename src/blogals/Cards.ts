import { GlobalConfig } from 'payload/types'

const Cards: GlobalConfig = {
  slug: 'cards',
  fields: [
    {
      name: 'cards',
      type: 'array',
      required: true,
      minRows:4,
      maxRows: 4,
      fields: [
        // {
        //   name: 'page',
        //   type: 'relationship',
        //   relationTo: 'pages', // "pages" is the slug of an existing collection
        //   required: true,
        // },
        // {
        //   name: 'page',
        //   type: 'relationship',
        //   relationTo: 'pages', // "pages" is the slug of an existing collection
        //   required: true,
        // },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
        },
        {
          name: 'imageCard', // required
          type: 'upload', // required
          relationTo: 'media', // required
          required: true,
        },
      ],
    },
  ],
  access:{
    read: () => true,
  }
}

export default Cards