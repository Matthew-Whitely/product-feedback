import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import comment from "./assets/shared/icon-comments.svg";
import upArrow from "./assets/shared/icon-arrow-up.svg";
import firebase from "firebase";

const Discussion = (props) => {
  let clickedID = props.match.params.dataID;
  console.log(clickedID);
  const [fbData, setFbData] = useState([]);
  const [value, setValue] = useState("");
  const [content, setContent] = useState(value.slice(0, 250));

  const textareaRemainingNumber = useCallback(
    (text) => {
      setContent(text.slice(0, 250));
    },
    [250, setContent]
  );

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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitObj = {
      id: 3,
      content: content,
      user: {
        image: "/user-images/image-suzanne.jpg",
        name: "Suzanne Chang",
        username: "upbeat1811",
      },
    };
    const dbRef1 = firebase
      .database()
      .ref()
      .child(`productRequests/${clickedID - 1}/comments`);
    dbRef1.push(submitObj, (err) => {
      if (err) console.log(err);
    });
  };
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

      {fbData.map((data) => {
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
                {!data.comments
                  ? console.log("notta")
                  : data.comments.map((data) => {
                      return (
                        <div className="mainCommentSection">
                          <div className="personInfo">
                            {/* <img src={require(`${data.user.image}`)} /> */}
                            <img src={data.user.image} />

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

                            {data.replies && data.replies.length >= 1
                              ? data.replies.map((e) => {
                                  return (
                                    <div className="replyContent">
                                      <div className="personInfo">
                                        <img src={e.user.image} />

                                        <div className="handle">
                                          <p>{e.user.name}</p>
                                          <p>{e.user.username}</p>
                                        </div>
                                        <div className="reply">
                                          <button>Reply</button>
                                        </div>
                                      </div>
                                      <p>
                                        <span className="replyingTo">
                                          @{e.replyingTo}
                                        </span>
                                        {e.content}
                                      </p>
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
      <div className="commentForm">
        <form onSubmit={handleSubmit}>
          <h2>Add Comment</h2>
          <label htmlFor="textarea"></label>
          <textarea
            onChange={(event) => textareaRemainingNumber(event.target.value)}
            value={content}
            id="textarea"
          />
          <div className="bottomForm">
            <p>{250 - content.length} Characters Left</p>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Discussion;
