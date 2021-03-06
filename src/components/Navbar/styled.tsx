import tw, { styled } from 'twin.macro';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav(() => [tw`fixed top-0 left-0 w-full z-20 h-20`]);

export const NavContainer = tw.div`flex items-center justify-between h-full mx-auto text-gray-100 px-4 md:px-8 lg:px-10 xl:px-14`;

export const NavSideBar = tw.div`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 flex`;

export const SideBarTop = tw.div`w-72 bg-opacity-90 bg-black`;

export const TopLogo = tw.div`h-20 flex items-center px-6 border-b-2 border-gray-800`;

export const MenuList = tw.div`top-2`;
export const MenuItem = tw.div`h-10 text-gray-50 px-10 leading-10 cursor-pointer hover:(text-gray-300 bg-white bg-opacity-5)`;
export const MainMenus = tw.div`hidden lg:(flex space-x-2)`;

export const MainMenuItem = styled(NavLink)(() => [
    tw`h-10 text-gray-50 px-10 leading-10 cursor-pointer relative hover:(after:(content w-full h-1 bg-yellow-400 absolute top-10 left-0))`,
]);
