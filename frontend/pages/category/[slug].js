import React, { useEffect, useState } from "react"
import { fetchDataFromApi } from "@/utils/api"
import useSWR from "swr"
import { useRouter } from "next/router"

import { Wrapper, ProductCard } from "@/components"

const Category = ({ category, products, slug }) => {
  const { data, error, isLoading } = useSWR(`/api/products?populate=*&[filters][category][slug][$eq]=${slug}`, fetchDataFromApi, {fallbackData: products,})

  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {category?.data?.[0]?.attributes?.name}
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-14 px-5 md:px-0">
          {data?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}

        </div>
      </Wrapper>
    </div>
  )
}

export default Category

export async function getStaticPaths() {
  const category = await fetchDataFromApi("/api/categories?populate=*");
  const paths = category?.data?.map((c) => ({
    params: {
      slug: c.attributes.slug,
    }
  }))

  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({ params: { slug } }) {
  const category = await fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`)
  const products = await fetchDataFromApi(`/api/products?populate=*&[filters][category][slug][$eq]=${slug}`)

  return {
    props: {
      category,
      products,
      slug,
    }
  }
}