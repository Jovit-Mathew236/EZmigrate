import React from "react";
import { notFound } from "next/navigation";
import { studyAbroadDestinations } from "@/types/study-abroad";
import CountryTemplate from "@/components/madeups/study-abroad/country-template";
type Params = Promise<{ country: string }>;
export async function generateStaticParams() {
  return studyAbroadDestinations.map((destination) => ({
    country: destination.link.split("/").pop(),
  }));
}

const StudyAbroadCountryPage = async (props: { params: Params }) => {
  const params = await props.params;
  const country = studyAbroadDestinations.find(
    (dest) => dest.country.toLowerCase().replace(/\s+/g, "-") === params.country
  );

  if (!country) {
    notFound();
  }

  return <CountryTemplate country={country} />;
};

export default StudyAbroadCountryPage;
