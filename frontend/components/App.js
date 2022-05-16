import React, { useReducer } from 'react' // imported the reducer hook
import Form from './Form'
import TodoList from './TodoList'

let id = 0
const getId = () => ++id

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]
const initialForm = {
  name: '', // name of an input
  foo: '', // name of another input
}
const initialState = {
  form: initialForm,
  todos: initialTodos,
  displayCompleteds: true,
}

// 1- TYPES OF ACTION 'ACTION TYPES'
const INPUT_CHANGE = 'INPUT_CHANGE'
const ADD_TODO = 'ADD_TODO'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
const TOGGLE_DISPLAY_COMPLETEDS = 'TOGGLE_DISPLAY_COMPLETEDS'

// TAKES current state and an action
// and returns new (or the same) state.
// NOT used inside components, handlers etc.
// The framework just wants us to centralize
// state-changing logic inside a single function.
function reducer(state, action) { // action might be { type: INPUT_CHANGE, payload: { name, value } }
  if (action.type === INPUT_CHANGE) {
    const { name, value } = action.payload
    return { ...state, form: { ...state.form, [name]: value } }
  }
  if (action.type === ADD_TODO) {
    const newTodo = action.payload
    return {
      ...state,
      // todos: state.todos.concat(newTodo),
      todos: [...state.todos, newTodo],
      form: initialForm,
    }
  }
  if (action.type === TOGGLE_DISPLAY_COMPLETEDS) {
    return { ...state, displayCompleteds: !state.displayCompleteds }
  }
  if (action.type === TOGGLE_COMPLETED) {
    const id = action.payload
    return { ...state, todos: state.todos.map(todo => {
      return (todo.id === id) ? {} :
    })}
  }
  return state
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = ({ name, value }) => {
    dispatch({ type: INPUT_CHANGE, payload: { name, value } }) // the ACTION object has a type and optional payload
  }
  const onSubmit = () => {
    const newTodo = { id: getId(), completed: false, name: state.form.name }
    dispatch({ type: ADD_TODO, payload: newTodo })
  }
  const toggleShouldShow = () => {
    dispatch({ type: TOGGLE_DISPLAY_COMPLETEDS })
  }
  const toggleStatus = id => () => {
    dispatch({ type: TOGGLE_COMPLETED, payload: id })
  }
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList
        todos={state.todos}
        displayCompleteds={state.displayCompleteds}
        toggleStatus={toggleStatus}
      />
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        toggleShouldShow={toggleShouldShow}
        displayCompleteds={state.displayCompleteds}
        disabled={!state.form.name.length}
        values={state.form}
      />
    </div>
  )
}
