import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'

class AddTask extends React.Component {

  state = {
    todoContentInput: ''
  }

  changeContent = (e) => {
    this.setState({
      todoContentInput: e.target.value,
    })
  }

  onClickAdd = () => {
    this.props.onAddTask(this.state.todoContentInput)
    this.setState({
      todoContentInput: '',
    })
  }

  render() {
    return (
      <div>
        <input
          id="todo-content-input"
          type="text"
          value={this.state.todoContentInput}
          onChange={this.changeContent}
        />
        <button
          id="add-task"
          disabled={!this.state.todoContentInput}
          onClick={this.onClickAdd}
        >
          <Icon name="plus"/>
        </button>
      </div>
    )
  }
}

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired
}

export default AddTask
