import React from 'react';
import { Slick, Icon } from '@/components/UIKit';
import tw from 'twin.macro';

export interface SlickItem {
    picUrl: string;
    title: string;
    id: string;
}

export interface SlickProps {
    id: string;
    title: string;
    children?: React.ReactNode;
    onMore: (id: string) => void;
}

const SlickHeaderWrap = tw.div`flex items-center mb-4`;

const SlickTitle = tw.h1`text-base md:text-2xl `;

const SlickAll = tw.div`text-sm md:text-base flex items-center`;

const SlickListWrap = tw.div`md:px-8 box-border overflow-hidden my-4`;

function SlickList({ title, id, onMore, children }: SlickProps): JSX.Element {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 758,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };

    return (
        <SlickListWrap>
            <SlickHeaderWrap>
                <SlickTitle>{title}</SlickTitle>
                <SlickAll
                    onClick={() => {
                        onMore(id);
                    }}
                >
                    <Icon name="arrow-right-s" tw="text-sm md:text-2xl" />
                    浏览全部
                </SlickAll>
            </SlickHeaderWrap>
            <Slick {...settings}>{children}</Slick>
        </SlickListWrap>
    );
}

export default SlickList;
