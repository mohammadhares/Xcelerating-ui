import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | XCELERAT.ING",
  description: "Simplifying Your Journey Maximizing Your Savings",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Blogs"
        description="Stay informed and inspired with Our Latest Blogs, your go-to source for insightful articles on industry trends, expert insights, and practical tips for growth."
      />
      <section className="pb-[120px] pt-[120px]" style={{ marginTop: '-100px'}}>
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
