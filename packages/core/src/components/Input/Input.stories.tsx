import { defaultTheme, InputTheme } from '@medly-components/theme';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { Input } from './Input';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['top', 'bottom', 'left', 'right'];

export const ThemeInterface = (props: InputTheme): any => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.input
};

export const Basic = () => (
    <Input
        id="storybook-input"
        type="email"
        fullWidth={boolean('Full Width', false)}
        disabled={boolean('Disabled', false)}
        label={text('Label', 'Email Address')}
        labelPosition={select('Label Position', labelPosition, 'top')}
        required={boolean('Required', false)}
        placeholder={text('Placeholder', 'Enter Email Address')}
        description={text('Description', 'We will never share your email with anyone')}
        prefix={text('Prefix', '')}
        suffix={text('Suffix', '.com')}
        descriptionColor={color('Description Color', defaultTheme.input.descriptionColor)}
    />
);
