import React, { useEffect, useRef } from 'react';
import 'twin.macro';

export interface MiniPlayerProps {
    playUrl: string;
    isMute: boolean;
    isShow: boolean;
    onCanplay: () => void;
}

const MiniPlayer: React.FC<MiniPlayerProps> = ({ playUrl, isShow, onCanplay }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.5;
            videoRef.current.addEventListener(
                'canplay',
                () => {
                    onCanplay();
                },
                true,
            );
        }
    }, [isShow, onCanplay]);
    return (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video src={playUrl} ref={videoRef} tw="w-full h-full absolute z-20 left-0" css="top:-1px" autoPlay />
    );
};

export default MiniPlayer;
