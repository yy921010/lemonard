import tw, { styled, css } from 'twin.macro';
import React from 'react';
import Icon from '../RemixIcon';

export interface PosterProp {
    className?: string;
    aspectRatio: number;
    src?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const PosterWrap = styled.div(({ aspectRatio }: PosterProp) => [
    tw`bg-no-repeat bg-center flex-shrink-0 bg-cover relative bg-black`,
    css`
        aspect-ratio: ${aspectRatio};
    `,
]);

const Poster: React.FC<PosterProp> = ({ className, aspectRatio = 1 / 1, onClick, src = '', children }) => {
    return (
        <PosterWrap className={className} aspectRatio={aspectRatio} onClick={onClick}>
            <Icon
                name="film"
                tw="text-6xl text-gray-600 absolute left-1/2 top-1/2  transform(-translate-x-1/2 -translate-y-1/2)"
            />
            <img src={src} alt={src} tw="z-0 top-0 w-full h-full left-0" />
            {children}
        </PosterWrap>
    );
};

export default Poster;
