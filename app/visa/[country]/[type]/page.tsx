import { visaDestinations } from "@/types/visa";
import VisaTypeTemplate from "@/components/madeups/visa/visa-type-template";
import { notFound } from "next/navigation";
import BlogPostsSection from "@/components/madeups/Home/modules/blog-posts-section";
type Params = Promise<{ country: string; type: string }>;

export async function generateStaticParams() {
  return visaDestinations.flatMap((destination) =>
    Object.keys(destination.visaTypes).map((visaType) => ({
      country: destination.country.toLowerCase(),
      type: visaType,
    }))
  );
}

export default async function VisaTypePage(props: { params: Params }) {
  const params = await props.params;
  const destination = visaDestinations.find(
    (dest) => dest.country.toLowerCase().replace(/\s+/g, "-") === params.country
  );

  if (!destination) {
    notFound();
  }

  const visaType = destination.visaTypes[params.type];

  if (!visaType) {
    notFound();
  }

  return (
    <>
      <VisaTypeTemplate
        destination={destination}
        visaType={visaType}
        visaCategory={params.type.replace(/-/g, " ").toUpperCase()}
      />
      <BlogPostsSection />
    </>
  );
}
