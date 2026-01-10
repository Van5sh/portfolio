"use client";

import { vertexShader, fragmentShader } from "../lib/shaders";

const InversionLens = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div className={`inversion-lens ${className}`}>
      <img src={src} alt="" style={{ display: "none" }} />
    </div>
  );
};

export default InversionLens;
