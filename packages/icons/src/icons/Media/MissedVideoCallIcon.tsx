import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MissedVideoCallIconSvg from '../../assets/Media/missed_video_call_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MissedVideoCallIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MissedVideoCallIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MissedVideoCallIcon.Style = SvgIcon;
MissedVideoCallIcon.displayName = 'MissedVideoCallIcon';

export default MissedVideoCallIcon
