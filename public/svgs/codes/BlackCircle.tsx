import * as React from "react"
import { SVGProps } from "react"
const BlackCircle = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={204}
        height={191}
        fill="none"
        {...props}
    >
        <ellipse cx={102} cy={95.5} fill="#000" rx={102} ry={95.5} />
    </svg>
)
export default BlackCircle
