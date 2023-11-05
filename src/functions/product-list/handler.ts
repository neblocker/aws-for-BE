import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway"
import { formatJSONResponse } from "@libs/api-gateway"

import { getProductList } from "src/database/handler"
import { Product } from "src/database"

export const getProducts: ValidatedEventAPIGatewayProxyEvent<
  Product[]
> = async () => {
  return formatJSONResponse({
    status: 200,
    data: await getProductList()
  })
}
