"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/Falling.module.css";

interface FallingObjectProps {
  count: number;
  children: React.ReactNode;
}

const FallingObject = ({ count, children }: FallingObjectProps) => {
  const [objects, setObjects] = useState<
    { id: number; left: string; duration: string; delay: string }[]
  >([]);

  useEffect(() => {
    const newObjects = Array.from({ length: count }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 70 + 15}%`,
      duration: `${Math.random() * 4 + 6}s`,
      delay: `${Math.random() * 3}s`,
    }));
    setObjects(newObjects);
  }, [count]);

  const items = React.Children.toArray(children);

  return (
    <div className={styles.container}>
      {objects.map((obj, index) => (
        <div
          key={obj.id}
          className={styles.fallingObject}
          style={{
            left: obj.left,
            animationDuration: obj.duration,
            animationDelay: obj.delay,
          }}
        >
          {items[index % items.length]}
        </div>
      ))}
    </div>
  );
};

export default FallingObject;
