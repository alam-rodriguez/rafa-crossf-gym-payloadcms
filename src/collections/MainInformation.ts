import { CollectionConfig } from 'payload/types'

export const MainInformation: CollectionConfig = {
  slug: 'main-information',
  fields: [
    {
      name: 'appName',
      type: 'text',
      required: true,
    },
    {
      name: 'MotivationalText',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true
    },
    {
      name: 'imageLogo', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
  ],
  access:{
    read: () => true,
  }
}