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
      fields: [
        { name: "cardio", type: "checkbox", label: "cardio", defaultValue: false },
        { name: "pesas", type: "checkbox", label: "pesas", defaultValue: false },
        { name: "mente_y_cuerpo", type: "checkbox", label: "mente_y_cuerpo", defaultValue: false },
        { name: "yoga", type: "checkbox", label: "yoga", defaultValue: false },
        { name: "flexibilidad", type: "checkbox", label: "flexibilidad", defaultValue: false },
        { name: "deportes", type: "checkbox", label: "deportes", defaultValue: false },
        { name: "natacion", type: "checkbox", label: "natacion", defaultValue: false },
        { name: "relajacion", type: "checkbox", label: "relajacion", defaultValue: false },
        { name: "masajes", type: "checkbox", label: "masajes", defaultValue: false },
        { name: "pilates", type: "checkbox", label: "pilates", defaultValue: false },
        { name: "ciclismo", type: "checkbox", label: "ciclismo", defaultValue: false },
        { name: "aerobicos", type: "checkbox", label: "aerobicos", defaultValue: false },
        { name: "baile_y_zumba", type: "checkbox", label: "baile_y_zumba", defaultValue: false },
        { name: "estiramiento", type: "checkbox", label: "estiramiento", defaultValue: false },
        { name: "ejercicios_de_agilidad", type: "checkbox", label: "ejercicios_de_agilidad", defaultValue: false },
        { name: "ejercicios_de_movilidad_articular", type: "checkbox", label: "ejercicios_de_movilidad_articular", defaultValue: false },
        { name: "mediticion", type: "checkbox", label: "mediticion", defaultValue: false },
        { name: "ejercicios_de_respiracion", type: "checkbox", label: "ejercicios_de_respiracion", defaultValue: false },
        { name: "tecnicas_de_mindfulness", type: "checkbox", label: "tecnicas_de_mindfulness", defaultValue: false },
      ],
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
