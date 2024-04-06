"use client";

import { type FormEvent, useEffect, useState, type ChangeEvent } from "react";
import {
  type CustomErrorsType,
  EmailInput,
  PasswordInput,
} from "../../input-box";
import { TextInput } from "../../input-box/text-input/text-input";
import { SolidButton } from "../../buttons";
import SERVER_URL from "../../../config/server.config";
import { useRouter } from "next/navigation";
import {ethers} from 'ethers';
import contractAbi from '../../../utils/DocotorToPatient.json'

export function SignUpForm(): JSX.Element {
  const contractABI = contractAbi.abi
  let contractAddress='0xFa592013CCAd3e607200c960D758d6EAAa945F07';
  const router = useRouter()

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isNameEmpty, setIsNameEmpty] = useState<boolean>(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false);

  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isPasswordTooShort, setIsPasswordTooShort] = useState<boolean>(false);

  const [customEmailError, setCustomEmailError] = useState<CustomErrorsType[]>([
    {
      errorMsg: "User with this email already registered",
      isTrue: false,
    },
  ]);

  useEffect(() => {}, [
    isNameEmpty,
    isEmailEmpty,
    isPasswordEmpty,
    isValidEmail,
  ]);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (isNameEmpty) setIsNameEmpty(false);

    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (isEmailEmpty) setIsEmailEmpty(false);
    if (isValidEmail) setIsValidEmail(false);
    setCustomEmailError((pre) =>
      pre.map((item) =>
        ({...item, isTrue: false})
      )
    );

    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (isPasswordEmpty) setIsPasswordEmpty(false);
    if (isPasswordTooShort) setIsPasswordTooShort(false);

    setPassword(event.target.value);
  };

  const hanldeSignUp = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim().length) setIsNameEmpty(true);
    else if (!email.trim().length) setIsEmailEmpty(true);
    else if (!emailPattern.test(email)) setIsValidEmail(true);
    else if (!password.trim().length) setIsPasswordEmpty(true);
    else if (password.trim().length < 8) setIsPasswordTooShort(true);
    else {
      const url = `${SERVER_URL}/auth/sign-up`;
      const data = { name, email, password };

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      })      

      if (res.status === 409)
        setCustomEmailError((pre) =>
          pre.map((item) =>
            item.errorMsg === "User with this email already registered"
              ? {
                  errorMsg: "User with this email already registered",
                  isTrue: true,
                }
              : item
          )
        );
      
      if (res.status === 200) {
        const {ethereum}=window as any;
        const provider=new ethers.BrowserProvider(ethereum);
        const signer= await provider.getSigner();
        const contractInstance=new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        await contractInstance.addPatient(email, name, 18);
        router.push("/login")
      }
    };
  };

  return (
    <form onSubmit={hanldeSignUp}>
      <TextInput
        handleTextChange={handleNameChange}
        inputClass="ui-py-2.5 ui-px-3x"
        isTextEmpty={isNameEmpty}
        label="Name"
        labelClass="ui-text-lg"
      />
      <EmailInput
        customErrors={customEmailError}
        handleEmailChange={handleEmailChange}
        inputClass="ui-py-2.5 ui-px-3x"
        isEmailEmpty={isEmailEmpty}
        isValidEmail={isValidEmail}
        labelClass="ui-text-lg"
      />
      <PasswordInput
        handlePasswordChange={handlePasswordChange}
        inputClass="ui-py-2.5 ui-px-3x"
        isPasswordEmpty={isPasswordEmpty}
        isPasswordTooShort={isPasswordTooShort}
        labelClass="ui-text-lg"
      />
      <p className="ui-mt-2">
        Already have an account?{" "}
        <a className="ui-text-primary-500" href="./login">
          Login
        </a>
      </p>
      <SolidButton
        btnColor="ui-bg-primary-500"
        className="ui-font-semibold ui-mt-4"
        label="Sign Up"
        type="submit"
      />
    </form>
  );
}
