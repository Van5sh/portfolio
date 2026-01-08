import React from 'react';

const CircleIcon = ({ size = 24, color = "currentColor", ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill={color} />
    </svg>
);

export default CircleIcon;
