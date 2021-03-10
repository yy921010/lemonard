import React, { useEffect, useState } from 'react';
import 'twin.macro';
import { Icon } from '@/components';
import { Menu } from '@/interfaces';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
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
} from '../_styled';
import { QUERY_MENU } from '../graphql/menu';

const NavBar: React.FC = () => {
    const [bgBlackNumber, setBgBlackNumber] = useState<number>(0);
    const [isShowMenu, setShowMenu] = useState<boolean>(false);
    const history = useHistory();
    const { data } = useQuery<{
        menu: Menu[];
    }>(QUERY_MENU);

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

    const reBackHome = () => {
        history.push('/home');
    };

    return (
        <Nav
            style={{
                backgroundColor: `rgba(0,0,0,${bgBlackNumber})`,
            }}
        >
            <NavContainer>
                <Icon name="menu" tw="text-2xl cursor-pointer text-gray-50 lg:hidden" onClick={handleShowMenu} />
                <img tw="w-16" src="/img/logo.png" alt="logo" onClick={reBackHome} aria-hidden="true" />
                <MainMenus>
                    {data &&
                        data.menu.map((item) => {
                            return (
                                <MainMenuItem to={`/genre/${item.id}`} key={item.id}>
                                    {item.name}
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
                                data.menu.map((item) => {
                                    return (
                                        <MenuItem
                                            key={item.id}
                                            onClick={(event: { stopPropagation: () => void }) => {
                                                history.push(`/genre/${item.id}`);
                                                event.stopPropagation();
                                            }}
                                        >
                                            {item.name}
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
