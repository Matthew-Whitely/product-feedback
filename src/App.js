import { useEffect, useState } from "react";
import Display from "./Display";
import Discussion from "./Discussion";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Roadmap from "./Roadmap";
import firebase from "./firebase.js";

function App() {
  const [fbData, setFbData] = useState([]);

  useEffect(() => {
    // Here we create a variable that holds a reference to our database
    const dbRef = firebase.database().ref();
    dbRef.on("value", (response) => {
      //  Create a new variable to store the new state that we want to introduce to out app
      const newState = [];
      // store the response from our database
      const data = response.val();
      console.log(data);
      for (let key in data) {
        newState.push({
          key: key,
          info: data[key],
        });
      }

      setFbData(newState[1].info);
    });

    console.log(fbData);
  }, []);

  return (
    <div className="App wrapper">
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Display product={fbData} />} />
          <Route
            exact
            path="/roadmap"
            render={() => <Roadmap product={fbData} />}
          />
          <Route exact path="/discussion/:dataID" component={Discussion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
