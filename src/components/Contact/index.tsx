"use client"

import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { BASE_URL } from "@/config/config";
import { toast } from "react-toastify";

const Contact = () => {

  const [loading , setLoading] = useState(false)
  const [subject, setSubject] = useState('COUNTY_GOVERNMENT')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const storeContact = async  (data: FieldValues) => {
    setLoading(true)
    await axios.post(`${BASE_URL}/api/v1/contact`, {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
      description: data.description,
      subject: subject
    })
      .then(() => {
        toast.success('Your message sent successfully')
        reset()
      })
      .catch(() => toast.error('There was an error please try again'))
      setLoading(false)
  }


  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className=" mx-auto flex flex-wrap">
          <div className="w-full mx-auto px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s">
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your firstname"
                        {...register("firstname", { required: true })}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors?.firstname && <div className="text-xs text-red-600 mt-2"> Firstname is required</div>}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="lastname"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your lastname"
                        {...register("lastname", { required: true })}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors?.lastname && <div className="text-xs text-red-600 mt-2"> Lastname is required</div>}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", { required: true })}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors?.email && <div className="text-xs text-red-600 mt-2"> Email is required</div>}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your Phone"
                        {...register("phone", { required: true })}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors?.phone && <div className="text-xs text-red-600 mt-2"> Phone is required</div>}
                    </div>
                  </div>

                  <div className="mb-4 ml-4">
                    <p className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Subject :
                    </p>

                    <div className="mb-4 flex items-center ml-10">
                      <input
                        id="county-government"
                        type="radio"
                        value={subject}
                        name="default-radio"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:outline-none focus:ring-0 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        onChange={() => setSubject('COUNTY_GOVERNMENT')}
                        checked={subject === 'COUNTY_GOVERNMENT'}
                      />
                      <label
                        htmlFor="county-government"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        County Government
                      </label>
                    </div>

                    <div className="flex items-center ml-10">
                      <input
                        id="higher-education"
                        type="radio"
                        value={subject}
                        name="default-radio"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:outline-none focus:ring-0 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        onChange={() => setSubject('HIGHER_EDUCATION')}
                        checked={subject === 'HIGHER_EDUCATION'}
                      />
                      <label
                        htmlFor="higher-education"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Higher Education
                      </label>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        {...register("description", { required: true })}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                       {errors?.description && <div className="text-xs text-red-600 mt-2"> Message is required</div>}
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button 
                      disabled={loading}
                      onClick={handleSubmit(storeContact)} className="rounded-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/60 dark:shadow-submit-dark">
                      {loading ? 'Loading...' : 'Submit'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
