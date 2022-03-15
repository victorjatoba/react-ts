import React from "react";

interface Props {
  operation: string;
  mathChangeEvent: (value: number) => void;
}

const ButtonOperation: React.FC<Props> = ({ operation, mathChangeEvent }) => {
  return <button onClick={() => mathChangeEvent}>{operation}</button>;
};

export default ButtonOperation;
