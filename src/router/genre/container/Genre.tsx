import React, { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDebounceFn, useScroll, useUpdateEffect } from 'ahooks';
import { Helmet } from 'react-helmet';
import { ContentType, Navigator } from '@/interfaces/Navigator';
import { getImageUrl } from '@/utils';
import { Vod } from '@/interfaces';
import { useQuery } from '@apollo/client';
import { Billboard, Detail, MiniModal, MiniModalProps, PosterWall, StructureGrid } from '../components';
import { NavigatorContainer } from '../_styled';
import { QUERY_NAVIGATOR } from '../graphql/queryNavigator';
import 'twin.macro';

let isScrolled = false;
let scrollTimeId: NodeJS.Timeout;

function useLocationQuery() {
    return new URLSearchParams(useLocation().search);
}

function NavigatorDetail(): JSX.Element {
    const { id } = useParams<{ id: string }>();

    const { data } = useQuery<{ navigator: Navigator }>(QUERY_NAVIGATOR, {
        variables: { navigatorId: id },
    });

    const history = useHistory();
    const query = useLocationQuery();

    const handleMore = (link: string) => {};

    const [positionModal, setPositionModal] = useState<MiniModalProps>({
        left: 0,
        top: 0,
        width: 0,
        layoutId: '',
        height: 0,
    });
    const scroll = useScroll(document);

    useUpdateEffect(() => {
        isScrolled = true;
        setPositionModal({
            left: 0,
            top: 0,
            width: 0,
            layoutId: '',
            height: 0,
        });
        clearTimeout(scrollTimeId);
        scrollTimeId = setTimeout(() => {
            isScrolled = false;
        }, 50);
    }, [scroll]);

    const { run, cancel } = useDebounceFn(
        (boundingClientRect: DOMRect, teaser: Vod) => {
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
        },
        {
            wait: 1000,
        },
    );

    const onMouseEnterHandle = (event: React.MouseEvent, teaser: Vod) => {
        if (isScrolled) {
            return;
        }
        const boundingClientRect = event.currentTarget.getBoundingClientRect();
        setPositionModal({
            left: 0,
            top: 0,
            width: 0,
            layoutId: '',
            height: 0,
        });
        run(boundingClientRect, teaser);
    };

    const onHoverEndHandle = (vod: Vod) => {
        history.push(`/genre/${id}?vod-id=${vod.id}`);
    };

    return (
        <>
            {data ? (
                <>
                    <Helmet>
                        <title>{data.navigator.theme.metaInformation.title}</title>
                        <meta name="description" content={data.navigator.theme.metaInformation.description} />
                        <meta name="keywords" content={data.navigator.theme.metaInformation.keywords} />
                    </Helmet>
                    <NavigatorContainer>
                        <MiniModal
                            {...positionModal}
                            onMouseLeaveHandle={() => {
                                cancel();
                                setPositionModal({
                                    left: 0,
                                    top: 0,
                                    width: 0,
                                    layoutId: '',
                                    height: 0,
                                });
                            }}
                            onShowMoreHandle={onHoverEndHandle}
                        >
                            {data.navigator.contents.map((item) => {
                                if (item.type === ContentType.SlickGrid) {
                                    return (
                                        <StructureGrid
                                            key={item.id}
                                            teasers={item.teasers}
                                            content={item}
                                            onHoverEndHandle={() => {}}
                                            onHoverStartHandle={onMouseEnterHandle}
                                            onMoreHandle={() => {
                                                handleMore(item.laneContentLink);
                                            }}
                                        />
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
                                    <PosterWall
                                        key={item.id}
                                        teasers={item.teasers}
                                        onHoverEndHandle={() => {
                                            cancel();
                                        }}
                                        onHoverStartHandle={onMouseEnterHandle}
                                    />
                                );
                            })}
                        </MiniModal>
                    </NavigatorContainer>
                    <Detail vodId={query.get('vod-id') || ''} navigatorId={id} />
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default NavigatorDetail;
