import React, { useState } from 'react';
import { Select, Option } from '@/components/UIKit';

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

const Episodes: React.FC<EpisodesProps> = ({ seasons }) => {
    console.log('episodes>>', seasons);

    const [episodes, setEpisodes] = useState<EpisodeItem[]>(seasons[0].episodeList);
    console.log('episodes', episodes);
    return (
        <>
            <EpisodeTitleWrap>
                <EpisodeMainTitle>剧集</EpisodeMainTitle>
                <div>sss</div>
            </EpisodeTitleWrap>
            <EpisodeListWrap>
                {episodes.length > 0
                    ? episodes.map((item) => {
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
                              </EpisodeItem>
                          );
                      })
                    : ''}
            </EpisodeListWrap>
        </>
    );
};

export default Episodes;
