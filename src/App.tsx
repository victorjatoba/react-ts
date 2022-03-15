import "./styles.css";
import NameField from "./NameField";
import { useState } from "react";
import ButtonOperation from "./ButtonOperation";
import Room from "./components/Room";

export default function App() {
  const victorJatoba = {
    name: "Victor",
    lastName: "Jatobá"
  };
  const [points, setPoints] = useState<number>(0);

  return (
    <div className="App">
      <h1>A component Example</h1>
      <div>
        <h3>Person:</h3>
        <NameField person={victorJatoba} />
      </div>
      <div>
        Points:
        <ButtonOperation
          operation={"-"}
          mathChangeEvent={() => setPoints(points - 1)}
        />
        {points}
        <ButtonOperation
          operation={"+"}
          mathChangeEvent={() => setPoints(points + 1)}
        />
      </div>
      <div>
        <Room />
      </div>
    </div>
  );
}
