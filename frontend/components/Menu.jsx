import React from 'react'
import Link from 'next/link'
import { BsChevronDown } from "react-icons/bs"
import { motion } from "framer-motion"

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", url: "/category", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" }
]


const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li className='cursor-pointer flex items-center gap-2 relative hover:underline' onMouseEnter={() => setShowCatMenu(true)} onMouseLeave={() => setShowCatMenu(false)}>
                {item.name}
                <BsChevronDown size={14}/>
                {showCatMenu && (
                  <motion.ul
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                       transition={{ duration: 0.3 }}
                      className='bg-white absolute top-6 left-0 min-w-[180px] px-1 text-black shadow-lg'>
                    {categories?.map(({ attributes: c, id }) => {
                      return (
                        <Link key={id} href={`/category/${c.slug}`} onClick={() => setShowCatMenu(false)}>
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-sky-50 transition-all duration-200 rounded-md">
                            {c.name}
                            <span className="opacity-50 text-sm">
                              {`(${c.products.data.length})`}
                            </span>
                          </li>
                        </Link>
                      )
                    })}
                  </motion.ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer hover:underline">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        )
      })}
    </ul>
  )
}

export default Menu