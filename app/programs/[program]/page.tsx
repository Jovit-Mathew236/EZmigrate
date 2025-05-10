import { programCategories } from "@/types/programs";
import ProgramTypeTemplate from "@/components/madeups/programs/program-type-template";
import { notFound } from "next/navigation";

type Params = Promise<{ program: string }>;

const findProgram = (programSlug: string) => {
  for (const category of programCategories) {
    if (category.programs[programSlug]) {
      return {
        programType: category.programs[programSlug],
        category: category,
        programId: programSlug,
      };
    }
  }
  return null;
};

export function generateStaticParams() {
  const paths: { program: string }[] = [];

  for (const category of programCategories) {
    Object.keys(category.programs).forEach((program) => {
      paths.push({ program });
    });
  }

  return paths;
}

const ProgramPage = async ({ params }: { params: Params }) => {
  const programSlug = (await params).program;
  const programData = findProgram(programSlug);

  if (!programData) {
    return notFound();
  }

  return (
    <ProgramTypeTemplate
      programType={programData.programType}
      category={programData.category}
      programId={programData.programId}
    />
  );
};

export default ProgramPage;
