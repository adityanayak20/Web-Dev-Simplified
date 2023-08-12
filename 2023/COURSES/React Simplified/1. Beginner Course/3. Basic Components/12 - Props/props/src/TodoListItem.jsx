export function TodoListItem({ children, isComplete }) {
  return (
    <div>
      <label>
        <input type="checkbox" defaultChecked={isComplete} />
        {children}
      </label>
    </div>
  )
}
