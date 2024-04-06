'use client'

import { type ChangeEvent, useState, useEffect, type FormEvent } from "react"
import { type CustomErrorsType, EmailInput } from "../../input-box"
import { TextAreaInput } from "../../input-box/text-area-input"
import { SolidButton } from "../../buttons"
import SERVER_URL from "../../../config/server.config"
import contractAbi from '../../../utils/DocotorToPatient.json'
import { ethers } from "ethers"
import { useRouter } from "next/navigation"

interface UserRes {
  user: object;
  message: string;
}


export function AddReportForm(): JSX.Element {
  const contractABI = contractAbi.abi
  const contractAddress='0xFa592013CCAd3e607200c960D758d6EAAa945F07';
  
  const router = useRouter()

  const [email, setEmail] = useState<string>("")
  const [report, setReport] = useState<string>("")
  
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false)
  const [isReportEmpty, setIsReportEmpty] = useState<boolean>(false)
  
  const [customEmailError, setCustomEmailError] = useState<CustomErrorsType[]>([
    {
      errorMsg: "User with this email not found",
      isTrue: false,
    },
  ]);

  useEffect(() => {}, [isEmailEmpty, isReportEmpty, customEmailError])

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (isEmailEmpty) setIsEmailEmpty(false);
    setCustomEmailError((pre) =>
      pre.map((item) =>
        ({...item, isTrue: false})
      )
    );

    setEmail(event.target.value)
  }

  const handleReportChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    if (isReportEmpty) setIsReportEmpty(false);

    setReport(event.target.value)
  }


  const handleReportSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if (!email.trim().length) setIsEmailEmpty(true);
    else if (!report.trim().length) setIsReportEmpty(true);
    else {
      const url = `${SERVER_URL  }/user/${  email}`
      const responce: Response = await fetch(url)

      if (responce.status === 404)
        setCustomEmailError((pre) =>
          pre.map((item) =>
            item.errorMsg === "User with this email not found"
              ? {
                  errorMsg: "User with this email not found",
                  isTrue: true,
                }
              : item
          )
        );
      
      if (responce.status === 200) {
        await responce.json()
        .then(async res => {
          const user = res.user;

          const {ethereum}=window as any;
          const provider=new ethers.BrowserProvider(ethereum);
          const signer= await provider.getSigner();
          const contractInstance=new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );          

          await contractInstance.NotVerifiedStored(user.email, 18, user.name, new Date().toString().slice(0, 25), report)
          router.push("/doctor/patient-report")
        })
      }
    }
  }

  return (
    <form onSubmit={handleReportSubmit}>
      <EmailInput
        customErrors={customEmailError}
        handleEmailChange={handleEmailChange}
        inputClass="ui-py-2.5 ui-px-3x"
        isEmailEmpty={isEmailEmpty}
        label="Email"
        labelClass="ui-text-lg"
      />
      <TextAreaInput 
        handleTextChange={handleReportChange}
        inputClass="ui-py-2.5 ui-px-3x"
        isTextEmpty={isReportEmpty}
        label="Report"
        labelClass="ui-text-lg"
        rows={5}
      />
      <SolidButton btnColor="ui-bg-primary-500" label="Add Report" type="submit"/>
    </form>
  )
}