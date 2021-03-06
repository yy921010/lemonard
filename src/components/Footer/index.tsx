import 'twin.macro';
import React from 'react';
import { Icon } from '../UIKit';

const footer: React.FC = () => {
    const linkIcon = ['mail', 'rss', 'github'];
    return (
        <footer tw="border-gray-900 w-full h-72 border-solid border-t-2 pt-6 bg-black px-6">
            <div tw="container flex flex-col items-center mx-auto">
                <div tw="w-20 h-12">
                    <img src="/img/logo.png" alt="" tw="w-20" />
                </div>
                <ul tw="flex justify-center space-x-8 mt-8 text-gray-500">
                    {linkIcon.map((item) => {
                        return (
                            <li key={item}>
                                <Icon
                                    name={item}
                                    tw="text-2xl cursor-pointer md:(text-3xl) hover:(text-gray-300)"
                                    type="fill"
                                />
                            </li>
                        );
                    })}
                </ul>
                <ul tw="flex flex-wrap space-x-4 mt-12 text-gray-500">
                    <li>关于</li>
                    <li>开源声明</li>
                    <li>API</li>
                    <li>Console</li>
                    <li>版本: {process.env.REACT_APP_VERSION}</li>
                </ul>
                <div tw="flex justify-between w-full mt-6 text-gray-500 text-sm">
                    <div tw="">&copy;2021 | Love Film</div>
                    <div tw="">苏ICP备 19072422号-2</div>
                </div>
            </div>
        </footer>
    );
};

export default footer;
