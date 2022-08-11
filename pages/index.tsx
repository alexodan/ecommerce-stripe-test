import React from 'react'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'
import Cart from '../components/Cart'
import Link from 'next/link'
import { Product } from '../types'

export default function HomePage() {
  return (
    <div className="bg-white max-w-screen-lg mx-auto">
      <div className="absolute top-2 right-2">
        <Cart />
      </div>
      <h1 className="text-3xl font-bold underline">Products</h1>
      <ul className="flex mb-4 items-stretch">
        {products.map((product: Product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <li className="w-1/2 m-4 cursor-pointer">
              <ProductCard product={product} />
            </li>
          </Link>
        ))}
      </ul>
      <footer>Copyright @alexodan</footer>
    </div>
  )
}
