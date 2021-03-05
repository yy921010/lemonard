import React, { useMemo } from 'react';
import { Button, Icon } from '@/components/UIKit';
import { useRequest } from 'ahooks';
import { Vod } from '@/interfaces';
import { getImageUrl } from '@/utils';
import { useParams, useHistory } from 'react-router-dom';
import Seasons from './Season';
import 'twin.macro';
import {
    VodBackground,
    PreModalInfo,
    VodTitle,
    Title,
    SubTitle,
    VodAction,
    VodMeta,
    VodBaseInfo,
    VodDescription,
    VodMetaLeft,
    VodMetaRight,
    VodMetaTag,
    VodMetaTagLabel,
    VodMetaTagItems,
} from './styled';

interface Tag {
    name?: string;
    id?: string;
}
interface DetailTag {
    tagTitle: string;
    tags: Tag[];
}

const Detail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    let history = useHistory();
    const { data: vodInfo } = useRequest<Vod>(`/vod-info`, {
        ready: !!id,
    });

    const detailTags = useMemo<DetailTag[]>(() => {
        if (!vodInfo) {
            return [];
        }
        const actorsNotPic = vodInfo.actors.map((item) => {
            return {
                id: item.id,
                name: item.name,
            };
        });
        const actorTag = {
            tagTitle: '演员',
            tags: actorsNotPic,
        };

        const genreTag = {
            tagTitle: '类别',
            tags: vodInfo.genres as Tag,
        };
        return [actorTag, genreTag] as DetailTag[];
    }, [vodInfo]);
    return vodInfo ? (
        <>
            <div tw="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-70 h-full z-30" />
            <div tw="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-70 h-full z-30 overflow-auto">
                <div tw="md:w-10/12 lg:w-7/12 mx-auto">
                    <div tw="text-white relative bg-black bg-opacity-80 border border-transparent rounded-md outline-width[0] background-clip[padding-box]">
                        <Button
                            circle
                            tw="absolute right-5 top-5 shadow-xl z-50"
                            onClick={() => {
                                history.push(`/navigator/${id}`);
                            }}
                        >
                            <Icon name="close" tw="text-gray-100 text-2xl" />
                        </Button>
                        <div tw="relative">
                            <VodBackground background={getImageUrl(vodInfo.images, 14)}>
                                <PreModalInfo>
                                    <VodTitle>
                                        <Title>{vodInfo.title}</Title>
                                        <SubTitle>{vodInfo.subTitle}</SubTitle>
                                    </VodTitle>
                                    <VodAction>
                                        <Button primary>
                                            <Icon name="play" tw="text-xs mr-2 md:text-xl" type="fill" />
                                            播放
                                        </Button>
                                        <Button circle>
                                            <Icon name="check" tw="text-xs md:text-xl" type="fill" />
                                        </Button>
                                        <Button circle>
                                            <Icon name="heart" tw="text-xs md:text-xl" type="fill" />
                                        </Button>
                                        <Button circle>
                                            <Icon name="dislike" tw="text-xs md:text-xl" type="fill" />
                                        </Button>
                                    </VodAction>
                                </PreModalInfo>
                            </VodBackground>
                            <VodMeta>
                                <VodMetaLeft>
                                    <VodBaseInfo>
                                        <span tw="text-green-500">{vodInfo.rate}</span>
                                        <span>{vodInfo.language}</span>
                                        <span>{vodInfo.time}</span>
                                    </VodBaseInfo>
                                    <VodDescription> {vodInfo.description}</VodDescription>
                                </VodMetaLeft>
                                <VodMetaRight>
                                    {detailTags.length > 0
                                        ? detailTags.map((item) => {
                                              return (
                                                  <VodMetaTag key={item.tagTitle}>
                                                      <VodMetaTagLabel>{item.tagTitle} : </VodMetaTagLabel>
                                                      {item.tags.map((subItem) => {
                                                          return (
                                                              <VodMetaTagItems key={subItem.id}>
                                                                  {subItem.name}
                                                              </VodMetaTagItems>
                                                          );
                                                      })}
                                                  </VodMetaTag>
                                              );
                                          })
                                        : ''}
                                </VodMetaRight>
                            </VodMeta>
                            {Array.isArray(vodInfo.seasons) && vodInfo.seasons?.length > 0 ? (
                                <Seasons {...vodInfo.seasons} />
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
};

export default Detail;
