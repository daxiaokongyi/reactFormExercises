import React from 'react';
import {render, fireEvnt, fireEvent} from "@testing-library/react";
import TodoList from './TodoList';

const addTodo = (todoList, task="add a todo test") => {
    const todoInput = todoList.getByLabelText("New Todo:");
    fireEvent.change(todoInput, {target: {value:task}});
    const submitBtn = todoList.getByText("Add a Todo");
    fireEvent.click(submitBtn);
}

// smoke test
it("renders without crashing", function() {
  render(<TodoList />);
});

// snapshot test
it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

// test if it can add a todo
it("can add a todo", () => {
    const todoList = render(<TodoList/>);
    addTodo(todoList);

    // expect form to clear and todo to be on the page
    expect(todoList.getByLabelText("New Todo:")).toHaveValue("");
    expect(todoList.getByText("add a todo test")).toBeInTheDocument();
    expect(todoList.getByText("Edit")).toBeInTheDocument();
    expect(todoList.getByText("X")).toBeInTheDocument();
})

// test if it can edit a todo
it("can edit a todo", () => {
    const todoList = render(<TodoList/>);
    addTodo(todoList);

    const editBtn = todoList.getByText("Edit");
    fireEvent.click(editBtn);
    const editInput = todoList.getByDisplayValue("add a todo test");
    fireEvent.change(editInput, {target: {value: "wow~~~"}});
    const updateBtn = todoList.getByText("Update");
    fireEvent.click(updateBtn);

    expect(todoList.getByText("wow~~~")).toBeInTheDocument();
    expect(todoList.queryByText("add a todo test")).not.toBeInTheDocument();
})

// test if it can remove a todo
it("can remove a todo", () => {
    const todoList = render(<TodoList/>);
    addTodo(todoList);

    const removeBtn = todoList.getByText("X");
    fireEvent.click(removeBtn);

    expect(todoList.queryByText("add a todo test")).not.toBeInTheDocument();
})