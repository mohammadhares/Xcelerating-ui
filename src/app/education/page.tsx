import SectionOne from "@/components/Education/SectionOne";
import SectionThree from "@/components/Education/SectionThree";
import Sectiontwo from "@/components/Education/Sectiontwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Features from "@/components/Education/Features";

export const metadata: Metadata = {
  title: "Higher Education",
  description: "Empowering Academic Excellence with Integrated Solutions.",
}

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Higher Education "
        description="Empowering Academic Excellence with Integrated Solutions."
      />
      <Features />
    </>
  );
};

export default AboutPage;
