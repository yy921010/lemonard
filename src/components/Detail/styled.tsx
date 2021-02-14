import tw, { css, styled } from 'twin.macro';

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

export const PreModalInfo = styled.div(() => [tw`w-full absolute top-0 left-0 h-full p-6`]);

export const VodTitle = tw.div`absolute bottom-28 md:bottom-40`;
export const Title = tw.div`text-3xl md:text-4xl`;
export const SubTitle = tw.div`text-xs md:text-base text-gray-400`;

export const VodAction = tw.div`flex space-x-6 absolute bottom-16 md:bottom-20`;

export const VodMeta = tw.div`flex text-base px-6 space-x-10`;
export const VodBaseInfo = tw.div`text-gray-400 space-x-3`;

export const VodDescription = tw.div`text-gray-300 space-x-1 mt-2 leading-6 overflow-y-auto h-24`;

export const VodMetaLeft = tw.div`flex-1 text-xs md:text-base`;

export const VodMetaRight = tw.div`flex-1 text-xs md:text-base`;

export const VodMetaTag = tw.div`flex space-x-4 mb-2.5 flex-wrap`;
export const VodMetaTagLabel = tw.div`text-gray-500`;
export const VodMetaTagItems = tw.div``;

export const EpisodeItem = tw.div``;
export const EpisodeNumber = tw.div``;
export const EpisodePoster = tw.div``;
export const EpisodeInfo = tw.div``;
export const EpisodeTitle = tw.div``;
export const EpisodeDescription = tw.div``;
export const EpisodeDuration = tw.div``;
export const EpisodeMainTitle = tw.div``;
