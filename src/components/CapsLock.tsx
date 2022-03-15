import React from "react";

interface Props {
  textValue: string;
}

const CapsLock: React.FC<Props> = (props) => {
  const textValue = props.textValue;
  const capsLockText = textValue.toUpperCase();
  return <div>{capsLockText}</div>;
};

export default CapsLock;
