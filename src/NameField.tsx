import React from "react";

interface Person {
  name: string;
  lastName: string;
}

interface Props {
  person: Person;
}

const NameField: React.FC<Props> = ({ person }) => {
  return (
    <div>
      <div>Name: {person.name}</div>
      <div>Last name: {person.lastName}</div>
    </div>
  );
};

export default NameField;
