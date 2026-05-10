# React To-Do List - Learning Guide

Welcome! This project is designed to help you learn React core concepts as an experienced software developer transitioning to JavaScript/React.

## Project Structure

```
src/
  ├── App.jsx           - Main component with state management
  ├── App.css           - Styling (plain CSS)
  ├── components/
  │   └── TodoItem.jsx  - Child component (presentational)
  ├── main.jsx          - Application entry point
  └── index.css         - Global styles
```

## Key React Concepts You'll Learn

### 1. **Hooks - useState**
Located in `App.jsx` (lines 8-9):
```javascript
const [todos, setTodos] = useState([])
const [inputValue, setInputValue] = useState('')
```
**Concept**: Hooks are functions that let you "hook into" React state. `useState` lets functional components have state.
- First value: current state
- Second value: function to update state

### 2. **State Management Pattern**
```javascript
// Wrong (don't mutate state directly):
todos[0] = { ...todos[0], completed: true }

// Correct (create new array):
setTodos(todos.map(todo =>
  todo.id === id ? { ...todo, completed: !todo.completed } : todo
))
```
**Concept**: React needs immutable updates to detect changes and re-render efficiently.

### 3. **Component Composition**
`App.jsx` (parent) renders multiple `TodoItem.jsx` (child) components:
```javascript
<TodoItem
  key={todo.id}
  todo={todo}
  onToggle={() => toggleTodo(todo.id)}
  onDelete={() => deleteTodo(todo.id)}
/>
```
**Concept**: Break UI into reusable components. Data flows down via props, events flow up via callbacks.

### 4. **Props & Prop Drilling**
In `TodoItem.jsx`:
```javascript
export default function TodoItem({ todo, onToggle, onDelete }) {
  // Destructuring props is common practice
}
```
**Concept**: Props are how you pass data to components. Here we pass the todo object and callback functions.

### 5. **Event Handling**
```javascript
// Text input with controlled component pattern
<input
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  onKeyPress={handleKeyPress}
/>

// Button click
<button onClick={addTodo}>Add Task</button>
```
**Concept**: React events are similar to vanilla JS but with some differences (camelCase, synthetic events).

### 6. **Array Methods in React**
- `filter()`: Remove items - `todos.filter(todo => todo.id !== id)`
- `map()`: Transform items - `todos.map(todo => ...)`
- Spread operator: Create new arrays - `[...todos, newTodo]`

### 7. **Conditional Rendering**
```javascript
{todos.length === 0 ? (
  <p>No tasks yet</p>
) : (
  todos.map(...)
)}
```
**Concept**: Show/hide elements based on state or props.

### 8. **CSS Classes Based on State**
```javascript
<div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
```
**Concept**: Dynamically apply CSS classes based on component state.

## How to Run

```bash
# From the Todo folder
npm run dev
```

Then open `http://localhost:5173/` in your browser.

## Exercises to Try

### Exercise 1: Add a "Clear Completed" Button
Add a button that filters out all completed todos. Check that the state updates correctly.

### Exercise 2: Edit Todo Text
Add the ability to edit a todo's text by clicking on it. This requires:
- New state in App.jsx for editing mode
- Conditional UI in TodoItem.jsx
- Update logic in App.jsx

### Exercise 3: Local Storage
Save todos to browser `localStorage` so they persist after refresh:
```javascript
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])
```

### Exercise 4: Due Dates
Add a due date to each todo. This requires:
- New property in the todo object
- Date input in the input section
- Display in TodoItem

### Exercise 5: Categories/Tags
Group todos by category. This requires more complex state management.

## Common React Patterns

### Controlled Components
Form elements whose value is controlled by React state:
```javascript
<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
```

### Unidirectional Data Flow
```
App (state, logic) 
  ↓ props (data)
TodoItem (display, user events)
  ↑ callbacks (update parent)
```

### Key Prop
When rendering lists, always use a unique `key`:
```javascript
todos.map(todo => <TodoItem key={todo.id} ... />)
```
This helps React identify which items have changed.

## React DevTools

Install the **React DevTools** browser extension to:
- Inspect component hierarchy
- View props and state in real-time
- Trace re-renders
- Time travel debugging

## Resources

- **React Docs**: https://react.dev/
- **Thinking in React**: https://react.dev/learn/thinking-in-react
- **Hooks API**: https://react.dev/reference/react
- **Vite Documentation**: https://vite.dev/

## Questions to Ask Yourself

As you work through this project:
1. Why do we need `useState` instead of just using a regular variable?
2. Why can't we mutate state directly?
3. What happens if we forget the `key` prop in list rendering?
4. How would this scale if we had thousands of todos?
5. What is the difference between "controlled" and "uncontrolled" components?

Good luck, and happy learning! 🚀
