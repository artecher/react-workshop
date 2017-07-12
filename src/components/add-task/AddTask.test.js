import React from 'react'
import { shallow } from 'enzyme'

import AddTask from './AddTask'

describe('AddTask', () => {

  let wrapper,
    mockAddfunc

  beforeEach(() => {
    mockAddfunc = jest.fn()
    wrapper = shallow(<AddTask onAddTask={mockAddfunc}/>)
  })

  it('should disable add button when input is empty', () => {
    expect(wrapper.find('#add-task').prop('disabled')).toBe(true)
  })

  it('should enable add button when input is not empty', () => {
    wrapper.find('#todo-content-input').simulate('change', {target: {value: 'abc'}})
    expect(wrapper.find('#add-task').prop('disabled')).toBe(false)
  })

  it('should trigger add function with input\'s value if add button is clicked', () => {
    wrapper.find('#todo-content-input').simulate('change', {target: {value: 'abc'}})
    wrapper.find('#add-task').simulate('click')
    expect(mockAddfunc).toHaveBeenCalledWith('abc')
  })

  it('should clear input after clicking the add button', () => {
    wrapper.find('#todo-content-input').simulate('change', {target: {value: 'abc'}})
    wrapper.find('#add-task').simulate('click')
    expect(wrapper.find('#todo-content-input').prop('value')).toBe('')
  })

})
