import React, { useState, useReducer } from 'react'
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
  todoName: 'sdfgfsdgg',
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
// an action is an obj that describes the chance `{ type: 'CHANGE_INPUT', payload: { name, value } }`
function reducer(state, action) { // what it takes as args
  if () {
    
  }
  return state
}

export default function App() {
  const [state, setState] = useState(initialState)

  const onChange = ({ name, value }) => {
    setState({ ...state, form: { ...state.form, [name]: value } })
  }
  const onSubmit = () => {
    setState({
      ...state,
      form: initialForm,
      todos: state.todos.concat({
        id: getId(),
        name: state.form.todoName,
        completed: false,
      }),
    })
  }
  const toggleShouldShow = () => {
    setState({
      ...state,
      displayCompleteds: !state.displayCompleteds
    })
  }
  const toggleStatus = id => () => {
    setState({
      ...state,
      todos: state.todos.map(td => {
        return td.id == id
          ? { ...td, completed: !td.completed }
          : td
      })
    })
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
