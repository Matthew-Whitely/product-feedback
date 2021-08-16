import { useEffect, useState } from "react";
import TopLayer from "./TopLayer";
import comment from "./assets/shared/icon-comments.svg";
import upArrow from "./assets/shared/icon-arrow-up.svg";
const Display = ({ product }) => {
  const [ulti, setUlti] = useState(product);

  //Sort functions

  const [updateProduct, setUpdateProduct] = useState([]);
  const [userSelect, setUserSelect] = useState("placeHolder");
  const [productLength, setProductLength] = useState(0);

  //buttons that display catgegorys
  const [change, setChange] = useState(false);

  const buttonEnhancement = () => {
    const enhanceArr = [];

    product.forEach((data) => {
      if (data?.category === "enhancement") {
        enhanceArr.push(data);
      }
      setUlti(enhanceArr);
      setChange(true);
    });
  };

  const buttonBug = () => {
    const enhanceArr = [];

    product.forEach((data) => {
      if (data?.category === "bug") {
        enhanceArr.push(data);
      }
      setUlti(enhanceArr);
      setChange(true);
    });
  };
  const buttonFeature = () => {
    const enhanceArr = [];

    product.forEach((data) => {
      if (data?.category === "feature") {
        enhanceArr.push(data);
      }
      setUlti(enhanceArr);
      setChange(true);
    });
  };

  const buttonAll = () => {
    setUlti(product);
    setChange(false);
  };

  //Figuring out how many comments and replies
  // const commentReply = () => {
  //   const commentArr = [];
  // const filts = product.comments.filter((product) => product !== undefined);
  // product.forEach((e) => {
  //   if (e.comments === undefined) {
  //     console.log("I FUCKING KNOW");
  //   } else {
  //     commentArr.push(e.comments);
  //   }
  // });

  // commentArr.forEach((e) => {
  //what i want to do is check if there is an array called replies within the any of the objects

  // if (e[0]["replies"] === undefined) {
  //   console.log("ok 0 doesnt have any");
  // } else if (e[0]["replies"]) {
  //   console.log(e[0]["replies"]);
  // }
  //   if (e[1]["replies"] === undefined) {
  //     console.log("yup");
  //   } else if (e[1]["replies"]) {
  //     console.log(e[1]["replies"]);
  //   }
  // });

  // if (product.comments === undefined) {
  //   console.log("nothing");
  // } else {
  //   console.log("hello");
  // }
  // };
  // commentReply();

  const sortBy = (e) => {
    setUserSelect(e.target.value);
    if (e.target.value === "MostUpvotes") {
      sortByMostUpvote();
    } else if (e.target.value === "LeastUpvotes") {
      sortByLeastupvote();
    } else if (e.target.value === "MostComments") {
      console.log("working");
      sortByMostComments();
    } else if (e.target.value === "LeastComments") {
      sortByLeastcomments();
    }
  };

  //all the sort function

  const sortByMostUpvote = () => {
    if (change !== true) {
      product.sort((item1, item2) => {
        return item2.upvotes - item1.upvotes;
      });
      setUpdateProduct(product);
    } else {
      ulti.sort((item1, item2) => {
        return item2.upvotes - item1.upvotes;
      });
      setUpdateProduct(product);
    }
  };

  const sortByLeastupvote = () => {
    if (change !== true) {
      product.sort((item1, item2) => {
        return item1.upvotes - item2.upvotes;
      });
      setUpdateProduct(product);
    } else {
      ulti.sort((item1, item2) => {
        return item1.upvotes - item2.upvotes;
      });
      setUpdateProduct(product);
    }
  };

  const sortByMostComments = () => {
    if (change !== true) {
      product.sort((item1, item2) => {
        if (item1.comments) {
          item1 = item1.comments.length;
        } else if (item1.comments === undefined) {
          item1 = 0;
        }
        if (item2.comments) {
          item2 = item2.comments.length;
        } else if (item2.comments === undefined) {
          item2 = 0;
        }
        return item2 - item1;
      });
      setUpdateProduct(product);
    } else {
      ulti.sort((item1, item2) => {
        // let item1 = item1.comments ? item1.comments.length : 0;

        if (item1.comments) {
          item1 = item1.comments.length;
        } else if (item1.comments === undefined) {
          item1 = 0;
        }
        if (item2.comments) {
          item2 = item2.comments.length;
        } else if (item2.comments === undefined) {
          item2 = 0;
        }
        return item2 - item1;
      });
      setUpdateProduct(product);
    }
  };

  const sortByLeastcomments = () => {
    if (change !== true) {
      product.sort((item1, item2) => {
        if (item1.comments) {
          item1 = item1.comments.length;
        } else if (item1.comments === undefined) {
          item1 = 0;
        }
        if (item2.comments) {
          item2 = item2.comments.length;
        } else if (item2.comments === undefined) {
          item2 = 0;
        }
        return item1 - item2;
      });
      setUpdateProduct(product);
    } else {
      ulti.sort((item1, item2) => {
        // let item1 = item1.comments ? item1.comments.length : 0;

        if (item1.comments) {
          item1 = item1.comments.length;
        } else if (item1.comments === undefined) {
          item1 = 0;
        }
        if (item2.comments) {
          item2 = item2.comments.length;
        } else if (item2.comments === undefined) {
          item2 = 0;
        }
        return item1 - item2;
      });
      setUpdateProduct(product);
    }
  };

  return (
    <>
      <header>
        <TopLayer
          buttonEnhancement={buttonEnhancement}
          bug={buttonBug}
          all={buttonAll}
          feature={buttonFeature}
        />
      </header>
      <main>
        <section className="mainDisplay">
          <div className="displayTopBanner">
            <p>6 Suggestions</p>
            <label htmlFor="sort">Sort By:</label>
            <select onChange={sortBy} name="sort" value={userSelect}>
              <option value="placeHolder" disabled>
                PICK ONE
              </option>
              <option value="MostUpvotes">Most Upvotes</option>
              <option value="LeastUpvotes">Least Upvotes</option>
              <option value="MostComments">Most Comments</option>
              <option value="LeastComments">Least Comments</option>
            </select>
            <button>Add Feedback</button>
          </div>
          {change === true
            ? ulti.map((data) => {
                return (
                  <div className="displayInfo">
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
                      <img src={comment} alt="comment icon" />
                      {data.comments ? (
                        <p>{data.comments.length} </p>
                      ) : (
                        <p>0</p>
                      )}
                    </div>
                  </div>
                );
              })
            : product.map((data) => {
                return (
                  <div className="displayInfo">
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
                      <img src={comment} alt="comment icon" />
                      {data.comments ? (
                        <p>{data.comments.length} </p>
                      ) : (
                        <p>0</p>
                      )}
                    </div>
                  </div>
                );
              })}
        </section>
      </main>
    </>
  );
};

export default Display;
