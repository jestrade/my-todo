import type { TodoType } from "./types";

import { Check, TodoCol } from "./styled";
import { useTodo } from "./useTodo";

const TodoItem = ({ todo }: { todo: TodoType }) => {
    const { markAsDone, removeTodo } = useTodo();
    const handleDelete = () => {
        removeTodo(todo._id);
    }
    const handleDone = () => {
        markAsDone(todo._id);
    }
    return (<tr>
                <TodoCol><Check type="checkbox" checked={todo.done} onChange={handleDone}/></TodoCol>
                <TodoCol>{todo.content}</TodoCol>
                <TodoCol>{todo.createdAt}</TodoCol>
                <TodoCol>{todo.updatedAt}</TodoCol>
                <TodoCol><button onClick={handleDelete}>Delete</button></TodoCol>
            </tr>);
}
 
export default TodoItem;