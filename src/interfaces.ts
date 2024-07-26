export interface toastMsg {
  text: string;
  summary?: string;
  type: "warning" |"notification" | "error";
  link?: string;
}


export interface xyChart {
  x: number | string;
  y: number | string;
}

export interface chartData {
  x : string[] | number[];
  y : any[];
}
