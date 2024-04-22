import SingleBlog from "@/components/Team/SingleBlog";
import blogData from "@/components/Team/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import TeamSection from "@/components/Team/TeamSection";

export const metadata: Metadata = {
  title: "Team | XCELERAT.ING",
  description: "Simplifying Your Journey Maximizing Your Savings",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Team"
        description="The Architects of Innovation"
      />
      <TeamSection />
    </>
  );
};

export default Blog;
