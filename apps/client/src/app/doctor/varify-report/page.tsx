import { SolidButton } from "@repo/ui";

export default function Page(): JSX.Element {
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
          <span className="border border-slate-300 p-5">1.</span>
          <div className="border border-slate-300 p-5 grid gap-5">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nisi est minus odio facilis similique assumenda inventore quaerat commodi ipsum necessitatibus reprehenderit perspiciatis ipsa consequuntur hic, odit blanditiis quae atque!</p>
            <p className="text-slate-500">Email id: nithinn9980@gmail.com</p>
            <textarea className="border p-2 rounded-md" placeholder="add your priscription here" o/>
          </div>
          <span className="border border-slate-300 p-5">
            <SolidButton btnColor="ui-bg-primary-500" className="h-fit" label="Varify" />
          </span>
        {/* </li> */}
      </div>
    </div>
  )
}