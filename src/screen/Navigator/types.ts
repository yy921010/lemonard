import { VodInfo } from '@/components';

export interface MetaInformation {
    description: string;
    keywords: string;
    title: string;
}
export interface Theme {
    colors: string[];
    images?: string[];
    metaInformation: MetaInformation;
}

export interface ColoredTitle {
    title: string;
    color: string;
}

export interface Image {
    type: number;
    href: string;
}
export interface Teaser extends VodInfo {
    id: string;
    images: Image[];
}

export interface Content {
    type: 'StructureGrid' | 'UnstructuredGrid' | 'StructuredGridList';
    id: string;
    laneTitle: string;
    coloredTitles: ColoredTitle[];
    backgroundImage: Image;
    laneContentLink: string;
    teasers: Teaser[];
}

export interface Navigator {
    id: string;
    theme: Theme;
    contents: Content[];
}
