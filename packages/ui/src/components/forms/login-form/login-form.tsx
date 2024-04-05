"use client";

import { useState, type ChangeEvent } from "react";
import { EmailInput, PasswordInput } from "../../input-box";
import { SolidButton } from "../../buttons";

export function LoginForm(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const hanldeLogin = (): void => {
    // console.log(email)
  };

  return (
    <div>
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
        handleOnClick={hanldeLogin}
        label="Login"
        type="submit"
      />
    </div>
  );
}