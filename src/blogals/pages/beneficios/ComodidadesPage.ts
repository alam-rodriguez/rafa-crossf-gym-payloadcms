import { GlobalConfig } from "payload/types";

const ComodidadesPage: GlobalConfig = {
  slug: "comodidades-page",
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
      type: "text",
      required: true,
    },
    {
      name: "comodidades",
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
          name: "link",
          type: "text",
        },
        {
          name: "imageComodidad",
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

export default ComodidadesPage;
