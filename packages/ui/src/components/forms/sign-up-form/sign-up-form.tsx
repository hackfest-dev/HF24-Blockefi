"use client";

import { useState, type ChangeEvent } from "react";
import { EmailInput, PasswordInput } from "../../input-box";
import { TextInput } from "../../input-box/text-input/text-input";
import { SolidButton } from "../../buttons";

export function SignUpForm(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const hanldeSignUp = (): void => {
    // console.log(email)
  };

  return (
    <div>
      <TextInput
        handleTextChange={handleNameChange}
        inputClass="ui-py-2.5 ui-px-3x"
        label="Name"
        labelClass="ui-text-lg"
      />
      <EmailInput
        handleEmailChange={handleEmailChange}
        inputClass="ui-py-2.5 ui-px-3x"
        labelClass="ui-text-lg"
      />
      <PasswordInput
        handlePasswordChange={handlePasswordChange}
        inputClass="ui-py-2.5 ui-px-3x"
        labelClass="ui-text-lg"
      />
      <SolidButton
        btnColor="ui-bg-primary-500"
        className="ui-font-semibold ui-mt-2"
        handleOnClick={hanldeSignUp}
        label="Sign Up"
        type="submit"
      />
    </div>
  );
}
