import React from "react"
import Link from "next/link"
import { BsChevronDown } from "react-icons/bs"
import { motion } from "framer-motion"

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" }
]

function MenuMobile({ showCatMenu, setShowCatMenu, setMobileMenu, categories }) {
  return (
    <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li className="cursor-pointer py-4 px-5 border-b flex flex-col relative" onClick={() => setShowCatMenu(!showCatMenu)}>
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.1 }}
                      className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {categories?.map(({ attributes: c, id }) => {
                      return (
                        <Link key={id} href={`/category/${c.slug}`} onClick={() => { setShowCatMenu(false); setMobileMenu(false) }}>
                          <li className="py-4 px-8 border-t flex justify-between">
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
                <li className="py-4 px-5 border-b">
                  <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                    {item.name}
                  </Link>
                </li>
              )
            }
          </React.Fragment>
        )
      })}
    </motion.ul>
  )
}