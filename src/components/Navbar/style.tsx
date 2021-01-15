import styled from 'styled-components';
import { c06, c23, c31, c32, c04 } from '@/styled/color';
import { t29 } from '@/styled/text';

export const NavbarViews = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: ${c06};
    justify-content: center;
    border-bottom: 1px solid ${c23};
`;
export const NavbarContainer = styled.header`
    width: 1170px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoWrap = styled.div`
    width: 60px;
    height: 60px;
    font-size: 50px;
`;

export const MenuWrap = styled.ul`
    display: flex;
    width: 200px;
    flex: 0.9;
`;

export const Menu = styled.li`
    cursor: pointer;
    margin-right: 40px;
    ${t29};
    > a {
        position: relative;
        text-decoration: none;
        color: ${c31};
        will-change: transition;
        transition: 0.35s;
        &:hover {
            color: ${c32};
            &:after {
                content: '';
                width: 0;
                height: 4px;
                transition: 0.35s;
                background-color: ${c04};
                left: 0;
                top: 25px;
                position: absolute;
            }
        }
    }
`;

export const ActionWrap = styled.div`
    display: flex;
`;

export const ActionItem = styled.div`
    cursor: pointer;
    margin-right: 10px;
    ${t29};
`;
