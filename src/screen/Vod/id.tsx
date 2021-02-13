import React, { useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'twin.macro';

import { Poster, Dialog, Button } from '@/components/UIKit';
import { Vod, VodBackground, PreModalInfo, VodTitle, Title, SubTitle } from './styled';
import vodInfo from './vodinof';

/**
 * 组件命名需要大写命名
 */
const VodId = (): JSX.Element => {
    const [visible, setVisible] = useState<boolean>(false);
    const showDialog = () => {
        setVisible(true);
    };
    return (
        <>
            <Vod>
                <div tw="container z-10 px-6 flex justify-between bottom-4">
                    <Poster src={vodInfo.poster} aspectRatio={3 / 5} tw="mt-5" />
                    <Dialog
                        visible={visible}
                        onClose={() => {
                            setVisible(false);
                        }}
                    >
                        <VodBackground background={vodInfo.background}>
                            <PreModalInfo>
                                <VodTitle>
                                    <Title>{vodInfo.title}</Title>
                                    <SubTitle>{vodInfo.subTitle}</SubTitle>
                                </VodTitle>
                            </PreModalInfo>
                            <Button buttonType="primary">sssss</Button>
                        </VodBackground>
                        <div tw="flex-shrink">
                            <div tw="text-lg">{vodInfo.title}</div>
                            <div tw="text-gray-400">{vodInfo.subTitle}</div>
                            <div tw=" text-gray-400 text-sm space-x-1 mt-1">
                                <span>{vodInfo.time}</span>
                                <span>{vodInfo.rate}</span>
                                <span>{vodInfo.language}</span>
                            </div>
                            <div tw="text-gray-300 text-sm space-x-1 mt-2 leading-4 overflow-y-auto h-28">
                                {vodInfo.description}
                            </div>
                        </div>
                        <div tw="flex-shrink">
                            <div tw="text-lg">{vodInfo.title}</div>
                            <div tw="text-gray-400">{vodInfo.subTitle}</div>
                            <div tw=" text-gray-400 text-sm space-x-1 mt-1">
                                <span>{vodInfo.time}</span>
                                <span>{vodInfo.rate}</span>
                                <span>{vodInfo.language}</span>
                            </div>
                            <div tw="text-gray-300 text-sm space-x-1 mt-2 leading-4 overflow-y-auto h-28">
                                {vodInfo.description}
                            </div>
                        </div>
                        <button type="button" aria-hidden="false" onClick={showDialog}>
                            ssss
                        </button>
                        <div tw="container px-6 space-y-4 mt-6 w-full mx-auto">
                            <button
                                type="button"
                                tw="w-full bg-white text-base text-black rounded-full py-3 px-6 hover:bg-gray-300 active:bg-gray-300 focus:outline-none "
                            >
                                播放
                            </button>
                            <button
                                type="button"
                                tw="w-full bg-black text-base text-white bg-opacity-0 rounded-full py-3 px-6 focus:outline-none border border-solid border-white active:bg-gray-100"
                            >
                                收藏
                            </button>
                        </div>
                    </Dialog>
                    <div tw="flex-shrink">
                        <div tw="text-lg">{vodInfo.title}</div>
                        <div tw="text-gray-400">{vodInfo.subTitle}</div>
                        <div tw=" text-gray-400 text-sm space-x-1 mt-1">
                            <span>{vodInfo.time}</span>
                            <span>{vodInfo.rate}</span>
                            <span>{vodInfo.language}</span>
                        </div>
                        <div tw="text-gray-300 text-sm space-x-1 mt-2 leading-4 overflow-y-auto h-28">
                            {vodInfo.description}
                        </div>
                    </div>
                </div>
            </Vod>
            <button type="button" aria-hidden="false" onClick={showDialog}>
                ssss
            </button>
            <div tw="container px-6 space-y-4 mt-6 w-full mx-auto">
                <button
                    type="button"
                    tw="w-full bg-white text-base text-black rounded-full py-3 px-6 hover:bg-gray-300 active:bg-gray-300 focus:outline-none "
                >
                    播放
                </button>
                <button
                    type="button"
                    tw="w-full bg-black text-base text-white bg-opacity-0 rounded-full py-3 px-6 focus:outline-none border border-solid border-white active:bg-gray-100"
                >
                    收藏
                </button>
            </div>
            <div tw="container mt-16 px-6 mx-auto">
                <div tw="text-base mb-6">剧集</div>
                <div tw="grid grid-cols-2 gap-4 justify-items-center">
                    {vodInfo.seasons.length > 0
                        ? vodInfo.seasons.map((item) => {
                              return (
                                  <div
                                      tw="h-40 w-full bg-no-repeat bg-cover bg-center rounded-md flex justify-center items-center text-gray-300"
                                      key={item.seasonNum}
                                      style={{
                                          backgroundImage: `url(${item.poster})`,
                                      }}
                                  >
                                      {item.title || item.seasonNum}
                                  </div>
                              );
                          })
                        : []}
                </div>
            </div>
            <div tw="container mt-16 px-6 mx-auto">
                <div tw="text-base">演员</div>
            </div>
        </>
    );
};

export default VodId;
