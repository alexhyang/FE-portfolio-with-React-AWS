import React, { Component } from "react";
import { connect } from "react-redux";
import { firstPage, lastPage, previousPage, nextPage } from "../actions";

export class Control extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.firstPage}
          disabled={this.props.page === 1 ? true : false}
        >
          First
        </button>
        <button
          onClick={this.props.previousPage}
          disabled={this.props.page === 1 ? true : false}
        >
          Previous
        </button>
        <span> {this.props.page} / {this.props.max_page} </span>
        <button
          onClick={this.props.nextPage}
          disabled={this.props.page < this.props.max_page ? false : true}
        >
          Next
        </button>
        <button
          onClick={()=>this.props.lastPage(this.props.max_page)}
          disabled={this.props.page < this.props.max_page ? false : true}
        >
          Last
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chapter: state.chapter,
  page: state.page,
});

const mapDispatchToProps = {
  firstPage,
  lastPage,
  previousPage,
  nextPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Control);
