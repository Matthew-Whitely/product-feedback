import { useEffect, useState } from "react";
import TopLayer from "./TopLayer";
import Display from "./Display";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import "./App.scss";
import Roadmap from "./Roadmap";

function App() {
  // const [data, setData] = useState();
  const [productRequests, setProductRequests] = useState([]);

  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => setProductRequests(res.data.productRequests))
      .catch((err) => console.log(err));
  }, []);

  // const buttonEnhancement = () => {
  //   const enhanceArr = [];

  //   productRequests.forEach((data) => {
  //     if (data?.category === "enhancement") {
  //       enhanceArr.push(data);
  //     }
  //     setProductRequests(enhanceArr);
  //   });
  // };

  // const buttonBug = () => {
  //   const enhanceArr = [];

  //   productRequests.forEach((data) => {
  //     if (data?.category === "bug") {
  //       enhanceArr.push(data);
  //     }
  //     setProductRequests(enhanceArr);
  //   });
  // };

  return (
    <div className="App wrapper">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Display product={productRequests} />}
          />
          <Route
            exact
            path="/roadmap"
            render={() => <Roadmap product={productRequests} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
