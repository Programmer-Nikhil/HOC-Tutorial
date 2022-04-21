import React from "react";
import CounterHOC from "../HOC/CounterHOC";

const CommentCounter = (props) => {
  const { eventCount, handleEventClick } = props;

  return (
    <>
      <div style={{ margin: "10px", padding: "10px" }}>{eventCount}</div>
      <div>
        <button className="btn btn-primary" onClick={handleEventClick}>
          Comments Counter
        </button>
      </div>
    </>
  );
};

const ExtendedCommentsComponent = CounterHOC(CommentCounter, 5);
export default ExtendedCommentsComponent;
