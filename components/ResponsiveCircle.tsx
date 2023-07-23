'use client';

import { useEffect, useRef, useState } from 'react';

interface CirclerCoordinates {
  x: number;
  y: number;
  classnames: string;
}

export const ResponsiveCircle = ({ x, y, classnames }: CirclerCoordinates) => {
  const [circlePosition, setCirclePosition] = useState({ x, y });
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const circleRect = circleRef.current?.getBoundingClientRect();
      if (!circleRect) return;

      const circleX = circleRect.left + circleRect.width / 2;
      const circleY = circleRect.top + circleRect.height / 2;

      const distance = Math.sqrt((circleX - clientX) ** 2 + (circleY - clientY) ** 2);

      if (distance < 200) {
        const offsetX = clientX - circleX;
        const offsetY = clientY - circleY;
        setCirclePosition((prevPosition) => ({
          x: prevPosition.x + offsetX / 80,
          y: prevPosition.y + offsetY / 80
        }));
      } else {
        setCirclePosition((prevPosition) => ({
          x: prevPosition.x + (circlePosition.x - prevPosition.x) / 10,
          y: prevPosition.y + (circlePosition.y - prevPosition.y) / 10
        }));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        ref={circleRef}
        style={{
          top: circlePosition.y,
          left: circlePosition.x,
          position: 'absolute',
          borderRadius: '50%'
        }}
        className={classnames}
      />
    </div>
  );
};
