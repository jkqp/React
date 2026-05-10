import { useState } from 'react'
import TodoItem from './components/TodoItem'
import './App.css'

function App() {
  // State management: todos array and input field
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  // Add a new todo
  const addTodo = () => {
    if (inputValue.trim() === '') return
    
    const newTodo = {
      id: Date.now(), // Simple unique ID using timestamp
      text: inputValue,
      completed: false,
    }
    
    setTodos([...todos, newTodo])
    setInputValue('')
  }

  // Delete a todo by id
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Clear Completed
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // Toggle completed status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className="app-container">
      <header>
        <h1>📝 My To-Do List</h1>
        <p className="subtitle">A React learning project</p>
      </header>

      <main>
        {/* Input section */}
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            className="todo-input"
          />
          <button onClick={addTodo} className="add-btn">
            Add Task
          </button>
        </div>

        {/* Stats */}
        <div className="stats">
          <p>
            {completedCount} of {todos.length} tasks completed
          </p>
        </div>

        {/* Todo list */}
        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-message">No tasks yet. Add one to get started!</p>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            ))
          )}
        </div>
        {/* Clear completed button */}
        {completedCount > 0 && (
          <button onClick={clearCompleted} className="complete-btn">
            Clear Completed
          </button>
        )}
      </main>
    </div>
  )
}

export default App
