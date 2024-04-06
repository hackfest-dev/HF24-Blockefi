"use client"

import { GetReportForm, ReportTable } from "@repo/ui"
import { useState } from "react"

export default function Page(): JSX.Element {
  const [email, setEmail] = useState<string>("")

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold border-l-[6px] w-fit pl-4 border-primary-500 mb-20">Patient Report</h1>
      <GetReportForm setEmailId={setEmail}/>
      <ReportTable email={email}/>
    </div>
  )
}