import React from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { Helmet } from 'react-helmet';
import { Poster, SlickList } from '@/components/UIKit';
import { BillboardHero, HeroVignette, NavigatorContainer, PosterWall, SlickSkeleton, SlickTitle } from './styled';
import 'twin.macro';
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

// TODO: 构建大海报、slick 组件 抽取，排行榜,list 组件的分页功能
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
                                    <BillboardHero>
                                        <Poster
                                            src="https://occ-0-2772-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSEz2ZNn_8fcHrdCnW_dq2YzK-bfvWjPlwAvI_LjWIhTxGMj050uGMUUSTQTzjdEgd5JqobRFKeXeI2ju0m452goEGVgUiszovYGvWPAMUSffXWm1SGrmvk23qvJ.jpg?r=e80"
                                            aspectRatio={16 / 9}
                                        />
                                        <HeroVignette />
                                    </BillboardHero>
                                );
                            }
                            return (
                                <PosterWall>
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
