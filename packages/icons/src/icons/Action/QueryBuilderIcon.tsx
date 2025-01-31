import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import QueryBuilderIconSvg from '../../assets/Action/query_builder_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const QueryBuilderIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <QueryBuilderIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

QueryBuilderIcon.Style = SvgIcon;
QueryBuilderIcon.displayName = 'QueryBuilderIcon';

export default QueryBuilderIcon
