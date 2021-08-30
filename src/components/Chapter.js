import React, { Component } from "react";
import { connect } from "react-redux";
import { firstPage, updateChapter } from "../actions";

export class Chapter extends Component {
  render() {
    return (
      <div
        className='chapter'
        onClick={() => {
          this.props.updateChapter(this.props.chapter);
          this.props.firstPage();
        }}
      >
        Chapter {this.props.chapter}
      </div>
    );
  }
}

const mapDispatchToProps = { updateChapter, firstPage };

export default connect(null, mapDispatchToProps)(Chapter);
