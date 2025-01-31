import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VideoLibraryIconSvg from '../../assets/Media/video_library_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VideoLibraryIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VideoLibraryIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VideoLibraryIcon.Style = SvgIcon;
VideoLibraryIcon.displayName = 'VideoLibraryIcon';

export default VideoLibraryIcon
