export type TArticle = {
  id: number
  shortDescription: string
  price: number
  unit: string
  pricePerUnitText: string
  image: string
}

export type TProduct = {
  id: number
  brandName: string
  name: string
  descriptionText?: string
  articles: TArticle[]
}

export type TProductList = TProduct[]