import React from 'react';
import { Button, Icon } from '@/components/UIKit';
import { useTitle } from 'ahooks';
import Episodes, { Season } from './episodes';
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

interface TagItem {
    id: string;
    name: string;
}

interface Tag {
    tagName: string;
    type?: number;
    tagItems: TagItem[];
}

export interface VodInfo {
    id?: string;
    poster?: string;
    title: string;
    subTitle?: string;
    rate?: string;
    language?: string;
    time?: string;
    description?: string;
    tags: Tag[];
    seasons?: Season[];
}

const Detail: React.FC<VodInfo> = ({ poster, title, subTitle, rate, language, time, description, tags, seasons }) => {
    useTitle(title);
    return (
        <>
            <VodBackground background={poster}>
                <PreModalInfo>
                    <VodTitle>
                        <Title>{title}</Title>
                        <SubTitle>{subTitle}</SubTitle>
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
                        <span tw="text-green-500">{rate}</span>
                        <span>{language}</span>
                        <span>{time}</span>
                    </VodBaseInfo>
                    <VodDescription> {description}</VodDescription>
                </VodMetaLeft>
                <VodMetaRight>
                    {tags.length > 0
                        ? tags.map((item) => {
                              return (
                                  <VodMetaTag key={item.tagName}>
                                      <VodMetaTagLabel>{item.tagName} : </VodMetaTagLabel>
                                      {item.tagItems.map((subItem) => {
                                          return <VodMetaTagItems key={subItem.id}>{subItem.name}</VodMetaTagItems>;
                                      })}
                                  </VodMetaTag>
                              );
                          })
                        : ''}
                </VodMetaRight>
            </VodMeta>
            {Array.isArray(seasons) && seasons?.length > 0 ? <Episodes seasons={seasons} /> : ''}
        </>
    );
};

export default Detail;
