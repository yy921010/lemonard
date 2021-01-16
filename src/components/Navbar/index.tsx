import React from 'react';
import routes from '@/router';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '../UI';

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="flex top-0 left-0 right-0 fixed bg-gray-800 justify-center">
            <header className="flex items-center justify-between container h-20">
                <div className="w-16 h-16">
                    <Icon name="code-s-slash" size={40} />
                </div>
                <ul className="flex flex-shrink">
                    {routes
                        .filter((item) => item.isShown)
                        .map((item) => {
                            return (
                                <li key={item.name} className="cursor-pointer text-xl mr-9">
                                    <NavLink exact={item.exact} to={item.path} className="relative hover:text-gray-500">
                                        {t(`${item.name}`)}
                                    </NavLink>
                                </li>
                            );
                        })}
                </ul>
                <div className="flex">
                    <div className="cursor-pointer mr-3.5">sign in</div>
                    <div className="cursor-pointer mr-3.5">sign up</div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
