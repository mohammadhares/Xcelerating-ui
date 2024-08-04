"use client"

import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("County Government");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className=" mx-auto flex flex-wrap">
          <div className="w-full mx-auto px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              {/* <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Reach Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p> */}
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="lastname"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your Phone"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  {/* the radio button */}
                  {/* <div className="mb-4 flex items-center">
                    <input
                      id="county-government"
                      type="radio"
                      value="County Government"
                      name="inline-radio-group"
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      checked={selectedOption === "County Government"}
                      onChange={handleOptionChange}
                    />
                    <label
                      htmlFor="county-government"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      County Government
                    </label>
                  </div>

                  <div className="mb-4 flex items-center">
                    <input
                      id="higher-education"
                      type="radio"
                      value="Higher Education"
                      name="option"
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-primary focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary"
                      checked={selectedOption === "Higher Education"}
                      onChange={handleOptionChange}
                    />
                    <label
                      htmlFor="higher-education"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Higher Education
                    </label>
                  </div> */}

                  <div className="mb-4 ml-4">
                    <p className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Select Option:
                    </p>

                    <div className="mb-4 flex items-center">
                      <input
                        id="county-government"
                        type="radio"
                        value="County Government"
                        name="default-radio"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:outline-none focus:ring-0 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        checked={selectedOption === "County Government"}
                        onChange={handleOptionChange}
                      />
                      <label
                        htmlFor="county-government"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        County Government
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="higher-education"
                        type="radio"
                        value="Higher Education"
                        name="default-radio"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:outline-none focus:ring-0 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        checked={selectedOption === "Higher Education"}
                        onChange={handleOptionChange}
                      />
                      <label
                        htmlFor="higher-education"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Higher Education
                      </label>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/60 dark:shadow-submit-dark">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
