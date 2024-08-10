import { GlobalConfig } from "payload/types";

const blogsYNoticias: GlobalConfig = {
  slug: "blogs-y-noticias-page",
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
      name: "blogsYNoticias",
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
          name: "description",
          type: "richText",
          required: true,
        },
        {
          name: "imageBlog",
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

export default blogsYNoticias;
