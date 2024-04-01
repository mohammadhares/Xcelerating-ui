import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How Digital Permitting Solutions Are Transforming Local Government Services",
    paragraph:"In the landscape of local government services, the permitting process has traditionally been a linchpin of civic engagement and regulatory compliance...",
    image: "../images/blog/blog-01.jpg",
    author: {
      name: "Hakim Mourad",
      image: "https://xcelerating.tlso.com.af/images/blog/author-02.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Challenges of Traditional Permitting Processes",
    paragraph:"The traditional permitting process is notoriously time-consuming. Applicants frequently encounter lengthy wait times, from the initial submission of documents to the final approval, which can span weeks or even months...",
    image: "./images/blog/blog-02.jpg",
    author: {
      name: "Nabila Chy",
      image: "https://xcelerating.tlso.com.af/images/blog/author-01.png",
      designation: "Content Writer",
    },
    tags: ["Technology"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Benefits of Digital Permitting Solutions",
    paragraph:
      "Digital permitting solutions represent a significant leap forward in the way local governments manage their permitting processes. These innovative systems are designed to replace...",
    image: "./images/blog/blog-03.jpg",
    author: {
      name: "Jawad Kakar",
      image: "https://xcelerating.tlso.com.af/images/blog/author-03.png",
      designation: "Manager",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
