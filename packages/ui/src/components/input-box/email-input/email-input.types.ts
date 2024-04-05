export interface CustomErrorsType {
  errorMsg: string;
  isTrue: boolean;
}

export interface EmailInputProps {
  label: string;
  handleEmailChange: () => void
  isEmailEmpty?: boolean;
  isValidEmail?: boolean;
  customErrors?: CustomErrorsType[];
}