/**
 * 数据定义
 */

export type Image = {
    href: string;
    type: number;
};

export interface Tag {
    id?: string;
    name: string;
    type?: string;
}

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
    poster?: string;
    playUrl?: string;
    playDuration?: number;
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
    id?: string;
    title: string;
    subTitle?: string;
    rate?: string;
    language?: string;
    time?: string;
    description?: string;
    images?: Image[];
    tags: Tag[];
    seasons?: Season[];
    trailerUrl?: string;
    playUrl?: string;
    vodType?: number;
    genres?: Genre[];
    actors?: Actor[];
    formatInformation?: FormatInformation;
}
