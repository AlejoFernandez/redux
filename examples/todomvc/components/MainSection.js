import React, { Component, PropTypes }           from 'react'
import TodoItem                                  from './TodoItem'
import Footer                                    from './Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import template                                  from './MainSection.jade'

const TODO_FILTERS = {
  [SHOW_ALL]:       () => true,
  [SHOW_ACTIVE]:    todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { filter: SHOW_ALL }
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed)
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted()
    }
  }

  handleShow(filter) {
    this.setState({ filter })
  }

  render() {
    const { todos, actions } = this.props
    const { filter }         = this.state
    const filteredTodos      = todos.filter(TODO_FILTERS[filter])
    const completedCount     = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)
    const activeCount        = todos.length - completedCount

    return template({
      Footer:               Footer,
      TodoItem:             TodoItem,
      actions:              actions,
      activeCount:          activeCount,
      completedCount:       completedCount,
      filter:               filter,
      filteredTodos:        filteredTodos,
      handleClearCompleted: this.handleClearCompleted.bind(this),
      handleShow:           this.handleShow.bind(this),
      todos:                todos
    });
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
