import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RestoreFromTrashIconSvg from '../../assets/Action/restore_from_trash_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RestoreFromTrashIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RestoreFromTrashIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RestoreFromTrashIcon.Style = SvgIcon;
RestoreFromTrashIcon.displayName = 'RestoreFromTrashIcon';

export default RestoreFromTrashIcon
