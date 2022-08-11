import React from 'react'
import useCart from '../hooks/useCart'
import { Product } from '../types'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { name, description, price, image } = product
  const { addToCart } = useCart()

  const handleClick = (e: any) => {
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div className="shadow-md bg-neutral-50 h-full flex flex-col p-8 items-center justify-around">
      <img className="rounded-full w-32 h-28" src={image} alt={name} />
      <h2 className="text-2xl mt-2">{name}</h2>
      <p className="mt-2">
        <span className="text-4xl">${price}</span> / month
      </p>
      <p className="text-center mt-4">{description}</p>
      <button
        className="button btn p-2 mt-4 rounded-md bg-indigo-600 text-white"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </div>
  )
}
