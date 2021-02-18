import React, { useState, useEffect } from 'react';

import 'twin.macro';

import { Poster, Dialog, Button, Icon } from '@/components/UIKit';
import { Detail, DetailProps } from '@/components';

/**
 * 组件命名需要大写命名
 */
const VodId = (): JSX.Element => {
    const [visible, setVisible] = useState<boolean>(false);
    const [vodInfo, setVodInfo] = useState<DetailProps>({
        title: '',
        tags: [],
    });
    const showDialog = () => {
        setVisible(true);
    };

    useEffect(() => {
        fetch('/vod-info')
            .then((resp) => {
                return resp!.json();
            })
            .then((data) => {
                setVodInfo(data);
                console.log('data--->', data);
            });
    }, []);

    return (
        <>
            <Dialog
                tw="md:w-10/12 lg:w-7/12 mx-auto"
                destroyOnClose
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
            >
                <Detail {...vodInfo} />
            </Dialog>
            <Detail {...vodInfo} />
            <Button onClick={showDialog}>open</Button>
        </>
    );
};

export default VodId;
