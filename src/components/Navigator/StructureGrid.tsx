import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { motion } from 'framer-motion';
import { Content, Vod } from '@/interfaces';
import getImageUrl from '@/utils';
import { Poster, SlickList } from '../UIKit';

export interface StructureGridProps {
    teasers: Vod[];
    content: Content;
    onMoreHandle?: () => void;
    onHoverStartHandle: (event: React.MouseEvent, teaser: Vod) => void;
    onHoverEndHandle: () => void;
}

export const SlickSkeleton = tw.div``;

export const SlickTitle = styled.span(({ color }) => [
    css`
        color: ${color};
    `,
]);

const UnstructuredGridTitle: React.FC<Content> = ({ laneTitle, coloredTitles }) => {
    if (coloredTitles.length > 0) {
        return (
            <>
                {coloredTitles.map((item) => {
                    return (
                        <SlickTitle color={item.color} key={item.title}>
                            {item.title}
                        </SlickTitle>
                    );
                })}
            </>
        );
    }
    return <>{laneTitle}</>;
};

const StructureGrid: React.FC<StructureGridProps> = ({
    teasers,
    content,
    onMoreHandle,
    onHoverEndHandle,
    onHoverStartHandle,
}) => {
    return (
        <SlickList
            id={content.id}
            title={<UnstructuredGridTitle {...content} />}
            onMore={() => {
                if (onMoreHandle) {
                    onMoreHandle();
                }
            }}
        >
            {teasers.length > 0 ? (
                teasers.map((teaser) => {
                    return (
                        <div key={teaser.id} tw="cursor-pointer">
                            <motion.div
                                onMouseEnter={(event) => {
                                    onHoverStartHandle(event, teaser);
                                }}
                                onMouseLeave={() => {
                                    onHoverEndHandle();
                                }}
                                layoutId={teaser.id}
                            >
                                <Poster
                                    src={getImageUrl(teaser.images, 10)}
                                    aspectRatio={16 / 9}
                                    tw="mx-0.5 sm:mx-1 md:mx-1.5 mb-2"
                                />
                            </motion.div>
                            <h4 tw="text-sm md:text-xl">{teaser.title}</h4>
                        </div>
                    );
                })
            ) : (
                <>
                    {Array(5)
                        .fill('.')
                        .map((_, index) => {
                            const renderId = `${index}id`;
                            return <SlickSkeleton key={renderId} />;
                        })}
                </>
            )}
        </SlickList>
    );
};

export default StructureGrid;
