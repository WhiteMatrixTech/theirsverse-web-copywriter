export const BaseURL = 'https://d6bsd1popru6t.cloudfront.net/'
export default {
  ethIcon: BaseURL + 'constracts/eth.png',
  ethBanner: BaseURL + 'constracts/banner',
  vector: BaseURL + 'Vector.png',
  mint: {
    linkName: 'VERIFY WHITELIST', // 链接文案
    lowLinkName: 'Verify Whitelist',
    noPoap: 'no poap', // 没有Poap提示文案
    notWhite: 'Not  Whitelisted',
    switchTip: 'please switch',
    confinementPrice: '0.0005',
    viewOpensea: `https://testnets.opensea.io/account?tab=collected&search[sortBy]=CREATED_DATE`,
    modal: {
      notWhite: [
        `You are not whitelisted, you can mint 1 Theirsverse
        NFT during the Public Mint.`,
        `For more info, join our DC channel.`],
      isWhite: [`Congratulations！ You are whitelisted for the 1st batch.`,
        `You can mint`,
        `Theirsverse NFTs at most.`]
    },
    installIntro: BaseURL + 'constracts/installMetaMask.pdf',
    buyIntro: BaseURL + 'constracts/howToBuy.pdf',
    cover: BaseURL + 'constracts/whiteCover.png',
    whiteList: BaseURL + 'constracts/whitelist.json',
    pendingGif: BaseURL + 'constracts/mintPending.gif',
    cat: BaseURL + 'constracts/noWhite.gif',
    bear: BaseURL + 'constracts/isWhite.gif',
    footer: ['How to Install and Use Metamask on Google Chrome?', 'How to buy ETH and transfer it to a web3 wallet?'],
    des: 'Theirsverse has created a brand connecting Web 2 and Web 3. From NFT artworks to fashion toys and DTC beauty brands, Theirsverse would like to invite creators globally to co-create our brand together. We are founding a global young artists’ fund to promote more artists into the booming NFT world. We love the passionate artists across the world that share their knowledge and insights in the Theirsverse community. Theirsverse is an invitation to unlock your creative future! ',
    title: 'Time: 11:00 AM ~ 2:00 PM  Jan. 1st 2022 UTC+8',
    mintTime: {
      gold: {
        title: 'Gold Member Mint',
        time: `July 10, 22:55:55 ～ July 11, 22:55:55  EDT`,
        start: `July 10, 22:55:55 EDT`,
        price: '',
        startTime: '2022/07/10 22:55:55 EDT',
        endTime: '2022/07/11 22:55:55 EDT'
      },
      white: {
        title: 'Whitelist Mint',
        time: `July 11, 22:55:55 ～ July 12, 22:55:55  EDT`,
        price: 'Free/0.05/0.1/0.15ETH',
        start: `July 11, 22:55:55 EDT`,
        startTime: '2022/07/11 22:55:55 EDT',
        endTime: '2022/07/12 22:55:55 EDT',
      },
      public: {
        title: 'Public Mint',
        time: `July 12, 22:55:55 ～ July 13, 22:55:55  EDT`,
        price: '0.18ETH',
        start: `July 12, 22:55:55 EDT`,
        startTime: '2022/07/12 22:55:55 EDT',
        endTime: '2022/07/13 22:55:55 EDT',
      },
      reveal: {
        start: `July 16, 22:55:55 EDT`,
        title: 'Reveal',
        time: `July 16, 22:55:55  EDT`,
      }
    }
  },
  title: 'Theirsverse',
  music: BaseURL + 'music.mp3',
  playIcon: BaseURL + 'play-icon.png',
  videoPlayIcon: BaseURL + 'music-source/play.png',
  pauseIcon: BaseURL + 'pause-icon.png',
  playBackground: BaseURL + 'play-bg.png',
  melody: BaseURL + 'melody.gif',
  lyric: BaseURL + 'starMap.lrc',
  musicSource: {
    minPlay: BaseURL + 'music-source/minPlay.png',
    closePlay: BaseURL + 'music-source/closePlay.png',
    pausePlay: BaseURL + 'music-source/pause.png',
    music: BaseURL + 'music-source/music.png'
  },
  roadMap: {
    title: 'ROADMAP',
    roadMapImg: 'https://d6bsd1popru6t.cloudfront.net/roadmap-web.png',
    iphoneRoadMapImg: 'https://d6bsd1popru6t.cloudfront.net/roadmap-mobile.png',
    line1: 'Theirsverse is a new kind of community that we build together for the native web3 generation.',
    line2: 'Owning a Theirsverse NFT allows you to be the contributor and investor of a community-driven brand. It starts with building original IP, attending physical art & fashion events, participating in luxury collaborations, and much more that will be revealed over time.',
    line3: 'NFT is our invitation ticket. Art toy, virtual singer, and a whole metaverse are on the way.'
  },
  roadMapV2: {
    bg: `${BaseURL}roadMapV2/BG01.png`,
    mobileBg: `${BaseURL}roadMapV2/roadmap-bg-mobile.png`,
    stage: [`${BaseURL}roadMapV2/bgICON/stage1.png`, `${BaseURL}roadMapV2/bgICON/stage2.png`, `${BaseURL}roadMapV2/bgICON/stage3.png`, `${BaseURL}roadMapV2/bgICON/stage4.png`, `${BaseURL}roadMapV2/bgICON/stage5.png`],
    introduce: [`${BaseURL}roadMapV2/roadmap-part1.mp4`, `${BaseURL}roadMapV2/roadmap-part2.mp4`, `${BaseURL}roadMapV2/roadmap-part3.mp4`, `${BaseURL}roadMapV2/roadmap-part4.mp4`, `${BaseURL}roadMapV2/roadmap-part5.mp4`],
    arrow: `${BaseURL}roadMapV2/arrow.png`
  },
  logo: `${BaseURL}logo.svg`,
  future: {
    title: 'ABOUT FUTURE',
    line1: 'Theirsverse strives to be an open community',
    line2: 'for building a multi-ethnic, social co-creation for art, music, games, and fashion.',
    line3: '',
    part1: 'Each project will donate a percentage of profits to organizations that uplift minority at risk programs;',
    part2: 'Owners of Theirsverse will have exclusive rewards and updates;',
    part3: 'NFT holders will have priority for art exhibitions and concerts;',
    part4: 'Artists who contributed to our NFT collective will have the right to vote on the selection for limited edition NFTs;',
    part5: 'We will support artists from all over the world in art, visual media, and music through Theirsverse project.',
    futureImg: 'https://d6bsd1popru6t.cloudfront.net/aboutfuture.jpg'
  },
  futureV2: {
    title: `Holder's Benefits: `,
    line1: 'NFT is our entry ticket, various rewards will be based on time staked:',
    line2: 'Early access to NFT airdrops.',
    line3: 'Early access to Theirsverse physical products such as: art toys, cosmetics, clothing and dolls.',
    line4: 'Early access to art exhibitions, parties, and exclusive events.',
    line5: 'Early access to our virtual singer concerts and music NFT airdrops.',
    part6: 'Early introduction and access to artworks by young artists.',
    part7: 'The ability to co-build our Theirsverse Youth Forum and Social Metaverse.',
    part8: 'We will support artists from all over the world in art, visual media, and music through Theirsverse project.',
    futureImg: 'https://d6bsd1popru6t.cloudfront.net/aboutfuture.jpg'
  },
  nft2: [
    {
      source: BaseURL + 'n-nft1/SUPERSTAR.png',
      title: 'SUPER STAR',
      des: 'Shining your light',
      background: '#b18dbd',
      rgb: [229, 234, 195],
    },
    {
      source: BaseURL + 'n-nft1/RAINBOW.png',
      title: 'RAINBOW',
      des: 'Love is love',
      background: '#f9ccca',
      rgb: [205, 195, 196]
    },
    {
      source: BaseURL + 'n-nft1/CYBERPUNK.png',
      title: 'CYBERPUNK',
      des: 'Lowlife and high-tech',
      background: '#c1d5e8',
      rgb: [231, 207, 227]
    },
    {
      source: BaseURL + 'n-nft1/SUIT-JY.png',
      title: 'SUIT',
      des: 'We all have two souls',
      background: '#c1d6c4',
      rgb: [188, 206, 192]
    },
    {
      source: BaseURL + 'n-nft1/TAROT-JY.png',
      title: 'TAROT',
      des: 'Future premonitions',
      background: '#E3B5D5',
      rgb: [227, 181, 213]
    },
    {
      source: BaseURL + 'n-nft1/ZODIAC-JY.png',
      title: 'ZODIAC',
      des: 'Western or Eastern, your soul your destiny',
      background: '#F4E190',
      rgb: [244, 225, 144]
    },
    {
      source: BaseURL + 'n-nft1/QUEEN.png',
      title: 'DRAG',
      des: 'Gender is not construct',
      background: '#e0b1be',
      rgb: [229, 207, 211]
    },
    {
      source: BaseURL + 'n-nft1/BINARYOPPOSITION-JY.png',
      title: 'YIN-YANG',
      des: 'The world is not just black or white',
      background: '#ccd5f6',
      rgb: [184, 200, 209]
    },
    {
      source: BaseURL + 'n-nft1/DYNASTY.png',
      title: 'DYNASTY',
      des: 'Different cultures, same love',
      background: '#e5d2ba',
      rgb: [203, 230, 227]
    },
  ],
  firstVideo: `${BaseURL}Homepage-BG.mp4`,
  nftV2: [
    {
      source: BaseURL + 'star2/RAINBOW.mp4',
      title: 'RAINBOW',
      des: 'Every color on the rainbow should be respected.Red(Life) = life\nOrange(Healing) = Healing\nYellow(Sunlight) = sunlight\nGreen(Nature) = Nature\nIndigo(Harmony) = Harmony\nPurple(Spirit) = Spirit',
      background: 'rgba(154, 15, 11, 0.2)',
      rgb: [205, 195, 196],
      left: '65%',
      top: '45%',
      // width: '370px',
      bg: '#f9e0dd'
    },

    {
      source: BaseURL + 'star2/CYBERPUNK.mp4',
      title: 'CYBERPUNK',
      des: 'Combining the long-standing punk culture with a sense of futuristic metal, cyberpunk has become a new aesthetic and a new combination. It also indicates that human beings will live with machines and technology in the future, which is a normal state. The future is not in the future, the future is already here.',
      background: '',
      rgb: [231, 207, 227],
      left: '10%',
      top: '3%',
      bg: '#423363'
    },
    {
      source: BaseURL + 'star2/SUPERSTAR.mp4',
      title: 'SUPERSTAR',
      des: 'Everyone should be his or her or their own superstar, and Theirsverse wants to create a stage for the superstars. Here, everyone is his or her or their own boss, and everyone shines in his or her or their own way.',
      background: 'rgba(245, 165, 72, 0.2)',
      rgb: [229, 234, 195],
      left: '68%',
      top: '5%',
      color: '#333333',
      bg: '#ffff71'
    },

    {
      source: BaseURL + 'star2/DYNASTY.mp4',
      title: 'DYNASTY',
      des: 'Every culture has their own different spirit that is worthy of acknowledging and learning from. It is these differences that make us love the world and want to feel the collision of each culture. The more you understand the civilization of others, the more humbly you can accept differences.',
      background: 'rgba(141, 38, 38, 0.2)',
      rgb: [203, 230, 227],
      left: '15%',
      top: '10%',
      bg: '#8c1717'
    },
    {
      source: BaseURL + 'star2/YINYANG.mp4',
      title: 'YIN-YANG',
      des: 'When the term decentralization keeps appearing around us, centralized aesthetics, unified values, and the opposition of black and white, YIN and YANG is still prominent. For demons, it is the angels who are really cruel, and who should be the main judge of the opposition between angels and demons? Only by bravely breaking the opposition and accepting it can we bring a better future to mankind.',
      background: '',
      rgb: [184, 200, 209],
      top: '8%',
      left: '60%',
      bg: '#ff8e00'
    },
    {
      source: BaseURL + 'star2/SUIT.mp4',
      title: 'SUIT',
      des: 'Humans’ understanding of themselves is constantly evolving. The way the society once tried to distinguish between men and women by clothing and color is gradually being disputed. Clothing is by no means a determination of gender. Human beings can be more tolerant and accepting by understanding the diversity of human nature. Just like the name Theirsverse, we are not only he/him/his or she/her/hers, we are also they/them/theirs. We can embrace, we can include, and we can connect.',
      background: 'rgba(162, 162, 162, 0.2)',
      rgb: [188, 206, 192],
      left: '8%',
      top: '60%',
      bg: '#cec4fd'
    },
    {
      source: BaseURL + 'star2/QUEEN.mp4',
      title: 'DRAG',
      des: 'When we use makeup to change our appearance and "play" with our identity, it’s incredibly powerful. Everyone can decide how they look and express their interpretation of beauty in their own way.',
      background: 'rgba(162, 162, 162, 0.2)',
      rgb: [229, 207, 211],
      top: '10%',
      left: '58%',
      bg: '#d26b6c'
    },
    {
      source: BaseURL + 'star2/TAROT.mp4',
      title: 'TAROT',
      des: 'People use occult power to premonish the future, and the future unfolds in a parallel world. Our intuition has always led us towards the realization of our ideals, and the intuition of the younger generation at this moment is to create a diverse and inclusive metaverse.',
      background: 'rgba(162, 162, 162, 0.2)',
      rgb: [227, 181, 213],
      left: '68%',
      top: '8%',
      bg: '#dcb7d3'
    },
    {
      source: BaseURL + 'star2/ZODIAC.mp4',
      title: 'ZODIAC',
      des: '12 western constellation signs represent 12 different personalities, while the eastern zodiac reveals the auspice of the year. Zodiac also inspires human divination. The East and the West can be communion.',
      background: 'rgba(162, 162, 162, 0.2)',
      rgb: [244, 225, 144],
      left: '10%',
      top: '12%',
      bg: '#f1e29a'
    },
  ],
  // box
  nft4: [
    {
      image: BaseURL + '4nft/Rainbow.png',
      title: 'Rainbow',
      lock: false,
      target: BaseURL + 'rainbow.gif'
    },
    {
      image: BaseURL + '4nft/SuperStar.png',
      title: 'Super Star',
      lock: false,
      target: BaseURL + 'starGif/SuperStar.gif'
    },
    {
      image: BaseURL + '4nft/Dynasty.png',
      title: 'Dynasty',
      lock: false,
      target: BaseURL + 'starGif/Dynasty.gif'
    },
    {
      image: BaseURL + '4nft/Suit.png',
      title: 'Suit',
      lock: false,
      target: BaseURL + 'starGif/suit.gif'
    },
    {
      image: BaseURL + '4nft/Cyberpunk.png',
      title: 'Cyberpunk',
      rgb: [184, 200, 209],
      lock: false,
      target: BaseURL + 'starGif/cyberpunk.gif'
    },
    {
      image: BaseURL + '4nft/Ying-Yang.png',
      title: 'Yin-Yang',
      lock: false,
      target: BaseURL + 'starGif/Yin-Yang.gif'
    },
    {
      image: BaseURL + '4nft/QUEEN.png',
      title: 'Drag',
      lock: false,
      target: BaseURL + 'starGif/QUEEN.gif'
    },
    {
      image: BaseURL + '4nft/Zodiac.png',
      title: 'Zodiac',
      lock: false,
      target: BaseURL + 'starGif/Zodiac.gif'
    },
    {
      image: BaseURL + '4nft/Tarot.png',
      title: 'Tarot',
      lock: false,
      target: BaseURL + 'starGif/Tarot.gif'
    }
  ],

  nftDetail: [
    {
      title: 'Rainbow',
      des: 'Every color on the rainbow should be respected.Red(Life) = life\nOrange(Healing) = Healing\nYellow(Sunlight) = sunlight\nGreen(Nature) = Nature\nIndigo(Harmony) = Harmony\nPurple(Spirit) = Spirit',
      itemList: [
        {
          name: 'Red',
          image: BaseURL + 'detailImage/Rainbow/Red.png'
        },
        {
          name: 'Orange',
          image: BaseURL + 'detailImage/Rainbow/Orange.png'
        },
        {
          name: 'Yellow',
          image: BaseURL + 'detailImage/Rainbow/Yellow.png'
        },
        {
          name: 'Green',
          image: BaseURL + 'detailImage/Rainbow/Green.png'
        },
        {
          name: 'Blue',
          image: BaseURL + 'detailImage/Rainbow/Blue.png'
        },
        {
          name: 'Purple',
          image: BaseURL + 'detailImage/Rainbow/Purple.png'
        },
        {
          name: 'Rainbow-Alice Boy',
          image: BaseURL + 'detailImage/Rainbow-Alice+Boy/Rainbow-Alice+Boy.png'
        }
      ]
    },
    {
      title: 'Super Star',
      des: 'Everyone should be his or her or their own superstar, and Theirsverse wants to create a stage for the superstars. Here, everyone is his or her or their own boss, and everyone shines in his or her or their own way.',
      itemList: [
        {
          name: 'Bear',
          image: BaseURL + 'detailImage/SuperStar/Bear.png'
        },
        {
          name: 'Camilia',
          image: BaseURL + 'detailImage/SuperStar/Camilia.png'
        },
        {
          name: 'Cassie',
          image: BaseURL + 'detailImage/SuperStar/Cassie.png'
        },
        {
          name: 'Cat Girl',
          image: BaseURL + 'detailImage/SuperStar/Cat+Girl.png'
        },
        {
          name: 'Chocolate Girl',
          image: BaseURL + 'detailImage/SuperStar/Chocolate+Girl.png'
        },
        {
          name: 'Claude Cahun',
          image: BaseURL + 'detailImage/SuperStar/Claude+Cahun.png'
        },
        {
          name: 'Elvis Presley',
          image: BaseURL + 'detailImage/SuperStar/Elvis+Presley.png'
        },
        {
          name: 'Freddie Mercury',
          image: BaseURL + 'detailImage/SuperStar/Freddie+Mercury.png'
        },
        {
          name: 'Ghoul Jackson',
          image: BaseURL + 'detailImage/SuperStar/Ghoul+Jackson.png'
        },
        {
          name: 'Harry',
          image: BaseURL + 'detailImage/SuperStar/Harry.png'
        },
        {
          name: 'Jules',
          image: BaseURL + 'detailImage/SuperStar/Jules.png'
        },
        {
          name: 'Lady Gaga',
          image: BaseURL + 'detailImage/SuperStar/Lady+Gaga.png'
        },
        {
          name: 'Latino',
          image: BaseURL + 'detailImage/SuperStar/Latino.png'
        },
        {
          name: 'Madonna',
          image: BaseURL + 'detailImage/SuperStar/Madonna.png'
        },
        {
          name: 'Matrix',
          image: BaseURL + 'detailImage/SuperStar/Matrix.png'
        },
        {
          name: 'Movie Star',
          image: BaseURL + 'detailImage/SuperStar/Movie+Star.png'
        },
        {
          name: 'Olivine',
          image: BaseURL + 'detailImage/SuperStar/Olivine.png'
        },
        {
          name: 'Palm Civet',
          image: BaseURL + 'detailImage/SuperStar/Palm+Civet.png'
        },
        {
          name: 'Pop Star',
          image: BaseURL + 'detailImage/SuperStar/Pop+Star.png'
        },
        {
          name: 'Rock Star',
          image: BaseURL + 'detailImage/SuperStar/Rock+Star.png'
        },
        {
          name: 'Rosemond',
          image: BaseURL + 'detailImage/SuperStar/Rosemond.png'
        },
        {
          name: 'Super star',
          image: BaseURL + 'detailImage/SuperStar/Super+star.png'
        },
        {
          name: 'Tiger',
          image: BaseURL + 'detailImage/SuperStar/Tiger.png'
        },
        {
          name: 'Tsuki',
          image: BaseURL + 'detailImage/SuperStar/Tsuki.png'
        },
        {
          name: 'Velvet Boy',
          image: BaseURL + 'detailImage/SuperStar/Velvet+Boy.png'
        }
      ]
    },
    {
      title: 'Dynasty',
      des: 'Every culture has their own different spirit that is worthy of acknowledging and learning from. It is these differences that make us love the world and want to feel the collision of each culture. The more you understand the civilization of others, the more humbly you can accept differences.',
      itemList: [
        {
          name: 'British Knight',
          image: BaseURL + 'detailImage/Dynasty/British+Knight.png'
        },
        {
          name: 'British Princess',
          image: BaseURL + 'detailImage/Dynasty/British+Princess.png'
        },
        {
          name: 'Cheongsam girl',
          image: BaseURL + 'detailImage/Dynasty/Cheongsam+girl.png'
        },
        {
          name: 'Egypt',
          image: BaseURL + 'detailImage/Dynasty/Egypt.png'
        },
        {
          name: 'German Gothic.png',
          image: BaseURL + 'detailImage/Dynasty/German+Gothic.png'
        },
        {
          name: 'India',
          image: BaseURL + 'detailImage/Dynasty/India.png'
        },
        {
          name: 'Italy',
          image: BaseURL + 'detailImage/Dynasty/Italy.png'
        },
        {
          name: 'Japan',
          image: BaseURL + 'detailImage/Dynasty/Japan.png'
        },
        {
          name: 'Korea',
          image: BaseURL + 'detailImage/Dynasty/Korea.png'
        },
        {
          name: 'Korean Girl',
          image: BaseURL + 'detailImage/Dynasty/Korean+Girl.png'
        },
        {
          name: 'Rococo',
          image: BaseURL + 'detailImage/Dynasty/Rococo.png'
        },
        {
          name: 'Sakuran',
          image: BaseURL + 'detailImage/Dynasty/Sakuran.png'
        },
        {
          name: 'The Qing Dynasty',
          image: BaseURL + 'detailImage/Dynasty/The+Qing+Dynasty.png'
        },
        {
          name: 'The Tang Dynasty',
          image: BaseURL + 'detailImage/Dynasty/The+Tang+Dynasty.png'
        },
        {
          name: 'USA-Statue of Liberty',
          image: BaseURL + 'detailImage/Dynasty/USA-Statue+of+Liberty.png'
        },

      ]
    },
    {
      title: 'Suit',
      des: 'Humans’ understanding of themselves is constantly evolving. The way the society once tried to distinguish between men and women by clothing and color is gradually being disputed. Clothing is by no means a determination of gender. Human beings can be more tolerant and accepting by understanding the diversity of human nature. Just like the name Theirsverse, we are not only he/him/his or she/her/hers, we are also they/them/theirs. We can embrace, we can include, and we can connect.',
      itemList: [
        {
          name: 'Dragon Suit',
          image: BaseURL + 'detailImage/Suit/Dragon+Suit.png'
        },
        {
          name: 'Pinkboy',
          image: BaseURL + 'detailImage/Suit/Pinkboy.png'
        },
        {
          name: 'Raven Suit',
          image: BaseURL + 'detailImage/Suit/Raven+Suit.png'
        },
        {
          name: 'Royal Suit',
          image: BaseURL + 'detailImage/Suit/Royal+Suit.png'
        },
        {
          name: 'Suit-Punk Suit',
          image: BaseURL + 'detailImage/Suit/Suit-Punk+Suit.png'
        },
        {
          name: 'Timothee Chalamet',
          image: BaseURL + 'detailImage/Suit/Timothee+Chalamet.png'
        }

      ]
    },
    {
      title: 'Cyberpunk',
      des: 'Combining the long-standing punk culture with a sense of futuristic metal, cyberpunk has become a new aesthetic and a new combination. It also indicates that human beings will live with machines and technology in the future, which is a normal state. The future is not in the future, the future is already here.',
      itemList: [
        {
          name: 'Bomb Expert',
          image: BaseURL + 'detailImage/Cyberpunk/Bomb+Expert.png'
        },
        {
          name: 'Breeze',
          image: BaseURL + 'detailImage/Cyberpunk/Breeze.png'
        },
        {
          name: 'Cyberpunk Clown',
          image: BaseURL + 'detailImage/Cyberpunk/Cyberpunk+Clown.png'
        },
        {
          name: 'Girl of steel',
          image: BaseURL + 'detailImage/Cyberpunk/Girl+of+steel.png'
        },
        {
          name: 'Moment',
          image: BaseURL + 'detailImage/Cyberpunk/Moment.png'
        },
        {
          name: 'Skateboard Boy',
          image: BaseURL + 'detailImage/Cyberpunk/Skateboard+Boy.png'
        },
        {
          name: 'The Dream Fairy',
          image: BaseURL + 'detailImage/Cyberpunk/The+Dream+Fairy.png'
        },
        {
          name: 'Warrior',
          image: BaseURL + 'detailImage/Cyberpunk/Warrior.png'
        }

      ]
    },
    {
      title: 'Yin-Yang',
      des: 'Combining the long-standing punk culture with a sense of futuristic metal, cyberpunk has become a new aesthetic and a new combination. It also indicates that human beings will live with machines and technology in the future, which is a normal state. The future is not in the future, the future is already here.',
      itemList: [
        {
          name: 'Angel',
          image: BaseURL + 'detailImage/Yin-Yang/Angel.png'
        },
        {
          name: 'Asura',
          image: BaseURL + 'detailImage/Yin-Yang/Asura.png'
        },
        {
          name: 'Angel',
          image: BaseURL + 'detailImage/Yin-Yang/Angel.png'
        },
        {
          name: 'Demon',
          image: BaseURL + 'detailImage/Yin-Yang/Demon.png'
        },
        {
          name: 'Devil',
          image: BaseURL + 'detailImage/Yin-Yang/Devil.png'
        },
        {
          name: 'Immortal',
          image: BaseURL + 'detailImage/Yin-Yang/Immortal.png'
        },
        {
          name: 'Sakra',
          image: BaseURL + 'detailImage/Yin-Yang/Sakra.png'
        },
        {
          name: 'Sister Garlic',
          image: BaseURL + 'detailImage/Yin-Yang/Sister+Garlic.png'
        },
        {
          name: 'Swancula',
          image: BaseURL + 'detailImage/Yin-Yang/Swancula.png'
        },
      ]
    },
    {
      title: 'Drag',
      des: 'When we use makeup to change our appearance and "play" with our identity, it’s incredibly powerful. Everyone can decide how they look and express their interpretation of beauty in their own way.',
      itemList: [
        {
          name: 'Fire Queen',
          image: BaseURL + 'detailImage/Drag+Queen/Fire+Queen.png'
        },
        {
          name: 'Golden Queen',
          image: BaseURL + 'detailImage/Drag+Queen/Golden+Queen.png'
        },
        {
          name: 'Holy Queen',
          image: BaseURL + 'detailImage/Drag+Queen/Holy+Queen.png'
        },
        {
          name: 'Lily',
          image: BaseURL + 'detailImage/Drag+Queen/Lily.png'
        },
        {
          name: 'Nurse',
          image: BaseURL + 'detailImage/Drag+Queen/Nurse.png'
        },
        {
          name: 'Rose Queen',
          image: BaseURL + 'detailImage/Drag+Queen/Rose+Queen.png'
        },
        {
          name: 'Starlight',
          image: BaseURL + 'detailImage/Drag+Queen/Starlight.png'
        },
      ]
    },
    {
      title: 'Zodic',
      des: '12 western constellation signs represent 12 different personalities, while the eastern zodiac reveals the auspice of the year. Zodiac also inspires human divination. The East and the West can be communion.',
      itemList: [
        {
          name: 'Dog',
          image: BaseURL + 'detailImage/Zodic/Dog.png'
        },
        {
          name: 'Dragon',
          image: BaseURL + 'detailImage/Zodic/Dragon.png'
        },
        {
          name: 'Horse',
          image: BaseURL + 'detailImage/Zodic/Horse.png'
        },
        {
          name: 'Monkey',
          image: BaseURL + 'detailImage/Zodic/Monkey.png'
        },
        {
          name: 'Mouse',
          image: BaseURL + 'detailImage/Zodic/Mouse.png'
        },
        {
          name: 'Ox',
          image: BaseURL + 'detailImage/Zodic/Ox.png'
        },
        {
          name: 'PIGGY',
          image: BaseURL + 'detailImage/Zodic/PIGGY.png'
        },
        {
          name: 'Rabbit',
          image: BaseURL + 'detailImage/Zodic/Rabbit.png'
        },
        {
          name: 'Rooster',
          image: BaseURL + 'detailImage/Zodic/Rooster.png'
        },
        {
          name: 'Sheep',
          image: BaseURL + 'detailImage/Zodic/Sheep.png'
        },
        {
          name: 'Snake',
          image: BaseURL + 'detailImage/Zodic/Snake.png'
        },
        {
          name: 'Tiger',
          image: BaseURL + 'detailImage/Zodic/Tiger.png'
        },
      ]
    },
    {
      title: 'Tarot',
      des: 'People use occult power to premonish the future, and the future unfolds in a parallel world. Our intuition has always led us towards the realization of our ideals, and the intuition of the younger generation at this moment is to create a diverse and inclusive metaverse.',
      itemList: [
        {
          name: 'Death',
          image: BaseURL + 'detailImage/Tarot/Death.png'
        },
        {
          name: 'Emperor',
          image: BaseURL + 'detailImage/Tarot/Emperor.png'
        },
        {
          name: 'Empress',
          image: BaseURL + 'detailImage/Tarot/Empress.png'
        },
        {
          name: 'Hermit',
          image: BaseURL + 'detailImage/Tarot/Hermit.png'
        },
        {
          name: 'Judgement',
          image: BaseURL + 'detailImage/Tarot/Judgement.png'
        },
        {
          name: 'Lover',
          image: BaseURL + 'detailImage/Tarot/Lover.png'
        },
        {
          name: 'Magician',
          image: BaseURL + 'detailImage/Tarot/Magician.png'
        },
        {
          name: 'Strength',
          image: BaseURL + 'detailImage/Tarot/Strength.png'
        },
      ]
    }
  ],

  nft1: {
    describe: {
      days: {
        number: 270,
        unit: ' days, '
      },
      artists: {
        number: 16,
        unit: ' artists  created  '
      },
      collections: {
        number: 9,
        unit: ' collections, '
      },
      layers: {
        firstPart: 'each NFT is made up of',
        secondPart: '8-10 ',
        lastPart: ' separate layers which'
      },
      line3: {
        firstPart: 'amount to a total of',
        secondPart: '866 ',
        lastPart: ' layers.'
      },
      line4: 'Each NFT is unique yet unified from freehand sketch to final production,',
      line5: 'saturated with the idea of inclusivity and freedom of expression.'
    },
    box: [
      {
        image: BaseURL + 'nft1/RAINBOW.png',
        title: 'Rainbow',
        background: '#FFB3B3',
        lock: false,
        target: BaseURL + 'rainbow.gif'
      },
      {
        image: BaseURL + 'nft1/CYBERPUNK.png',
        title: 'Cyberpunk',
        background: '#FC5AAD',
        rgb: [184, 200, 209],
        lock: true
      },
      {
        image: BaseURL + 'nft1/SUPERSTAR.png',
        title: 'Super Star',
        background: '#FFBE00',
        lock: true
      },
      {
        image: BaseURL + 'nft1/DYNASTY.png',
        title: 'Dynasty',
        background: '#FF0000',
        lock: true
      },
      {
        image: BaseURL + 'nft1/ZODIAC.png',
        title: 'Zodiac',
        background: '#E14B32',
        lock: true
      },
      {
        image: BaseURL + 'nft1/TAROT.png',
        title: 'Tarot',
        background: '#F2B0F0',
        lock: true
      },
      {
        image: BaseURL + 'nft1/SUIT.png',
        title: 'Suit',
        background: '#CEC4FD',
        lock: true
      },
      {
        image: BaseURL + 'nft1/QUEEN.png',
        title: 'Drag',
        background: '#FC716C',
        lock: false,
      },
      {
        image: BaseURL + 'nft1/BINARYOPPOSITION.png',
        title: 'Yin-Yang',
        background: '#FF713B',
        lock: true
      },
    ]
  },
  socials: [
    {
      title: 'gmail',
      img: `${BaseURL}footer/mail.svg`,
      header_image: `${BaseURL}social_header/mail.png`,
      link: 'http://mail.google.com/?fs=1&to=BD@Theirsverse.com&tf=cm'
    },
    {
      title: 'instagram',
      img: `${BaseURL}footer/ins.svg`,
      header_image: `${BaseURL}social_header/ins.png`,
      link: 'https://instagram.com/theirsverse?utm_medium=copy_link'
    },
    //     {
    //       title: 'tiktok',
    //       img: `${BaseURL}footer/tiktok.svg`,
    //       header_image: `${BaseURL}social_header/tiktok.png`,
    //       link: '/'
    //     },
    {
      title: 'mirror',
      img: `${BaseURL}footer/mirror.svg`,
      header_image: `${BaseURL}social_header/mirror.png`,
      link: 'https://mirror.xyz/0xafd0a1002c0c90AecE4BAc54A1d67d9412053Fb2'
    },
    //     {
    //       title: 'opensea',
    //       img: `${BaseURL}footer/opensea.svg`,
    //       header_image: `${BaseURL}social_header/opensea.png`,
    //       link: '/'
    //     },
    {
      title: 'twitter',
      img: `${BaseURL}footer/twitter.svg`,
      header_image: `${BaseURL}social_header/twitter.png`,
      link: 'https://twitter.com/Theirsverse?s=20&t=-khzvp71PYDNJKi72f-e2g'
    },
  ],
  socialsV2: [
    {
      title: 'gmail',
      img: `${BaseURL}footer/v2/email.png`,
      header_image: `${BaseURL}social_header/mail.png`,
      width: '36',
      height: '28.99',
      link: 'http://mail.google.com/?fs=1&to=BD@Theirsverse.com&tf=cm'
    },
    {
      title: 'instagram',
      img: `${BaseURL}footer/v2/ins.png`,
      header_image: `${BaseURL}social_header/ins.png`,
      link: 'https://instagram.com/theirsverse?utm_medium=copy_link',
      width: '36',
      height: '36',
    },
    //     {
    //       title: 'tiktok',
    //       img: `${BaseURL}footer/tiktok.svg`,
    //       header_image: `${BaseURL}social_header/tiktok.png`,
    //       link: '/'
    //     },
    {
      title: 'mirror',
      img: `${BaseURL}footer/v2/mirror.png`,
      header_image: `${BaseURL}social_header/mirror.png`,
      link: 'https://mirror.xyz/0xafd0a1002c0c90AecE4BAc54A1d67d9412053Fb2',
      width: '28.8',
      height: '36',
    },
    //     {
    //       title: 'opensea',
    //       img: `${BaseURL}footer/opensea.svg`,
    //       header_image: `${BaseURL}social_header/opensea.png`,
    //       link: '/'
    //     },
    {
      title: 'twitter',
      img: `${BaseURL}footer/v2/twitter.png`,
      header_image: `${BaseURL}social_header/twitter.png`,
      link: 'https://twitter.com/Theirsverse?s=20&t=-khzvp71PYDNJKi72f-e2g',
      width: '36.43',
      height: '29.6',
    },
    {
      title: 'discord',
      img: `${BaseURL}footer/v2/discord.png`,
      header_image: `${BaseURL}social_header/discord.png`,
      link: 'https://discord.com/invite/KswvM25rqM',
      width: '37.5',
      height: '37.5',
    },
  ],
  countDown: {
    twitter: {
      title: 'discord',
      img: `${BaseURL}count-down/twitter.png`,
      header_image: `${BaseURL}social_header/Twitter.svg`,
      link: 'https://twitter.com/Theirsverse?s=20&t=-khzvp71PYDNJKi72f-e2g'
    },
    discord: {
      title: 'discord',
      img: `${BaseURL}count-down/discord.png`,
      header_image: `${BaseURL}social_header/twitter.png`,
      link: 'https://twitter.com/Theirsverse?s=20&t=-khzvp71PYDNJKi72f-e2g'
    },
    banner: `${BaseURL}count-down/banner.png`,
    releaseDate: 'July 12, 22:55:55 EDT',
    releaseDateStamp: '1657680955000',
    items: '5.5K',
    owners: '-',
    floor: '-',
    volume: '-',
    day: [0, 5]
  },
  about: {
    mobileLeftDesc1: `Theirsverse aims to create a community that celebrates`,
    pcLeftDesc1: `Theirsverse aims to create a community
    that celebrates`,
    leftDesc2: `Expression, Color, and Beauty.`,
    //  white-space: pre-line;
    leftDesc3: `We as humans all think of ourselves as
    different, and the Theirsverse community
    believes that being imperfect is perfect.`,
    rightDesc1: `Our goal is to celebrate what makes us unique, and more
    importantly, what unites us.`,
    rightDesc2: `That's why we want to center ourselves around the idea of "theirs"
    a universal term that unifies all creators and their unique stories.`,
    rightDesc3: `We Are Theirs!`
  },
  aboutV2: {
    mobileLeftDesc1: `Theirsverse aims to create a community that celebrates`,
    pcLeftDesc1: `Theirsverse aims to create a community
    that celebrates`,
    leftDesc2: `Expression, Color, and Beauty.`,
    //  white-space: pre-line;
    leftDesc3: `We as humans all think of ourselves as
    different, and the Theirsverse community
    believes that being imperfect is perfect.`,
    rightDesc1: `Our goal is to celebrate what makes us unique, and more
    importantly, what unites us.`,
    rightDesc2: `That's why we want to center ourselves around the idea of "theirs"
    a universal term that unifies all creators and their unique stories.`,
    rightDesc3: `We Are Theirs!`,
    p1: 'Theirsverse ',
    p2: ` is founded by a group of young artists from diverse cultural backgrounds and gender identities. The name "Theirsverse" is compounded of "Theirs" and "universe", implying that the universe is not simply "he him his" or "she her hers".
    The word "theirs" represents a community that can open up their heart to new identities and multiculturalism. That's what Theirsverse believes in - We humans are more similar than we are different. `,
    p3: `We are Theirsverse.`,

    p4: 'Theirsverse ',
    p5: ` has created a brand connecting Web 2 and Web 3. From NFT artworks to fashion toys and DTC beauty brands, Theirsverse would like to invite creators globally to co-create our brand together. We are founding a global young artists’ fund to promote more artists into the booming NFT world. We love the passionate artists across the world that share their knowledge and insights in the Theirsverse community. Theirsverse is an invitation to unclock your creative future!`
  },
  artists: {
    h2Title1: `The Theirsverse eye look was created
    with a nihilistic approach.`,
    desc1: `Connection is created through the vacant stare,
    one that can symbolize a variety of inner
    emotion for the holder to resonate with.`,
    h2Title2: `In Theirsverse, our artists embrace the
    fluidity of gender, you can express your
    identities in new ways!`,
    desc2: `We want to find a universal way to connect
    and communicate with a new generation.`,
    desc3: ``
  },
  artistsV2: {
    p1: 'Theirsverse',
    p2: ' art director Hyphen said that gender is not a binary construct, gender is a self-exploration. From April 2021, Hyphen and 16 artists from around the world devoted their own soul and creativity into the creation of the blueprint of the Theirsverse project, and seek the universal language that connects everyone through exchanges and collisions between artists. Theirsverse will co-create a community that embraces diverse beauty standards and the redefining of identities in web3.'
  },
  faq: [
    {
      q: 'How to get the whitelist?',
      a: 'Enter Discord to view our Allowlist points. ',
      expand: true
    },
    {
      q: 'Whitelist benefits?',
      a: 'Priority mint, the price will be announced shortly.',
      expand: false
    },
    {
      q: ' Mint channel:',
      a: 'Official website, launch date will be announced shortly. ',
      expand: false
    },
    {
      q: 'What is the total amount of NFT?',
      a: 'To be announced soon. ',
      expand: false
    },
    {
      q: 'How to be our OG?',
      a: 'Join our Discord and find information.',
      expand: false
    },
    {
      q: 'We want to cooperate with Theirsverse, how to contact?',
      a: 'BD@Theirsverse.com. ',
      expand: false
    },
    {
      q: 'I am an artist, how do I join the Theirsverse artist team?',
      a: 'Please send us your details to:\nTheirsverse@gmail.com.',
      expand: false
    }
  ],
  faqIcon: {
    down: `${BaseURL}star2/Down.png`,
    up: `${BaseURL}star2/up.png`,
  },
  footerImg: `${BaseURL}footer/footer-web.png`,
  footerImgMobile: `${BaseURL}footer/footer-mobile.png`,
  conditions: `${BaseURL}Theirsverse_Conditions.pdf`,
  conditionsText: 'Theirsverse Terms & Conditions',
}
