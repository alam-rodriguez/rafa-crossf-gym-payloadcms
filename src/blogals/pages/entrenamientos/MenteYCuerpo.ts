import { GlobalConfig } from "payload/types";

const MenteYCuerpo: GlobalConfig = {
  slug: "mente-y-cuerpo-page",
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
      name: "menteYCuerpo",
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

export default MenteYCuerpo;
