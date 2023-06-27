import Image from 'next/image'
import React, { useState, useEffect } from "react"
import { HeroBanner, ProductCard, Wrapper } from "@/components"
import { fetchDataFromApi } from "@/utils/api"

export default function Home() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async() => {
    const {data} = await fetchDataFromApi('/api/products')
    setData(data)
  }
  const productCards = Array.from(Array(40), (_, index) => (<ProductCard key={index} condition={(index % 3) + 1} />))
  return (
    <>
      <HeroBanner/>
      <h1 className="text-black">{data?.[0]?.attributes.name}</h1>
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] text-black">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Simplified Shopping Bliss
          </div>
          <div className="text-md md:text-xl">
            Experience effortless browsing and seamless purchases on our meticulously designed website, ensuring a comfortable and enjoyable online shopping journey.
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-14 px-5 md:px-0 justify-center">
          {productCards}
        </div>
      </Wrapper>
    </>
  )
}
