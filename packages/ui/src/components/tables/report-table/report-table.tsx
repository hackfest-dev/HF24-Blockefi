"use client";

import { useEffect, useState } from "react";
import type { ReportTableProps } from "./report-table.types";
import { ethers } from "ethers";
import contractAbi from '../../../utils/DocotorToPatient.json'

export function ReportTable(props: ReportTableProps): JSX.Element {
  const contractABI = contractAbi.abi
  const contractAddress='0xFa592013CCAd3e607200c960D758d6EAAa945F07';

  const { email } = props;
  const [reportList, setReportList] = useState<string[] | null>(null);

  useEffect(() => {
    async function getContract() {
      const {ethereum}=window as any;
      const provider=new ethers.BrowserProvider(ethereum);
      const signer= await provider.getSigner();
      const contractInstance=new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );          

      const reportList = await contractInstance.getpatientRecord(email)
      
      setReportList(
        reportList.map((item: any) => {
          return {
            report: item.testReportStatus,
            prescription: item.Prescribtions
          }
        })
      )
    }

    getContract()
  }, [email]);

   
  // eslint-disable-next-line no-nested-ternary
  return reportList ? (
    reportList.length ? (
      <table className="ui-mt-5 w-full">
        <thead className="ui-bg-primary-500 ui-text-white">
          <tr>
            <th className="ui-text-start ui-border ui-p-3">Sno.</th>
            <th className="ui-text-start ui-border ui-p-3">Report</th>
            <th className="ui-text-start ui-border ui-p-3">Prescription</th>
          </tr>
        </thead>
        <tbody>
          {reportList.map((item: any, index) => (
            <tr key={item}>
              <td className="ui-text-start ui-border ui-p-3">{index}.</td>
              <td className="ui-text-start ui-border ui-p-3">{item.report}</td>
              <td className="ui-text-start ui-border ui-p-3">{item.prescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <h1 className="ui-text-center ui-text-2xl ui-font-bold">
        No report to show
      </h1>
    )
  ) : (
    <h1 className="text-center ui-text-2xl ui-font-bold ui-text-red-500">
      Entet Patient Email id
    </h1>
  );
}
