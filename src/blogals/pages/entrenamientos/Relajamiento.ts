import { GlobalConfig } from "payload/types";

const Relajamiento: GlobalConfig = {
  slug: "relajamiento-page",
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
  ],

  access: {
    read: () => true,
  },
};

export default Relajamiento;
