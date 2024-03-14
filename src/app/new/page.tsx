import SectionOne from "@/components/New/SectionOne";
import SectionTwo from "@/components/New/Sectiontwo";
import SectionThree from "@/components/New/SectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="County Government"
        description="Empowering Communities, Simplifying Solutions.In today's fast-paced world, the need for efficiency and accessibility in government services has never been more critical. Our innovative permit application platform is designed to revolutionize the way county governments manage permit requests, bringing unparalleled ease and efficiency to both citizens and staff."
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default AboutPage;
