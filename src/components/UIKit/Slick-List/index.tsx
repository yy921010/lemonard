import React from 'react';
import { Slick, Poster, Icon } from '@/components/UIKit';
import tw from 'twin.macro';

export interface SlickItem {
    picUrl: string;
    title: string;
    id: string;
}

export interface SlickProps {
    id: string;
    title: string;
    slicks: SlickItem[];
    onSlick: (id: string) => void;
    onMore: (id: string) => void;
}

const SlickHeaderWrap = tw.div`flex items-center mb-4`;

const SlickTitle = tw.h1`text-base md:text-2xl `;

const SlickAll = tw.div`text-sm md:text-base flex items-center`;

const SlickListWrap = tw.div`px-16 box-border overflow-hidden my-4`;

const SlickItemTitle = tw.h4`text-sm md:text-xl`;

const SlickItemWrap = tw.div``;

const SlickList: React.FC<SlickProps> = ({ title, slicks, id, onSlick, onMore }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
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
            <Slick {...settings}>
                {slicks.map((item) => {
                    return (
                        <SlickItemWrap key={item.id}>
                            <Poster
                                src={item.picUrl}
                                aspectRatio={16 / 9}
                                tw="mr-4 mb-2"
                                onClick={() => {
                                    onSlick(item.id);
                                }}
                            />
                            <SlickItemTitle>{item.title}</SlickItemTitle>
                        </SlickItemWrap>
                    );
                })}
            </Slick>
        </SlickListWrap>
    );
};

export default SlickList;
