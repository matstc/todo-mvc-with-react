import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import ReactTestUtils from 'react-addons-test-utils'

it('adds a todo', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);

  expect(div.querySelectorAll('li').length).toEqual(2)

  let input = div.querySelector('.entry input[type="text"]')
  let form = div.querySelector('form')

  input.value = "pick up friend"
  ReactTestUtils.Simulate.change(input)
  ReactTestUtils.Simulate.submit(form)

  expect(div.querySelectorAll('li').length).toEqual(3)
});

it('removes a todo from the list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);

  expect(div.querySelectorAll('li').length).toEqual(2)

  let removeButton = div.querySelector('button.removeButton')
  ReactTestUtils.Simulate.click(removeButton)

  expect(div.querySelectorAll('li').length).toEqual(1)
});

it('moves a todo to the completed list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);

  expect(div.querySelectorAll('li').length).toEqual(2)
  expect(div.querySelectorAll('#completed-todos p').length).toEqual(0)

  let completeCheckbox = div.querySelector('input[type=checkbox]')
  ReactTestUtils.Simulate.click(completeCheckbox)

  expect(div.querySelectorAll('#completed-todos p').length).toEqual(1)
});
