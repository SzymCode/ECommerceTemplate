import Link from "next/link"
import React from "react"
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

import { Wrapper } from "@/components"

const Footer = () => {
  return (
    <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          <div className="flex flex-col gap-3 shrink-0">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer hover:underline">
              find a store
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer hover:underline">
              become a partner
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer hover:underline">
              sign up for email
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer hover:underline">
              send us feedback
            </div>
          </div>
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                get help
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-all duration-300">
                Order Status
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-all duration-300">
                Delivery
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-all duration-300">
                Returns
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-all duration-300">
                Payment Options
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-all duration-300">
                Contact Us
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                About ECommerce
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-all duration-300">
                News
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-all duration-300">
                Careers
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-all duration-300">
                Investors
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer transition-all duration-300">
                Sustainability
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          <Link href="https://facebook.com"
                className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black
                transition-all duration-300 hover:bg-[#3b5998] cursor-pointer">
            <FaFacebookF size={20} />
          </Link>
          <Link href="https://twitter.com"
                className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black
                transition-all duration-300 hover:bg-[#1da1f2] cursor-pointer">
            <FaTwitter size={20} />
          </Link>
          <Link href="https://youtube.com"
                className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black
                transition-all duration-300 hover:bg-[#ff0000] cursor-pointer">
            <FaYoutube size={20} />
          </Link>
          <Link href="https://instagram.com"
                className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black
                transition-all duration-300 hover:bg-gradient-to-br from-[#5b51d8] via-[#c13584] to-[#fcaf45] cursor-pointer">
            <FaInstagram size={20} />
          </Link>
        </div>
      </Wrapper>

      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 ECommerce, Inc. All Rights Reserved
        </div>

        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
      </Wrapper>
    </motion.footer>
  )
}

export default Footer