import React from "react";
import "../styles/MetadataForm.css";

function MetadataForm() {
  return (
    <div className="metadata-form">
      <h3>Metadata</h3>
      <label>Address</label>
      <input type="text" placeholder="Enter address" />
    </div>
  );
}

export default MetadataForm;
