import React, { createContext, useContext, useRef, useState } from "react";

import "./popover.css";

const PopoverContext = createContext({});

function Popover({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef(null);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const values = { isOpen, togglePopover, contentRef };

  return (
    <PopoverContext.Provider value={values}>
      <div className="popover">{children}</div>
    </PopoverContext.Provider>
  );
}

const Action = (props) => {
  const { label, node, children } = props;

  const { togglePopover } = useContext(PopoverContext);

  if (node) {
    return <button onClick={togglePopover}>{node}</button>;
  }

  if (children) {
    return <button onClick={togglePopover}>{children}</button>;
  }

  return <button onClick={togglePopover}>{label}</button>;
};

const Content = (props) => {
  const { children } = props;

  const { isOpen, contentRef } = useContext(PopoverContext);

  if (!isOpen) return null;

  return <div className="content">{children}</div>;
};

Popover.Action = Action;

Popover.Content = Content;

export default Popover;
