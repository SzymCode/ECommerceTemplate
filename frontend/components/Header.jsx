import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from "react-redux"

import { IoMdHeartEmpty } from "react-icons/io"
import { BsCart } from "react-icons/bs"
import { BiMenuAltRight } from "react-icons/bi"
import { VscChromeClose } from "react-icons/vsc"

import { Menu, MenuMobile, Wrapper } from "@/components"
import { fetchDataFromApi } from "@/utils/api"

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showCatMenu, setShowCatMenu] = useState(false)
  const [show, setShow] = useState("translate-y-0")
  const [categories, setCategories] = useState(null)
  const { cartItems } = useSelector((state) => state.cart)
  const { wishlistItems } = useSelector((state) => state.wishlist)

  useEffect(() => {
    fetchCategories()
  }, [])

  async function fetchCategories() {
    const { data } = await fetchDataFromApi("/api/categories?populate=*")
    setCategories(data)
  }

  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width="260" height="50"/>
        </Link>

        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} categories={categories}/>
        {mobileMenu && (
          <MenuMobile showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu} categories={categories}/>
        )}


        <div className="flex items-center gap-2 text-black">

          <Link href="/wishlist">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-red-500/[0.2] transform duration-300 ease-linear cursor-pointer relative">
              <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
              {wishlistItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center ">
                  {wishlistItems.reduce((total, item) => total + item.quantity, 0)}
                </div>
              )}
            </div>
          </Link>

          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-yellow-500/[0.2] duration-300 cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center ">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </div>
              )}
            </div>
          </Link>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center duration-200 hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose className="text-[16px]" onClick={() => setMobileMenu(false)} />
            ) : (
              <BiMenuAltRight className="text-[20px]" onClick={() => setMobileMenu(true)} />
            )}
          </div>

        </div>
      </Wrapper>
    </header>
  )
}