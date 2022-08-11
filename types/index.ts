export type Product = {
  id: string
  name: string
  date_UTC: string
  description: string
  url: string
  price: string
  image: string
}

export type ProductCart = Product & { quantity: number }
