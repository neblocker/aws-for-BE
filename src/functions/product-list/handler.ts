import { APIGatewayProxyResult } from "aws-lambda"
import { getProductsList } from "../../services/getProducts"

export const getProducts = async (): Promise<APIGatewayProxyResult> => {
  try {
    const products = await getProductsList()

    console.log("All products list", products)

    return {
      statusCode: 200,
      body: JSON.stringify(products)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal Server Error."
      })
    }
  }
}
