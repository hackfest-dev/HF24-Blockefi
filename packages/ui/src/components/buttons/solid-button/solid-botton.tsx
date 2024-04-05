import type { SolidButtonProps } from "./solid-button.types";

export function SolidButton(props: SolidButtonProps): JSX.Element {
  const {
    label,
    btnColor = "ui-bg-black",
    handleOnClick,
    type = "button",
    className = ""
  } = props;

  return (
    <button
      className={`${btnColor} ui-text-white ui-py-2 ui-px-5 ui-rounded-md hover:ui-brightness-110 ${className}`}
      onClick={handleOnClick}
      type={type}
    >
      {label}
    </button>
  );
}
