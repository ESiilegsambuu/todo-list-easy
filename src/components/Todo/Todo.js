import React from "react";
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            items: []
        }
    }


    render() {
        return (
            <div className="Todo">
                <h1>New Task:</h1>
            </div>
        )
    }
}

export default Todo;
