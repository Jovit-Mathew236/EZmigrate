import { serviceContents } from "@/types/services";
import ServiceTemplate from "@/components/madeups/services/service-template";
import { notFound } from "next/navigation";

type Params = Promise<{ service: string }>;

export default async function ServicePage(props: { params: Params }) {
  const params = await props.params;
  const { service } = params;
  const content = serviceContents[service];

  if (!content) {
    notFound();
  }

  return <ServiceTemplate content={content} />;
}

// Uncomment this to enable static generation
export function generateStaticParams() {
  return Object.keys(serviceContents).map((service) => ({
    service: service,
  }));
}
