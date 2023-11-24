// Import React and any necessary styling
import React, { useState } from "react";
import "./Dashboard.css"; // Import your CSS file
import { Link } from "react-router-dom";

export function Dashboard() {

  return (
    <div className="dashboard-container">
      <Link to={"/chat"} >CHAT PAGE</Link>
    </div>
  );
}
