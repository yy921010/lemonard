import tw, { styled, css } from 'twin.macro';
import React from 'react';

export interface PosterProp {
    className?: string;
    aspectRatio: number;
}

const PosterWrap = styled.div(({ aspectRatio }: PosterProp) => [
    tw`bg-no-repeat bg-center flex-shrink-0 bg-cover`,
    css`
        aspect-ratio: ${aspectRatio};
    `,
]);

const Poster: React.FC<PosterProp> = ({ className, aspectRatio = 1 / 1 }) => {
    return <PosterWrap className={className} aspectRatio={aspectRatio} />;
};

export default Poster;
