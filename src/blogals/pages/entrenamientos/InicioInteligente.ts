import { GlobalConfig } from "payload/types";

const InicioInteligente: GlobalConfig = {
  slug: "inicio-inteligente-page",
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
      name: "inicioInteligenteCards",
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
          name: "imageCard",
          type: "upload",
          relationTo: "media", // "pages" is the slug of an existing collection
          required: true,
        },
      ],
    },
    {
      name: "titleFooterPage",
      type: "text",
      required: true,
    },
    {
      name: "subtitleFooterPage",
      type: "text",
      required: true,
    },
  ],

  access: {
    read: () => true,
  },
};

export default InicioInteligente;
