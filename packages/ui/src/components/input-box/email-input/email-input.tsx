import type { EmailInputProps } from "./email-input.types";

export function EmailInput(props: EmailInputProps): JSX.Element {
  const {
    label = "Email",
    isEmailEmpty = false,
    isValidEmail = false,
    customErrors = [],
    handleEmailChange,
    labelClass = "",
    inputClass = ""
  } = props;
  

  const isCustomErrorTrue = customErrors.every(item => item.isTrue) && customErrors.length

  return (
    <div className=" ui-flex ui-flex-col ui-gap-1">
      <label className={`ui-font-semibold ${labelClass}`} htmlFor="email">{label}:</label>
      <input
        className={`${isEmailEmpty || isValidEmail || isCustomErrorTrue ? "ui-border-red-500 ui-text-red-500" : "ui-border-slate-300"} ui-border ui-rounded-md ui-py-1 ui-px-2 ${inputClass}`}
        id="email"
        onChange={handleEmailChange}
        type="email"
      />
      {isEmailEmpty ? (
        <p className="ui-text-[0.8em] ui-text-red-500 ui-my-1">
          * Please enter your email address
        </p>
      ) : null}
      {isValidEmail ? (
        <p className="ui-text-[0.8em] ui-text-red-500 ui-my-1">
          * Please enter a valid email address
        </p>
      ) : null}
      {customErrors.map((item) =>
        item.isTrue ? (
          <p className="ui-text-[0.8em] ui-text-red-500 ui-my-1" key={item.errorMsg}>
            * {item.errorMsg}
          </p>
        ) : null
      )}
      {!isEmailEmpty && !isValidEmail && !isCustomErrorTrue ? <p className="ui-text-[0.8em] ui-opacity-0 ui-my-1">*</p> : null}
    </div>
  );
}