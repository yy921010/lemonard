import tw, { css, styled } from 'twin.macro';

export const Vod = tw.div`flex flex-col w-full items-center relative`;

interface BackgroundProps {
    background: string;
}

export const VodBackground = styled.div(({ background }: BackgroundProps) => [
    tw`w-full bg-no-repeat bg-cover bg-center slashed-zero top-0`,
    css`
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background});
        aspect-ratio: 21 / 9;
    `,
]);
