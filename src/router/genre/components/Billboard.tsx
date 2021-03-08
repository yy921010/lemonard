import React from 'react';
import { Button, Icon, Poster } from '@/components';
import 'twin.macro';
import {
    BillboardAction,
    BillboardDesc,
    BillboardHero,
    BillboardTitle,
    HeroVignette,
    MateLayer,
    PosterMaskFill,
    VignetteLayer,
} from '../_styled';

export interface BillBoard {
    backgroundImage: string;
    title?: string;
    description?: string;
}

const Billboard: React.FC<BillBoard> = ({ backgroundImage, title, description }) => {
    return (
        <BillboardHero>
            <Poster tw="absolute z-0 w-full" src={backgroundImage} aspectRatio={16 / 9}>
                <HeroVignette />
                <VignetteLayer />
            </Poster>
            <PosterMaskFill>
                <MateLayer>
                    <BillboardTitle>{title}</BillboardTitle>
                    <BillboardDesc>{description}</BillboardDesc>
                    <BillboardAction>
                        <Button primary tw="md:w-32">
                            <Icon name="play" type="fill" />
                            播放
                        </Button>
                        <Button tw="md:w-32">
                            <Icon name="information" type="fill" />
                            详情
                        </Button>
                    </BillboardAction>
                </MateLayer>
            </PosterMaskFill>
        </BillboardHero>
    );
};

export default Billboard;
