import { useEffect, useState } from "react";
import Display from "./Display";
import Discussion from "./Discussion";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Roadmap from "./Roadmap";

function App() {
  const [productRequests, setProductRequests] = useState([]);

  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => {
        setProductRequests(res.data.productRequests);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

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
          <Route exact path="/discussion/:dataID" component={Discussion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
