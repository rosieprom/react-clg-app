import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from "./index";
import userEvent from '@testing-library/user-event';

test('button should render', () => {
    render(<Button />)
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument()
});

// test if the button is clickable
test('button should be clickable', () => {
    const mockClickFn = jest.fn();
    render(<Button onClick={mockClickFn} type='button'>Click Me</Button>)
    const btn = screen.getByRole('button');
    userEvent.click(btn);
    expect(mockClickFn.mock.calls.length).toEqual(1);
})