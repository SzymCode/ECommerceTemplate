import React from 'react'
import { motion } from 'framer-motion'
import { Wrapper } from "@/components"


const AboutPage = () => {
  return (
    <Wrapper className="flex py-20">
      <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          src="https://oex-vcc.com/content/uploads/2021/03/ecommerce-2.png" className="w-80 mr-10"/>
      <div className="block py-10">
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className="text-3xl mb-5">
          ECommerceTemplate
        </motion.p>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            className="max-w-3xl">
          Empower your online business with customizable templates and
          powerful features, designed to help you create stunning e-commerce
          websites and reach new heights in the digital marketplace. Join us today
          and unleash the full potential of your online store with ECommerceTemplate.
        </motion.p>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
