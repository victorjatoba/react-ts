import axios from "axios";
import React from "react";

interface University {
  name: string;
}

const Room: React.FC = () => {
  const [universities, setUniversities] = React.useState<University[]>([
    {
      name: "USP"
    }
  ]);

  React.useEffect(() => {
    axios
      .get(`http://universities.hipolabs.com/search?country=United+States`)
      .then((response) => {
        setUniversities(response.data);
      })
      .catch((error) => {
        console.log(error);
        setUniversities([{ name: "MIT" }, { name: "Stanford" }]);
      });
  }, []);

  return (
    <div>
      <h1>Universities</h1>
      <ul>
        {universities.map((uni) => (
          <li key={uni.name}>{uni.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Room;
