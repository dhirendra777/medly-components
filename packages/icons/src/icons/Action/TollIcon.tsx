import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TollIconSvg from '../../assets/Action/toll_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TollIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TollIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TollIcon.Style = SvgIcon;
TollIcon.displayName = 'TollIcon';

export default TollIcon
