import React, { useReducer } from 'react'
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
  todoName: '',
  // assume there could be more inputs
}
const initialState = { // the entire state of the app
  form: initialForm,
  todos: initialTodos,
  displayCompleteds: true,
}

// TYPES of actions that can happen to our state
const CHANGE_INPUT = 'CHANGE_INPUT'
const ADD_TODO = 'ADD_TODO'
const TOGGLE_DISPLAY_COMPLETEDS = 'TOGGLE_DISPLAY_COMPLETEDS'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

// STATE RECALCULATOR (reducer)
// an action is an obj that describes the change `{ type: 'CHANGE_INPUT', payload: { name, value } }`
function reducer(state, action) { // what it takes as args
  if (action.type === CHANGE_INPUT) {
    const { name, value } = action.payload
    return { ...state, form: { ...state.form, [name]: value } }
  }
  if (action.type === ADD_TODO) {
    debugger
    // compute next state
    return state
  }
  if (action.type === TOGGLE_DISPLAY_COMPLETEDS) {
    // compute next state
    return state
  }
  if (action.type === TOGGLE_COMPLETED) {
    // compute next state
    return state
  }
  return state
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = ({ name, value }) => {
    const action = { type: CHANGE_INPUT, payload: { name, value } }
    dispatch(action)
  }
  const onSubmit = () => {
    debugger
    const newTodo = { id: getId(), completed: false, name: state.form.todoName }
    const action = { type: ADD_TODO, payload: newTodo }
    dispatch(action)
  }
  const toggleShouldShow = () => {

  }
  const toggleStatus = id => () => {

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
        values={state.form}
        disabled={!state.form.todoName.length}
      />
      <button onClick={toggleShouldShow}>
        {state.displayCompleteds ? 'Hide' : 'Show'} Completed
      </button>
    </div>
  )
}
