import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'

import './TaskItem.css'

class TaskItem extends React.Component {
  render() {
    const { onToggleTask, onDeleteTask, task } = this.props
    const { id, content, isDone } = task
    return (
      <div className="task-item">
        <input className="checkbox" type="checkbox" checked={isDone} onChange={() => {
          onToggleTask(id)
        }}/>
        <span className={isDone? 'strike content': 'content'}>{content}</span>
        <button className="delete-btn" onClick={() => {
          onDeleteTask(id)
        }}>
          <Icon name="trash"/>
        </button>
      </div>
    )
  }
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
}

export default TaskItem
