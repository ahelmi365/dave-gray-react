import React from "react";
import ItemList from "./ItemList";

const Content = ({ title, className, items, handleCheck, handleDelete }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {items.length > 0 ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <h2>No list items</h2>
      )}
    </div>
  );
};

Content.defaultProps = {
  // title: "Default Title",
};

export default Content;
