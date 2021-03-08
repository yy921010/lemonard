import { Genre } from './genre';
import { Home } from './home';
import { NotFound } from './not-found';

const isShown = true;

const routes = [
    {
        name: 'header.home',
        component: Home,
        path: '/',
        exact: true,
        isShown,
    },
    {
        name: 'genre',
        component: Genre,
        path: '/genre/:id',
    },
    {
        name: 'notFound',
        component: NotFound,
        path: '*',
    },
];

export default routes;
