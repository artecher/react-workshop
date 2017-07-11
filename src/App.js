import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/add-task/AddTask'
import TaskItem from './components/task-item/TaskItem'

class App extends Component {

  state = {
    tasks: [],
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
    const index = this.state.tasks.findIndex((t) => {
      return t.id === id
    })
    const newArray = [...this.state.tasks]
    newArray.splice(index, 1)
    this.setState({
      tasks: newArray
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
          <AddTask AddTask={this.onAddTask}/>
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
    );
  }
}

export default App;
