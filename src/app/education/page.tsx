import SectionOne from "@/components/Education/SectionOne";
import SectionThree from "@/components/Education/SectionThree";
import Sectiontwo from "@/components/Education/Sectiontwo";
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
        pageName="Higher Education "
        description="Empowering Academic Excellence with Integrated Solutions. In the dynamic realm of higher education, where academic institutions strive to exceed expectations, our Higher Education Enterprise Application stands as a beacon of innovation and efficiency. Tailored to meet the intricate demands of colleges and universities, our application is your all-encompassing solution, designed to unify and streamline the core functions of your institution."
      />
      <SectionOne />
      <Sectiontwo />
      <SectionThree />
    </>
  );
};

export default AboutPage;
