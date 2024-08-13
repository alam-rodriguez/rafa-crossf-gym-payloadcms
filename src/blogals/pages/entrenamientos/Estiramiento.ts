import { GlobalConfig } from "payload/types";

const Estiramiento: GlobalConfig = {
  slug: "estiramiento-page",
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
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "richText",
      required: true,
    },
    {
      name: "estiramientoCards",
      type: "array",
      required: true,
      fields: [
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
          name: "imageCard",
          type: "upload",
          relationTo: "media", // "pages" is the slug of an existing collection
          required: true,
        },
      ],
    },
  ],

  access: {
    read: () => true,
  },
};

export default Estiramiento;
