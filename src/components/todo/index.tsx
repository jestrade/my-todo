import { useState } from "react";
import { useTodo } from "./useTodo";
import type { TodoType } from "./types";
import TodoItem from "./todo-item";
import { Button, Input, TodoItemListHeader, TodoItemListItem } from "./styled";

function Todo() {
    const [todo, setTodo] = useState("");
    const { todos, addTodo } = useTodo();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTodo(value);
    }

    const onClick = () => {
        if (todo === "") return;
        const now = new Date().toISOString();
        const value: TodoType = {
                        content: todo,
                        done: false,
                        createdAt: now,
                        updatedAt: now
                    };
        addTodo(value)
        setTodo("");
    }

    return (
        <>
            <h1>To do list</h1>
            <form>
                <div>
                    <Input type="text" name="todo" value={todo} onChange={onChange} />
                    <Button type="button" onClick={onClick}>Add</Button>
                </div>
            </form>

            {todos.length > 0 ? (
                <ul>
                    <TodoItemListItem key="todo-item-listitem-header">
                        <TodoItemListHeader>Done</TodoItemListHeader>
                        <TodoItemListHeader>Content</TodoItemListHeader>
                        <TodoItemListHeader>Created at</TodoItemListHeader>
                        <TodoItemListHeader>Updated at</TodoItemListHeader>
                        <TodoItemListHeader>Delete</TodoItemListHeader>
                    </TodoItemListItem>
                    {todos.map((todo) => <TodoItem key={todo.createdAt} todo={todo} />)}
                </ul>
            ) : (
                <p>No todos</p>
            )}
        </>
    )
}

export default Todo;
