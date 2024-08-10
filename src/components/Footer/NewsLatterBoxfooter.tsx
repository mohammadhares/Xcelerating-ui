"use client";

import { BASE_URL } from "@/config/config";
import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";


const NewsLatterBoxfooter = () => {

  const [loading , setLoading] = useState(false)

  const {
    register,
    handleSubmit, setValue,
    formState: { errors },
    reset
  } = useForm()

  const storeSubscribe = async  (data: FieldValues) => {
    setLoading(true)
    await axios.post(`${BASE_URL}/api/v1/subscribe`, {
      email: data.email
    })
      .then(() => {
        toast.success('Your subscribed successfully')
        reset()
      })
      .catch((error) => {        
        if(error?.response?.data?.email){
          toast.error(error?.response?.data?.email[0])
        }else{
          toast.error('Something went wrong, please try again later')
        }
      })
      setLoading(false)
      setValue('email', '')
  }


  return (
    <div className="relative z-10 rounded-sm bg-white px-4 dark:bg-gray-dark sm:px-8 sm:py-2">
      <h3 className="mb-4 text-xl font-bold leading-tight text-black dark:text-white">
        Subscribe for Updates
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
        Get the latest insights, trends, and exclusive content.
      </p>
      <div>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Enter your email"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
         {errors?.email && <div className="text-xs text-red-600 mt-2"> Email is required</div>}
        <button
          disabled={loading}
          onClick={handleSubmit(storeSubscribe)}
          className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/60 dark:shadow-submit-dark">
          {loading ? 'Loading...' : 'Submit'}
          </button>
      </div>
    </div>
  )
}

export default NewsLatterBoxfooter
