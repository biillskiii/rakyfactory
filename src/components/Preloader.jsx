import React from "react";
function Loading() {
  return (
    <div className="bg-P1 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-95 z-50">
      <span className="loading loading-infinity loading-xl text-P2"></span>
    </div>
  );
}

export default Loading;
