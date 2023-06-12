import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ItemList = ({ item , handleCheck, handleDelete}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.checked}
        name={item.id}
        id={item.id}
        onChange={()=> handleCheck(item.id)}
      />
      <label htmlFor={item.id}>{item.item}</label>
      <FaTrashAlt  
      onClick={()=> handleDelete(item.id)}
        aria-label={`Delet ${item.item}`}
        role="button"
      />
    </li>
  );
};

export default ItemList;
