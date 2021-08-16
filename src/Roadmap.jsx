import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import upArrow from "./assets/shared/icon-arrow-up.svg";
import comment from "./assets/shared/icon-comments.svg";

const Roadmap = (props) => {
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
    <section className="roadMap">
      <div className="displayTopBanner">
        <div>
          <Link to="/" exact>
            <p>Go back</p>
          </Link>
          <p>Roadmap</p>
        </div>
        <button>Add Feedback</button>
      </div>
      <div className="roadMapData">
        <div className="dataStorage">
          {plannedNumber.map((data) => {
            return (
              <div className="data orange">
                <div>
                  <p>Planned</p>
                </div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <button>{data.category}</button>
                <div className="bottomInfo">
                  <div className="upvote">
                    <div>
                      <img src={upArrow} alt="up arrow icon" />
                    </div>
                    <p>{data.upvotes}</p>
                  </div>
                  <div className="discussion">
                    <div>
                      <img src={comment} alt="comment icon" />
                    </div>
                    {data.comments ? <p>{data.comments.length} </p> : <p>0</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="dataStorage">
          {progressNumber.map((data) => {
            return (
              <div className="data purple">
                <div>
                  <p>Planned</p>
                </div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <button>{data.category}</button>
                <div className="bottomInfo">
                  <div className="upvote">
                    <div>
                      <img src={upArrow} alt="up arrow icon" />
                    </div>
                    <p>{data.upvotes}</p>
                  </div>
                  <div className="discussion">
                    <div>
                      <img src={comment} alt="comment icon" />
                    </div>
                    {data.comments ? <p>{data.comments.length} </p> : <p>0</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="dataStorage">
          {liveNumber.map((data) => {
            return (
              <div className="data blue">
                <div>
                  <p>Planned</p>
                </div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <button>{data.category}</button>
                <div className="bottomInfo">
                  <div className="upvote">
                    <div>
                      <img src={upArrow} alt="up arrow icon" />
                    </div>
                    <p>{data.upvotes}</p>
                  </div>
                  <div className="discussion">
                    <div>
                      <img src={comment} alt="comment icon" />
                    </div>
                    {data.comments ? <p>{data.comments.length} </p> : <p>0</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
