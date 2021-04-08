import React from "react";
import "./App.css";
import Video from "./Video";
import Flower from "./Assets/flower.webm";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url={Flower}
          channel="eliza"
          description="This works!"
          song="99 problems but React ain't one"
          likes={123}
          messages={456}
          shares={789}
        ></Video>
        <Video
          url={Flower}
          channel="eliza"
          description="This works!"
          song="99 problems but React ain't one"
          likes={123}
          messages={456}
          shares={789}
        ></Video>
      </div>

      {/* App container  */}
    </div>
  );
}

export default App;
