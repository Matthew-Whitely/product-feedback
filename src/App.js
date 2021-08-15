import { useEffect, useState } from "react";
import TopLayer from "./TopLayer";
import Display from "./Display";
import axios from "axios";

import "./App.scss";

function App() {
  // const [data, setData] = useState();
  const [productRequests, setProductRequests] = useState([]);
  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => setProductRequests(res.data.productRequests))
      .catch((err) => console.log(err));
    // fetch("data.json")
    //   .then((res) => {
    //     return res;
    //   })
    //   .then((res) => {
    //     console.log(res.productRequests);
    //     setProductRequests([res.productRequests]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  console.log(productRequests);
  return (
    <div className="App wrapper">
      <TopLayer />
      <Display product={productRequests} />;
    </div>
  );
}

export default App;
