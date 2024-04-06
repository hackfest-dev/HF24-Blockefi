"use client";

import { useEffect, useState } from "react";
import type { ReportTableProps } from "./report-table.types";

export function ReportTable(props: ReportTableProps): JSX.Element {
  const { email } = props;
  const [reportList, setReportList] = useState<string[] | null>(null);

  useEffect(() => {
    // fetch reports
  }, [email]);

   
  // eslint-disable-next-line no-nested-ternary
  return reportList ? (
    reportList.length ? (
      <table className="mt-5">
        <thead className="bg-primary-500 text-white">
          <tr>
            <th className="text-center border p-3">Sno.</th>
            <th className="text-start border p-3">Report</th>
          </tr>
        </thead>
        <tbody>
          {reportList.map((item, index) => (
            <tr key={item}>
              <td className="text-center border p-3">{index}.</td>
              <td className="text-start border p-3">{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <h1 className="text-center ui-text-2xl ui-font-bold">
        No report to show
      </h1>
    )
  ) : (
    <h1 className="text-center ui-text-2xl ui-font-bold ui-text-red-500">
      Entet Patient Email id
    </h1>
  );
}
