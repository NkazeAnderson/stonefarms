export type StoryBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] };

export type Story = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  video: string;
  content: StoryBlock[];
};

export const stories: Story[] = [
  {
    slug: "farmers-voices-real-experiences",
    title:
      "Farmers' Voices, Real Experiences: The Impact of STONEFARMS Organic Liquid Fertilisers",
    date: "2026-11-06",
    excerpt:
      "During our Farmer Empowerment Conference, farmers shared their experiences and testimonials on the use of STONEFARMS organic liquid fertilisers.",
    video: "/videos/WhatsApp%20Video%202026-11-06%20at%208.40.31%20AM.mp4",
    content: [
      {
        type: "p",
        text: "At STONEFARMS, we believe that the true measure of agricultural innovation lies not only in the solutions we develop but also in the positive experiences of the farmers who use them.",
      },
      {
        type: "p",
        text: "During our Farmer Empowerment Conference, farmers had the opportunity to share their experiences and testimonials on the use of STONEFARMS organic liquid fertilisers.",
      },
      {
        type: "p",
        text: "Their contributions highlighted the importance of accessible, environmentally responsible agricultural inputs in improving farming practices, promoting soil health and supporting sustainable agricultural production.",
      },
      {
        type: "p",
        text: "These testimonials further strengthen our commitment to promoting agroecological practices, reducing excessive dependence on synthetic agricultural inputs, and equipping farmers with effective, environmentally friendly alternatives.",
      },
      {
        type: "p",
        text: "For us, sustainable agriculture is more than a concept; it is a commitment to transforming farming systems, strengthening rural livelihoods and building resilient agricultural communities.",
      },
      { type: "h", text: "Beyond Products: Empowering Farming Communities" },
      {
        type: "p",
        text: "At STONEFARMS, we believe that agricultural transformation must reach beyond individual farms. This is why we are committed to working with farmers' associations, cooperatives, community-based organisations, development partners and other stakeholders to promote sustainable agricultural practices.",
      },
      {
        type: "p",
        text: "Through partnerships, farmer empowerment programmes and community-based training initiatives, we seek to extend practical agroecological knowledge and sustainable agricultural solutions to more farming communities.",
      },
      { type: "h", text: "Partner With STONEFARMS!" },
      {
        type: "p",
        text: "Are you a farmer, farmers' association, cooperative, NGO, development organisation or institution interested in promoting sustainable agriculture?",
      },
      { type: "p", text: "We invite you to connect with us." },
      { type: "p", text: "Whether you are interested in:" },
      {
        type: "ul",
        items: [
          "Partnering with us to promote sustainable agricultural solutions.",
          "Accessing our organic liquid fertilisers and other agroecological products.",
          "Organising practical agricultural training in your community.",
          "Empowering farmers through agroecology and climate-smart agricultural practices.",
          "Collaborating on agricultural development and community empowerment projects.",
        ],
      },
      { type: "p", text: "STONEFARMS is ready to work with you!" },
      {
        type: "p",
        text: "Contact our team today to explore partnership opportunities, request community-based agricultural training or learn more about our products and services.",
      },
      {
        type: "p",
        text: "Together, we can build healthier soils, stronger farming communities and more sustainable food systems.",
      },
    ],
  },
];

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);

export const formatStoryDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
