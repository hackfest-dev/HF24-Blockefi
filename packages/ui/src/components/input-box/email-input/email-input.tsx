import type { EmailInputProps } from "./email-input.types";

export function EmailInput(props: EmailInputProps): JSX.Element {
  const {
    label = "Email",
    isEmailEmpty = false,
    isValidEmail = false,
    customErrors = [],
    handleEmailChange
  } = props;

  const isCustomErrorTrue = customErrors.every(item => !item.isTrue)

  return (
    <div className=" ui-flex ui-flex-col">
      <label htmlFor="email">{label}:</label>
      <input
        className={`${isEmailEmpty || isValidEmail || isCustomErrorTrue ? "border-red-500 text-red-500" : "border-slate-300"} border rounded-md py-1 px-2`}
        id="email"
        onChange={handleEmailChange}
        type="email"
      />
      {isEmailEmpty ? (
        <p className="text-[0.8em] text-red-500 my-1">
          * Please enter your email address
        </p>
      ) : null}
      {isValidEmail ? (
        <p className="text-[0.8em] text-red-500 my-1">
          * Please enter a valid email address
        </p>
      ) : null}
      {customErrors.map((item) =>
        item.isTrue ? (
          <p className="text-[0.8em] text-red-500 my-1" key={item.errorMsg}>
            * {item.errorMsg}
          </p>
        ) : null
      )}
    </div>
  );
}
