import React from "react";
import ItemList from "./ItemList";

const Content = ({ title, items, handleCheck, handleDelete }) => {
  return (
    <>
      <h1>{title}</h1>
      {items?.length > 0 ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <h2>No list items</h2>
      )}
    </>
  );
};

Content.defaultProps = {
  // title: "Default Title",
};

export default Content;
