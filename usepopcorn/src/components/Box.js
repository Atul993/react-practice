import React, { useState } from "react";

function Box({ children }) { // we can use element here instead of children explicitly
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen &&  children }
    </div>
  );
}

export default Box;
