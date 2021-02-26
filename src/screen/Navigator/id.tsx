import React from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { Helmet } from 'react-helmet';
import { Poster, SlickList } from '@/components/UIKit';
import 'twin.macro';
import Billboard from '@/components/Navigator/Billboard';
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

function NavigatorDetail(): JSX.Element {
    const { id } = useParams<{ id: string }>();
    const { data } = useRequest<Navigator>(`/menu/${id}`, {
        ready: !!id,
    });

    const handleMore = (link: string) => {};

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
                                <PosterWall key={item.id}>
                                    {item.teasers.map((teaser) => {
                                        return (
                                            <div key={teaser.title} tw="cursor-pointer">
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
                                    })}
                                </PosterWall>
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
