import PageHeader from "@/components/shared/page-header";
import { pageHeaders } from "@/types/page-headers";
import React from "react";

const Visa = () => {
  return (
    <div className="flex flex-col min-h-screen xl:min-h-fit">
      <PageHeader content={pageHeaders["visa"]} />
    </div>
  );
};

export default Visa;
