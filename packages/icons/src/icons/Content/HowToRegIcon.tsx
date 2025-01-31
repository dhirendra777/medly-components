import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HowToRegIconSvg from '../../assets/Content/how_to_reg_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HowToRegIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HowToRegIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HowToRegIcon.Style = SvgIcon;
HowToRegIcon.displayName = 'HowToRegIcon';

export default HowToRegIcon
