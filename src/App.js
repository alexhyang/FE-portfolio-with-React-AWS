import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import { chapterCoverRev as chapterList } from "./data";

function App() {
  const [currentUrl, setUrl] = useState(chapterList[0].imageUrl);

  function updateUrl(url) {
    setUrl(url);
  }

  return (
    <div className="App">
      <Sidebar updateUrl={updateUrl} chapterList={chapterList} />
      <Main imageUrl={currentUrl} />
    </div>
  );
}

export default App;
