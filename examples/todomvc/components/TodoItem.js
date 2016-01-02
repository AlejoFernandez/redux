import React, { Component, PropTypes } from 'react'
import classnames                      from 'classnames'
import TodoTextInput                   from './TodoTextInput'
import template                        from './TodoItem.jade'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;

    return template({
      TodoTextInput:     TodoTextInput,
      classnames:        classnames,
      completeTodo:      () => completeTodo(todo.id),
      deleteTodo:        () => deleteTodo(todo.id),
      handleSave:        (text) => this.handleSave.bind(this)(todo.id, text),
      handleDoubleClick: this.handleDoubleClick.bind(this),
      state:             this.state,
      todo:              todo
    })
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default TodoItem
