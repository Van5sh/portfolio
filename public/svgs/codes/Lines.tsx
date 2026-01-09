import * as React from "react";
import { SVGProps } from "react";
const Lines = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={200}
    fill="none"
    viewBox="0 0 10 200"
    {...props}
  >
    <path stroke="#FC573B" strokeWidth={4} d="M5 0v200" />
  </svg>
);
export default Lines;
