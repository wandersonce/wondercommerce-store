import { getCategory } from "@/actions/getCategory";
import { getColors } from "@/actions/getColors";
import { getProducts } from "@/actions/getProducts";
import { getSizes } from "@/actions/getSizes";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import Filter from "./components/Filter";

export const revalidate = 0;

interface CategoryPageProps{
  params:{
    categoryId: string;
  },
  searchParams:{
    colorId: string;
    sizeId: string;
  }
}

export default async function CategoryPage({params, searchParams} : CategoryPageProps) {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Mobile Filters */}
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
