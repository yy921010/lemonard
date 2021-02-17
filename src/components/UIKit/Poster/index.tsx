import tw, { styled, css } from 'twin.macro';
import React from 'react';
import Icon from '../RemixIcon';

export interface PosterProp {
    className?: string;
    aspectRatio: number;
    src?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const PosterWrap = styled.div(({ aspectRatio = 1 / 1 }: PosterProp) => {
    return [
        tw`bg-no-repeat bg-center flex-shrink-0 bg-cover relative bg-black rounded overflow-hidden`,
        css`
            aspect-ratio: ${aspectRatio};
            &:before {
                content: '';
                display: block;
                width: 100%;
                padding-top: ${(1 / aspectRatio) * 100}%;
            }
        `,
    ];
});

const Poster: React.FC<PosterProp> = ({ className, aspectRatio = 1 / 1, onClick, src = '', children }) => {
    return (
        <PosterWrap className={className} aspectRatio={aspectRatio} onClick={onClick}>
            <Icon
                name="film"
                tw="text-2xl md:text-3xl lg:text-4xl text-white text-opacity-25 absolute left-1/2 top-1/2  transform(-translate-x-1/2 -translate-y-1/2)"
            />
            <img src={src} alt={src} tw="z-10 top-0 w-full h-full left-0 absolute" />
            {children}
        </PosterWrap>
    );
};

export default Poster;
