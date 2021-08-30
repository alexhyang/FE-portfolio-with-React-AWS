import React, { Component } from "react";
import { connect } from "react-redux";
import Control from "./Control";
import { chapterCoverRev } from "../data";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.getUrl = this.getUrl.bind(this);
  }

  getMaxPage(chapter) {
    for (var i in chapterCoverRev) {
      if (chapter === chapterCoverRev[i].chapter) {
        return chapterCoverRev[i].page_num;
      }
    }
  }

  getUrl(chapter, page = 1) {
    for (var i in chapterCoverRev) {
      if (
        chapter === chapterCoverRev[i].chapter &&
        page <= chapterCoverRev[i].page_num
      ) {
        let url = `/images/contents/${chapter}/${page}.png`;
        return url;
      }
    }
  }

  render() {
    return (
      <div className='main'>
        <img
          src={this.getUrl(this.props.chapter, this.props.page)}
          alt={"Page " + this.props.page + " of Chapter " + this.props.chapter}
        ></img>
        <Control max_page={this.getMaxPage(this.props.chapter)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chapter: state.chapter,
  page: state.page,
});

export default connect(mapStateToProps)(Main);
