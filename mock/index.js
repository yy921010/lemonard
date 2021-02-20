const mockjs = require('mockjs')

module.exports = {
  [`GET /vod-info`](req, res) {

    const mockData = mockjs.mock({
      id:'@guid',
      title:'@ctitle',
      subtitle:'@ctitle',
      time:mockjs.Random.time('yyyy'),
      rate: '9.3',
      description:'@cparagraph(1,3)',
      poster: mockjs.Random.image('160x90'),
      'language|1' :['英语','法语','中文'],
      'tags|1-4':[{
        tagName:'@cname',
        'tagType|1': ['1','2','3'],
        'tagItems|1-10':[{
          name:'@cname',
          id:'@guid'
        }]
      }],
      'seasons|1-10':[{
        id:'@guid',
        seasonName:'@ctitle',
        'episodeList|1-40':[{
          'playDuration|1-400':1,
          'episodeNumber|1-100':1,
          description:'@cparagraph(1,3)',
          poster:mockjs.Random.image('160x90')
        }]
      }]
    })
    res.json(mockData)
  },
  [`GET /vod-list`](req, res) {
    const mockData = mockjs.mock({
      'vodList|1-30':[{
        id:'@guid',
        title:'@ctitle',
        subtitle:'@ctitle',
        time:mockjs.Random.time('yyyy'),
        rate: '9.3',
        description:'@cparagraph(1,3)',
        poster: mockjs.Random.image('160x90',mockjs.Random.color()),
        'language|1' :['英语','法语','中文'],
        'tags|1-4':[{
          tagName:'@cname',
          'tagType|1': ['1','2','3'],
          'tagItems|1-10':[{
            name:'@cname',
            id:'@guid'
          }]
        }],
        'seasons|1-10':[{
          id:'@guid',
          seasonName:'@ctitle',
          'episodeList|1-40':[{
            'playDuration|1-400':1,
            'episodeNumber|1-100':1,
            description:'@cparagraph(1,3)',
            poster:mockjs.Random.image('160x90')
          }]
        }]
      }]
    })
    res.json(mockData)
  }
};


