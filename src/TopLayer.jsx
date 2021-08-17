import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const TopLayer = (props) => {
  //Roadmap Numbers
  const [plannedNumber, setPLannedNmber] = useState([]);
  const [progressNumber, setPrgoressNmber] = useState([]);
  const [liveNumber, setLiveNumber] = useState([]);

  useEffect(() => {
    themNums();
  }, [props.product]);
  const themNums = () => {
    const planned = [];
    const inProgress = [];
    const live = [];
    props.product.forEach((data) => {
      if (data?.status === "planned") {
        planned.push(data);
      }
      if (data?.status === "in-progress") {
        inProgress.push(data);
      }
      if (data?.status === "live") {
        live.push(data);
      }
      setPLannedNmber(planned);
      setPrgoressNmber(inProgress);
      setLiveNumber(live);
    });
  };

  return (
    <header>
      <div className="headingText ">
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </div>
      <div className="buttonHeader">
        <div>
          <button
            onClick={() => {
              props.all();
            }}
          >
            All
          </button>
          <button>UI</button>
          <button>UX</button>
        </div>
        <div>
          <button
            onClick={() => {
              props.buttonEnhancement();
            }}
          >
            Enhancement
          </button>
          <button
            onClick={() => {
              props.bug();
            }}
          >
            Bug
          </button>
        </div>
        <button
          onClick={() => {
            props.feature();
          }}
        >
          Feature
        </button>
      </div>
      <div className="listHeader">
        <div>
          <h2>Roadmap</h2>
          <Link to={{ pathname: "/roadmap", state: { plannedNumber: true } }}>
            <p>View</p>
          </Link>
        </div>
        <div>
          <p> Planned</p>
          <p>{plannedNumber.length}</p>
        </div>
        <div>
          <p> In-Progress</p>
          <p>{progressNumber.length}</p>
        </div>
        <div>
          <p>Live</p>
          <p>{liveNumber.length}</p>
        </div>
      </div>
    </header>
  );
};

export default TopLayer;
