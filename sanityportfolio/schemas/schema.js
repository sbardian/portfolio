import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    {
      title: "Projects",
      name: "projects",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Repo URL",
          name: "repoUrl",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "string",
        },
        {
          title: "Demo URL",
          name: "demoUrl",
          type: "string",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "Rank",
          name: "rank",
          type: "number",
        },
        {
          title: "Technologies",
          name: "technologies",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
  ]),
})
