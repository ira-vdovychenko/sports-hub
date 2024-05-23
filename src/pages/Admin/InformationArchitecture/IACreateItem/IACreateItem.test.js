import React from "react"; 
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import makeServer from "../../../../mirage/config";
import { IACreateItem } from './IACreateItem'; 

test('Verify if admin is able to add the new category', async () => {
    let server = makeServer("test");
    server.create('user'); 
    
    const onPressMock = jest.fn(); // Create a mock function for onPress

    render(<IACreateItem itemType="category" onPress={onPressMock} />);

    // Wait for the button to appear on the screen
    await waitFor(() => {
        expect(screen.getByText("+ Add category")).toBeInTheDocument();
    });

    // Click on the button to open the popup
    userEvent.click(screen.getByText("+ Add category"));

    // Wait for the popup to appear
    await waitFor(() => {
        expect(screen.getByText("Add new category")).toBeInTheDocument();
    });

    // Input the category name
    const input = screen.getByPlaceholderText(`Name your category item`);
    userEvent.type(input, 'New Category');

    // Click on the "Add" button
    const addButtonInPopup = screen.getByText("Add");
    userEvent.click(addButtonInPopup);

    // Ensure that onPress function was called with the correct parameters
    expect(onPressMock).toHaveBeenCalledWith("category", "New Category");
});
