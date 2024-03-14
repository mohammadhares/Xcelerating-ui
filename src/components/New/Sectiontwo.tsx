import Image from "next/image";
import Link from "next/link";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-16">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Building Stronger Communities Together
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our permit application platform is more than just software; it's a commitment to enhancing the lives of citizens and the efficiency of county governments. By simplifying processes and enabling online transactions, we're not just saving time and money; we're paving the way for more responsive, transparent, and engaged local governance.
Join us in embracing the future of county government services. Together, we can build stronger, more connected communities.

                </p>
              </div>
              <div className="mb-12">
                <Link
                  href="/contact"
                  className="rounded-lg bg-primary px-8 py-4 text-base font-semibold
                     text-white duration-300 ease-in-out hover:bg-primary/80">
                  Reach Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
