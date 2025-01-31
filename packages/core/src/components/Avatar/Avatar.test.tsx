import { defaultTheme } from '@medly-components/theme';
import { render } from '@test-utils';
import React from 'react';
import { Avatar } from './Avatar';

describe('Avatar component', () => {
    it('should render with default theme', () => {
        const { container } = render(<Avatar>M</Avatar>);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props given', () => {
        const { container } = render(
            <Avatar
                size="M"
                textColor={defaultTheme.colors.green[500]}
                bgColor={defaultTheme.colors.green[100]}
                hoverBgColor={defaultTheme.colors.green[400]}
                hoverTextColor={defaultTheme.colors.white}
                hoverImgShadowColor="rgba(96, 120, 144, 0.35)"
                hoverTextShadowColor="rgba(0, 128, 0, 0.35)"
            >
                M
            </Avatar>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <Avatar size="L">
                <img src="http://dummurl" />
            </Avatar>
        );
        expect(container).toMatchSnapshot();
    });
});
