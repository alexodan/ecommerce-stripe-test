import React from 'react'
import useCart from '../hooks/useCart'

export default function Cart() {
  const { cartItems } = useCart()
  console.log('cartItems:', cartItems)

  const subtotal = cartItems.reduce(
    (accumulator, p) => accumulator + parseInt(p.price) * p.quantity,
    0
  )

  return (
    <div className="flex p-2 mt-4 rounded-md bg-indigo-400 text-white">
      <div className="mr-3">Cart</div>
      <p>${subtotal}</p>
    </div>
  )
}
