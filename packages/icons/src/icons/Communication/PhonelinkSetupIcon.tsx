import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhonelinkSetupIconSvg from '../../assets/Communication/phonelink_setup_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhonelinkSetupIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhonelinkSetupIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhonelinkSetupIcon.Style = SvgIcon;
PhonelinkSetupIcon.displayName = 'PhonelinkSetupIcon';

export default PhonelinkSetupIcon
