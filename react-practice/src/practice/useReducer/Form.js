import React, { useReducer } from "react";

const INITIAL_STATE = {
  name: "",
  age: "",
  city: "",
};

const ACTION_TYPES = {
  CHANGE_NAME: "change_name",
  CHANGE_AGE: "change_age",
  CHANGE_CITY: "change_city",
};

const reducer = function (prevState, action) {
  const { type, value } = action;
  switch (type) {
    case ACTION_TYPES.CHANGE_NAME: {
      return {
        ...prevState,
        name: value,
      };
    }

    case ACTION_TYPES.CHANGE_AGE: {
      return {
        ...prevState,
        age: value,
      };
    }

    case ACTION_TYPES.CHANGE_CITY: {
      return {
        ...prevState,
        city: value,
      };
    }

    default: {
      return prevState;
    }
  }
};

const Form = () => {
  const [formState, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleNameChange = (e) => {
    dispatch({ type: ACTION_TYPES.CHANGE_NAME, value: e.target.value });
  };

  const handleAgeChange = (e) => {
    dispatch({ type: ACTION_TYPES.CHANGE_AGE, value: e.target.value });
  };

  const handleCityChange = (e) => {
    dispatch({ type: ACTION_TYPES.CHANGE_CITY, value: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formState);
  };

  return (
    <div className="form">
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={formState.name}
          onChange={(e) => handleNameChange(e)}
        ></input>
      </div>
      <div>
        <label>Age: </label>
        <input
          type="text"
          value={formState.age}
          onChange={(e) => handleAgeChange(e)}
        ></input>
      </div>
      <div>
        <label>City: </label>
        <input
          type="text"
          value={formState.city}
          onChange={(e) => handleCityChange(e)}
        ></input>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
