import SectionOne from "@/components/Governament/SectionOne";
import SectionTwo from "@/components/Governament/Sectiontwo";
import SectionThree from "@/components/Governament/SectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";


import { Metadata } from "next";
import Features from "@/components/Governament/Features";

export const metadata: Metadata = {
  title: "County Government | XCELERAT.ING",
  description: "Empowering Communities, Simplifying Solutions",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="County Government"
        description="In today's fast-paced world, the need for efficiency and accessibility in government services has never been more critical. Our innovative permit application platform is designed to revolutionize the way county governments manage permit requests, bringing unparalleled ease and efficiency to both citizens and staff."
      />
      <Features />
    </>
  );
};

export default AboutPage;
