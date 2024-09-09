import React from "react";
function Book(probs) {
  return (
    <div className="note">
      {" "}
      <h1>{probs.title}</h1>
      <p>{probs.para}</p>
    </div>
  );
}
export default Book;
