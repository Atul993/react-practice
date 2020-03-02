import React from "react";

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
          id={item.id}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
