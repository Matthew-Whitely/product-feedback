const TopLayer = (props) => {
  return (
    <header className="wrapper">
      <div className="headingText ">
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </div>
      <div>
        <button>All</button>
        <button>UI</button>
        <button>UX</button>
        <button>Enhancement</button>
        <button>Bug</button>
        <button>Feature</button>
      </div>
      <div>
        <div>
          <h2>Roadmap</h2>
          <a>View</a>
        </div>
        <ul>
          <li>
            <p>Planned</p>
            <p>2</p>
          </li>
          <li>
            <p>In-Progress </p>
            <p>3</p>
          </li>
          <li>
            <p>Live</p>
            <p>1</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default TopLayer;
