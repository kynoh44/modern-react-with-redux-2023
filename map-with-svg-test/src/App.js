import { useState } from "react";
import ChildComp from "./Child";

function getRandPlanets() {
  const planetName = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "saturn",
    "uranus",
    "neptune"
  ];
  return planetName[Math.floor(Math.random() * planetName.length)];
}

function App() {
  const [planets, setPlanets] = useState([]);

  function handleClick() {
    setPlanets([...planets, getRandPlanets()]);
  }

  const elComp = planets.map((planet, idx) => {
    return <ChildComp name={planet} key={idx} />
  });

  return (
    <div>
      <button onClick={handleClick}>Add Planet!</button>
      <section>{elComp}</section>
    </div>
  );

}

export default App;