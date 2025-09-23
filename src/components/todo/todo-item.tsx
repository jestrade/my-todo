import type { TodoType } from "./types";
import { TodoItemContent, TodoItemDone, TodoItemCreatedAt, TodoItemUpdatedAt, TodoItemListItem, TodoItemDelete } from "./styled";

const TodoItem = ({ todo, removeTodo }: { todo: TodoType, removeTodo: (id: string) => void }) => {
    const handleDelete = () => {
        removeTodo(todo.id);
    }
    return (<TodoItemListItem>
                <TodoItemDone>{todo.done}</TodoItemDone>
                <TodoItemContent>{todo.content}</TodoItemContent>
                <TodoItemCreatedAt>{todo.createdAt}</TodoItemCreatedAt>
                <TodoItemUpdatedAt>{todo.updatedAt}</TodoItemUpdatedAt>
                <TodoItemDelete onClick={handleDelete}>Delete</TodoItemDelete>
            </TodoItemListItem>);
}
 
export default TodoItem;