import React from 'react'

export default class Form extends React.Component {
  render() {
    const {
      values,
      onSubmit,
      onChange,
      toggleShouldShow,
      displayCompleteds,
      disabled,
    } = this.props
    return (
      <>
        <form id="todoForm" onSubmit={onSubmit}>
          <input
            value={values.name}
            onChange={onChange}
            placeholder="Type todo"
            name="name"
            type="text"
          />
          <input type="submit" disabled={disabled} />
        </form>

        <button onClick={toggleShouldShow}>
          {displayCompleteds ? 'Hide' : 'Show'} Completed
        </button>
      </>
    )
  }
}
