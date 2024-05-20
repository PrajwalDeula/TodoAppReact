import { useState } from "react";

function AppTodo({onNewItem}){

    const [todoName, setTodoName] = useState();
    const [dueDate, setDueDate] = useState();

    const handleNameChange=(event)=>{
    setTodoName(event.target.value);        
    }

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    }

    const handleButtonAddClicked = () => {
        setTodoName("");
        setDueDate("");
        onNewItem(todoName, dueDate)
    }

    return(
        <div className="row kg-row">
            <div className="col-6">
                <input type="text" placeholder="Enter New Items"
                value={todoName}
                onChange={handleNameChange}

           
              ></input>
            </div>
            <div className="col-4">
                <input type="date"
                value={dueDate}
                onChange={handleDateChange}
       
                ></input>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-primary"
                onClick={handleButtonAddClicked}
              

              >Add</button>
            </div>
        </div>
    )

}

export default AppTodo