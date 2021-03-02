import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

export interface MiniModalProps extends MiniModalCss {
    layoutId: string;
    onMouseLeaveHandle?: () => void;
}

export interface MiniModalCss {
    width: number;
    left: number;
    top: number;
    height: number;
}

export const MiniModalContainer = styled(motion.div)(({ width, top, left, height }: MiniModalCss) => [
    tw`absolute border overflow-hidden z-10 opacity-100 shadow-2xl box-border`,
    css`
        width: ${width}px;
        top: ${top}px;
        left: ${left}px;
        height: ${height}px;
    `,
]);

const MiniModal: React.FC<MiniModalProps> = ({ layoutId, width, left, top, height, onMouseLeaveHandle, children }) => {
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
                        MinidModal
                    </MiniModalContainer>
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    );
};

export default MiniModal;
