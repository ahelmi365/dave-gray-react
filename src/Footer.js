import React from "react";

const Footer = ({ className, length }) => {
  const date = new Date();
  return (
    <p className={className}>
      ({length} list {length === 1 ? "item" : "items"}) 
      Copyrights @{date.getFullYear()}
    </p>
  );
};

export default Footer;
