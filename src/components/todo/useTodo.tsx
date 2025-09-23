import { useState } from "react";
import type { TodoType } from "./types";

export const useTodo = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);

    const addTodo = (todo: TodoType) => {
        setTodos([...todos, todo]);
    }

    const removeTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const markAsDone = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, done: true, updatedAt: new Date().toISOString() } : todo));
    }

    return { todos, addTodo, removeTodo, markAsDone }
}