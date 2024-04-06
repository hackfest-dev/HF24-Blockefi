'use client'

import { SolidButton } from "@repo/ui";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import contractAbi from "../../../utils/DocotorToPatient.json"
import { ethers } from "ethers";

export default function Page(): JSX.Element {
  const contractABI = contractAbi.abi
  let contractAddress='0xFa592013CCAd3e607200c960D758d6EAAa945F07';

  const [prescription, setPrescription] = useState<string>("")
  const [reportList, setReportList] = useState<string[]>([])

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

      const notVarifiedRecords = await contractInstance.labTestedNotVerifiedRecords()
      
      setReportList(
        notVarifiedRecords.map((item: any) => {
          return {
            reportNo: item.repono,
            email: item.email,
            report: item.testReportStatus
          } 
        })
      )
    }

    getContract()
  }, [reportList])

  const handlePresciptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPrescription(event.target.value)
  }

  const handleVarify = async (reportNo: any): Promise<void> => {
    const {ethereum}=window as any;
    const provider=new ethers.BrowserProvider(ethereum);
    const signer= await provider.getSigner();
    const contractInstance=new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );      
    
    await contractInstance.toVerify(reportNo, prescription)
  }

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold border-l-[6px] w-fit pl-4 border-primary-500 mb-20">Varify Report</h1>
      <div className="grid grid-cols-[auto_1fr_auto]">
        <span className="border border-slate-300 p-5 bg-primary-500 text-white">Sno.</span>
          <div className="border border-slate-300 p-5 grid gap-5 bg-primary-500 text-white">
            <p>Reports</p>
          </div>
          <span className="border border-slate-300 p-5 bg-primary-500 text-white">
            <p>Action</p>
          </span>
        {/* <li> */}
        {reportList.map((item, index) => (
          <Fragment key={item}>
            <span className="border border-slate-300 p-5">{index + 1}.</span>
            <div className="border border-slate-300 p-5 grid gap-5">
              <p className="text-slate-500">Email id: {(item as any).email}</p>
              <p>{(item as any).report}</p>
              <textarea className="border p-2 rounded-md" onChange={handlePresciptionChange} placeholder="add your priscription here" />
            </div>
            <span className="border border-slate-300 p-5">
              {/* <SolidButton btnColor="" className="" handleOnClick={handleVarify} label="Varify" /> */}
              <button
                className="!bg-primary-500 text-white py-2 px-5 rounded-md hover:brightness-110 h-fit"
                onClick={() => handleVarify((item as any).reportNo)}
                type="button"
              >
                verify
              </button>
            </span>
          </Fragment>
        ))}
        {/* </li> */}
      </div>
    </div>
  )
}