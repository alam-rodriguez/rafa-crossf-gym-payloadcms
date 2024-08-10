import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
// import {Cards} from './collections/Cards'
import { Media } from "./collections/media";
// import { MainInformation } from './collections/MainInformation'
import MainInformation from "./blogals/MainInformation";
import Cards from "./blogals/Cards";
import ComodidadesPage from "./blogals/pages/beneficios/ComodidadesPage";
import LimpiezaYSeguridadPage from "./blogals/pages/beneficios/LimpiezaYSeguridadPage";
import { PersonalsTrainers } from "./collections/PersonalsTrainers";
import CasosDeExitos from "./blogals/pages/beneficios/CasosDeExitos";
import blogsYNoticias from "./blogals/pages/connect/blogsYNoticias";
import { Videos } from "./collections/videos";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  // collections: [Users],
  // globals: [],
  collections: [Users, Media, Videos, PersonalsTrainers],
  globals: [MainInformation, Cards, ComodidadesPage, LimpiezaYSeguridadPage, CasosDeExitos, blogsYNoticias],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
