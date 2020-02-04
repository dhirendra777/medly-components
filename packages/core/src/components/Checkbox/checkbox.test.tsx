import { fireEvent, render } from '@test-utils';
import React from 'react';
import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = render(<Checkbox name="gender" />);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const { container } = render(<Checkbox disabled fullWidth name="gender" label="Female" size="M" labelPosition="right" />);
        expect(container).toMatchSnapshot();
    });

    it('should call onChange handler on click on checkbox', () => {
        const mockOnChange = jest.fn();
        const { container } = render(
            <Checkbox onChange={mockOnChange} disabled name="gender" label="Female" size="M" labelPosition="right" />
        );
        fireEvent.click(container.querySelector('input'));
        expect(mockOnChange).toBeCalled();
    });
});
