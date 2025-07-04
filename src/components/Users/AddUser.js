import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const changeUserNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const changeUserAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  }
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 || enteredAge<=0){
      return;
    }
    props.onAddUser(enteredName,enteredAge);
    setEnteredName(""); setEnteredAge("");
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" value={enteredName} type="text" onChange={changeUserNameHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" value={enteredAge} type="number" onChange={changeUserAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

