import React, { memo } from "react";

export const Navbar = memo(({ name }) => {
  return (
    <div
      className="page-header bg-dark"
      style={{
        color: "white",
        position: "fixed",
        top: "0px",
        left: "160px",
        display: "block",
        width: "100%",
        padding: "15px 20px",
        borderLeft: "1px solid #444",
      }}
    >
      <h2>{name}</h2>
    </div>
  );
});
