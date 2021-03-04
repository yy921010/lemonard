import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { Helmet } from 'react-helmet';
import { Billboard, MiniModal, MiniModalProps, PosterWall, StructureGrid } from '@/components';
import { ContentType, Navigator } from '@/interfaces/Navigator';
import getImageUrl from '@/utils';
import { Vod } from '@/interfaces';
import { NavigatorContainer } from './styled';

let timeId: NodeJS.Timeout;

// TODO: 组件数据链接
// TODO: 海报预览
// TODO: 详情页面链接
// 3.7 号发布 0.1 版本

function NavigatorDetail(): JSX.Element {
    const { id } = useParams<{ id: string }>();
    const { data } = useRequest<Navigator>(`/menu/${id}`, {
        ready: !!id,
    });

    const handleMore = (link: string) => {};

    const [positionModal, setPositionModal] = useState<MiniModalProps>({
        left: 0,
        top: 0,
        width: 0,
        layoutId: '',
        height: 0,
    });

    const showMiniModal = (boundingClientRect: DOMRect, teaser: Vod) => {
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

            const modalWidth = width + 150;
            setPositionModal({
                width: modalWidth,
                left: finalLeft,
                top: top + document.documentElement.scrollTop - 40,
                layoutId: teaser.id,
                vod: teaser,
                height: (modalWidth * 9) / 16,
            });
        }
    };

    const onMouseEnterHandle = (event: React.MouseEvent, teaser: Vod) => {
        clearTimeout(timeId);
        const boundingClientRect = event.currentTarget.getBoundingClientRect();
        setPositionModal({
            left: 0,
            top: 0,
            width: 0,
            layoutId: '',
            height: 0,
        });
        timeId = setTimeout(() => {
            showMiniModal(boundingClientRect, teaser);
        }, 1000);
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
                            if (item.type === ContentType.SlickGrid) {
                                return (
                                    <MiniModal
                                        key={item.id}
                                        {...positionModal}
                                        onMouseLeaveHandle={() => {
                                            clearTimeout(timeId);
                                            setPositionModal({
                                                left: 0,
                                                top: 0,
                                                width: 0,
                                                layoutId: '',
                                                height: 0,
                                            });
                                        }}
                                        onShowMoreHandle={(vod) => {}}
                                    >
                                        <StructureGrid
                                            teasers={item.teasers}
                                            content={item}
                                            onHoverEndHandle={() => {
                                                clearTimeout(timeId);
                                            }}
                                            onHoverStartHandle={onMouseEnterHandle}
                                            onMoreHandle={() => {
                                                handleMore(item.laneContentLink);
                                            }}
                                        />
                                    </MiniModal>
                                );
                            }
                            if (item.type === ContentType.Carousel) {
                                return (
                                    <Billboard
                                        key={item.id}
                                        title={item.teasers[0].title}
                                        description={item.teasers[0].description}
                                        backgroundImage={getImageUrl(item.teasers[0].images, 15)}
                                    />
                                );
                            }
                            return (
                                <MiniModal
                                    key={item.id}
                                    {...positionModal}
                                    onMouseLeaveHandle={() => {
                                        clearTimeout(timeId);
                                        // setPositionModal({
                                        //     left: 0,
                                        //     top: 0,
                                        //     width: 0,
                                        //     layoutId: '',
                                        //     height: 0,
                                        // });
                                    }}
                                    onShowMoreHandle={(vod) => {}}
                                >
                                    <PosterWall
                                        teasers={item.teasers}
                                        onHoverEndHandle={() => {
                                            clearTimeout(timeId);
                                        }}
                                        onHoverStartHandle={onMouseEnterHandle}
                                    />
                                </MiniModal>
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
