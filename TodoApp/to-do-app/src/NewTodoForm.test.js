import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// smoke test
test('renders without crashing', () => {
  render(<NewTodoForm/>);
});

// snapshot test
test('matches snapshots', () => {
  const {asFragment} = render(<NewTodoForm/>);
  expect(asFragment()).toMatchSnapshot();
})

// check create todo function on form submit
test("runs the create function on form submit", () => {
    const addMock = jest.fn();
    const {getByText} = render(<NewTodoForm addTodo={addMock}/>)
    const addBtn = getByText("Add a Todo");
    fireEvent.click(addBtn);
    expect(addMock).toHaveBeenCalled();
})

