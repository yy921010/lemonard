import React, { useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'twin.macro';

import { Poster, Dialog, Button, Icon } from '@/components/UIKit';
import { Detail } from '@/components';
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
            <Dialog
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
