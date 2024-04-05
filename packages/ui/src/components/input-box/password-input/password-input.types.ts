import type { ChangeEvent } from "react";

export interface CustomPassErrorsType {
  errorMsg: string;
  isTrue: boolean;
}

export interface PasswordInputProps {
  label?: string;
  handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void
  isPasswordEmpty?: boolean;
  customErrors?: CustomPassErrorsType[];
  labelClass?: string;
  inputClass?: string;
}