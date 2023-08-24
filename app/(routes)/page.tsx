import { getBillboard } from "@/actions/getBillboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";

const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("1d93eeb3-2a54-40dd-a0d4-3c0f8e94e7f6");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
    </Container>
  )
}
