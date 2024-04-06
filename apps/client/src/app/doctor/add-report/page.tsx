import { AddReportForm } from "@repo/ui"

export default function Page(): JSX.Element {
  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold border-l-[6px] w-fit pl-4 border-primary-500 mb-20">Add Report</h1>
      <AddReportForm />
    </div>
  )
}