import CareerTemplate from "@/components/madeups/careers/career-template";
import { careerPositions } from "@/types/careers";
import { notFound } from "next/navigation";
type Params = Promise<{ position: string }>;

export default async function CareerPosition(props: { params: Params }) {
  const params = await props.params;
  const position = careerPositions[params.position];

  if (!position) {
    notFound();
  }

  return <CareerTemplate position={position} />;
}
