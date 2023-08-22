import { TopPageAdvantage } from "@/interfaces/page.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AdvantageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  advantages?: TopPageAdvantage[];
}
