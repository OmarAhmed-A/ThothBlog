import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
    basePath: "/ThothBlog",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "assets",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "datetime",
            name: "date",
            label: "Date",
            ui: {
              timeFormat: "YYYY-MM-DDTHH:mm:ssZ",
            },
          },
          { type: "string", name: "slug", label: "Slug" },
          { type: "string", name: "description", label: "Description" },
          { type: "image", name: "image", label: "image" },
          { type: "string", name: "caption", label: "Caption" },
          { type: "boolean", name: "draft", label: "Draft" },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
// ---
// title: "Exoplanets: Hunting for Earth's Cosmic Cousins"
// date: 2023-07-27T13:03:07+07:00
// slug: /exoplanets-hunting/
// description: Discover the fascinating quest to find exoplanets, distant worlds that may resemble Earth.
// image: images/nasa-Ed2AELHKYBw-unsplash.jpg
// caption: Photo by Nasa on Unsplash
// categories:
//   - astronomy
// tags:
//   - exoplanets
//   - Space
//   - exploration
//   - astronomy
//   - feature
// draft: false
// ---
