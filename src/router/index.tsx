import { Genre } from './genre';
import { Home } from './home';
import { NotFound } from './not-found';

const routes = [
    {
        name: 'header.home',
        component: Home,
        path: '/home',
        exact: true,
        isShown: true,
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
