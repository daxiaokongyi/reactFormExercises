import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Todo from './Todo';

// smoke test
it("renders without crashing", () => {
    render(<Todo/>);
})

// snapshot test
it("matches snapshot when editing", () => {
    const {asFragment} = render(<Todo/>);
    expect(asFragment()).toMatchSnapshot
})

// test for updating
it("runs the update function on form submit", () => {
    const updateMock = jest.fn();
    const {getByText} = render(<Todo update={updateMock}/>);
    const editBtn = getByText("Edit");
    fireEvent.click(editBtn);
    const updateBtn = getByText("Update");
    fireEvent.click(updateBtn);
    expect(updateMock).toHaveBeenCalled();
})

// test for deleting
it("runs the delete function on button click", () => {
    const removeMock = jest.fn();
    const {getByText} = render(<Todo remove={removeMock}/>);
    const deleteBtn = getByText("X");
    fireEvent.click(deleteBtn);
    expect(removeMock).toHaveBeenCalled();
});
