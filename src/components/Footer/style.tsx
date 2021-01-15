import styled from 'styled-components';
import { c03, c06, c02 } from '@/styled/color';
import { t28, t27 } from '@/styled/text';

export const FooterView = styled.section`
    height: 424px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid ${c03};
    background-color: ${c06};
`;

export const FooterContainer = styled.div`
    width: 1170px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    flex: 1;
    padding: 80px 0 60px 0;
    display: flex;
`;

export const Copyright = styled.div`
    width: 1170px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border-top: 1px solid ${c03};
`;
export const LeftText = styled.div`
    height: 100%;
    line-height: 40px;
`;
export const RightText = styled.div`
    height: 100%;
    line-height: 40px;
`;

export const LogoWrapper = styled.div`
    flex: 0.1;
`;

export const LinkListWrapper = styled.div`
    flex: 0.9;
    display: flex;
    justify-content: space-around;
`;

export const LinkCatalog = styled.div`
    ${t28};
    margin-bottom: 20px;
    color: ${c02};
`;

export const LinkItem = styled.div`
    ${t27};
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const LinkWrapper = styled.div``;

export const LinkText = styled.div``;

export const LinkIcon = styled.div`
    margin-right: 5px;
`;
