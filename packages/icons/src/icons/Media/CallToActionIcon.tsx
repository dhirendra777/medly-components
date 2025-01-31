import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CallToActionIconSvg from '../../assets/Media/call_to_action_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CallToActionIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CallToActionIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CallToActionIcon.Style = SvgIcon;
CallToActionIcon.displayName = 'CallToActionIcon';

export default CallToActionIcon
