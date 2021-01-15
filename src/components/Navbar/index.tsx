import React from 'react';
import routes from '@/router';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavbarViews, NavbarContainer, LogoWrap, MenuWrap, Menu, ActionWrap, ActionItem } from './style';
import { Icon } from '../UI';

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    return (
        <NavbarViews>
            <NavbarContainer>
                <LogoWrap>
                    <Icon name="code-s-slash" size={40} />
                </LogoWrap>
                <MenuWrap>
                    {routes
                        .filter((item) => item.isShown)
                        .map((item) => {
                            return (
                                <Menu key={item.name}>
                                    <NavLink exact={item.exact} to={item.path}>
                                        {t(`${item.name}`)}
                                    </NavLink>
                                </Menu>
                            );
                        })}
                </MenuWrap>
                <ActionWrap>
                    <ActionItem>sign in</ActionItem>
                    <ActionItem>sign up</ActionItem>
                </ActionWrap>
            </NavbarContainer>
        </NavbarViews>
    );
};

export default Navbar;
