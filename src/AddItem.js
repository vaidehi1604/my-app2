import React from "react";
import { FaPlus } from "react-icons/fa"; // Correct import

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label>Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" className="btn" aria-label="Add Item">
        <FaPlus /> {/* Correct usage of FaPlus */}
      </button>
    </form>
  );
};

export default AddItem;
