import tw, { styled, css } from 'twin.macro';

export const NavigatorContainer = tw.div``;

export const NavigatorContainer1 = tw.div``;

export const SlickSkeleton = tw.div``;

export const PosterWall = tw.div`grid grid-cols-3 gap-y-8 md:(px-6 grid-cols-4) lg:(grid-cols-5) xl:grid-cols-6`;

export const SlickTitle = styled.span(({ color }) => [
    css`
        color: ${color};
    `,
]);
export const BillboardHero = tw.div`relative`;

export const HeroVignette = styled.div(() => [
    tw`left-0 bottom-0 absolute z-10 w-full`,
    css`
        height: 14.7vw;
        background-image: -webkit-linear-gradient(
            top,
            rgba(20, 20, 20, 0) 0,
            rgba(20, 20, 20, 0.15) 15%,
            rgba(20, 20, 20, 0.35) 29%,
            rgba(20, 20, 20, 0.58) 44%,
            #141414 68%,
            #141414 100%
        );
    `,
]);
