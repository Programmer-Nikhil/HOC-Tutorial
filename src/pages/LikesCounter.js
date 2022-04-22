import React from "react";
import CounterHOC from "../HOC/CounterHOC";

/**
 * HOC is a Higher Order Component used as a composition pattern of react to
 * reduce the common code and make it as a HOC so that code can become reusable
 * It increases the code quality and make the application fast.
 */

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
