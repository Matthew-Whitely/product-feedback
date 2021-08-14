import { useEffect, useState } from "react";
import TopLayer from "./TopLayer";
import "./App.scss";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      <TopLayer data={data} />
    </div>
  );
}

export default App;
