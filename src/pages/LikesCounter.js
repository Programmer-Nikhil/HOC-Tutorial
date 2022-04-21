import React from "react";
import CounterHOC from "../HOC/CounterHOC";

const LikesCounter = (props) => {
  const { eventCount, handleEventClick } = props;

  return (
    <>
      <div style={{ margin: "10px", padding: "10px" }}>{eventCount}</div>
      <div>
        <button className="btn btn-primary" onClick={handleEventClick}>
          Likes
        </button>
      </div>
    </>
  );
};

const ExtendedLikesComponent = CounterHOC(LikesCounter, 10);
export default ExtendedLikesComponent;
