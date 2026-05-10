/**
 * TodoItem Component
 * 
 * This is a "presentational" or "dumb" component that displays a single todo.
 * It receives data via props and sends events back to the parent.
 * 
 * Learning concepts:
 * - Props (passing data to components)
 * - Destructuring
 * - Event handlers
 * - Conditional CSS classes
 */

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button
        onClick={onDelete}
        className="delete-btn"
        title="Delete this task"
      >
        ✕
      </button>
    </div>
  )
}
