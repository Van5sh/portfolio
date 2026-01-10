import * as React from "react";
import { SVGProps } from "react";
const OrangeCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={52}
    fill="none"
    {...props}
  >
    <ellipse cx={25} cy={26} fill="#FC573B" rx={25} ry={26} />
  </svg>
);
export default OrangeCircle;
