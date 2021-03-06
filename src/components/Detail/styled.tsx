import tw, { css, styled } from 'twin.macro';

interface BackgroundProps {
    background?: string;
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
export const Title = tw.h1`text-3xl md:text-4xl`;
export const SubTitle = tw.h4`text-xs md:text-base text-gray-400`;

export const VodAction = tw.div`flex space-x-6 absolute bottom-16 md:bottom-20`;

export const VodMeta = tw.div`flex text-base px-6 space-x-10`;
export const VodBaseInfo = tw.div`text-gray-400 space-x-3`;

export const VodDescription = tw.div`text-gray-300 space-x-1 mt-2 leading-6 overflow-y-auto h-24`;

export const VodMetaLeft = tw.div`flex-1 text-xs md:text-base`;

export const VodMetaRight = tw.div`flex-1 text-xs md:text-base`;

export const VodMetaTag = tw.div`flex space-x-4 mb-2.5 flex-wrap`;
export const VodMetaTagLabel = tw.div`text-gray-500`;
export const VodMetaTagItems = tw.div``;

export const EpisodeItem = styled.li(() => [
    tw`flex px-10 w-full h-40 overflow-hidden items-center cursor-pointer border-b border-gray-600
     hover:(bg-white bg-opacity-10)`,
]);
export const EpisodeNumber = styled.h1(() => [
    tw`text-3xl mr-4 text-gray-400`,
    css`
        min-width: 50px;
    `,
]);

export const EpisodePoster = styled.div(({ background }: BackgroundProps) => [
    tw`bg-no-repeat bg-cover bg-center mr-4 h-20`,
    css`
        overflow: hidden;
        background-image: url(${background});
        flex: 0 0 18%;
        -webkit-box-flex: 0;
    `,
]);

export const EpisodeInfo = tw.div`w-full`;
export const EpisodeTitle = tw.div`flex justify-between md:text-xl`;
export const EpisodeDescription = tw.div`text-xs md:text-sm text-gray-400`;
export const EpisodeDuration = tw.div``;
export const EpisodeMainTitle = tw.h2`text-2xl`;
export const EpisodeTitleWrap = tw.section`flex justify-between px-6 mt-10 h-14 border-b border-gray-600`;
export const EpisodeListWrap = tw.ul``;

export const EpisodeNextButton = tw.div`text-center -mt-6`;

export const VodMask = styled.div(() => [tw`fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-70 h-full z-30`]);

export const VodModalRoot = styled.div(() => [
    tw`fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-70 h-full z-30 overflow-auto`,
]);
export const VodModalContent = styled.div(() => [tw`md:w-10/12 lg:w-7/12 mx-auto`]);
export const VodModalContentMain = styled.div(() => [
    tw`text-white relative border border-transparent
  rounded-md outline-width[0] background-clip[padding-box] mt-20`,
    css`
        background-color: #181818;
    `,
]);
