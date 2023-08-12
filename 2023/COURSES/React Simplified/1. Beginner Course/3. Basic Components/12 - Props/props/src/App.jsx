import { TodoListItem } from "./TodoListItem.jsx"
import { TodoListItemClass } from "./TodoListItemClass.jsx"

export default function App() {
  return (
    <>
      <TodoListItem isComplete>Todo Item 1</TodoListItem>
      <TodoListItemClass>Todo Item 2</TodoListItemClass>
    </>
  )
}
