import { styled } from "@medly-components/utils";

export const MinimapWrapper = styled('tr') <{ sliderWidth: number, offsetTop: { left: number; bottom: number; } }>`
    position: sticky;
    display: block;
    z-index: 999;
    left: ${({ offsetTop }) => `${offsetTop.left}px`};
    width: ${({ sliderWidth }) => `${sliderWidth}px`};
    bottom: ${({ offsetTop }) => `${offsetTop.bottom}px`};
    opacity: 0.4;
    transition: opacity 400ms ease-in-out;
    &:hover {
        opacity: 1;
        transition-delay: 0ms;
    }
`;

export const Minimap = styled('td') <{ sliderWidth: number }>`
    position: absolute;
    display: block;
    left: 0;
    background: ${({ theme: { table: { minimap } } }) => minimap.bgColor};
    height: 4.6rem;
    box-shadow: 0 .4rem .6rem .3rem rgba(51, 51, 51, 0.1);
    z-index: 999;
    border-radius: ${({ theme: { table: { minimap } } }) => minimap.borderRadius};
`;

export const SliderContent = styled('div') <{ controllerWidth: number }>`
    width: ${({ controllerWidth }) => `${controllerWidth}px`};
    cursor: pointer;
    margin: .8rem .25rem;
    height: 3rem;
    background: ${({ theme: { table: { minimap } } }) => minimap.sliderContent.bgColor};
    z-index: 999;
`;

export const SliderContentWrapper = styled('div') <{ sliderWidth: number }>`
    display: flex;
    flex-direction: row;
    width: ${({ sliderWidth }) => `${sliderWidth}px`};
    z-index: 999;

    & > div:nth-child(1) {
        margin-left: .8rem;
    }

    & > div:last-child {
        margin-right: .8rem;
    }
`;
