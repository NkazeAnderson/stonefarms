export type NavLink = {
  text: string;
  link: string;
  children?: { text: string; link: string }[];
};

export const naveLinks: NavLink[] = [
  { text: "home", link: "/" },
  { text: "about us", link: "/about-us" },
  {
    text: "blogs",
    link: "/blog",
    children: [
      { text: "Blogs", link: "/blog" },
      { text: "Projects", link: "/blog?category=projects" },
      { text: "Stories & Impact", link: "/stories" },
    ],
  },
  { text: "contact us", link: "/contact-us" },
  { text: "gallery", link: "/gallery" },
];
