import type { PasswordInputProps } from "./password-input.types";

export function PasswordInput(props: PasswordInputProps): JSX.Element {
  const {
    label = "Password",
    isPasswordEmpty = false,
    customErrors = [],
    handlePasswordChange,
    labelClass,
    inputClass
  } = props;

  const isCustomErrorTrue = customErrors.every(item => !item.isTrue) && customErrors.length

  return (
    <div className=" ui-flex ui-flex-col ui-gap-1">
      <label className={`ui-font-semibold ${labelClass}`} htmlFor="password">{label}:</label>
      <input
        className={`${isPasswordEmpty || isCustomErrorTrue ? "ui-border-red-500 ui-text-red-500" : "ui-border-slate-300"} ui-border ui-rounded-md ui-py-1 ui-px-2 ${inputClass}`}
        id="password"
        onChange={handlePasswordChange}
        type="password"
      />
      {isPasswordEmpty ? (
        <p className="text-[0.8em] text-red-500 my-1">
          * Please enter the Password
        </p>
      ) : null}
      {customErrors.map((item) =>
        item.isTrue ? (
          <p className="text-[0.8em] text-red-500 my-1" key={item.errorMsg}>
            * {item.errorMsg}
          </p>
        ) : null
      )}
      {!isPasswordEmpty && !isCustomErrorTrue ? <p className="ui-text-[0.8em] ui-opacity-0">*</p> : null}
    </div>
  );
}
