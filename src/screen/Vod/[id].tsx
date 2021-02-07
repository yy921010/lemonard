import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactSlick from 'react-slick';
import 'twin.macro';
import React from 'react';
import { Vod, VodBackground } from './styled';

const vodInfo = {
    title: '旺达幻视',
    subTitle: 'WandaVision',
    time: '2021',
    rate: '9.2',
    language: '英语',
    description:
        '旺达·马克西莫夫(Wanda Maximoff)和幻视(Vision)——两个过着隐居生活的超能的存在——开始怀疑一切都不是看起来的那样。旺达·马克西莫旺达·马克西莫夫(Wanda Maximoff)和幻视(Vision)——两个过着隐居生活的超能的存在——开始怀疑一切都不是看起来的那样。旺达·马克西莫夫(Wanda Maximoff)和幻视(Vision)——两个过着隐居生活的超能的存在——开始怀疑一切都不是看起来的那样。夫(Wanda Maximoff)和幻视(Vision)——两个过着隐居生活的超能的存在——开始怀疑一切都不是看起来的那样。',
    background: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/9hvhGtcsGhQY58pukw8w55UEUbL.jpg',
    poster: 'https://www.themoviedb.org/t/p/w220_and_h330_face/8Qoyn3j0gK0EOABrm0p6E5mzavg.jpg',
    seasons: [
        {
            seasonNum: 1,
            title: '在现场观众前拍摄',
            description:
                '旺达和幻视这对新婚夫妻搬到了郊区居住，认识了浮夸的邻居艾格妮丝和严谨的上司哈特，他们会擦出什么爆笑的火花呢？',
            poster: 'https://www.themoviedb.org/t/p/w227_and_h127_bestv2/cbe8l0Hnbvu07ePgoOopyWYrcdL.jpg',
        },
        {
            seasonNum: 2,
            title: '请勿换台',
            description:
                '旺达和幻视正为了才艺秀募捐会做准备，这对超能力夫妻打算为社区表演几个魔术，但幻视不小心吃进去的某个东西似乎对他产生了什么影响……旺达见到了社区里的风云人物多蒂，她俩似乎处不来。',
            poster: 'https://www.themoviedb.org/t/p/w227_and_h127_bestv2/khd7fNSvb4Lr0vLNy4tmoWKksvo.jpg',
        },
        {
            seasonNum: 3,
            title: '现在是彩色画面',
            description:
                '尼尔森医生证实旺达的身体状况一切正常，她和幻视开始学习备孕知识。幻视送医生回去时，看到邻居赫伯不慎用电锯切割两家之间的隔离墙。旺达和幻视准备好婴儿房。两人在孩子起名的问题上发生争执，旺达希望叫汤米，而幻视希望叫比利。旺达的怀孕时间突然达到六个月，开始出现假性宫缩，受到刺激的旺达使用意念关停整个小镇的电力。幻视前去寻找尼尔森医生，后者正准备与妻子前去百慕大度假。洁拉汀前来拜访旺达，随后帮助她顺利生下一个男婴。幻视带着尼尔森医生回到家中，旺达生下第二个男婴。幻视见到艾格尼丝和赫伯在窃窃私语，他们正在谈论洁拉汀，并告知幻视她的到来跟这里的人有关。旺达告诉洁拉汀，她同样有个双胞胎哥哥快银，洁拉汀询问她是否记得奥创杀死皮特洛一事。旺达质问其意图并注意到洁拉汀佩戴着装饰有天剑局标志的吊坠。幻视回到家中，洁拉汀已不在，旺达称“她必须得回家了”。洁拉汀被“抛出”韦斯特维尤小镇，天剑局的大批特工在外接应。',
            poster: 'https://www.themoviedb.org/t/p/w227_and_h127_bestv2/zT55iSCAWsKJOpEc6s989lgok65.jpg',
        },
        {
            seasonNum: 4,
            title: '现在是彩色画面',
            description:
                '尼尔森医生证实旺达的身体状况一切正常，她和幻视开始学习备孕知识。幻视送医生回去时，看到邻居赫伯不慎用电锯切割两家之间的隔离墙。旺达和幻视准备好婴儿房。两人在孩子起名的问题上发生争执，旺达希望叫汤米，而幻视希望叫比利。旺达的怀孕时间突然达到六个月，开始出现假性宫缩，受到刺激的旺达使用意念关停整个小镇的电力。幻视前去寻找尼尔森医生，后者正准备与妻子前去百慕大度假。洁拉汀前来拜访旺达，随后帮助她顺利生下一个男婴。幻视带着尼尔森医生回到家中，旺达生下第二个男婴。幻视见到艾格尼丝和赫伯在窃窃私语，他们正在谈论洁拉汀，并告知幻视她的到来跟这里的人有关。旺达告诉洁拉汀，她同样有个双胞胎哥哥快银，洁拉汀询问她是否记得奥创杀死皮特洛一事。旺达质问其意图并注意到洁拉汀佩戴着装饰有天剑局标志的吊坠。幻视回到家中，洁拉汀已不在，旺达称“她必须得回家了”。洁拉汀被“抛出”韦斯特维尤小镇，天剑局的大批特工在外接应。',
            poster: 'https://www.themoviedb.org/t/p/w227_and_h127_bestv2/zT55iSCAWsKJOpEc6s989lgok65.jpg',
        },
    ],
    actors: [
        {
            id: '1',
            poster: 'https://www.themoviedb.org/t/p/w138_and_h175_face/wIU675y4dofIDVuhaNWPizJNtep.jpg',
            castName: 'Elizabeth Olsen',
            playName: 'Wanda Maximoff / Scarlet Witch',
        },
        {
            id: '2',
            poster: 'https://www.themoviedb.org/t/p/w138_and_h175_face/bgUkEkJ5R9pm5P1pmF363bacJ3k.jpg',
            castName: 'Paul Bettany',
            playName: 'Wanda Maximoff / Scarlet Witch',
        },
        {
            id: '3',
            poster: 'https://www.themoviedb.org/t/p/w138_and_h175_face/k3U24YNgdaINZEQ4PftebnN5cpU.jpg',
            castName: 'Teyonah Parris',
            playName: 'Monica Rambeau / Geraldine',
        },
        {
            id: '4',
            poster: 'https://www.themoviedb.org/t/p/w138_and_h175_face/bgUkEkJ5R9pm5P1pmF363bacJ3k.jpg',
            castName: 'Paul Bettany',
            playName: 'Wanda Maximoff / Scarlet Witch',
        },
        {
            id: '5',
            poster: 'https://www.themoviedb.org/t/p/w138_and_h175_face/bgUkEkJ5R9pm5P1pmF363bacJ3k.jpg',
            castName: 'Paul Bettany',
            playName: 'Wanda Maximoff / Scarlet Witch',
        },
        {
            id: '6',
            poster: 'https://www.themoviedb.org/t/p/w138_and_h175_face/bgUkEkJ5R9pm5P1pmF363bacJ3k.jpg',
            castName: 'Paul Bettany',
            playName: 'Wanda Maximoff / Scarlet Witch',
        },
        {
            id: '7',
            poster: 'https://www.themoviedb.org/t/p/w138_and_h175_face/bgUkEkJ5R9pm5P1pmF363bacJ3k.jpg',
            castName: 'Paul Bettany',
            playName: 'Wanda Maximoff / Scarlet Witch',
        },
    ],
};

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
};
const vodDetail: React.FC = () => {
    return (
        <>
            <Vod>
                <VodBackground background={vodInfo.background} />
                <div tw="container z-10 absolute px-6 flex justify-between bottom-4">
                    <div
                        tw="rounded-md w-36 h-56 bg-no-repeat bg-center flex-shrink-0 mr-6 bg-cover"
                        style={{
                            backgroundImage: `url(${vodInfo.poster})`,
                        }}
                    />
                    <div tw="flex-shrink">
                        <div tw="text-lg">{vodInfo.title}</div>
                        <div tw="text-gray-400">{vodInfo.subTitle}</div>
                        <div tw=" text-gray-400 text-sm space-x-1 mt-1">
                            <span>{vodInfo.time}</span>
                            <span>{vodInfo.rate}</span>
                            <span>{vodInfo.language}</span>
                        </div>
                        <div tw="text-gray-300 text-sm space-x-1 mt-2 leading-4 overflow-y-auto h-28">
                            {vodInfo.description}
                        </div>
                    </div>
                </div>
            </Vod>

            <div tw="container px-6 space-y-4 mt-6 w-full mx-auto">
                <button
                    type="button"
                    tw="w-full bg-white text-base text-black rounded-full py-3 px-6 hover:bg-gray-300 active:bg-gray-300 focus:outline-none "
                >
                    播放
                </button>
                <button
                    type="button"
                    tw="w-full bg-black text-base text-white bg-opacity-0 rounded-full py-3 px-6 focus:outline-none border border-solid border-white active:bg-gray-100"
                >
                    收藏
                </button>
            </div>
            <div tw="container mt-16 px-6 mx-auto">
                <div tw="text-base mb-6">剧集</div>
                <div tw="grid grid-cols-2 gap-4 justify-items-center">
                    {vodInfo.seasons.length > 0
                        ? vodInfo.seasons.map((item) => {
                              return (
                                  <div
                                      tw="h-40 w-full bg-no-repeat bg-cover bg-center rounded-md flex justify-center items-center text-gray-300"
                                      key={item.seasonNum}
                                      style={{
                                          backgroundImage: `url(${item.poster})`,
                                      }}
                                  >
                                      {item.title || item.seasonNum}
                                  </div>
                              );
                          })
                        : []}
                </div>
            </div>
            <div tw="container mt-16 px-6 mx-auto">
                <div tw="text-base">演员</div>
                <ReactSlick {...settings}>
                    {vodInfo.actors.length > 0
                        ? vodInfo.actors.map((item) => {
                              return (
                                  <li key={item.id}>
                                      <div
                                          tw="rounded-md w-28 h-32 bg-no-repeat bg-center flex-shrink-0 mr-6 bg-cover"
                                          style={{
                                              backgroundImage: `url(${item.poster})`,
                                          }}
                                      />
                                      <div
                                          tw="text-sm overflow-ellipsis w-36 whitespace-nowrap overflow-hidden"
                                          title={item.castName}
                                      >
                                          {item.castName}
                                      </div>
                                      <div
                                          tw="text-sm overflow-ellipsis w-36 whitespace-nowrap overflow-hidden"
                                          title={item.playName}
                                      >
                                          {item.playName}
                                      </div>
                                  </li>
                              );
                          })
                        : ''}
                </ReactSlick>
            </div>
        </>
    );
};

export default vodDetail;
