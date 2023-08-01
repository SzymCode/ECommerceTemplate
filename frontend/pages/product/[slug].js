import React, { useState } from "react"
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io"
import ReactMarkdown from "react-markdown"
import { useSelector, useDispatch } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { motion } from "framer-motion"

import { addToCart } from "@/store/cartSlice"
import { addToWishlist, removeFromWishlist } from "@/store/wishlistSlice"

import { ProductDetailsCarousel, RelatedProducts, Wrapper } from "@/components"
import { fetchDataFromApi } from "@/utils/api"

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState()
  const [showError, setShowError] = useState(false)
  const dispatch = useDispatch()
  const p = product?.data?.[0]?.attributes
  const [canAddToCart, setCanAddToCart] = useState(true)
  const [isInWishlist, setIsInWishlist] = useState(false)

  const addToCartWithDelay = () => {
    if (canAddToCart) {
      dispatch(
        addToCart({
          ...product?.data?.[0],
          oneQuantityPrice: p.price
        })
      )
      notify("Success. Check your cart!")
      setCanAddToCart(false)
      setTimeout(() => {
        setCanAddToCart(true)
      }, 2000)
    }
  }

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      dispatch(
        addToWishlist({
          ...product?.data?.[0],
          oneQuantityPrice: p.price
        })
      )
      setIsInWishlist(true)
      notify("Added to Wishlist!")
    } else {
      dispatch(removeFromWishlist({
        ...product?.data?.[0],
        oneQuantityPrice: p.price
      }))
      setIsInWishlist(false)
      notify("Removed from Wishlist!")
    }
  }

  const notify = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 1400,
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
      <ToastContainer limit={5} />
      <Wrapper>
        <motion.div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}>
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
                <p className="text-base font-medium line-through">
                  {p.original_price}zł
                </p>
              )}
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-5">
              incl. of taxes
            </div>
            <>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-14">{p.description}</div>
            </>

            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium active:scale-95 mb-3 hover:opacity-75 transition-all duration-300" onClick={addToCartWithDelay}>
              Add to Cart
            </button>

            <button
              className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
              onClick={handleAddToWishlist}
            >
              Wishlist
              {isInWishlist ? (
                <IoMdHeart className="text-red-500" size={20} />
              ) : (
                <IoMdHeartEmpty size={20} />
              )}
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
