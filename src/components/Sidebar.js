import React from "react";
import Chapter from "./Chapter";

export default function Sidebar(props) {
  const chapterList = props.chapterList.map((chapter) => (
    <Chapter
      key={chapter.chapter}
      chapter={chapter.chapter}
      url={chapter.imageUrl}
      onClick={props.updateUrl}
    />
  ));

  return <div className="side">{chapterList}</div>;
}
