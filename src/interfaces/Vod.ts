/**
 * 数据定义
 */

export type Image = {
    href: string;
    type: number;
};

export interface Season {
    id: string;
    name: string;
    episodes: Episode[];
}

export interface Episode {
    id?: string;
    episodeNumber: number;
    title?: string;
    description?: string;
    images: Image[];
    playUrl?: string;
    playDuration?: string;
}

export interface FormatInformation {
    videoQualities?: string[];
    subtitleLanguages?: string[];
    audioLanguages?: string[];
    audioQualities?: string[];
}

export interface Genre {
    id?: string;
    name?: string;
}

export interface Actor {
    id?: string;
    name?: string;
    images?: Image[];
}

export interface Vod {
    id: string;
    title: string;
    subTitle?: string;
    rate?: string;
    language?: string;
    time?: string;
    description?: string;
    images: Image[];
    seasons?: Season[];
    trailerUrl?: string;
    playUrl?: string;
    vodType: number;
    genres: Genre[];
    actors: Actor[];
    formatInformation?: FormatInformation;
}
