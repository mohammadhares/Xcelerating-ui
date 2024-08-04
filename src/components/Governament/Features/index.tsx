import SectionTitle from "./SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          {/* <SectionTitle
            title="County Government"
            paragraph="In today's fast-paced world, the need for efficiency and accessibility in government services has never been more critical. Our innovative permit application platform is designed to revolutionize the way county governments manage permit requests, bringing unparalleled ease and efficiency to both citizens and staff."
            center
          /> */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-1 lg:grid-cols-1">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
