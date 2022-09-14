import { useRef, useState, useEffect } from "react";
import { StyledSpring, StyledSpringSection } from "./styles/SpringCover.styled";

export default function SpringCover() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <StyledSpringSection>
      <StyledSpring
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      />
    </StyledSpringSection>
  );
}

function useFollowPointer(ref) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}
