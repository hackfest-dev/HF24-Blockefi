'use client'

import { type ChangeEvent, useState, useEffect, type FormEvent } from "react"
import { type CustomErrorsType, EmailInput } from "../../input-box"
import { TextAreaInput } from "../../input-box/text-area-input"
import { SolidButton } from "../../buttons"
import SERVER_URL from "../../../config/server.config"

interface UserRes {
  user: object;
  message: string;
}


export function AddReportForm(): JSX.Element {
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
        .then(res => {
          // console.log(res.user)
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