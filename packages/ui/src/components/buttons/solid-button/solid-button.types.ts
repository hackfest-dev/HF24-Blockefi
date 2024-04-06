import type { MouseEvent } from "react";

export interface SolidButtonProps {
  label: string;
  handleOnClick?: (event: MouseEvent<HTMLButtonElement>) => void
  type?: "button" | "submit" | "reset" | undefined;
  btnColor?: string;
  className?: string;
}