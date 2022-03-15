import React, { MouseEventHandler } from "react";

interface Props {
  operation: string;
  mathChangeEvent: MouseEventHandler<HTMLButtonElement>;
}

const ButtonOperation: React.FC<Props> = ({ operation, mathChangeEvent }) => {
  return <button onClick={mathChangeEvent}>{operation}</button>;
};

export default ButtonOperation;
