import React from 'react'
import products from '../../data/products.json'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Product } from '../../types'

export type Props = {
  product: Product
}

export default function ProductDetailPage({ product }: Props) {
  return (
    <div className="bg-white max-w-screen-lg mx-auto">
      <div className="">
        <h1 className="text-3xl">{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map(p => ({ params: { productId: p.id } }))
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params } = {}) => {
  const product = products.find(p => p.id === params?.productId)
  return {
    props: {
      product,
    },
  }
}
