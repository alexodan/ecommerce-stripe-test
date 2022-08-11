import { useState } from 'react'
import { Product, ProductCart } from '../types'

export default function useCart() {
  const [cart, setCart] = useState<ProductCart[]>([])

  const addToCart = (product: Product) => {
    const newCart = [...cart, { ...product, quantity: 1 }]
    setCart(newCart)
  }

  const subtotal = cart.reduce(
    (accumulator, p) => accumulator + parseInt(p.price) * p.quantity,
    0
  )

  return {
    cartItems: cart,
    subtotal,
    addToCart,
  }
}
