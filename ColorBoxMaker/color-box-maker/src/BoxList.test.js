import React from 'react';
import BoxList from './BoxList';
import {render, fireEvent, wait} from '@testing-library/react';

const addBox = (boxList, height = "100" , width = "100", color = "green") => {
    const backgroundColorInput = boxList.getByLabelText("Background Color:");
    const heightInput = boxList.getByLabelText("Height:");
    const widthInput = boxList.getByLabelText("Width:");
    
    fireEvent.change(backgroundColorInput, {target: {value: color}});
    fireEvent.change(heightInput, {target: {value: height}});
    fireEvent.change(widthInput, {target: {value: width}});

    const button = boxList.getByText("Add a new box");
    fireEvent.click(button);
} 

// smoke test
it("renders without crashing", () => {
    render(<BoxList/>);
});

// snapshot test
it("matches snapshot", () => {
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
})

// test if adding a box works
it("should be able to add a box", () => {
    const boxList = render(<BoxList/>);

    // no box yet
    expect(boxList.queryByText("X")).not.toBeInTheDocument();

    // add a box by using addBox function
    addBox(boxList);

    // expect to see a box
    const removeBtn = boxList.getByText("X");
    expect(removeBtn).toBeInTheDocument();
    expect(removeBtn.previousSibling).toHaveStyle(`
        width: 100px;
        height: 100px;
        backgroundColor: green 
    `);
    // expect form becomes empty
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
})

it("should be able to remove a box", () => {
    const boxList = render(<BoxList/>);
    // add a box into the boxlist
    addBox(boxList);
    const removeBtn = boxList.getByText("X");
    // check if remove button exists
    expect(removeBtn).toBeInTheDocument();
    // click the remove button to remove the added box
    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
})