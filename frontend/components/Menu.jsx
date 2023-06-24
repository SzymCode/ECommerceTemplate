import React from 'react'
import Link from 'next/link'
import { BsChevronDown } from "react-icons/bs"


const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", url: "/category", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" }
]

const subMenuData = [
  { id: 1, name: "Category1", doc_count: 10 },
  { id: 2, name: "Category2", doc_count: 20 },
  { id: 3, name: "Category3", doc_count: 30 },
  { id: 4, name: "Category4", doc_count: 40 }
]
const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li className='cursor-pointer flex items-center gap-2 relative' onMouseEnter={() => setShowCatMenu(true)} onMouseLeave={() => setShowCatMenu(false)}>
                {item.name}
                <BsChevronDown size={14}/>
                {showCatMenu && (
                  <ul className='bg-white absolute top-6 left-0 min-w-[180px] px-1 text-black shadow-lg'>
                    {subMenuData.map((submenu) => {
                      return (
                        <Link key={submenu.id} href={`/category/${submenu.name}`}>
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.05] rounded-md">
                            {submenu.name}
                            <span className="opacity-50 text-sm">
                              {submenu.doc_count}
                            </span>
                          </li>
                        </Link>
                      )
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
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