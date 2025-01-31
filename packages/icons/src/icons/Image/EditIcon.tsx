import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EditIconSvg from '../../assets/Image/edit_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EditIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EditIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EditIcon.Style = SvgIcon;
EditIcon.displayName = 'EditIcon';

export default EditIcon
