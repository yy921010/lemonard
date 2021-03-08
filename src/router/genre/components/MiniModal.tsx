import React, { useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { Vod } from '@/interfaces';
import { getImageUrl } from '@/utils';
import { useCountDown, useDebounceFn } from 'ahooks';
import { Button, Icon, Poster } from '@/components';
import MiniPlayer from './MiniPlayerModal';

export interface MiniModalProps extends MiniModalCss {
    layoutId: string;
    vod?: Vod;
    onMouseLeaveHandle?: () => void;
    onShowMoreHandle?: (vod: Vod) => void;
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

export const PosterMask = styled.div(() => [
    tw`absolute top-0 left-0 right-0 bottom-0 p-8 box-border z-40 opacity-100 transition-opacity`,
    css`
        background-image: linear-gradient(180deg, transparent, #000);
    `,
]);

export const PosterButton = styled.div(() => [
    tw`absolute top-10 right-4 w-12 z-40 flex flex-col space-y-2 opacity-100 transition-opacity`,
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
    onShowMoreHandle,
}) => {
    const [isLoaded, setLoaded] = useState<boolean>(false);

    const [, setTargetDate] = useCountDown({
        onEnd: () => {
            setLoaded(true);
        },
    });

    const { run } = useDebounceFn(
        () => {
            setTargetDate(Date.now() + 1500);
        },
        {
            wait: 500,
        },
    );

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
                                setLoaded(false);
                                onMouseLeaveHandle();
                            }
                        }}
                    >
                        {vod ? (
                            <Poster
                                src={getImageUrl(vod.images, 12)}
                                aspectRatio={16 / 9}
                                onMouseMove={() => {
                                    setLoaded(false);
                                    run();
                                }}
                            >
                                <MiniPlayer
                                    playUrl={vod.trailerUrl || ''}
                                    isShow={!!layoutId}
                                    isMute={false}
                                    onCanplay={() => {
                                        setTargetDate(Date.now() + 1500);
                                    }}
                                />
                                <motion.div
                                    tw="absolute left-0 right-0 top-0 bottom-0"
                                    animate={isLoaded ? 'hidden' : 'show'}
                                    variants={{
                                        show: {
                                            opacity: 1,
                                        },
                                        hidden: {
                                            opacity: 0,
                                        },
                                    }}
                                    transition={{ type: 'spring', duration: 2 }}
                                >
                                    <PosterMask>
                                        <div tw="text-2xl absolute bottom-20">{vod.title}</div>
                                        <div tw="text-sm absolute bottom-10">
                                            {vod.time} | {vod.language} | {vod.time}
                                        </div>
                                    </PosterMask>
                                    <PosterButton>
                                        <Button circle>
                                            <Icon name="play" type="fill" />
                                        </Button>
                                        <Button circle>
                                            <Icon name="volume-mute" type="fill" />
                                        </Button>
                                        <Button
                                            circle
                                            onClick={() => {
                                                if (onShowMoreHandle) {
                                                    onShowMoreHandle(vod);
                                                }
                                            }}
                                        >
                                            <Icon name="arrow-down-s" />
                                        </Button>
                                    </PosterButton>
                                </motion.div>
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
