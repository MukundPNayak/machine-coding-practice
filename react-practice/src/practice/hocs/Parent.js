import React from "react";
import withAge from "./withAge";
import withCity from "./withCity";

const Parent = ({ name, age, city }) => {
  console.log("Parent");
  return (
    <div>
      Hello {name}
      <span> My Age is {age}</span>
      <span> My city is {city}</span>
    </div>
  );
};

export default withCity(withAge(Parent));
