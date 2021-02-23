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
            poster: mockjs.Random.image('160x90'),
            'language|1': ['英语', '法语', '中文'],
            'tags|1-4': [
                {
                    tagName: '@cname',
                    'tagType|1': ['1', '2', '3'],
                    'tagItems|1-10': [
                        {
                            name: '@cname',
                            id: '@guid',
                        },
                    ],
                },
            ],
            'seasons|1-10': [
                {
                    id: '@guid',
                    seasonName: '@ctitle',
                    'episodeList|1-40': [
                        {
                            'playDuration|1-400': 1,
                            'episodeNumber|1-100': 1,
                            description: '@cparagraph(1,3)',
                            poster: mockjs.Random.image('160x90'),
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
                    poster: mockjs.Random.image('160x90', mockjs.Random.color()),
                    'language|1': ['英语', '法语', '中文'],
                    'tags|1-4': [
                        {
                            tagName: '@cname',
                            'tagType|1': ['1', '2', '3'],
                            'tagItems|1-10': [
                                {
                                    name: '@cname',
                                    id: '@guid',
                                },
                            ],
                        },
                    ],
                    'seasons|1-10': [
                        {
                            id: '@guid',
                            seasonName: '@ctitle',
                            'episodeList|1-40': [
                                {
                                    'playDuration|1-400': 1,
                                    'episodeNumber|1-100': 1,
                                    description: '@cparagraph(1,3)',
                                    poster: mockjs.Random.image('160x90'),
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
            'data|1-20': [
                {
                    theme: {
                        colors: [],
                        images: [],
                        metaInformation: {
                            description: '当前页面描述',
                            keywords: '关键 seo',
                            title: '页面title',
                        },
                    },
                    id: '@guid',
                    contents: [
                        {
                            //slickStructureGrid 滑动组件
                            // UnstructuredGrid 大海报
                            // 排行榜
                            'type|1': ['slickStructureGrid', 'UnstructuredGrid'],
                            id: '@guid',
                            laneTitle: '@title',
                            coloredTitles: [
                                {
                                    title: '',
                                    color: '',
                                },
                            ],
                            backgroundImage: '',
                            // action:动作  // link 跳转到其余页面
                            laneContentLink: {},
                            //单个影片
                            teasers: [],
                        },
                    ],
                },
            ],
        });
        res.json(mockData.data);
    },
};
