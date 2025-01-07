import { serviceContents } from "@/types/services";
import ServiceTemplate from "@/components/madeups/services/service-template";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: {
    service: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ServicePage({ params }: ServicePageProps) {
  const serviceSlug = params.service.toLowerCase();
  const content = serviceContents[serviceSlug];

  if (!content) {
    notFound();
  }

  return <ServiceTemplate content={content} />;
}

export function generateStaticParams() {
  return Object.keys(serviceContents).map((service) => ({
    service: service,
  }));
}
