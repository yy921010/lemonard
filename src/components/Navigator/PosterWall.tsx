import React from 'react';
import 'twin.macro';
import { motion } from 'framer-motion';
import { Vod } from '@/interfaces/Vod';
import { getImageUrl } from '@/utils';
import { Poster } from '../UIKit';

export interface PosterWallProps {
    teasers: Vod[];
    onHoverStartHandle: (event: React.MouseEvent, teaser: Vod) => void;
    onHoverEndHandle: () => void;
}

const PosterWall: React.FC<PosterWallProps> = ({ teasers, onHoverStartHandle, onHoverEndHandle }) => {
    return (
        <div tw="grid grid-cols-3 gap-y-8 md:(px-6 grid-cols-4) lg:(grid-cols-5 px-10) xl:(grid-cols-6 px-14)">
            {teasers.map((teaser) => {
                return (
                    <motion.div
                        key={teaser.title}
                        tw="cursor-pointer"
                        layoutId={teaser.id}
                        onMouseEnter={(event) => {
                            onHoverStartHandle(event, teaser);
                        }}
                        onMouseLeave={() => {
                            onHoverEndHandle();
                        }}
                    >
                        <motion.div>
                            <Poster
                                src={getImageUrl(teaser.images, 10)}
                                aspectRatio={16 / 9}
                                tw="mx-0.5 sm:mx-1 md:mx-1.5 mb-2"
                            />
                        </motion.div>
                        <motion.h4 tw="text-sm md:text-xl">{teaser.title}</motion.h4>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default PosterWall;
