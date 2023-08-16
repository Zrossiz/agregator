import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SpanProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  size?: "s" | "m" | "l";
  children: string;
}
