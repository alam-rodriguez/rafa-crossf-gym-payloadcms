import { GlobalConfig } from "payload/types";

const LimpiezaYSeguridadPage: GlobalConfig = {
  slug: "limpieza-y-seguridad-page",
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
      name: "cardtitle",
      type: "text",
      required: true,
    },
    {
      name: "cardsubtitle",
      type: "text",
      required: true,
    },
    {
      name: "limpiezaCards",
      type: "array",
      minRows: 4,
      maxRows: 4,
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
          name: "imageCard", // required
          type: "upload", // required
          relationTo: "media", // required
          required: true,
        },
      ],
    },
    {
      name: "medidadesDeSeguridad",
      type: "array",
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
          name: "imageCard", // required
          type: "upload", // required
          relationTo: "media", // required
          required: true,
        },
      ],
    },
  ],
  access: {
    read: () => true,
  },
};

export default LimpiezaYSeguridadPage;
