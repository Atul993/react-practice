import React from "react";

function Form() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do yoy need for your 😍 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
