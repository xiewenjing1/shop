export const testSelctData = [
  {
    name: '分类',
    con: {
      openDrop: false,
      conList: [
        '代金券',
        '蛋糕',
        '甜点',
        '火锅',
        '自助餐',
        '小吃快餐',
        '日韩料理',
        '西餐',
        '聚餐宴请',
        '烧烤烤肉',
        '东北菜',
        '川湘菜',
        '江浙菜',
        '香锅烤鱼',
        '粤菜',
        '中式烧烤/烤串',
        '西北菜',
        '咖啡酒吧',
        '云贵菜',
        '东南亚菜',
        '海鲜素食',
        '台湾/客家菜',
        '创意菜汤',
        '粥/炖菜',
        '新疆菜',
        '其他美食',
        '京菜',
        '鲁菜'
      ]
    }
  },
  {
    name: '区域',
    con: {
      openDrop: true,
      conList: [
        {
          name: '平谷区',
          list: ['全部', '平谷城区', '金海湖', '石林峡', '天云山', '玻璃台']
        },
        {
          name: '门头沟城区',
          list: [
            '全部',
            '龙凤山滑雪场',
            '爨底下村',
            '京西十八潭',
            '潭柘寺',
            '妙峰山',
            '灵山风景区'
          ]
        }
      ]
    }
  },
  {
    name: '用餐人数',
    con: {
      openDrop: false,
      conList: [
        '单人餐',
        '双人餐',
        '3-4人',
        '5-6人',
        '7-8人',
        '9-10人',
        '10人以上',
        '其他'
      ]
    }
  }
];
export const productList = [
  {
    id: 1,
    mainImage: require('../../../assets/image/goods/goods1.jpg'),
    name: '米斯特比萨（通州九棵树店）',
    point: 4.2,
    commentNum: '2240',
    address: '九棵树',
    price: 83,
    tikit: [{
      title: '100元代金券1张，可叠加',
      price: '95'
    }]
  },
  {
    id: 2,
    mainImage: require('../../../assets/image/goods/goods2.jpg'),
    name: '京味斋·北京牡丹烤鸭（奥体店）',
    point: 4.7,
    commentNum: '6437',
    address: '亚运村',
    price: 64,
    tikit: [{
      title: '100元代金券1张，可叠加',
      price: '95'
    }]
  },
  {
    id: 3,
    mainImage: require('../../../assets/image/goods/goods3.jpg'),
    name: '重八牛府之初入江湖（双榆树店）',
    point: 4.8,
    commentNum: '5444',
    address: '',
    price: 0,
    tikit: [{
      title: '100元代金券1张，可叠加',
      price: '90'
    }]
  },
  {
    id: 4,
    mainImage: require('../../../assets/image/goods/goods4.jpg'),
    name: '汉拿山（昌平悦荟广场店）',
    point: 4.7,
    commentNum: '3492',
    address: '昌平镇',
    price: 92,
    tikit: [{
      title: '100元代金券1张，仅限使用1张',
      price: '70'
    }]
  },
  {
    id: 5,
    mainImage: require('../../../assets/image/goods/goods5.jpg'),
    name: '松鹤楼（月坛店）',
    point: 4.1,
    commentNum: '587',
    address: '月坛',
    price: 141,
    tikit: [
      {
        title: '100元代金券1张，可叠加15张',
        price: '92'
      },
      {
        title: '100元代金券1张，可叠加',
        price: '85'
      }
    ]
  }
];
