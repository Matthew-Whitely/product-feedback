const TopLayer = (props) => {
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
          <a href="">View</a>
        </div>
        <div>
          <p> Planned</p>
          <p>2</p>
        </div>
        <div>
          <p> In-Progress</p>
          <p>3</p>
        </div>
        <div>
          <p>Live</p>
          <p>1</p>
        </div>
      </div>
    </header>
  );
};

export default TopLayer;
