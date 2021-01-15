import { Home, Detail, Guide, NotFound, Live, Vod } from '@/screen/Root';

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
        name: 'header.live',
        component: Live,
        path: '/live',
        isShown,
    },
    {
        name: 'header.vod',
        component: Vod,
        path: '/vod',
        isShown,
    },
    {
        name: 'detail',
        component: Detail,
        path: '/detail/:id',
    },
    {
        name: 'guide',
        component: Guide,
        path: '/guide',
    },
    {
        name: 'notFound',
        component: NotFound,
        path: '*',
    },
];

export default routes;
