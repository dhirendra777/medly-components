import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BlurOnIconSvg from '../../assets/Image/blur_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BlurOnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BlurOnIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BlurOnIcon.Style = SvgIcon;
BlurOnIcon.displayName = 'BlurOnIcon';

export default BlurOnIcon
