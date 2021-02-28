import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { Helmet } from 'react-helmet';
import { Poster, SlickList } from '@/components/UIKit';
import tw, { styled, css } from 'twin.macro';
import Billboard from '@/components/Navigator/Billboard';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { NavigatorContainer, PosterWall, SlickSkeleton, SlickTitle } from './styled';

import { Content, Navigator } from './types';

const UnstructuredGridTitle: React.FC<Content> = ({ laneTitle, coloredTitles }) => {
    if (coloredTitles.length > 0) {
        return (
            <>
                {coloredTitles.map((item) => {
                    return (
                        <SlickTitle color={item.color} key={item.title}>
                            {item.title}
                        </SlickTitle>
                    );
                })}
            </>
        );
    }
    return <>{laneTitle}</>;
};

interface PosterPosition {
    left: number;
    top: number;
    width: number;
    layoutId: string;
}

const ModalContainer = styled(motion.div)(({ width, top, left }: { width: number; top: number; left: number }) => [
    tw`absolute border overflow-hidden z-10 opacity-100 shadow-2xl box-border`,
    css`
        width: ${width}px;
        top: ${top}px;
        left: ${left}px;
    `,
]);

function NavigatorDetail(): JSX.Element {
    const { id } = useParams<{ id: string }>();
    const { data } = useRequest<Navigator>(`/menu/${id}`, {
        ready: !!id,
    });

    const handleMore = (link: string) => {};

    const [selectedId, setSelectedId] = useState<string>('');

    const [positionModal, setPositionModal] = useState<PosterPosition>({ left: 0, top: 0, width: 0, layoutId: '' });

    const clickHandle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, layoutId: string) => {
        const boundingClientRect = event.currentTarget.getBoundingClientRect();
        const browserWidth = window.outerWidth;
        console.log('event', event);
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
                layoutId,
            });
        }

        event.preventDefault();
    };
    return (
        <>
            {data ? (
                <>
                    <Helmet>
                        <title>{data.theme.metaInformation.title}</title>
                        <meta name="description" content={data.theme.metaInformation.description} />
                        <meta name="keywords" content={data.theme.metaInformation.keywords} />
                    </Helmet>
                    <NavigatorContainer>
                        {data.contents.map((item) => {
                            if (item.type === 'StructureGrid') {
                                return (
                                    <SlickList
                                        key={item.id}
                                        id={item.id}
                                        title={<UnstructuredGridTitle {...item} />}
                                        onMore={() => {
                                            handleMore(item.laneContentLink);
                                        }}
                                    >
                                        {item.teasers.length > 0 ? (
                                            item.teasers.map((teaser) => {
                                                return (
                                                    <div key={teaser.id} tw="cursor-pointer">
                                                        <div>
                                                            <Poster
                                                                src={teaser.images[0].href}
                                                                aspectRatio={16 / 9}
                                                                tw="mx-0.5 sm:mx-1 md:mx-1.5 mb-2"
                                                            />
                                                        </div>
                                                        <h4 tw="text-sm md:text-xl">{teaser.title}</h4>
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
                                );
                            }
                            if (item.type === 'UnstructuredGrid') {
                                return (
                                    <Billboard
                                        key={item.id}
                                        title={item.teasers[0].title}
                                        description={item.teasers[0].description}
                                        backgroundImage={item.backgroundImage.href}
                                    />
                                );
                            }
                            return (
                                <AnimateSharedLayout type="crossfade">
                                    <PosterWall key={item.id}>
                                        {item.teasers.map((teaser) => {
                                            return (
                                                <motion.div
                                                    key={teaser.title}
                                                    tw="cursor-pointer"
                                                    layoutId={teaser.id}
                                                    onMouseEnter={(event) => {
                                                        clickHandle(event, teaser.id);
                                                    }}
                                                >
                                                    <motion.div>
                                                        <Poster
                                                            src={teaser.images[0].href}
                                                            aspectRatio={16 / 9}
                                                            tw="mx-0.5 sm:mx-1 md:mx-1.5 mb-2"
                                                        />
                                                    </motion.div>
                                                    <motion.h4 tw="text-sm md:text-xl">{teaser.title}</motion.h4>
                                                </motion.div>
                                            );
                                        })}
                                    </PosterWall>
                                    <AnimatePresence>
                                        {positionModal.layoutId && (
                                            <ModalContainer
                                                tw="h-40"
                                                layoutId={positionModal.layoutId}
                                                width={positionModal.width}
                                                left={positionModal.left}
                                                top={positionModal.top}
                                                onMouseLeave={() => {
                                                    setPositionModal({
                                                        left: 0,
                                                        layoutId: '',
                                                        width: 0,
                                                        top: 0,
                                                    });
                                                }}
                                            >
                                                <motion.h5>1</motion.h5>
                                                <motion.h2>222</motion.h2>
                                                <motion.button
                                                    onClick={() => {
                                                        setSelectedId('');
                                                    }}
                                                >
                                                    button
                                                </motion.button>
                                            </ModalContainer>
                                        )}
                                    </AnimatePresence>
                                </AnimateSharedLayout>
                            );
                        })}
                    </NavigatorContainer>
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default NavigatorDetail;
