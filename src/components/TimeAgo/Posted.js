import React from "react";
import ReactTimeAgo from "react-time-ago";

export default function Posted({ date }) {
  return (
    <div className="time">
      posted: <ReactTimeAgo date={date} locale="en-US" />
    </div>
  );
}
