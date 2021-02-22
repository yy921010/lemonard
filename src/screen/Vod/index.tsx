import React, { useEffect, useState } from 'react';
import { Button, Icon, Poster, SlickList } from '@/components/UIKit';
import { VodInfo } from '@/components';
import tw, { css, styled } from 'twin.macro';
import './index.css';
import { useRequest } from 'ahooks';

const SlickSkeleton = tw.div``;

const SlickPosterWrap = styled.div(({ isHover }: { isHover?: boolean }) => [
    isHover
        ? css`
              box-shadow: 0 5px 9px 0 rgb(0 0 0 / 50%);
              margin: calc((56.25% - 292px) / 2) calc(50% - 260px);
              width: 520px;
              z-index: 1;
          `
        : '',
]);

const MiniModal = tw.div`flex justify-center absolute top-0 left-0 will-change[scroll-position]`;

const ModalContainer = styled.div(({ width, top, left }: { width: number; top: number; left: number }) => [
    tw`will-change[transform] absolute border overflow-hidden z-10 opacity-100 shadow-2xl box-border`,
    css`
        width: ${width}px;
        top: ${top}px;
        left: ${left}px;
    `,
]);

const PosterMask = tw.div`absolute top-0 left-0 z-10 h-full w-full bg-opacity-50 p-5 box-border bg-gradient-to-b from-transparent  to-black bg-opacity-50`;

const PosterButtons = tw.div`absolute top-1 right-4 w-12 z-50 flex flex-col space-y-2 mt-4`;

const PosterWall = tw.div`grid grid-cols-3 gap-y-8 md:(px-6 grid-cols-4) lg:(grid-cols-5) xl:grid-cols-6`;

const Vod = (): JSX.Element => {
    const [isShowModal, setShowModal] = useState<boolean>(false);
    const [positionModal, setPositionModal] = useState<{
        left: number;
        top: number;
        width: number;
    }>({ left: 0, top: 0, width: 0 });
    const [vodList, setVodList] = useState<VodInfo[]>([]);
    useEffect(() => {
        fetch('vod-list')
            .then((resp) => resp.json())
            .then((data) => {
                setVodList(data.vodList);
            });
    }, []);

    const onMouseEnterHandle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setShowModal(true);
        const boundingClientRect = event.currentTarget.getBoundingClientRect();
        const browserWidth = window.outerWidth;
        if (boundingClientRect) {
            const { left, top, width } = boundingClientRect;
            let finalLeft: number = left - 80;
            if (left <= 50) {
                finalLeft = left;
            } else if (browserWidth <= 758) {
                const maxLeft = boundingClientRect.width * 2;
                if (left >= maxLeft) {
                    finalLeft = left - 150;
                }
            } else if (browserWidth > 758 && browserWidth <= 1024) {
                const maxLeft = boundingClientRect.width * 3;
                if (left >= maxLeft) {
                    finalLeft = left - 180;
                }
            } else if (browserWidth > 758 && browserWidth <= 1280) {
                const maxLeft = boundingClientRect.width * 4;
                if (left >= maxLeft) {
                    finalLeft = left - 180;
                }
            } else if (browserWidth > 1280) {
                const maxLeft = boundingClientRect.width * 5;
                if (left >= maxLeft) {
                    finalLeft = left - 100;
                }
            }
            setPositionModal({
                width: width + 150,
                left: finalLeft,
                top: top + document.documentElement.scrollTop - 40,
            });
        }

        event.preventDefault();
    };

    return (
        <div>
            <Poster
                src="https://occ-0-2772-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSEz2ZNn_8fcHrdCnW_dq2YzK-bfvWjPlwAvI_LjWIhTxGMj050uGMUUSTQTzjdEgd5JqobRFKeXeI2ju0m452goEGVgUiszovYGvWPAMUSffXWm1SGrmvk23qvJ.jpg?r=e80"
                aspectRatio={16 / 9}
            />
            <MiniModal>
                <ModalContainer
                    width={positionModal.width}
                    left={positionModal.left}
                    top={positionModal.top}
                    onMouseLeave={() => {
                        setShowModal(false);
                    }}
                >
                    <Poster
                        src="https://occ-0-2772-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSEz2ZNn_8fcHrdCnW_dq2YzK-bfvWjPlwAvI_LjWIhTxGMj050uGMUUSTQTzjdEgd5JqobRFKeXeI2ju0m452goEGVgUiszovYGvWPAMUSffXWm1SGrmvk23qvJ.jpg?r=e80"
                        aspectRatio={16 / 9}
                    >
                        <PosterMask>
                            <div tw="text-2xl mt-32">big main Title</div>
                            <span tw="text-base">rating</span>
                            <div tw="text-sm">big main Title | meta data | year</div>
                        </PosterMask>
                        <PosterButtons>
                            <Button circle>
                                <Icon name="play" type="fill" />
                            </Button>
                            <Button circle>
                                <Icon name="volume-mute" type="fill" />
                            </Button>
                            <Button circle>
                                <Icon name="arrow-down-s" />
                            </Button>
                        </PosterButtons>
                    </Poster>
                </ModalContainer>
            </MiniModal>

            <SlickList key="sss" id="sss" title="我的列表" onMore={() => {}}>
                {vodList.length > 0 ? (
                    vodList.map((item) => {
                        return (
                            <div key={item.title} tw="cursor-pointer">
                                <SlickPosterWrap onMouseEnter={onMouseEnterHandle}>
                                    <Poster src={item.poster} aspectRatio={16 / 9} tw="mx-0.5 sm:mx-1 md:mx-1.5 mb-2" />
                                </SlickPosterWrap>
                                <h4 tw="text-sm md:text-xl">{item.title}</h4>
                            </div>
                        );
                    })
                ) : (
                    <>
                        {Array(5)
                            .fill('.')
                            .map((_, index) => {
                                const renderId = `${index}id`;
                                return <SlickSkeleton key={renderId} />;
                            })}
                    </>
                )}
            </SlickList>
            <SlickList key="sss1" id="sss1" title="我的列表" onMore={() => {}}>
                {vodList.length > 0 ? (
                    vodList.map((item) => {
                        return (
                            <div key={item.title}>
                                <SlickPosterWrap tw="cursor-pointer transition-transform hover:(transform-gpu scale-150 z-auto)">
                                    <Poster src={item.poster} aspectRatio={16 / 9} tw="mx-0.5 sm:mx-1 md:mx-1.5 mb-2" />
                                </SlickPosterWrap>
                                <h4 tw="text-sm md:text-xl">{item.title}</h4>
                            </div>
                        );
                    })
                ) : (
                    <>
                        {Array(5)
                            .fill('.')
                            .map((_, index) => {
                                const renderId = `${index}id`;
                                return <SlickSkeleton key={renderId} />;
                            })}
                    </>
                )}
            </SlickList>
            <PosterWall>
                {vodList.map((item) => {
                    return (
                        <div key={item.title} tw="cursor-pointer">
                            <SlickPosterWrap>
                                <Poster src={item.poster} aspectRatio={16 / 9} tw="mx-0.5 sm:mx-1 md:mx-1.5 mb-2" />
                            </SlickPosterWrap>
                            <h4 tw="text-sm md:text-xl">{item.title}</h4>
                        </div>
                    );
                })}
            </PosterWall>
        </div>
    );
};
export default Vod;
