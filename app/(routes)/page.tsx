import { getBillboard } from "@/actions/getBillboard";
import { getProducts } from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({isFeatured:true});
  const billboard = await getBillboard("44e828e1-9c56-44ba-a151-e5af08319682");
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
