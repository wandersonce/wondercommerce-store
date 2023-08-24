import { getBillboard } from "@/actions/getBillboard";
import { getProducts } from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({isFeatured:true});
  const billboard = await getBillboard("1d93eeb3-2a54-40dd-a0d4-3c0f8e94e7f6");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  )
}
