const mockjs = require('mockjs');

module.exports = {
    [`GET /vod-info`](req, res) {
        const mockData = mockjs.mock({
            id: '@guid',
            title: '@ctitle',
            subtitle: '@ctitle',
            time: mockjs.Random.time('yyyy'),
            rate: '9.3',
            description: '@cparagraph(1,3)',
            images: [
                {
                    type: 10,
                    href: mockjs.Random.image('160x90', mockjs.Random.color()),
                },
                {
                    type: 15,
                    href: mockjs.Random.image('1600x900', mockjs.Random.color()),
                },
                {
                    type: 12,
                    href: mockjs.Random.image('320x180', mockjs.Random.color()),
                },
                {
                    type: 14,
                    href: mockjs.Random.image('640x320', mockjs.Random.color()),
                },
            ],
            trailerUrl:
            'https://imdb-video.media-imdb.com/vi3333537817/1434659607842-pgv4ql-1614085345509.mp4?Expires=1615047200&Signature=kGrTiJhJKzroLQ8RPhi4RZMVwBZVkh4FTMMeF2mo8fGHIXq5n2MHHadpjm1gDJg7~vMpv9rjiz1MY9TD9J9MHygN5ITS8dh73N9Wz-G~paqQYRvt4cKQqXgOID23fcT1DwM7jGVKSip585vpP3DK7-3hEo8wEsU6A44FdBSZf7DKd5v-v6BUU1K0Vj4XuFKjj2zVx09HmH87TNL15sFRLsB3Wwm4XtdwPTR4u013fQisUDqVHttlzZo8xjIUxwBU~x8taRHKfmlJ6ZzmU7DnqNEjdA96AV~Rj372Fl2bFxdSGagoxcR-vwwAYTy2x9idmcPKVVblZfGSaoiOJ~fztg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
            'language|1': ['英语', '法语', '中文'],
            'genres|1-10': [
                {
                    id: '@guid',
                    name: '@title',
                },
            ],
            'actors|1-10': [
                {
                    id: '@guid',
                    name: '@title',
                    images: [
                        {
                            type: 10,
                            href: mockjs.Random.image('160x90', mockjs.Random.color()),
                        },
                        {
                            type: 15,
                            href: mockjs.Random.image('1600x900', mockjs.Random.color()),
                        },
                        {
                            type: 12,
                            href: mockjs.Random.image('320x180', mockjs.Random.color()),
                        },
                        {
                            type: 14,
                            href: mockjs.Random.image('640x320', mockjs.Random.color()),
                        },
                    ],
                },
            ],
            'seasons|1-10': [
                {
                    id: '@guid',
                    name: '@ctitle',
                    'episodes|1-40': [
                        {
                            'playDuration|1-400': 1,
                            'episodeNumber|1-100': 1,
                            description: '@cparagraph(1,3)',
                            poster: mockjs.Random.image('160x90'),
                            images: [
                                {
                                    type: 10,
                                    href: mockjs.Random.image('160x90', mockjs.Random.color()),
                                },
                            ],
                            playUrl: '@title',
                            title: '@title',
                        },
                    ],
                },
            ],
        });
        res.json(mockData);
    },
    [`GET /vod-list`](req, res) {
        const mockData = mockjs.mock({
            'vodList|30-100': [
                {
                    id: '@guid',
                    title: '@ctitle',
                    subtitle: '@ctitle',
                    time: mockjs.Random.time('yyyy'),
                    rate: '9.3',
                    description: '@cparagraph(1,3)',
                    images: [
                        {
                            type: 10,
                            href: mockjs.Random.image('160x90', mockjs.Random.color()),
                        },
                        {
                            type: 15,
                            href: mockjs.Random.image('1600x900', mockjs.Random.color()),
                        },
                        {
                            type: 12,
                            href: mockjs.Random.image('320x180', mockjs.Random.color()),
                        },
                        {
                            type: 14,
                            href: mockjs.Random.image('640x320', mockjs.Random.color()),
                        },
                    ],
                    trailerUrl:
                        'https://imdb-video.media-imdb.com/vi3485450265/1434659607842-pgv4ql-1614818229304.mp4?Expires=1614958659&Signature=VSfYyDcOH1ZCTrwjVjtL773Jufd2jwdqnASymTwc5ZdEXGoV3shvDfsmMdLMwlL7Az1jINEJs~cpGEkG1agr--9YhnOMK~ysIPkedLeh3ZmgHM3x2GsGsy3~ZfxZsWLdLHVmEuQlir8sQgoJzejaeE0EDH3GX9H~65E71cFjNmAVP69NzJATOQUn0Z64K~fWcqd21cHYwl5FE0dASnRJcRHa6cx2k0bZypJNITLRZJCFNDtjYjN8240TVDYa5AKyDgesIOmiqE8f0HrMaOopm6DtiwSahikUDkYs7xa7rq2qdgG6qRIzSNgZ7jt6qW~6CFTjxOD54Bd77PLEsjbhhw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                    'language|1': ['英语', '法语', '中文'],
                    'genres|1-10': [
                        {
                            id: '@guid',
                            name: '@title',
                        },
                    ],
                    'actors|1-10': [
                        {
                            id: '@guid',
                            name: '@title',
                            images: [
                                {
                                    type: 10,
                                    href: mockjs.Random.image('160x90', mockjs.Random.color()),
                                },
                                {
                                    type: 15,
                                    href: mockjs.Random.image('1600x900', mockjs.Random.color()),
                                },
                                {
                                    type: 12,
                                    href: mockjs.Random.image('320x180', mockjs.Random.color()),
                                },
                                {
                                    type: 14,
                                    href: mockjs.Random.image('640x320', mockjs.Random.color()),
                                },
                            ],
                        },
                    ],
                    'seasons|1-10': [
                        {
                            id: '@guid',
                            name: '@ctitle',
                            'episodes|1-40': [
                                {
                                    'playDuration|1-400': 1,
                                    'episodeNumber|1-100': 1,
                                    description: '@cparagraph(1,3)',
                                    poster: mockjs.Random.image('160x90'),
                                    images: [
                                        {
                                            type: 10,
                                            href: mockjs.Random.image('160x90', mockjs.Random.color()),
                                        },
                                    ],
                                    playUrl: '@title',
                                    title: '@title',
                                },
                            ],
                        },
                    ],
                },
            ],
        });
        res.json(mockData);
    },
    [`GET /menu`](req, res) {
        const mockData = mockjs.mock({
            'data|1-20': [
                {
                    id: '@guid',
                    title: '@ctitle',
                    'isMain|1': [1, 0],
                },
            ],
        });
        res.json(mockData.data);
    },
    [`GET /menu/:id`](req, res) {
        const mockData = mockjs.mock({
            theme: {
                colors: [],
                images: [],
                metaInformation: {
                    description: '@cparagraph',
                    keywords: '@title',
                    title: '@csentence',
                },
            },
            id: '@guid',
            contents: [
                {
                    //slickStructureGrid 滑动组件
                    // UnstructuredGrid 大海报
                    // 排行榜
                    //structuredGridList 列表
                    'type|1': ['StructureGrid', 'UnstructuredGrid', 'structuredGridList'],
                    id: '@guid',
                    laneTitle: '@title',
                    'coloredTitles|1-3': [
                        {
                            title: '@title',
                            color: '@color',
                        },
                    ],
                    backgroundImage: {
                        type: 2,
                        href: mockjs.Random.image('1600x900', mockjs.Random.color()),
                    },
                    // action:动作  // link 跳转到其余页面
                    laneContentLink: {},
                    //单个影片
                    'teasers|1-30': [
                        {
                            id: '@guid',
                            title: '@ctitle',
                            subtitle: '@ctitle',
                            time: mockjs.Random.time('yyyy'),
                            rate: '9.3',
                            description: '@cparagraph(1,3)',
                            images: [
                                {
                                    type: 10,
                                    href: mockjs.Random.image('160x90', mockjs.Random.color()),
                                },
                                {
                                    type: 15,
                                    href: mockjs.Random.image('1600x900', mockjs.Random.color()),
                                },
                                {
                                    type: 12,
                                    href: mockjs.Random.image('320x180', mockjs.Random.color()),
                                },
                                {
                                    type: 14,
                                    href: mockjs.Random.image('640x320', mockjs.Random.color()),
                                },
                            ],
                            trailerUrl:
                                'https://imdb-video.media-imdb.com/vi3485450265/1434659607842-pgv4ql-1614818229304.mp4?Expires=1614958659&Signature=VSfYyDcOH1ZCTrwjVjtL773Jufd2jwdqnASymTwc5ZdEXGoV3shvDfsmMdLMwlL7Az1jINEJs~cpGEkG1agr--9YhnOMK~ysIPkedLeh3ZmgHM3x2GsGsy3~ZfxZsWLdLHVmEuQlir8sQgoJzejaeE0EDH3GX9H~65E71cFjNmAVP69NzJATOQUn0Z64K~fWcqd21cHYwl5FE0dASnRJcRHa6cx2k0bZypJNITLRZJCFNDtjYjN8240TVDYa5AKyDgesIOmiqE8f0HrMaOopm6DtiwSahikUDkYs7xa7rq2qdgG6qRIzSNgZ7jt6qW~6CFTjxOD54Bd77PLEsjbhhw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                            'language|1': ['英语', '法语', '中文'],
                            'genres|1-10': [
                                {
                                    id: '@guid',
                                    name: '@title',
                                },
                            ],
                            'actors|1-10': [
                                {
                                    id: '@guid',
                                    name: '@title',
                                    images: [
                                        {
                                            type: 10,
                                            href: mockjs.Random.image('160x90', mockjs.Random.color()),
                                        },
                                        {
                                            type: 15,
                                            href: mockjs.Random.image('1600x900', mockjs.Random.color()),
                                        },
                                        {
                                            type: 12,
                                            href: mockjs.Random.image('320x180', mockjs.Random.color()),
                                        },
                                        {
                                            type: 14,
                                            href: mockjs.Random.image('640x320', mockjs.Random.color()),
                                        },
                                    ],
                                },
                            ],
                            'seasons|1-10': [
                                {
                                    id: '@guid',
                                    name: '@ctitle',
                                    'episodes|1-40': [
                                        {
                                            'playDuration|1-400': 1,
                                            'episodeNumber|1-100': 1,
                                            description: '@cparagraph(1,3)',
                                            poster: mockjs.Random.image('160x90'),
                                            images: [
                                                {
                                                    type: 10,
                                                    href: mockjs.Random.image('160x90', mockjs.Random.color()),
                                                },
                                            ],
                                            playUrl: '@title',
                                            title: '@title',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        });
        res.json(mockData);
    },
};
