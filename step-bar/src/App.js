import "./App.css";
import { useState } from "react";

const messages = [
  "Learn React 🌞",
  "Apply for jobs 💼",
  "Invest your new income 🥳",
];

function App() {
  const [step, setstep] = useState(1);

  const handlePrevious = () => {
    step > 1 && setstep((step) => step - 1);
  };

  const handleNext = () => {
    step < 3 && setstep((step) => step + 1);
  };
  return (
    <div class="app">
      <div className="steps">
        <div class="numbers">
          <div class={`number ${step >= 1 ? "active" : ""}`}>1</div>
          <div class={`number ${step >= 2 ? "active" : ""}`}>2</div>
          <div class={`number ${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <p class="message">
          Step - {step} {messages[step - 1]}
        </p>
        <div class="btns">
          <button class="btn" onClick={handlePrevious}>
            Previous
          </button>
          <button class="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
