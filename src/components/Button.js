import React from "react"

export const Button = () =>
{
  return (
    <div className="btn">
      <hr />
      <div className="btn-container">
        <button type="button" className="btn-back" disabled>
          Go Back
        </button>
        <button type="button" className="btn-continue">
          Continue
        </button>
      </div>
    </div>
  );
}
