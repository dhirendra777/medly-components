import { defaultTheme, RadioTheme } from '@medly-components/theme';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Radio } from './Radio';
import { Props } from './types';

const labelPosition: Props['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
const size: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface: React.SFC<RadioTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.radio
};

export const Basic = () => (
    <Radio
        value="female"
        name="gender"
        label="Female"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full Width', false)}
        size={select('Size', size, 'S')}
        labelPosition={select('Label Position', labelPosition, 'right')}
    />
);
