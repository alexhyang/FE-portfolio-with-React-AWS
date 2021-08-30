import React, { Component } from "react";
import { chapterCoverRev } from "../data";
import Chapter from "./Chapter";

export class Side extends Component {
  render() {
    const chapterList = chapterCoverRev.map((chapter) => (
      <Chapter
        key={chapter.chapter}
        chapter={chapter.chapter}
        url={chapter.imageUrl}
      />
    ));
    return <div className='side'>{chapterList}</div>;
  }
}

export default Side;
