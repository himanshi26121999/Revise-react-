import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const[error,setError]=useState();

  const changeUserNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const changeUserAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  }
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        message:"Please enter a valid username and age(non-empty values)",
        title:"Invalid input"
      });
      return;
    }
    if(enteredAge<0){
      setError({
        title:"Invalid input",
        message:"Please enter valid age( >0)"
      });
      return;
    }
    props.onAddUser(enteredName,enteredAge);
    setEnteredName(""); setEnteredAge("");
  };
 
  const errorDataHandler=()=>{
    setError(null);
  }
  return (
    <>
    {error && <ErrorModal message={error.message} title={error.title} onConfirm={errorDataHandler}/>}
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" value={enteredName} type="text" onChange={changeUserNameHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" value={enteredAge} type="number" onChange={changeUserAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;

