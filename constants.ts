import { TeamMemberT } from "./components/TeamMemberCard";

export const services: Service[] = [
  {
    title: "Agricultural Consultancy",
    image: "/consultancy.jpg",
    description: [
      "Assessment and planning",
      "Technical advice",
      "Market analysis and development",
      "Financial and risk management",
      "Research and development",
      "Environmental and regulatory compliance",
    ],
  },
  {
    title: "FEASIBILTY STUDY",
    image: "/feasibility.jpg",
    description: [
      "Executive summary",
      "Project description",
      "Market analysis",
      "Technical feasibility",
      "Financial analysis",
      "Legal and regulatory compliance",
    ],
  },
  {
    title: "SOIL ANALYSIS",
    image: "/soil-analysis.jpg",
    description: [
      "Sample collection",
      "Physical properties analysis",
      "Chemical property analysis",
      "Biological property analysis",
      "Analysis report",
    ],
  },
  {
    title: "ESTIMATIVE PLAN",
    image: "/estimative-plan.png",
    description: [
      "Project overview",
      "Cost categories",
      "Detailed cost breakdown",
      "Financial projections",
      "Assumptions and risk",
      "Summary and recommendation",
    ],
  },
  {
    title: "PROJECT CONCEPTION AND MOUNTING",
    image: "/conception.jpg",
    description: [
      "Idea generation",
      "Initial research",
      "Project definition",
      "Concept development",
      "Preliminary cost estimates",
    ],
  },
  {
    title: "BUSINESS PLAN",
    image: "/business-plan.jpg",
    description: [
      "Executive summary",
      "Farm description",
      "Market analysis",
      "Organization and management",
      "Products and service",
    ],
  },
  {
    title: "PLANT QUALITY CONTROL",
    image: "/quality-control.jpg",
    description: [
      "Quality standards and specifications",
      "Inspection and testing",
      "Monitoring and documentation",
      "Corrective actions and problem resolution",
      "Quality assurance system",
    ],
  },
  {
    title: "DESIGN OF IRRIGATION SYSTEMS",
    image: "/irrigation.jpg",
    description: [
      "Assessment and planning",
      "System design",
      "Water source and supply",
      "Distribution system",
      "System layout and design",
      "Installation and testing",
    ],
  },
  {
    title: "SURVEY AND MAPPING",
    image: "/Survey-Services.jpg",
    description: [
      "Survey planning",
      "Data collection",
      "Data processing surveying methods",
      "Reporting",
      "Map design",
      "Map production",
    ],
  },
];

export const sdgs: SDG[] = [
  {
    image: "/sdg/E_SDG_Icons-01.jpg",
    actions: [
      "Empowering farmers economically",
      "Job creation",
      "Promoting financial inclusion",
    ],
  },
  {
    image: "/sdg/E_SDG_Icons-02.jpg",
    actions: [
      "Increased food production",
      "Agroecological farming",
      "Garden projects",
    ],
  },
  {
    image: "/sdg/E_SDG_Icons-03.jpg",
    actions: [
      "Organic farming for healthier life",
      "Training on sustainable nutrition",
      "Climate resilence for well-being",
    ],
  },
  {
    image: "/sdg/E_SDG_Icons-04.jpg",
    actions: [
      "Capacity building for youth and farmers",
      "Vocational training",
      "Educational outreach",
    ],
  },
  {
    image: "/sdg/E_SDG_Icons-05.jpg",
    actions: [
      "Empowering women with agriculture",
      "Including women leadership",
      "Encouraging women in farming",
    ],
  },
  {
    image: "/sdg/E_SDG_Icons-06.jpg",
    actions: [
      "Promoting water efficient irrigation",
      "Minimum water contamination with organic fertilizers",
      "Community awareness programs",
    ],
  },
  {
    image: "/sdg/E_SDG_Icons-11.jpg",
    actions: [
      "Greenhouse farming",
      "Urban farming initiative",
      "Agroforestry practices",
    ],
  },
  {
    image: "/sdg/E_SDG_Icons-12.jpg",
    actions: [
      "Reduced food waste",
      "Promote local organic products",
      "Promote local food supply systems",
    ],
  },
  {
    image: "/sdg/E_SDG_Icons-13.jpg",
    actions: [
      "Climare smart agriculture",
      "Tree planting",
      "Advocacy and awareness",
    ],
  },
  {
    image: "/sdg/E_SDG_Icons-15.jpg",
    actions: [
      "Biodiversity conservation",
      "Protection of endangered species",
      "Sustainable land management",
    ],
  },
  {
    image: "/sdg/E_SDG_Icons-17.jpg",
    actions: [
      "Impactful collaborations and partnerships",
      "Youth engagement",
      "Policy engagement",
    ],
  },
];

