import React from 'react'
import { shallow } from 'enzyme'

import TaskItem from './TaskItem'

describe('TaskItem', () => {
  let wrapper,
    onToggleTask,
    onDeleteTask,
    taskObj

  beforeEach(() => {
    taskObj = {id: 123, content: 'learn react', isDone: false}
    onToggleTask = jest.fn()
    onDeleteTask = jest.fn()
    wrapper = shallow(
      <TaskItem
        task={taskObj}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
      />
    )
  })

  it('should call onToggleTask with id when clicking the checkbox', () => {
    wrapper.find('.checkbox').simulate('change', {target: {checked: !taskObj.isDone}})
    expect(onToggleTask).toHaveBeenCalledWith(123)
  })

  it('should call onDeleteTask with id when clicking the delete button', () => {
    wrapper.find('.delete-btn').simulate('click')
    expect(onDeleteTask).toHaveBeenCalledWith(123)
  })

  it('should set checked prop of checkbox to true if isDone is true', () => {
    taskObj = {id: 123, content: 'learn react', isDone: true}
    wrapper = shallow(
      <TaskItem
        task={taskObj}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
      />
    )
    expect(wrapper.find('.checkbox').prop('checked')).toBe(true)
  })

  it('should add class strike to span when isDone is true', () => {
    taskObj = {id: 123, content: 'learn react', isDone: true}
    wrapper = shallow(
      <TaskItem
        task={taskObj}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
      />
    )
    expect(wrapper.find('.content').hasClass('strike')).toBeTruthy()
  })

})
