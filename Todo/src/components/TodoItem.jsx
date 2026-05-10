export default function TodoItem({ 
  todo, 
  onToggle, 
  onDelete, 
  onEdit,
  isEditing,           // NEW: is this todo in edit mode?
  editText,            // NEW: the current edit text
  onEditChange,        // NEW: update edit text
  onSaveEdit,          // NEW: save the changes
  onCancelEdit         // NEW: cancel editing
}) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        className="todo-checkbox"
      />
      
      {/*Show text OR edit input */}
      {isEditing ? (
        // Edit mode
        <input
          type="text"
          value={editText}
          onChange={(e) => onEditChange(e.target.value)}
          className="todo-edit-input"
          autoFocus
        />
      ) : (
        // Normal mode
        <div className="todo-text-group">
          <span className="todo-text">{todo.text}</span>
          {todo.dueDate && (
            <span className="todo-due-date">Due {todo.dueDate}</span>
          )}
        </div>
      )}
      
      {/* CONDITIONAL: Show normal buttons OR save/cancel buttons */}
      {isEditing ? (
        <>
          <button onClick={() => onSaveEdit(todo.id)} className="save-btn">
            Save
          </button>
          <button onClick={onCancelEdit} className="cancel-btn">
            Cancel
          </button>
        </>
      ) : (
        <>
          <button onClick={() => onEdit(todo.id)} className="edit-btn">
            ✏️
          </button>
          <button onClick={onDelete} className="delete-btn">
            ✕
          </button>
        </>
      )}
    </div>
  )
}