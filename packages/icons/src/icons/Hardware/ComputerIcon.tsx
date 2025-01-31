import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ComputerIconSvg from '../../assets/Hardware/computer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ComputerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ComputerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ComputerIcon.Style = SvgIcon;
ComputerIcon.displayName = 'ComputerIcon';

export default ComputerIcon
