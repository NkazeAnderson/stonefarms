type Service = { title: string; image: string; description: string[] };

type SDG = {
  image: string;
  actions: string[];
};

type Testimonial = {
  profilePic?: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  text: string;
  name: string;
  job: string;
};
