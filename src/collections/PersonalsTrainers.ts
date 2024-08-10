import { CollectionConfig } from "payload/types";

const checkboxes = () => {
  const checkboxNames = [
    "cardio",
    "pesas",
    "mente_y_cuerpo",
    "yoga",
    "flexibilidad",
    "deportes",
    "natacion",
    "relajacion",
    "masajes",
    "pilates",
    "ciclismo",
    "aerobicos",
    "baile_y_zumba",
    "estiramiento",
    "ejercicios_de_agilidad",
    "ejercicios_de_movilidad_articular",
    "mediticion",
    "ejercicios_de_respiracion",
    "tecnicas_de_mindfulness",
  ];
  return checkboxNames.map((checkbox, i) => ({
    name: checkbox, // required
    type: "checkbox", // required
    label: checkbox,
    defaultValue: false,
  }));
};

export const PersonalsTrainers: CollectionConfig = {
  slug: "entrenadores-personales",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "trainerImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "description",
      type: "text",
      maxLength: 300,
      required: true,
    },
    {
      name: "mainInformation",
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
          name: "description",
          type: "richText",
          required: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "secondTrainerImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "video",
      type: "upload",
      relationTo: "videos",
      required: true,
    },
    {
      name: "skills",
      type: "group",
      fields: checkboxes(),
    },
    {
      name: "logros",
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
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "redes",
      type: "group",
      fields: [
        {
          name: "whatsApp",
          type: "text",
          minLength: 10,
          required: true,
        },
        {
          name: "instagram",
          type: "text",
          required: true,
        },
        {
          name: "correo",
          type: "email",
          required: true,
        },
      ],
    },
  ],
  access: {
    read: () => true,
  },
};
