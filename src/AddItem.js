import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmitItem }) => {
  const addItemRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmitItem}>
      <label htmlFor="addItem" className="hidden-element">Add Item</label>
      <input
        className="input-field"
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        ref={addItemRef}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => addItemRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
