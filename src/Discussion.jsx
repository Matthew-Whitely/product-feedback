import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import comment from "./assets/shared/icon-comments.svg";
import upArrow from "./assets/shared/icon-arrow-up.svg";

const Discussion = (props) => {
  let clickedID = props.match.params.dataID;

  const [productRequests, setProductRequests] = useState([]);
  const [clickedProduct, setClickedProduct] = useState([]);

  useEffect(() => {
    axios
      .get("../data.json")
      .then((res) => {
        console.log(res);
        setProductRequests(res.data.productRequests);
        console.log("workign?");
      })
      .catch((err) => console.log(err));
  }, [props]);
  console.log(clickedProduct);
  return (
    <section className="discussionSection">
      <div className="displayTopBanner">
        <div>
          <Link to="/" exact>
            <p>Go back</p>
          </Link>
        </div>
        <button>Add Feedback</button>
      </div>
      {productRequests.map((data) => {
        return (
          <div className="disscusionMain">
            {data.id == clickedID ? (
              <>
                <div key={data.id} className="displayInfo">
                  <div className="upvote">
                    <img src={upArrow} alt="up arrow icon" />
                    <p>{data.upvotes}</p>
                  </div>
                  <div className="topic">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <button>{data.category}</button>
                  </div>
                  <div className="discussion">
                    <div>
                      <img src={comment} alt="comment icon" />
                    </div>
                    {data.comments &&
                    data.comments[1] &&
                    data.comments[1].replies ? (
                      <p>
                        {data.comments.length + data.comments[1].replies.length}
                      </p>
                    ) : data.comments && data.comments[0].replies ? (
                      <p>
                        {data.comments.length + data.comments[0].replies.length}
                      </p>
                    ) : data.comments ? (
                      <p>{data.comments.length}</p>
                    ) : (
                      <p>0</p>
                    )}
                  </div>
                </div>
                {data.comments.map((data) => {
                  return (
                    <div className="mainCommentSection">
                      <div className="personInfo">
                        {/* <img src={require(`${data.user.image}`)} /> */}
                        <img src={data.user.image} />
                        {console.log(data)}
                        <div className="handle">
                          <p>{data.user.name}</p>
                          <p>{data.user.username}</p>
                        </div>
                        <div className="reply">
                          <button>Reply</button>
                        </div>
                      </div>
                      <div className="theComments">
                        <p>{data.content}</p>
                        {/* {data.replies.map((e) => {
                          console.log(e);
                        })} */}
                        {data.replies && data.replies.length >= 1
                          ? data.replies.map((e) => {
                              return (
                                <div className="replyContent">
                                  <div className="personInfo">
                                    {/* <img src={require(`${data.user.image}`)} /> */}
                                    <img src={e.user.image} />
                                    {console.log(data)}
                                    <div className="handle">
                                      <p>{e.user.name}</p>
                                      <p>{e.user.username}</p>
                                    </div>
                                    <div className="reply">
                                      <button>Reply</button>
                                    </div>
                                  </div>
                                  <p>{e.content}</p>
                                </div>
                              );
                            })
                          : console.log("nothing")}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
        );
      })}
    </section>
  );
};
export default Discussion;
