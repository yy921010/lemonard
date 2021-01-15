import React from 'react';
import {
    FooterView,
    FooterContainer,
    Copyright,
    LeftText,
    RightText,
    LogoWrapper,
    LinkListWrapper,
    LinkCatalog,
    LinkItem,
    LinkWrapper,
    LinkText,
    LinkIcon,
} from './style';
import { Icon } from '../UI';
import Links from './LinkData.json';

const Footer: React.FC = () => {
    return (
        <FooterView>
            <FooterContainer>
                <LogoWrapper>
                    <Icon name="code-s-slash" size={40} />
                </LogoWrapper>
                <LinkListWrapper>
                    {Links.map((item, index) => (
                        <LinkWrapper key={item.catalog}>
                            <LinkCatalog>{item.catalog}</LinkCatalog>
                            {item.links.map((subItem) => {
                                return (
                                    <LinkItem key={subItem.name}>
                                        {index === 2 ? (
                                            <LinkIcon>
                                                <Icon name={subItem.name} type="fill" />
                                            </LinkIcon>
                                        ) : (
                                            ''
                                        )}
                                        <LinkText>{subItem.name}</LinkText>
                                    </LinkItem>
                                );
                            })}
                        </LinkWrapper>
                    ))}
                </LinkListWrapper>
            </FooterContainer>
            <Copyright>
                <LeftText>关于</LeftText>
                <RightText>版本号: 0.1.1.beta</RightText>
            </Copyright>
        </FooterView>
    );
};

export default Footer;
