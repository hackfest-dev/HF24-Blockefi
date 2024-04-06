import type { ChangeEvent } from "react";

export interface CustomTextAreaErrorsType {
  errorMsg: string;
  isTrue: boolean;
}

export interface TextInputProps {
  label?: string;
  handleTextChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  isTextEmpty?: boolean;
  isValidText?: boolean;
  customErrors?: CustomTextAreaErrorsType[];
  labelClass?: string;
  inputClass?: string;
  rows?: number;
}