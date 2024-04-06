import type { TextInputProps } from "./text-area-input.types";

export function TextAreaInput(props: TextInputProps): JSX.Element {
  const {
    label = "",
    isTextEmpty = false,
    customErrors = [],
    handleTextChange,
    labelClass,
    inputClass,
    rows = 3
  } = props;

  const isCustomErrorTrue = customErrors.every(item => item.isTrue) && customErrors.length

  return (
    <div className="ui-flex ui-flex-col ui-gap-1">
      <label className={`ui-font-semibold ${labelClass}`} htmlFor="Text">{label}:</label>
      <textarea
        className={`${isTextEmpty || isCustomErrorTrue ? "ui-border-red-500 ui-text-red-500" : "ui-border-slate-300"} ui-border ui-rounded-md ui-py-1 ui-px-2 ${inputClass}`}
        id="Text"
        onChangeCapture={handleTextChange}
        rows={rows}
      />
      {isTextEmpty ? (
        <p className="ui-text-[0.8em] ui-text-red-500 ui-my-1">
          * Please enter the {label}
        </p>
      ) : null}
      {customErrors.map((item) =>
        item.isTrue ? (
          <p className="ui-text-[0.8em] ui-text-red-500 ui-my-1" key={item.errorMsg}>
            * {item.errorMsg}
          </p>
        ) : null
      )}
      {!isTextEmpty && !isCustomErrorTrue ? <p className="ui-text-[0.8em] ui-opacity-0 ui-my-1">*</p> : null}
    </div>
  );
}