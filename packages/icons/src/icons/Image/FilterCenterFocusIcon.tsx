import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FilterCenterFocusIconSvg from '../../assets/Image/filter_center_focus_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterCenterFocusIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FilterCenterFocusIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FilterCenterFocusIcon.Style = SvgIcon;
FilterCenterFocusIcon.displayName = 'FilterCenterFocusIcon';

export default FilterCenterFocusIcon
