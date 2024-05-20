import TodoItem from "./TodoItem"

const TodoItems = ({todoItems, onDeleteClick}) => {
return(

    <div className="items-containers">
    <div className="row kg-row">
        {todoItems.map((item)=><TodoItem key={item}
        todoName={item.name}
        todoDate = {item.dueDate}
        onDeleteClick = {onDeleteClick}
      
        ></TodoItem>)}
        </div>
    </div>
)
}

export default TodoItems