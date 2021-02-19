import React, { useEffect, useState } from 'react';
import { Poster, SlickList } from '@/components/UIKit';
import { VodInfo } from '@/components';
import tw, { css } from 'twin.macro';
import styled from 'styled-components';

const Vod = (): JSX.Element => {
    const [vodList, setVodList] = useState<VodInfo[]>([]);
    useEffect(() => {
        fetch('vod-list')
            .then((resp) => resp.json())
            .then((data) => {
                setVodList(data.vodList);
            });
    }, []);

    const SlickSkeleton = tw.div``;

    const SlickPosterWrap = styled.div(({ isHover }: { isHover?: boolean }) => [
        isHover
            ? css`
                  box-shadow: 0 5px 9px 0 rgb(0 0 0 / 50%);
                  margin: calc((56.25% - 292px) / 2) calc(50% - 260px);
                  width: 520px;
                  z-index: 1;
              `
            : '',
    ]);

    return (
        <div>
            <SlickList key="sss" id="sss" title="我的列表" onMore={() => {}}>
                {vodList.length > 0 ? (
                    vodList.map((item) => {
                        return (
                            <div key={item.title} tw="cursor-pointer">
                                <SlickPosterWrap>
                                    <Poster
                                        src={item.poster}
                                        aspectRatio={16 / 9}
                                        tw="mr-1 sm:mr-2 md:mr-3 mb-2"
                                        onClick={() => {
                                            // onSlick(item.id);
                                        }}
                                    />
                                </SlickPosterWrap>
                                <h4 tw="text-sm md:text-xl">{item.title}</h4>
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
        </div>
    );
};
export default Vod;
