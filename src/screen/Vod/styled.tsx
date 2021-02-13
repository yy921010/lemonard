import tw, { css, styled } from 'twin.macro';

export const Vod = tw.div`flex flex-col w-full items-center relative`;

interface BackgroundProps {
    background: string;
}

export const VodBackground = styled.div(({ background }: BackgroundProps) => [
    tw`w-full bg-no-repeat bg-cover bg-center slashed-zero top-0 relative`,
    css`
        background-image: linear-gradient(rgba(0, 0, 0, 0), #181818), url(${background});
        padding-top: 56.25%;
    `,
]);

export const PreModalInfo = styled.div(() => [tw`w-full absolute top-0 left-0 h-full p-10`]);

export const VodTitle = tw.div`absolute bottom-28 md:bottom-40 mb-2`;
export const Title = tw.div`text-4xl`;
export const SubTitle = tw.div`text-base text-gray-400`;
