import React from "react";
import "./App.css";

function App({ onSubmit }) {
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <button data-testid="submit-button" type="submit">
          <span data-testid="submit-button-span">Submit Button</span>
        </button>
      </form>
    </div>
  );
}

export default App;
