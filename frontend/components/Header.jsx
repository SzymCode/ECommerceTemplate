import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IoMdHeartEmpty } from "react-icons/io"
import { BsCart } from "react-icons/bs"
import { BiMenuAltRight } from "react-icons/bi"
import { VscChromeClose } from "react-icons/vsc"

import Wrapper from "./Wrapper.jsx"
import Menu from "./Menu.jsx"

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showCatMenu, setShowCatMenu] = useState(false)
  const [show, setShow] = useState("translate-y-0")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [categories, setCategories] = useState(null)

  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      <Wrapper className="flex items-center justify-between w-full">
        <Link href="/">
          <Image src="/ecommercetemplate_logo.png" alt="logo" width="260" height="50"/>
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} categories={categories}/>

      </Wrapper>
    </header>
  )
}

export default Header