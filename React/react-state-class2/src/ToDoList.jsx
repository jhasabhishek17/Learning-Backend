
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
    let [todos, setToDos] = useState([
        { task: "sample-task", id: uuidv4() }
    ]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setToDos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }];
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

    let upperCaseAll = () => {
        setToDos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase(),
            }))
        );
    };

    let UpperCaseOne = (id) => {
        setToDos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
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
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                        <button onClick={() => UpperCaseOne(todo.id)}>
                            UpperCase One
                        </button>
                    </li>
                ))}
            </ul>

            <br />
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    );
}

