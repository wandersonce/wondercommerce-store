import { getProduct } from "@/actions/getProduct";
import { getProducts } from "@/actions/getProducts";

interface ProductPageProps{
  params: {
    productId: string;
  }
}
export default async function ProductPage({params} : ProductPageProps) {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id
  })

  return (
    <div>
      
    </div>
  )
}
