import React, { useState } from "react";
//import styled from "styled-components";
import styles from "./CourseInput.module.css";
import Button from "../UI/Button";
/*
const FormControl= styled.div `

  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.invalid ? 'red': 'black'};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
  background: ${props => props.invalid ? '#ffd7d7' : 'transparent' };
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

`;*/

const CourseInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setValid] = useState(true);
  const InputChange = (e) => {
    //console.log(e.target.value);
    if (e.target.value.trim().length > 0) {
      setValid(true);
    }
    setInputValue(e.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    //send value to list items
    if (inputValue.trim().length === 0) {
      setValid(false);
      return;
    }

    props.onAddItem(inputValue);
  };
  /*<label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{ borderColor: !isValid ? "red" : "#ccc" }}
          type="text"
          onChange={InputChange}
        />
         <form onSubmit={formSubmit}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={InputChange} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form> 
    -----------------------------------------
    <FormControl className={!isValid && "invalid" }>
    -------------------------------------------------
    <form onSubmit={formSubmit}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={InputChange} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
    */
  return (
    <form onSubmit={formSubmit}>
    <div className={`${styles['form-control']} ${!isValid &&styles.invalid}`}>
      <label>Course Goal</label>
      <input type="text" onChange={InputChange} />
    </div>
    <Button type="submit">Add Goal</Button>
  </form>
  );
};

export default CourseInput;
