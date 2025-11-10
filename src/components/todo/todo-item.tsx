import type { TodoType } from "./types";

import { TodoItemContent, TodoItemDone, TodoItemCreatedAt, TodoItemUpdatedAt, TodoItemListItem, TodoItemDelete, Check } from "./styled";
import { useTodo } from "./useTodo";

const TodoItem = ({ todo }: { todo: TodoType }) => {
    const { markAsDone, removeTodo } = useTodo();
    const handleDelete = () => {
        removeTodo(todo._id);
    }
    const handleDone = () => {
        markAsDone(todo._id);
    }
    return (<TodoItemListItem>
                <TodoItemDone><Check type="checkbox" checked={todo.done} onChange={handleDone}/></TodoItemDone>
                <TodoItemContent>{todo.content}</TodoItemContent>
                <TodoItemCreatedAt>{todo.createdAt}</TodoItemCreatedAt>
                <TodoItemUpdatedAt>{todo.updatedAt}</TodoItemUpdatedAt>
                <TodoItemDelete onClick={handleDelete}>Delete</TodoItemDelete>
            </TodoItemListItem>);
}
 
export default TodoItem;