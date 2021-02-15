import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Minimap as StyledMinimap, MinimapWrapper, SliderContent, SliderContentWrapper } from './Minimap.styled';
import { SliderController } from './SliderController/SliderController';
import { Props } from './types';

export const Minimap: FC<Props> = React.memo(({ minimapWidth, controllerWidth, sliderContentPadding, tableRef }) => {
    const sliderControllerRef = useRef(null),
        wrapperRef = useRef(null),
        [mouseDown, setMouseDown] = useState(false),
        [oneMinimapToTableWidth, setOneMinimapToTableWidth] = useState(0) /* Table width to slider width ratio */,
        [oneTableToMinimapWidth, setOneTableToMinimapWidth] = useState(0) /* Slider width to table width ratio  */,
        [sliderWidth] = useState(minimapWidth - controllerWidth - sliderContentPadding * 2),
        [minimapOffsetTop, setMinimapOffsetTop] = useState({ left: 0, bottom: 0 }),
        [isHorizontalScrollPresent, setIsHorizontalScrollPresent] = useState(false),
        sliderContent = useMemo(
            () => (
                <SliderContentWrapper sliderWidth={minimapWidth}>
                    {new Array(5).fill(null).map((_, index) => (
                        <SliderContent key={index} controllerWidth={controllerWidth} />
                    ))}
                </SliderContentWrapper>
            ),
            [controllerWidth]
        );
    const isTableTallerThanWindow = useCallback(() => {
            const documentElementClientRect = document.documentElement.getBoundingClientRect();
            console.log('Taller than Data is ', tableRef.current.getBoundingClientRect().bottom, documentElementClientRect);
            return (
                tableRef.current &&
                tableRef.current.getBoundingClientRect().bottom > documentElementClientRect.y + documentElementClientRect.height
            );
        }, [tableRef.current, document.documentElement]),
        positionMinimap = useCallback(
            (isTableHeightGreaterThanWindow: boolean) => {
                const minimapLeftOffset = 170; /* Minimum left offset for minimap left positioning */
                const minimumBottomOffset = 95; /* Minimum bottom offset for minimap bottom positioning */
                let offsetToSet = minimumBottomOffset;
                if (isTableHeightGreaterThanWindow) {
                    offsetToSet =
                        tableRef.current.getBoundingClientRect().bottom -
                        document.documentElement.getBoundingClientRect().height +
                        minimumBottomOffset;
                    if (offsetToSet < minimumBottomOffset) offsetToSet = minimumBottomOffset;
                }
                return { left: tableRef.current && tableRef.current.clientWidth - minimapLeftOffset, bottom: offsetToSet };
            },
            [tableRef.current]
        ),
        setMinimapDimensions = useCallback(() => {
            const isTableTallerThanWindowResult = isTableTallerThanWindow();
            const tableW = (tableRef.current && tableRef.current.scrollWidth - tableRef.current.offsetWidth) + 1;
            setOneMinimapToTableWidth(tableW / sliderWidth);
            setOneTableToMinimapWidth(sliderWidth / tableW);
            setMinimapOffsetTop(positionMinimap(isTableTallerThanWindowResult));
            console.log('Data is ', tableRef.current && tableRef.current.scrollWidth > tableRef.current.offsetWidth);
            setIsHorizontalScrollPresent(tableRef.current && tableRef.current.scrollWidth > tableRef.current.offsetWidth);
        }, [sliderWidth, isTableTallerThanWindow, tableRef.current]),
        onTableScroll = useCallback(
            (e: React.UIEvent<HTMLDivElement>) => {
                e.stopPropagation();
                if (mouseDown) return false;
                sliderControllerRef.current.style.left = `${tableRef.current.scrollLeft * oneTableToMinimapWidth + sliderContentPadding}px`;
            },
            [sliderControllerRef.current, tableRef.current, oneTableToMinimapWidth, mouseDown]
        ),
        onWindowScroll = useCallback(
            (e: any) => {
                e.stopPropagation();
                setMinimapOffsetTop(positionMinimap(isTableTallerThanWindow()));
            },
            [positionMinimap, isTableTallerThanWindow]
        ),
        positionSliderController = useCallback(
            (e: any) => {
                e.stopPropagation();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const sliderWidthWithPadding = sliderWidth + sliderContentPadding;
                /* Identify the slider distance from from its wrapper and subtract slider controller width in-order to position the slider controller in center */
                let clickOffset = Math.round(clientX - wrapperRef.current.getBoundingClientRect().left - controllerWidth / 2);
                /*  If we drag the slider out of its  parent boundaries then set clickOffset to its nearest boundary */
                let controllerOffset = clickOffset;

                if (clickOffset > sliderWidthWithPadding) {
                    clickOffset = sliderWidth;
                    controllerOffset = sliderWidthWithPadding;
                } else if (clickOffset < sliderContentPadding) {
                    clickOffset = 0;
                    controllerOffset = sliderContentPadding;
                }
                sliderControllerRef.current.style.left = `${controllerOffset}px`;
                tableRef.current.scroll(clickOffset * oneMinimapToTableWidth, wrapperRef.current.offsetTop);
            },
            [wrapperRef.current, controllerWidth, oneMinimapToTableWidth, tableRef.current, sliderWidth]
        ),
        onSliderControllerMove = useCallback((e: any) => mouseDown && positionSliderController(e), [mouseDown, positionSliderController]),
        onSliderControllerMouseDown = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
                setMouseDown(true);
                positionSliderController(e);
            },
            [positionSliderController]
        ),
        onSliderControllerReset = () => {
            setMouseDown(false);
            window.removeEventListener('mousemove', onSliderControllerMove);
        };

    useEffect(() => {
        setMinimapDimensions();
        window.addEventListener('load', setMinimapDimensions);
        window.addEventListener('resize', setMinimapDimensions);
        return () => {
            window.addEventListener('load', setMinimapDimensions);
            window.removeEventListener('resize', setMinimapDimensions);
        };
    }, [setMinimapDimensions]);

    useEffect(() => {
        const tableInstance = tableRef.current;
        tableInstance.addEventListener('scroll', onTableScroll);
        return () => {
            tableInstance.removeEventListener('scroll', onTableScroll);
        };
    }, [onTableScroll]);

    useEffect(() => {
        window.addEventListener('scroll', onWindowScroll);
        return () => {
            window.removeEventListener('scroll', onWindowScroll);
        };
    }, [onWindowScroll]);

    useEffect(() => {
        window.addEventListener('mousemove', onSliderControllerMove);
        return () => {
            window.removeEventListener('mousemove', onSliderControllerMove);
        };
    }, [onSliderControllerMove]);

    useEffect(() => {
        window.addEventListener('mouseup', onSliderControllerReset);
        document.documentElement.addEventListener('mouseleave', onSliderControllerReset);
        return () => {
            window.removeEventListener('mouseup', onSliderControllerReset);
            document.documentElement.removeEventListener('mouseleave', onSliderControllerReset);
        };
    }, [onSliderControllerReset]);

    return (
        isHorizontalScrollPresent && (
            <MinimapWrapper ref={wrapperRef} sliderWidth={minimapWidth} offsetTop={minimapOffsetTop}>
                <StyledMinimap onMouseDown={onSliderControllerMouseDown} sliderWidth={minimapWidth}>
                    {sliderContent}
                    <SliderController
                        onMouseDown={onSliderControllerMouseDown}
                        ref={sliderControllerRef}
                        controllerWidth={controllerWidth}
                        leftOffset={sliderContentPadding}
                    />
                </StyledMinimap>
            </MinimapWrapper>
        )
    );
});

Minimap.defaultProps = {
    minimapWidth: 130,
    controllerWidth: 30,
    sliderContentPadding: 8
};
