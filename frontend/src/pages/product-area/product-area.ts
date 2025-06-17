export type Article = {
  id: number
  shortDescription: string
  price: number
  unit: string
  pricePerUnitText: string
  image: string
}

export type Product = {
  id: number
  brandName: string
  name: string
  descriptionText?: string
  articles: Article[]
}

export type ProductList = Product[]