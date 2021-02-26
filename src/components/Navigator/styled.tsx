import tw, { styled, css } from 'twin.macro';

export const BillboardHero = styled.div(() => [
    tw`relative box-border`,
    css`
        padding-bottom: 40%;
    `,
]);

export const HeroVignette = styled.div(() => [
    tw`left-0 absolute z-10 w-full bottom-0`,
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

export const PosterMaskFill = tw.div`absolute bottom-6 left-0 px-8 lg:(bottom-3 px-10) xl:px-14`;
export const MateLayer = styled.div``;
export const BillboardTitle = tw.div`text-2xl mb-2 md:(text-3xl) lg:text-5xl xl:(text-7xl mb-10)`;
export const BillboardDesc = tw.div`text-sm mb-2 md:(text-base mb-3.5) lg:(text-2xl mb-4)`;
export const BillboardAction = tw.div`space-x-2`;

export const VignetteLayer = styled.div(() => [
    tw`absolute left-0 bottom-0 right-1/4 top-0 z-10`,
    css`
        background: linear-gradient(77deg, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 85%);
    `,
]);
