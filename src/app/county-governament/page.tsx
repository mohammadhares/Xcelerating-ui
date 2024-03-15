import SectionOne from "@/components/Governament/SectionOne";
import SectionTwo from "@/components/Governament/Sectiontwo";
import SectionThree from "@/components/Governament/SectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";


import { Metadata } from "next";
import Features from "@/components/Governament/Features";

export const metadata: Metadata = {
  title: "County Government",
  description: "Empowering Communities, Simplifying Solutions",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="County Government"
        description="Empowering Communities, Simplifying Solutions."
      />
      <Features />
    </>
  );
};

export default AboutPage;
