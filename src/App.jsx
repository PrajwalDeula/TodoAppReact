import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AppTodo from "./components/AppTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App(){

    const initialTodoItems = [
        {name: "Go to college",
        dueDate: "2000/12/12"},
        {name:"Buy an egg",
            dueDate:"1999/12/12"},      
    ]

    const [todoItems,setTodoItems] = useState(initialTodoItems);

    const handleNewItem = (itemName, itemDueDate) => {
        console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    
    const newTodoItems = [...todoItems, {name:itemName, dueDate:itemDueDate},];
    setTodoItems(newTodoItems);
    }

    const handleDeleteItem = (todoItemName) => {
        const newTodoItems = todoItems.filter((item)=>item.name !== todoItemName);
        setTodoItems(newTodoItems);
    }
    
     
return(

    <center className="todo-container">
   
    <AppTodo onNewItem={handleNewItem}></AppTodo>
    {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
  
    <TodoItems todoItems={todoItems}
    onDeleteClick={handleDeleteItem}

  
    
    >
 
    </TodoItems>
    
    </center>
)
}

export default App