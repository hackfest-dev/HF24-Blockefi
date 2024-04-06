"use client";

import { FormEvent, useEffect, useState, type ChangeEvent } from "react";
import { type CustomErrorsType, EmailInput, PasswordInput } from "../../input-box";
import { SolidButton } from "../../buttons";
import SERVER_URL from "../../../config/server.config";
import { useRouter } from "next/navigation";

export function LoginForm(): JSX.Element {
  const router = useRouter()

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false);

  const [customEmailError, setCustomEmailError] = 
    useState<CustomErrorsType[]>([
      {
        errorMsg: "User with this id not found",
        isTrue: false
      }
    ])
  const [customPasswordError, setCustomPasswordError] = 
    useState<CustomErrorsType[]>([
      {
        errorMsg: "Invalid password",
        isTrue: false
      }
    ])

  useEffect(() => {}, [
    isEmailEmpty,
    isPasswordEmpty,
    customEmailError,
    customPasswordError
  ]);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (isEmailEmpty) setIsEmailEmpty(false);
    setCustomEmailError((pre) =>
      pre.map((item) =>
        ({...item, isTrue: false})
      )
    );

    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (isPasswordEmpty) setIsPasswordEmpty(false);
    setCustomPasswordError((pre) =>
      pre.map((item) =>
        ({...item, isTrue: false})
      )
    );

    setPassword(event.target.value);
  };

  const handelLogin = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if (!email.trim().length) setIsEmailEmpty(true);
    else if (!password.trim().length) setIsPasswordEmpty(true);
    else {
      const url = `${SERVER_URL as string  }/auth/login`;    
      const data = { email, password };

      const responce = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: 'include'
      })      

      if (responce.status === 404)
        setCustomEmailError((pre) =>
          pre.map((item) =>
            item.errorMsg === "User with this id not found"
              ? {
                  errorMsg: "User with this id not found",
                  isTrue: true,
                }
              : item
          )
        );

      if (responce.status === 401)
        setCustomPasswordError((pre) =>
          pre.map((item) =>
            item.errorMsg === "Invalid password"
              ? {
                  errorMsg: "Invalid password",
                  isTrue: true,
                }
              : item
          )
        );

      if (responce.status === 200) router.push("/")
    }
  };

  return (
    <form onSubmit={handelLogin}>
      <EmailInput
        customErrors={customEmailError}
        handleEmailChange={handleEmailChange}
        inputClass="ui-py-2.5 ui-px-3x"
        isEmailEmpty={isEmailEmpty}
        labelClass="ui-text-lg"
      />
      <PasswordInput
        customErrors={customPasswordError}
        handlePasswordChange={handlePasswordChange}
        inputClass="ui-py-2.5 ui-px-3x"
        isPasswordEmpty={isPasswordEmpty}
        labelClass="ui-text-lg"
      />
      <p className="ui-mt-2">Don&apos;t have an account? <a className="ui-text-primary-500" href="./signup">Sign Up</a></p>
      <SolidButton
        btnColor="ui-bg-primary-500"
        className="ui-font-semibold ui-mt-4"
        label="Login"
        type="submit"
      />
    </form>
  );
}