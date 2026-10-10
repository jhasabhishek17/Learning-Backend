
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
    let [todos, setToDos] = useState([
        { task: "sample-task", id: uuidv4() }
    ]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setToDos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setToDos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== id)
        );
    };

    let markAllDone = () => {
        setToDos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                isDone: true,
            }))
        );
    };

    let markAsDone = (id) => {
        setToDos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    return (
        <div>
            <input
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <br />
            <button onClick={addNewTask}>Add Your Task</button>
            <br /><br /><br /><br />

            <hr />
            <h4>Tasks ToDo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>
                            {todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => markAsDone(todo.id)}>
                            Mark As Done
                        </button>
                    </li>
                ))}
            </ul>

            <br />
            <button onClick={markAllDone}>Mark All as Done</button>
        </div>
    );
}

