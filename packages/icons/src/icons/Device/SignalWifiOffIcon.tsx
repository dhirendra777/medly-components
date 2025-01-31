import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SignalWifiOffIconSvg from '../../assets/Device/signal_wifi_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalWifiOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SignalWifiOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SignalWifiOffIcon.Style = SvgIcon;
SignalWifiOffIcon.displayName = 'SignalWifiOffIcon';

export default SignalWifiOffIcon
