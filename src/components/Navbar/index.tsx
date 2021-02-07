import React, { useEffect, useState } from 'react';
import { useDebounceFn } from 'ahooks';
import 'twin.macro';
import { Icon } from '@/components/UIKit';
import {
    Nav,
    NavContainer,
    NavSideBar,
    TopLogo,
    SideBarTop,
    MenuList,
    MenuItem,
    MainMenus,
    MainMenuItem,
} from './styled';

const menus = [
    {
        url: '/home',
        text: '主页',
        id: '2',
    },
    {
        url: '/film',
        text: '电影',
        id: '4',
    },
    {
        url: '/series',
        text: '电视剧',
        id: '1',
    },
];

const NavBar: React.FC = () => {
    const [isScrollDown, setScrollDown] = useState<boolean>(false);
    const [isShowMenu, setShowMenu] = useState<boolean>(false);
    const { run } = useDebounceFn(
        () => {
            setScrollDown(window.pageYOffset > 40);
        },
        { wait: 50 },
    );

    useEffect(() => {
        window.addEventListener('scroll', run);
        return () => {
            window.removeEventListener('scroll', run);
        };
    }, [run]);

    const handleShowMenu = () => {
        setShowMenu(true);
    };

    const handleSearch = () => {
        console.log('ssss');
    };

    const targetPages = (url: string) => {
        console.log('targetPages', url);
        setShowMenu(false);
    };
    return (
        <Nav isShowBlack={isScrollDown}>
            <NavContainer>
                <Icon name="menu" tw="text-2xl cursor-pointer text-gray-50 lg:hidden" onClick={handleShowMenu} />
                <img tw="w-16" src="/img/logo.png" alt="logo" />
                <MainMenus>
                    {menus &&
                        menus.map((item) => {
                            return (
                                <MainMenuItem
                                    key={item.id}
                                    onClick={(event) => {
                                        targetPages(item.url);
                                        event.stopPropagation();
                                    }}
                                >
                                    {item.text}
                                </MainMenuItem>
                            );
                        })}
                </MainMenus>
                {!isShowMenu ? (
                    <Icon name="search" tw="text-2xl cursor-pointer text-gray-50" onClick={handleSearch} />
                ) : (
                    ''
                )}
            </NavContainer>
            {isShowMenu ? (
                <NavSideBar
                    onClick={() => {
                        setShowMenu(false);
                    }}
                >
                    <SideBarTop>
                        <TopLogo>
                            <img tw="w-16" src="/logo.png" alt="logo" />
                        </TopLogo>
                        <MenuList>
                            {menus &&
                                menus.map((item) => {
                                    return (
                                        <MenuItem
                                            key={item.id}
                                            onClick={(event: { stopPropagation: () => void }) => {
                                                targetPages(item.url);
                                                event.stopPropagation();
                                            }}
                                        >
                                            {item.text}
                                        </MenuItem>
                                    );
                                })}
                        </MenuList>
                    </SideBarTop>
                </NavSideBar>
            ) : (
                ''
            )}
        </Nav>
    );
};

export default NavBar;
