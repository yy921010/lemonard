import { Vod, Image } from './Vod';

export interface MetaInformation {
    description: string;
    keywords: string;
    title: string;
}
export interface Theme {
    colors?: string[];
    images?: Image[];
    title?: string;
    coloredTitles?: ColoredTitle[];
    metaInformation: MetaInformation;
}

export interface ColoredTitle {
    title: string;
    color: string;
}

export enum ContentType {
    StructureGrid = 'StructureGrid',
    SlickGrid = 'SlickGrid',
    Carousel = 'Carousel',
}

export interface Content {
    type: ContentType;
    id: string;
    laneTitle: string;
    coloredTitles: ColoredTitle[];
    laneContentLink: string;
    teasers: Vod[];
}

export interface Navigator {
    id: string;
    theme: Theme;
    contents: Content[];
}
