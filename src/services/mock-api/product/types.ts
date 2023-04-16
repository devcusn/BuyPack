export type ProductModel = {
  imagePath: string
  name: string
  details: Array<string>
  tags: Array<string>
  amount: number
  currency: string
  id: number
}

export type GetProductsServiceResponse = Array<ProductModel>
export type ProductsServiceVariable = never
