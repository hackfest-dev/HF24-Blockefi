import type { PasswordInputProps } from "./password-input.types";

export function PasswordInput(props: PasswordInputProps): JSX.Element {
  const {
    label = "Password",
    isPasswordEmpty = false,
    isPasswordTooShort = false,
    customErrors = [],
    handlePasswordChange,
    labelClass,
    inputClass
  } = props;

  const isCustomErrorTrue = customErrors.every(item => item.isTrue) && customErrors.length

  return (
    <div className=" ui-flex ui-flex-col ui-gap-1">
      <label className={`ui-font-semibold ${labelClass}`} htmlFor="password">{label}:</label>
      <input
        className={`${isPasswordEmpty || isPasswordTooShort || isCustomErrorTrue ? "ui-border-red-500 ui-text-red-500" : "ui-border-slate-300"} ui-border ui-rounded-md ui-py-1 ui-px-2 ${inputClass}`}
        id="password"
        onChange={handlePasswordChange}
        type="password"
      />
      {isPasswordEmpty ? (
        <p className="ui-text-[0.8em] ui-text-red-500 ui-my-1">
          * Please enter the Password
        </p>
      ) : null}
      {isPasswordTooShort ? (
        <p className="ui-text-[0.8em] ui-text-red-500 ui-my-1">
          * Please enter the password having length 8 or more
        </p>
      ) : null}
      {customErrors.map((item) =>
        item.isTrue ? (
          <p className="ui-text-[0.8em] ui-text-red-500 ui-my-1" key={item.errorMsg}>
            * {item.errorMsg}
          </p>
        ) : null
      )}
      {!isPasswordEmpty && !isPasswordTooShort && !isCustomErrorTrue ? <p className="ui-text-[0.8em] ui-opacity-0 ui-my-1">*</p> : null}
    </div>
  );
}
