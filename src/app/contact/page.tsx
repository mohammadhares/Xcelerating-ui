import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Our support team will get back to you ASAP via email ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Our support team will get back to you ASAP via email."
      />
      <div style={{ marginTop: '-100px' }}>
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
