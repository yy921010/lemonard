import React from 'react';
import { Select, Option } from '@/components/UIKit';

import {
    EpisodeMainTitle,
    EpisodeDescription,
    EpisodeInfo,
    EpisodeItem,
    EpisodeNumber,
    EpisodePoster,
    EpisodeTitle,
    EpisodeDuration,
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
    return (
        <>
            <EpisodeMainTitle>剧集</EpisodeMainTitle>
            <Select>
                {seasons.map((item) => {
                    return (
                        <Option value={item.id} key={item.id}>
                            {item.seasonName}
                        </Option>
                    );
                })}
            </Select>
            {/* {episodes.length > 0
                ? episodes.map((item) => {
                      return (
                          <EpisodeItem key={item.id}>
                              <EpisodeNumber />
                              <EpisodePoster />
                              <EpisodeInfo>
                                  <EpisodeTitle />
                                  <EpisodeDescription />
                              </EpisodeInfo>
                              <EpisodeDuration>{item}</EpisodeDuration>
                          </EpisodeItem>
                      );
                  })
                : ''} */}
        </>
    );
};

export default Episodes;
