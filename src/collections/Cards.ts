import { CollectionConfig } from 'payload/types'

export const Cards: CollectionConfig = {
  slug: 'cards',
  
  fields: [
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
      name: 'image', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
  ],
  access:{
    read: () => true,
  }
}