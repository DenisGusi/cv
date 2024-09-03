import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/table";
import { WorkingExperienceData as WorkingExperienceDataType } from "./WorkingExperienceData.ts";

interface WorkingExperienceProps {
  WorkingExperienceData: WorkingExperienceDataType[];
}

export default function WorkingExperience({
  WorkingExperienceData,
}: WorkingExperienceProps) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-2xl font-semibold leading-6 text-white">
              Working Experience
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              A list of my previous employers, positions and experiences while working there.
            </p>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <Table grid striped className="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]">
                <TableHead>
                  <TableRow>
                    <TableHeader>Employer</TableHeader>
                    <TableHeader>Position</TableHeader>
                    <TableHeader>Details</TableHeader>
                    <TableHeader>Duration</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {WorkingExperienceData.map((experience) => (
                    <TableRow key={experience.handle}>
                      <TableCell className="font-medium">
                        {
                          <a className="hover:underline" href={experience.employerLink} target="_blank">
                            {experience.employer}
                          </a>
                        }
                      </TableCell>
                      <TableCell >{experience.position}</TableCell>
                      <TableCell className="max-w-sm whitespace-normal">{experience.details}</TableCell>
                      <TableCell className="text-zinc-500">
                        {experience.duration}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
