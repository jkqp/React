export default function TodoItem({ 
  todo, 
  onToggle, 
  onDelete, 
  onEdit,
  isEditing,
  editText,
  editCategory,
  onEditChange,
  onEditCategoryChange,
  onSaveEdit,
  onCancelEdit
}) {
  const categoryColors = {
    Work: '#3b82f6',
    Cleaning: '#10b981',
    Life: '#f59e0b',
  }

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
        <div className="edit-group">
          <input
            type="text"
            value={editText}
            onChange={(e) => onEditChange(e.target.value)}
            className="todo-edit-input"
            autoFocus
          />
          <select
            value={editCategory}
            onChange={(e) => onEditCategoryChange(e.target.value)}
            className="category-select-edit"
          >
            <option value="Work">Work</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Life">Life</option>
          </select>
        </div>
      ) : (
        // Normal mode
        <div className="todo-text-group">
          <span className="todo-text">{todo.text}</span>
          <div className="todo-meta">
            {todo.category && (
              <span 
                className="todo-category" 
                style={{ backgroundColor: categoryColors[todo.category] }}
              >
                {todo.category}
              </span>
            )}
            {todo.dueDate && (
              <span className="todo-due-date">Due {todo.dueDate}</span>
            )}
          </div>
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