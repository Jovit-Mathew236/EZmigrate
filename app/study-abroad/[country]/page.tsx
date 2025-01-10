import React from "react";
import { notFound } from "next/navigation";
import { studyAbroadDestinations } from "@/types/study-abroad";
import CountryTemplate from "@/components/madeups/study-abroad/country-template";

interface Props {
  params: {
    country: string;
  };
}

export async function generateStaticParams() {
  return studyAbroadDestinations.map((destination) => ({
    country: destination.link.split("/").pop(),
  }));
}

const StudyAbroadCountryPage = ({ params }: Props) => {
  const country = studyAbroadDestinations.find(
    (dest) => dest.link.split("/").pop() === params.country
  );

  if (!country) {
    notFound();
  }

  return <CountryTemplate country={country} />;
};

export default StudyAbroadCountryPage;
