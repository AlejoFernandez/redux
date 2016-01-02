import React, { PropTypes, Component } from 'react'
import TodoTextInput                   from './TodoTextInput'
import template                        from './Header.jade'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return template({
      TodoTextInput: TodoTextInput,
      handleSave:    this.handleSave.bind(this)
    });
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
