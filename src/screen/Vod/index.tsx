import React, { useEffect, useState } from 'react';
import { SlickItem, SlickList, Slick, Poster } from '@/components/UIKit';
import { VodInfo } from '@/components';
import 'twin.macro';

const Vod = (): JSX.Element => {
    const [vodList, setVodList] = useState<VodInfo[]>([]);
    useEffect(() => {
        fetch('vod-list')
            .then((resp) => resp.json())
            .then((data) => {
                setVodList(data.vodList);
            });
    }, []);
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
        <div>
            <SlickList
                key="sss"
                id="sss"
                title="我的列表"
                onMore={() => {}}
                onSlick={() => {}}
                slicks={vodList.map((item) => {
                    return {
                        picUrl: item.poster,
                        title: item.title,
                        id: item.title,
                    } as SlickItem;
                })}
            />
            <Slick {...settings}>
                {vodList.length > 0 ? (
                    vodList.map((item) => {
                        return <Poster src={item.poster} key={item.title} aspectRatio={16 / 9} />;
                    })
                ) : (
                    <>
                        <h1>s</h1>
                        <h1>s</h1>
                        <h1>s</h1>
                        <h1>s</h1>
                        <h1>s</h1>
                        <h1>s</h1>
                    </>
                )}
            </Slick>
        </div>
    );
};
export default Vod;
