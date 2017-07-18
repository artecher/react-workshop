import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AddTask from './components/add-task/AddTask'
import TaskItem from './components/task-item/TaskItem'

class App extends Component {

  state = {
    tasks: [],
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.tasks === this.state.tasks) {
      return false
    }
    return true
  }

  onAddTask = (val) => {
    const item = {
      id: new Date().getTime(),
      content: val,
      isDone: false,
    }
    this.setState({
      tasks: [item, ...this.state.tasks]
    })
  }

  onToggleTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map((t) => {
        if (t.id === id) {
          t.isDone = !t.isDone
        }
        return t
      })
    })
  }

  onDeleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((t) => {
        return t.id !== id
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h3>ADD Task</h3>
          <AddTask onAddTask={this.onAddTask}/>
          <br/>
          <h3>TODO Tasks</h3>
          {this.state.tasks.filter((t) => {
            return !t.isDone
          }).map((t) => {
            return <TaskItem
              key={t.id}
              task={t}
              onToggleTask={this.onToggleTask}
              onDeleteTask={this.onDeleteTask}
            />
          })}
          <br/>
          <h3>DONE Tasks</h3>
          {this.state.tasks.filter((t) => {
            return t.isDone
          }).map((t) => {
            return <TaskItem
              key={t.id}
              task={t}
              onToggleTask={this.onToggleTask}
              onDeleteTask={this.onDeleteTask}
            />
          })}
          <br/>
        </div>

      </div>
    )
  }
}

export default App
