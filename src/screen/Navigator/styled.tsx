import tw, { styled, css } from 'twin.macro';

export const NavigatorContainer = tw.div``;

export const NavigatorContainer1 = tw.div``;

export const SlickSkeleton = tw.div``;

export const PosterWall = tw.div`grid grid-cols-3 gap-y-8 md:(px-6 grid-cols-4) lg:(grid-cols-5 px-10) xl:(grid-cols-6 px-14)`;

export const SlickTitle = styled.span(({ color }) => [
    css`
        color: ${color};
    `,
]);
