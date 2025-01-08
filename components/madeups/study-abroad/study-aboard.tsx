// import { ArrowRight } from "lucide-react";
import React from "react";
// import ReactCountryFlag from "react-country-flag";
import { pageHeaders } from "@/types/page-headers";
import PageHeader from "@/components/shared/page-header";

const StudyAboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader content={pageHeaders["study-abroad"]} />
    </div>
  );
};

export default StudyAboard;
