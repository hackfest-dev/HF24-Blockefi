import { SolidButton } from "@repo/ui";
import { ChangeEvent, Fragment, useState } from "react";

export default function Page(): JSX.Element {
  const [prescription, setPrescription] = useState<string>("")
  const [reportList, setReportList] = useState<string[]>([])

  const handlePresciptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPrescription(event.target.value)
  }

  const handleVarify = (): void => {
    console.log(prescription);
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
            <span className="border border-slate-300 p-5">{index}.</span>
            <div className="border border-slate-300 p-5 grid gap-5">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nisi est minus odio facilis similique assumenda inventore quaerat commodi ipsum necessitatibus reprehenderit perspiciatis ipsa consequuntur hic, odit blanditiis quae atque!</p>
              <p className="text-slate-500">Email id: nithinn9980@gmail.com</p>
              <textarea className="border p-2 rounded-md" onChange={handlePresciptionChange} placeholder="add your priscription here" />
            </div>
            <span className="border border-slate-300 p-5">
              <SolidButton btnColor="ui-bg-primary-500" className="h-fit" handleOnClick={handleVarify} label="Varify" />
            </span>
          </Fragment>
        ))}
        {/* </li> */}
      </div>
    </div>
  )
}