import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway"
import { formatJSONResponse } from "@libs/api-gateway"

import { getProductDetails } from "src/database/handler"
import { Product } from "src/database"

export const getProductById: ValidatedEventAPIGatewayProxyEvent<
  Product
> = async (event) => {
  const { productId } = event.pathParameters

  return formatJSONResponse({
    status: 200,
    data: await getProductDetails(productId)
  })
}
