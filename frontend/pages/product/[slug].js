import React, { useState } from "react"
import { IoMdHeartEmpty } from "react-icons/io"
import ReactMarkdown from "react-markdown"
import { useSelector, useDispatch } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { motion } from "framer-motion"

import { addToCart } from "@/store/cartSlice"
import { ProductDetailsCarousel, RelatedProducts, Wrapper } from "@/components"
import { fetchDataFromApi } from "@/utils/api"



const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState()
  const [showError, setShowError] = useState(false)
  const dispatch = useDispatch()
  const p = product?.data?.[0]?.attributes

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    })
  }

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p.image.data} />
          </div>

          <div className="flex-1 py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p.name}
            </div>
            <div className="flex items-end">

              <p className="mr-2 text-lg font-semibold">
                PLN : {p.price}zł
              </p>
              {p.original_price && (
                <p className="text-base  font-medium line-through">
                  {p.original_price}zł
                </p>
             )}
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-5">
              incl. of taxes
            </div>
            <>
              <div className="text-lg font-bold mb-5">
                Product Details
              </div>
              <div className="markdown text-md mb-14">
                <ReactMarkdown>{p.description}</ReactMarkdown>
              </div>
            </>

            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={ () => { dispatch(addToCart({
                    ...product?.data?.[0],
                    selectedSize,
                    oneQuantityPrice: p.price}))
                    notify()
            }}>
              Add to Cart
            </button>

            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
          </div>
        </motion.div>
        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  )
}

export default ProductDetails

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*")
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(`/api/products?populate=*&filters[slug][$eq]=${slug}`)
  const products = await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$ne]=${slug}`)

  return {
    props: {
      product,
      products
    }
  }
}