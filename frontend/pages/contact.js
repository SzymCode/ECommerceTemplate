import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from "framer-motion"

import { Wrapper } from '@/components'


export const ContactUs = () => {
  const form = useRef()

  const notify = () => {
    toast.success("Your message has been sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_5r0d4hq', 'template_uqipzpd', form.current, 'OEvK-T9_LSzRwvEo9')
      .then((result) => {
          console.log(result.text)
          notify();
      }, (error) => {
          console.log(error.text)
          toast.error("An error occurred. Please try again.", {
            position: toast.POSITION.BOTTOM_CENTER
          })
      })
  }

  return (
    <Wrapper className="grid-cols-1 max-w-[600px] pt-12 pb-32">
      <motion.form ref={form} onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-1 gap-6 bg-white p-6 rounded-md">
        <h1 className="text-7xl text-center">
            Contact Us
        </h1>
        <label className="font-semibold -mb-5">
            Name
        </label>
        <input required type="text" name="from_name" className="border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <label className="font-semibold -mb-5">
            Topic
        </label>
        <input required type="text" name="topic" className="border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <label className="font-semibold -mb-5">
            Message
        </label>
        <textarea required name="message" className="mb-4 border border-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-40"/>
        <button type="submit" className="w-full py-4 rounded-full bg-black text-white text-lg font-medium active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center transition-all duration-300">
          Send Message
        </button>
      </motion.form>
      <ToastContainer />
    </Wrapper>
  )
}

export default ContactUs
