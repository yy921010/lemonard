import { Home, VodId, Guide, NotFound, Live, Vod } from '@/screen/Root';
import { Navigator } from '@/components';

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
        exact: true,
        isShown,
    },
    {
        name: 'detail',
        component: VodId,
        path: '/vod/:id',
    },
    {
        name: 'guide',
        component: Guide,
        path: '/guide',
    },
    {
        name: 'Navigator',
        component: Navigator,
        path: '/navigator/:id',
    },
    {
        name: 'notFound',
        component: NotFound,
        path: '*',
    },
];

export default routes;
