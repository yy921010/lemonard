import React, { useEffect, useState } from 'react';
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

export interface Menu {
    id: string;
    title: string;
    isMain: number;
}

const NavBar: React.FC = () => {
    const [bgBlackNumber, setBgBlackNumber] = useState<number>(0);
    const [isShowMenu, setShowMenu] = useState<boolean>(false);
    // const { data } = useRequest<Menu[]>('/menu');

    const data = [
        {
            id: '1',
            title: '点播',
            isMain: 1,
        },
    ];

    const run = () => {
        if (window.pageYOffset < 80) {
            setBgBlackNumber(window.pageYOffset / 80);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', run);
        return () => {
            window.removeEventListener('scroll', run);
        };
    }, []);

    const handleShowMenu = () => {
        setShowMenu(true);
    };

    const handleSearch = () => {
        console.log('ssss');
    };

    return (
        <Nav
            style={{
                backgroundColor: `rgba(0,0,0,${bgBlackNumber})`,
            }}
        >
            <NavContainer>
                <Icon name="menu" tw="text-2xl cursor-pointer text-gray-50 lg:hidden" onClick={handleShowMenu} />
                <img tw="w-16" src="/img/logo.png" alt="logo" />
                <MainMenus>
                    {data &&
                        data
                            .filter((item) => item.isMain)
                            .map((item) => {
                                return (
                                    <MainMenuItem to={`/navigator/${item.id}`} key={item.id}>
                                        {item.title}
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
                            <img tw="w-16" src="/img/logo.png" alt="logo" />
                        </TopLogo>
                        <MenuList>
                            {data &&
                                data
                                    .filter((item) => item.isMain)
                                    .map((item) => {
                                        return (
                                            <MenuItem
                                                key={item.id}
                                                onClick={(event: { stopPropagation: () => void }) => {
                                                    // targetPages(item.url);
                                                    event.stopPropagation();
                                                }}
                                            >
                                                {item.title}
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
