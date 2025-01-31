import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PanoramaFishEyeIconSvg from '../../assets/Image/panorama_fish_eye_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PanoramaFishEyeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PanoramaFishEyeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PanoramaFishEyeIcon.Style = SvgIcon;
PanoramaFishEyeIcon.displayName = 'PanoramaFishEyeIcon';

export default PanoramaFishEyeIcon
