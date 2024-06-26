import type { ChangeEvent } from "react";

export interface CustomErrorsType {
  errorMsg: string;
  isTrue: boolean;
}

export interface EmailInputProps {
  label?: string;
  handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void
  isEmailEmpty?: boolean;
  isValidEmail?: boolean;
  customErrors?: CustomErrorsType[];
  labelClass?: string;
  inputClass?: string;
}