export const whyWorkWithUs: {
  heading: string;
  description: string;
  image: string;
  backgroundColor: string;
}[] = [
  {
    heading: "Sustainable Impact",
    description:
      "Partner with us to drive meaningful change. Our initiatives focus on long-term environmental benefits and community development, creating lasting positive outcomes for food security and biodiversity.",
    image: "/rio.jpg",
    backgroundColor: "#F8ABCF",
  },

  {
    heading: "Scalable Solutions",
    description:
      "From local farms to regional programs, we have the expertise and infrastructure to implement sustainable agricultural solutions at any scale, ensuring quality and environmental standards are maintained.",
    image: "/lg-scale-pg.jpg",
    backgroundColor: "#ABD7F8",
  },
  {
    heading: "Transparent Operations",
    description:
      "We prioritize accountability and openness. Through our advanced monitoring systems, we provide real-time insights and precise resource management for all our collaborative projects.",
    image: "/pg-management-tools.jpg",
    backgroundColor: "#F8C4AB",
  },
  {
    heading: "Expert Engineering",
    description:
      "Innovation through expertise. Our certified engineers integrate advanced soil science and irrigation technology to optimize land health and productivity sustainably.",
    image: "/certified-eng.jpg",
    backgroundColor: "#ABF8EB",
  },
];

export const testimonials: Testimonial[] = [
  {
    profilePic: "/drazz.jpeg",
    text: "STONEFARMS has been one of the most innovative and pace-setting outfits in the Agro space. Their commitment to, sustainability, excellence and organic practices are worthy of emulation. I highly recommend them.",
    rating: 5,
    name: "Drazz Francios",
    job: "Community Farmer Leader",
  },
  {
    profilePic: "/fotang_chefor.jpeg",
    text: "StoneFarms is advancing climate-smart agriculture (CSA) in Dschang, Cameroon, by partnering with universities to enhance sustainable farming. Through hands-on training at the University of Dschang and Foyamghem Institute, students learn eco-friendly agricultural practices while developing fruit tree plots and nutritional gardens.",
    rating: 5,
    name: "Dr. Fotang Chefor",
    job: "Professor",
  },
  {
    profilePic: "/fomujong_derrick.jpeg",
    text: "Since its Inception, STONEFARMS has always pride itself on Socioeconomic and Environmental Sustainability. This is evident in the impact they’ve had on the communities touched. They have my highest recommendation without reservation. Think Sustainability, think STONEFARMS.",
    rating: 5,
    name: "Fomujong Derrick",
    job: "PhD Researcher",
  },
];


export const team: TeamMemberT[] = [
  {
    name: "Egr. Nkemofa Godwill F.",
    title: "Director / Agronomist and Climate Advocate",
    profilePic: "/team/Nkemofa_Godwill.png",
  },
  {
    name: "Egr. Ali Nfoh H. T.",
    title: "Communication Manager / Agricultural Engineer",
    profilePic: "/team/Ali_Nfoh_Hensel.png",
  },
  {
    name: "Dr. Ndifon Dimanche Kengah",
    title: "Integrated Rural Development Expert",
    profilePic: "/team/Ndifon_Dimanche.png",
  },
  {
    name: "Egr. MENGETOH JANIVER P.",
    title: "Project Manager / Agricultural Engineer",
    profilePic: "/team/Mengetoh_Promise_Jeniver.png",
  },
  {
    name: "Egr. Bongkiyoung Manet",
    title: "Program manager / Agricultural Engineer",
    profilePic: "/team/Bongkiyoung_Manet.png",
  },
  {
    name: "Engr. Ngoeko Tefonou Bernadette Sorele",
    title: "Development Expert Agricultural engineer",
    profilePic: "/team/Ngoeko_Tefonou.png",
  },
  {
    name: "Dr. KAJOH Julius BOYAH",
    title: "Development Expert Plant physiologist/Biotechnologist",
    profilePic: "/team/KAJOH_Julius.jpg",
  },
  {
    name: "Madame Kanjoh Peninnah Mbuli",
    title: "Secretary. Nutritionist",
    profilePic: "/team/Kanjoh_Peninnah.png",
  },
  {
    name: "Mr Wirkom Bertus",
    title: "Vice Secretary. Climate Expert",
    profilePic: "/team/Wirkom_Bertus.png",
  },
  {
    name: "Ndi Shey Reuben",
    title: "Media and Graphic Designer",
    profilePic: "/team/Shey_Reuben.jpg",
  },
];