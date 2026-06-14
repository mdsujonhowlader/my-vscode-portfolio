// data/fileTreeData.js
export const fileTreeData = [
  {
    id: 1,
    name: "src",
    type: "folder",
    children: [
      {
        id: 2,
        name: "pages",
        type: "folder",
        children: [
          {
            id: 3,
            name: "Home.jsx",
            type: "file",
            to: "/",
            icon: "react",
          },
          {
            id: 4,
            name: "About.jsx",
            type: "file",
            to: "/about",
            icon: "react",
          },
        ],
      },
      {
        id: 5,
        name: "components",
        type: "folder",
        children: [
          {
            id: 6,
            name: "Contact.jsx",
            type: "file",
            to: "/contact",
            icon: "react",
          },
          {
            id: 7,
            name: "Projects.jsx",
            type: "file",
            to: "/projects",
            icon: "react",
          },
          // {
          //   id: 11,
          //   name: "Article.jsx",
          //   type: "file",
          //   to: "/article",
          //   icon: "json",
          // },
          {
            id: 12,
            name: "github.md",
            type: "file",
            to: "/github",
            icon: "md",
          },
          {
            id: 13,
            name: "blogs.json",
            type: "file",
            to: "/blogs",
            icon: "json",
          },
        ],
      },
      { id: 8, name: "global.css", type: "file", to: "/", icon: "react" },
    ],
  },
  { id: 9, name: "package.json", type: "file", to: "/package", icon: "react" },
  { id: 10, name: "README.md", type: "file", to: "/readme", icon: "react" },
];
