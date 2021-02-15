import { render } from '@test-utils';
import React from 'react';
import { Minimap } from './Minimap';

const renderMinimap = (props?: { scrollWidth: number; offsetWidth: number }) => {
    const { scrollWidth = 300, offsetWidth = 200 } = props || {};
    const tableRef = {
        current: {
            scrollWidth,
            offsetWidth,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            getBoundingClientRect: jest.fn().mockImplementation(() => ({
                bottom: 100
            }))
        }
    };
    return { tableRef, ...render(<Minimap tableRef={tableRef} />) };
};

describe('Minimap component', () => {
    it('should render properly', () => {
        jest.spyOn(document.documentElement, 'getBoundingClientRect').mockImplementation(
            () =>
                ({
                    height: 80,
                    y: 0
                } as DOMRect)
        );
        const { container } = renderMinimap();
        expect(container).toMatchSnapshot();
    });
});
