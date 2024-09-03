import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/table.tsx";
import { SideHustlesData as SideHustlesDataType } from "./SideHustlesData.ts";

interface SideHustlesProps {
  SideHustlesData: SideHustlesDataType[];
}

export default function SideHustles({
  SideHustlesData,
}: SideHustlesProps) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-2 sm:pt-60 lg:px-8 lg:pt-2">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-2xl font-semibold leading-6 text-white">
              Side Hustles
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              A list of my current and former side hustles.
            </p>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <Table grid striped className="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]">
                <TableHead>
                  <TableRow>
                    <TableHeader>Side Hustle</TableHeader>
                    <TableHeader>Details</TableHeader>
                    <TableHeader>Duration</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {SideHustlesData.map((experience) => (
                    <TableRow key={experience.handle}>
                      <TableCell className="font-medium">
                      {experience.sideHustle}
                      </TableCell>
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
