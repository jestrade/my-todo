import { useState } from "react";
import { useTodo } from "./useTodo";
import type { TodoType } from "./types";
import TodoItem from "./todo-item";
import { Button, Input } from "./styled";

function Todo() {
    const [todo, setTodo] = useState("");
    const { todos, addTodo, removeTodo } = useTodo();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setTodo(event.target.value);

    const onClick = () => {
        const now = new Date().toISOString();
        const value: TodoType = {
                        id: now,
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

            <ul>
                {todos.map((todo) => <TodoItem key={todo.createdAt} todo={todo} removeTodo={removeTodo} />)}
            </ul>
        </>
    )
}

export default Todo;
