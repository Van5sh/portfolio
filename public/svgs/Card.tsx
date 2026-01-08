import * as React from "react";
import { SVGProps } from "react";
const CardComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={386}
    height={584}
    fill="none"
    {...props}
  >
    <path
      fill="#E8E0DD"
      d="M343 0c2.574 0 5.067.35 7.435 1H358c15.464 0 28 12.536 28 28v527c0 15.464-12.536 28-28 28H43c-2.574 0-5.067-.35-7.435-1H28c-15.464 0-28-12.536-28-28V28C0 12.536 12.536 0 28 0h315Z"
    />
  </svg>
);
export default CardComponent;
