import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Technical Excellence Meets Strategic Insight",
    paragraph:"Our developers, engineers, and IT specialists are proficient in the latest technologies and methodologies that underpin our advanced ERP systems. With a deep understanding of the unique challenges faced by our clients, they skillfully weave functionality with innovation to deliver robust, scalable solutions...",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Hakim Mourad",
      image: "/images/blog/author-02.png",
      designation: "Graphic Designer",
    },
    tags: ["Technical"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: " Leadership That Inspires",
    paragraph:"Guiding this talent is a leadership team characterized by its visionary outlook and strategic acumen. Our leaders bring diverse experiences from the realms of technology, public administration, and academia, offering a rich tapestry of insights that shape our company's direction. They foster a culture of continuous learning, collaboration, and excellence, empowering every team member to contribute their best....",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Nabila Chy",
      image: "/images/blog/author-01.png",
      designation: "Content Writer",
    },
    tags: ["Leadership"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Collaboration at Its Core",
    paragraph:
      "Collaboration is the lifeblood of our operations. We believe that the most groundbreaking solutions are born from the synergy of diverse minds working towards a common goal. Our team members, from developers to project managers, work hand-in-hand, ensuring that every project benefits from a multiplicity of perspectives and expertise....",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Jawad Kakar",
      image: "/images/blog/author-03.png",
      designation: "Manager",
    },
    tags: ["Collaboration"],
    publishDate: "2025",
  },
];
export default blogData;
