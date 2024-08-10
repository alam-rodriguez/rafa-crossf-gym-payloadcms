import { GlobalConfig } from "payload/types";

const CasosDeExitos: GlobalConfig = {
  slug: "casos-de-exito-page",
  fields: [
    {
      name: "imageTitle",
      type: "text",
      required: true,
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "casosDeExito",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "subtitle",
          type: "text",
          required: true,
        },
        {
          name: "imageCaso",
          type: "upload",
          relationTo: "media", // "pages" is the slug of an existing collection
          required: true,
        },
        {
          name: "description",
          type: "richText",
          // relationTo: 'media', // "pages" is the slug of an existing collection
          required: true,
        },
      ],
    },
  ],
  access: {
    read: () => true,
  },
};

export default CasosDeExitos;
