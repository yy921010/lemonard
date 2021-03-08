import React from 'react';
import './slick.css';
import './slick-theme.css';
import Slider, { Settings, CustomArrowProps } from 'react-slick';
import tw, { styled, css } from 'twin.macro';
import Icon from '../RemixIcon';

const ArrowButtonWrap = styled.button(() => [
    tw`z-10 bg-black bg-opacity-50`,
    css`
        height: calc(100% - 34px);
    `,
]);
const NextArrow: React.FC<CustomArrowProps> = ({ className, onClick }) => {
    return (
        <ArrowButtonWrap className={className} onClick={onClick}>
            <Icon name="arrow-right-s" tw="text-white text-4xl" />
        </ArrowButtonWrap>
    );
};

const PrevArrow: React.FC<CustomArrowProps> = ({ className, onClick }) => {
    return (
        <ArrowButtonWrap className={className} onClick={onClick}>
            <Icon name="arrow-left-s" tw="text-white text-4xl" />
        </ArrowButtonWrap>
    );
};

const SlidePoster: React.FC<Settings> = ({ ...rest }) => {
    return <Slider {...rest} nextArrow={<NextArrow />} prevArrow={<PrevArrow />} />;
};

export default SlidePoster;
