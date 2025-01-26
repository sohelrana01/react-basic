import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 3;

const initialTodos = [
    {id: 0, title: 'Buy Milk', done: true},
    {id: 1, title: 'Eat Tacos', done: false},
    {id: 2, title: 'Brew Tea', done: false},
];

export default function TaskApp(){
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(title){
        setTodos ([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }

    function handleChangeTodo(nextTodo){
        setTodos(todos.map(todo => {
            if(todo.id === nextTodo.id){
                return nextTodo;
            }else{
                return todo;
            }
        }));
    }

    function handleDeleteTodo(todoId){
        setTodos(todos.filter(todo => todo.id !== todoId)
        );
    }

    return(
        <>
            <AddTodo 
                onAddTodo={handleAddTodo}
            />

            < TaskList
                todos={todos}
                onChangeTodo = {handleChangeTodo}
                onDeleteTodo = {handleDeleteTodo}
            />
        </>
    )
}