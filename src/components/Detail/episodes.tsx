import React, { useState, useEffect, useMemo } from 'react';
import { Button, Icon } from '@/components/UIKit';
import 'twin.macro';

import {
    EpisodeMainTitle,
    EpisodeDescription,
    EpisodeInfo,
    EpisodeItem,
    EpisodeNumber,
    EpisodePoster,
    EpisodeTitle,
    EpisodeTitleWrap,
    EpisodeListWrap,
    EpisodeNextButton,
} from './styled';

export interface EpisodeItem {
    id?: string;
    episodeNumber: number;
    title?: string;
    description?: string;
    poster?: string;
    playUrl?: string;
    playDuration?: number;
}

export interface Season {
    id: string;
    seasonName: string;
    episodeList: EpisodeItem[];
}

export interface EpisodesProps {
    seasons: Season[];
}

const PAGE_SIZE = 10;

interface EpisodePagination {
    seasonSize: number;
    onEpisodePagination: (isUp: boolean) => void;
}

const EpisodePaginationContainer: React.FC<EpisodePagination> = ({ seasonSize, onEpisodePagination }) => {
    const [isButtonUp, setIsButtonUp] = useState(false);

    useEffect(() => {
        return () => {
            setIsButtonUp(false);
        };
    }, []);

    return seasonSize > PAGE_SIZE ? (
        <>
            <EpisodeNextButton
                onClick={() => {
                    onEpisodePagination(!isButtonUp);
                    setIsButtonUp(!isButtonUp);
                }}
            >
                <Button circle>
                    {isButtonUp ? <Icon name="arrow-up-s" tw="text-xl" /> : <Icon name="arrow-down-s" tw="text-xl" />}
                </Button>
            </EpisodeNextButton>
        </>
    ) : (
        <></>
    );
};

const Episodes: React.FC<EpisodesProps> = ({ seasons }) => {
    const [episodes, setEpisodes] = useState<EpisodeItem[]>(seasons[0].episodeList);

    const [isShowUp, setShowUp] = useState<boolean>(false);

    const showEpisodes = useMemo(() => {
        if (episodes.length > PAGE_SIZE) {
            return isShowUp ? episodes : episodes.slice(0, 10);
        }
        return episodes;
    }, [episodes, isShowUp]);

    const onEpisodePagination = (isUp: boolean) => {
        setShowUp(isUp);
    };
    return (
        <>
            <EpisodeTitleWrap>
                <EpisodeMainTitle>剧集</EpisodeMainTitle>
                <div>sss</div>
            </EpisodeTitleWrap>
            <EpisodeListWrap>
                {showEpisodes.length > 0
                    ? showEpisodes.map((item) => {
                          return (
                              <EpisodeItem key={item.episodeNumber}>
                                  <EpisodeNumber>{item.episodeNumber}</EpisodeNumber>
                                  <EpisodePoster background={item.poster} />
                                  <EpisodeInfo>
                                      <EpisodeTitle>
                                          <span>{item.title}</span>
                                          <span>{item.playDuration}</span>
                                      </EpisodeTitle>
                                      <EpisodeDescription>{item.description}</EpisodeDescription>
                                  </EpisodeInfo>
                                  <EpisodeNextButton />
                              </EpisodeItem>
                          );
                      })
                    : ''}
                <EpisodePaginationContainer seasonSize={episodes.length} onEpisodePagination={onEpisodePagination} />
            </EpisodeListWrap>
        </>
    );
};

export default Episodes;
