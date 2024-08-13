import { GlobalConfig } from "payload/types";

const MainInformation: GlobalConfig = {
  slug: "main-information",
  fields: [
    {
      name: "appName",
      type: "text",
      required: true,
    },
    {
      name: "MotivationalText",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "imageLogo", // required
      type: "upload", // required
      relationTo: "media", // required
      required: true,
    },
    {
      name: "imageTeam", // required
      type: "upload", // required
      relationTo: "media", // required
      required: true,
    },
    {
      name: "mainVideo", // required
      type: "upload", // required
      relationTo: "videos", // required
      required: true,
    },
    {
      name: "secondVideo", // required
      type: "upload", // required
      relationTo: "videos", // required
      required: true,
    },
    {
      name: "redes",
      type: "group",
      fields: [
        {
          name: "facebook",
          type: "text",
        },
        {
          name: "youtube",
          type: "text",
        },
        {
          name: "instagram",
          type: "text",
        },
        {
          name: "tiktok",
          type: "text",
        },
        {
          name: "whatsapp",
          type: "text",
        },
      ],
    },
  ],
  access: {
    read: () => true,
  },
};

export default MainInformation;
