import type { ChangeEvent } from "react";

export interface CustomTextErrorsType {
  errorMsg: string;
  isTrue: boolean;
}

export interface TextInputProps {
  label?: string;
  handleTextChange: (event: ChangeEvent<HTMLInputElement>) => void
  isTextEmpty?: boolean;
  isValidText?: boolean;
  customErrors?: CustomTextErrorsType[];
  labelClass?: string;
  inputClass?: string;
  type?: "text" | "number" | "phone"
}