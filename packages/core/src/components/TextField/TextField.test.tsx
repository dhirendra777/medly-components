import { CheckIcon } from '@medly-components/icons';
import { fireEvent, render, waitForElement } from '@test-utils';
import React from 'react';
import { TextField } from './TextField';
import { Props } from './types';

describe('TextField', () => {
    it('should render properly with default props', () => {
        const { container } = render(<TextField label="Name" />);
        expect(container).toMatchSnapshot();
    });

    it('should take parents width if we pass fullWidth prop as true', () => {
        const { container } = render(<TextField label="Name" fullWidth />);
        expect(container.querySelector('div')).toHaveStyle(`
            display: flex;
        `);
        expect(container.querySelector('input')).toHaveStyle(`
            width: 100%;
        `);
    });

    it('should take passed min width', () => {
        const { container } = render(<TextField label="Name" minWidth="30rem" />);
        expect(container.querySelector('div')).toHaveStyle(`
            min-width: 30rem;
        `);
    });

    describe('without label', () => {
        it('should render default state properly', () => {
            const { container } = render(<TextField type="email" />);
            expect(container).toMatchSnapshot();
        });

        it('should render focus state properly ', () => {
            const { container } = render(<TextField label="Name" />);
            fireEvent.focusIn(container.querySelector('input'));
            expect(container).toMatchSnapshot();
        });
    });

    it('should not call onClick function on click on helper text', () => {
        const mockOnClick = jest.fn();
        const { container } = render(
            <div onClick={mockOnClick}>
                <TextField withBuiltInValidation label="Name" required type="email" />
            </div>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render asterisk if we pass required prop as true', () => {
        const { container } = render(<TextField label="Name" required />);
        expect(container.querySelector('label')).toMatchSnapshot();
    });

    describe('with builtin form validation', () => {
        it('should render html5 error message on invalid form submission', async () => {
            const mockOnInvalid = jest.fn(),
                { container, getByText } = render(
                    <TextField withBuiltInValidation label="Name" required type="email" onInvalid={mockOnInvalid} />
                );
            fireEvent.invalid(container.querySelector('input'));
            const message = await waitForElement(() => container.querySelector('#medly-textField-helper-text'));
            expect(message).toBeInTheDocument();
            expect(getByText('Constraints not satisfied')).toBeInTheDocument();
            expect(mockOnInvalid).toHaveBeenCalled();
        });

        it('should render html5 error message on moving focus out with invalid value', async () => {
            const mockOnBlur = jest.fn(),
                { container, getByText } = render(
                    <TextField withBuiltInValidation label="Name" required type="email" value="a" onBlur={mockOnBlur} />
                );
            fireEvent.focus(container.querySelector('input'));
            fireEvent.blur(container.querySelector('input'));
            const message = await waitForElement(() => container.querySelector('#medly-textField-helper-text'));
            expect(message).toBeInTheDocument();
            expect(getByText('Constraints not satisfied')).toBeInTheDocument();
            expect(mockOnBlur).toHaveBeenCalled();
        });
    });

    describe.each(['outlined', 'filled'])('with %s variant', (variant: Props['variant']) => {
        describe.each(['with label', 'without label'])('and %s', (labelCnd: string) => {
            it('should render default state properly', () => {
                const { container } = render(<TextField variant={variant} label={labelCnd === 'with labe' ? 'Name' : ''} />);
                expect(container).toMatchSnapshot();
            });
            it('should render focus state properly', () => {
                const { container } = render(<TextField variant={variant} label={labelCnd === 'with labe' ? 'Name' : ''} />);
                fireEvent.focusIn(container.querySelector('input'));
                expect(container).toMatchSnapshot();
            });
        });

        it('should render error state properly ', () => {
            const { container } = render(<TextField variant={variant} label="Name" errorText="Something wen wrong" />);
            expect(container).toMatchSnapshot();
        });

        it('should render helper text properly', () => {
            const { container } = render(<TextField variant={variant} label="Name" helperText="Some text" />);
            expect(container.querySelector('span')).toMatchSnapshot();
        });

        it('should render error text properly', () => {
            const { container } = render(<TextField variant={variant} label="Name" errorText="Some text" />);
            expect(container.querySelector('span')).toMatchSnapshot();
        });

        it('should render properly with prefix', () => {
            const { container } = render(<TextField variant={variant} label="Name" prefix={CheckIcon} />);
            expect(container).toMatchSnapshot();
        });

        it('should render properly with suffix', () => {
            const { container } = render(<TextField variant={variant} label="Name" suffix={CheckIcon} />);
            expect(container).toMatchSnapshot();
        });
    });
});
