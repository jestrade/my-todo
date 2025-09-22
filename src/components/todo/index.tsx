import { useState } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const onChange = (e) => setTodo(e.target.value);

    const onClick = () => {
        setTodos([...todos, todo]);
        setTodo("");
    }

    return (
        <>
            <h1>To do list</h1>
            <form>
                <div>
                    <input type="text" name="todo" value={todo} onChange={onChange} />
                    <button type="button" onClick={onClick}>Add</button>
                </div>
            </form>

            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
        </>
    )
}

export default Todo
