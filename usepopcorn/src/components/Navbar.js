import React, { useState } from "react";
import Logo from "./Logo";

function Navbar({ children }) {
  return (
    <div>
      <nav className="nav-bar">
        <Logo />
        {children}
      </nav>
    </div>
  );
}

export default Navbar;
