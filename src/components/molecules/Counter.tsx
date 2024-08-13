import { useRef } from "react";

import Button from "../atoms/button";
import Input from "../atoms/input";

const Click = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="t-white">
      <input ref={inputRef} />

      <Input label="Name" ref={inputRef} />

      <Button className="mx-2" onClick={handleClick}>
        Click
      </Button>
    </div>
  );
};

export default Click;
