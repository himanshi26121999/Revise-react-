import React from "react";
import './ErrorModal.css';
import Card from "./Card";
import Button from "./Button";

const ErrorModal=(props)=>{
    return(
        <div className="backdrop" onClick={props.onConfirm}>
            <Card className="modal">
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
            </div>
    )
}
export default ErrorModal;