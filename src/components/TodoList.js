import React from "react";

const TodoList = ({todos, setTodos, setEditTodo}) => {
    const handleCompleted = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )

    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input name="Todo" type="text" value={todo.title} 
                    className={`list ${todo.completed ?  "complete" : ""}`} 
                    onChange={(e) =>  e.preventDefault()} />
                    <div>
                        <button className="button-completed task-button" onClick={() => handleCompleted(todo)}> &#x2611; </button>
                    </div>
                    <div>
                        <button className={`button-edit task-button ${todo.completed ?  "disabled" : ""}`} onClick={() => handleEdit(todo)}> &#9998; </button>
                    </div>
                    <div>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}> 🗑 </button>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodoList;