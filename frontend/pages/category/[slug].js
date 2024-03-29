import React, { useEffect, useState } from "react"
import useSWR from "swr"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

import { ProductCard, Wrapper } from "@/components"
import { fetchDataFromApi } from "@/utils/api"

const maxResult = 20

export default function Category({ category, products, slug }) {
  const [pageIndex, setPageIndex] = useState(1)
  const { query } = useRouter()

  useEffect(() => {
    setPageIndex(1)
  }, [query])

  const { data, error, isLoading } = useSWR(`/api/products?populate=*&[filters][category][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`, fetchDataFromApi, {fallbackData: products})

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full md:py-20 relative">
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

        {data?.meta?.pagination?.total > maxResult && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`} disabled={pageIndex === 1} onClick={() => setPageIndex(pageIndex - 1)}>
              Previous
            </button>

            <span className="font-bold">
              {`${pageIndex} of ${data && data?.meta?.pagination.pageCount}`}
            </span>

            <button className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`} disabled={pageIndex === (data && data.meta.pagination.pageCount)} onClick={() => setPageIndex(pageIndex + 1)}>
              Next
            </button>
          </div>
        )}

      </Wrapper>
    </motion.div>
  )
}


export async function getStaticPaths() {
  const category = await fetchDataFromApi("/api/categories?populate=*")
  const paths = category?.data?.map((c) => ({
    params: {
      slug: c.attributes.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}


export async function getStaticProps({ params: { slug } }) {
  const category = await fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`)
  const products = await fetchDataFromApi(`/api/products?populate=*&[filters][category][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`)

  return {
    props: {
      category,
      products,
      slug,
    }
  }
}