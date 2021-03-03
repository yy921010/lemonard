import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { Vod } from '@/interfaces';
import getImageUrl from '@/utils';
import { Button, Icon, Poster } from '../UIKit';

export interface MiniModalProps extends MiniModalCss {
    layoutId: string;
    vod?: Vod;
    onMouseLeaveHandle?: () => void;
}

export interface MiniModalCss {
    width: number;
    left: number;
    top: number;
    height: number;
}

export const MiniModalContainer = styled(motion.div)(({ width, top, left, height }: MiniModalCss) => [
    tw`absolute overflow-hidden z-10 opacity-100 shadow-2xl box-border`,
    css`
        width: ${width}px;
        top: ${top}px;
        left: ${left}px;
        height: ${height}px;
    `,
]);

const MiniModal: React.FC<MiniModalProps> = ({
    layoutId,
    width,
    left,
    top,
    height,
    onMouseLeaveHandle,
    children,
    vod,
}) => {
    return (
        <AnimateSharedLayout type="crossfade">
            {children}
            <AnimatePresence>
                {layoutId && (
                    <MiniModalContainer
                        layoutId={layoutId}
                        width={width}
                        left={left}
                        top={top}
                        height={height}
                        onMouseLeave={() => {
                            if (onMouseLeaveHandle) {
                                onMouseLeaveHandle();
                            }
                        }}
                    >
                        {vod ? (
                            <Poster src={getImageUrl(vod.images, 12)} aspectRatio={16 / 9}>
                                <div tw="absolute top-0 left-0 right-0 bottom-0 p-8 box-border">
                                    <div tw="text-2xl absolute bottom-20">{vod.title}</div>
                                    <div tw="text-sm absolute bottom-10">
                                        {vod.time} | {vod.language} | {vod.time}
                                    </div>
                                </div>
                                <div tw="absolute top-1 right-4 w-12 z-50 flex flex-col space-y-2 mt-4">
                                    <Button circle>
                                        <Icon name="play" type="fill" />
                                    </Button>
                                    <Button circle>
                                        <Icon name="volume-mute" type="fill" />
                                    </Button>
                                    <Button circle>
                                        <Icon name="arrow-down-s" />
                                    </Button>
                                </div>
                            </Poster>
                        ) : (
                            ''
                        )}
                    </MiniModalContainer>
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    );
};

export default MiniModal;
