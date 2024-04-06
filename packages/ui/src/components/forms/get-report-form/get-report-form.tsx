'use client'

import { type ChangeEvent, useState, useEffect, type FormEvent } from "react"
import { type CustomErrorsType, EmailInput } from "../../input-box"
import { SolidButton } from "../../buttons"
import SERVER_URL from "../../../config/server.config"
import type { GetReportFormProps } from "./get-report-form.type"

export function GetReportForm(props: GetReportFormProps): JSX.Element {
  const { setEmailId } = props

  const [email, setEmail] = useState<string>("")
  
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false)
  
  const [customEmailError, setCustomEmailError] = useState<CustomErrorsType[]>([
    {
      errorMsg: "User with this email not found",
      isTrue: false,
    },
  ]);

  useEffect(() => {}, [isEmailEmpty, customEmailError])

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (isEmailEmpty) setIsEmailEmpty(false);
    setCustomEmailError((pre) =>
      pre.map((item) =>
        ({...item, isTrue: false})
      )
    );

    setEmail(event.target.value)
  }


  const handleEmailSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if (!email.trim().length) setIsEmailEmpty(true);
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
        setEmailId(email)
        await responce.json()
        .then(res => {
          // console.log(res.user)
        })
      }
    }
  }

  return (
    <form className="ui-grid ui-grid-cols-[1fr_auto] ui-items-center ui-gap-5" onSubmit={handleEmailSubmit}>
      <EmailInput
        customErrors={customEmailError}
        handleEmailChange={handleEmailChange}
        inputClass="ui-py-2.5 ui-px-3x"
        isEmailEmpty={isEmailEmpty}
        label="Email"
        labelClass="ui-text-lg"
      />
      <SolidButton btnColor="ui-bg-primary-500 ui-py-3" label="Get Report" type="submit"/>
    </form>
  )
}