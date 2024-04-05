import type { ChangeEvent } from "react";

export interface CustomErrorsType {
  errorMsg: string;
  isTrue: boolean;
}

export interface TextInputProps {
  label?: string;
  handleTextChange: (event: ChangeEvent<HTMLInputElement>) => void
  isTextEmpty?: boolean;
  isValidText?: boolean;
  customErrors?: CustomErrorsType[];
  labelClass?: string;
  inputClass?: string;
}