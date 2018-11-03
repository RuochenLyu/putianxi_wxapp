App({
  onLaunch: function() {
    this.globalData = {
      hospitals: [{
          "_id": 1,
          "name": "安顺阳光妇科医院",
          "province": "贵州省",
          "city": "安顺市",
          "district": "西秀区",
          "address": "中华北路与西水路交叉口路西"
        },
        {
          "_id": 2,
          "name": "安阳协和医院",
          "province": "河南省",
          "city": "安阳市",
          "district": "龙安区",
          "address": "文明大道西段85号"
        },
        {
          "_id": 3,
          "name": "蚌埠澳美佳女子医院",
          "province": "安徽省",
          "city": "蚌埠市",
          "district": "龙子湖区",
          "address": "交通路143号"
        },
        {
          "_id": 4,
          "name": "包头都市妇产医院",
          "province": "内蒙古自治区",
          "city": "包头市",
          "district": "昆都仑区",
          "address": "阿尔丁大街神华蓝天商厦对面(市政府阿尔丁广场西南道6号)"
        },
        {
          "_id": 5,
          "name": "包头生殖健康服务中心",
          "province": "内蒙古自治区",
          "city": "包头市",
          "district": "昆都仑区",
          "address": "乌兰道7号小肥羊大厦往东50米"
        },
        {
          "_id": 6,
          "name": "包头现代女子妇产医院",
          "province": "内蒙古自治区",
          "city": "包头市",
          "district": "青山区",
          "address": "钢铁大街36号(万达广场斜对面)"
        },
        {
          "_id": 7,
          "name": "包头新世纪男科医院",
          "province": "内蒙古自治区",
          "city": "包头市",
          "district": "青山区",
          "address": "少先路21号"
        },
        {
          "_id": 8,
          "name": "宝鸡市第三人民医院",
          "province": "陕西省",
          "city": "宝鸡市",
          "district": "金台区",
          "address": "宏文路48号"
        },
        {
          "_id": 9,
          "name": "宝鸡远大肛肠医院",
          "province": "陕西省",
          "city": "宝鸡市",
          "district": "渭滨区",
          "address": "迎宾路1号火车站向东50米"
        },
        {
          "_id": 10,
          "name": "保定白癜风医院",
          "province": "河北省",
          "city": "保定市",
          "district": "莲池区",
          "address": "三丰中路379号(果品批发市场对过)"
        },
        {
          "_id": 11,
          "name": "保定东大肛肠医院",
          "province": "河北省",
          "city": "保定市",
          "district": "莲池区",
          "address": "天威东路1266号(客运中心站)南行300米"
        },
        {
          "_id": 12,
          "name": "保定京津医院",
          "province": "河北省",
          "city": "保定市",
          "district": "唐县",
          "address": "中山北大街28号"
        },
        {
          "_id": 13,
          "name": "保定牡丹妇婴医院",
          "province": "河北省",
          "city": "保定市",
          "district": "莲池区",
          "address": "东风东路335号"
        },
        {
          "_id": 14,
          "name": "保定世纪协和医院",
          "province": "河北省",
          "city": "保定市",
          "district": "莲池区",
          "address": "裕华西路666号"
        },
        {
          "_id": 15,
          "name": "保定现代女子医院",
          "province": "河北省",
          "city": "保定市",
          "district": "竞秀区",
          "address": "七一西路555号(竞秀公园西行)"
        },
        {
          "_id": 16,
          "name": "北京艾丽斯妇科医院",
          "province": "北京市",
          "city": "北京市",
          "district": "海淀区",
          "address": "北四环西路9号"
        },
        {
          "_id": 17,
          "name": "北京宝岛妇产医院",
          "province": "北京市",
          "city": "北京市",
          "district": "海淀区",
          "address": "新街口外大街1号"
        },
        {
          "_id": 18,
          "name": "北京北海医院",
          "province": "北京市",
          "city": "北京市",
          "district": "东城区",
          "address": "地安门外大街甲158号"
        },
        {
          "_id": 19,
          "name": "北京大学吴阶平泌尿外科医学中心",
          "province": "北京市",
          "city": "北京市",
          "district": "石景山区",
          "address": "晋元庄路9号院"
        },
        {
          "_id": 20,
          "name": "北京德胜门中医院",
          "province": "北京市",
          "city": "北京市",
          "district": "西城区",
          "address": "德胜门外大街200号(德胜门箭楼东北角)"
        },
        {
          "_id": 21,
          "name": "北京东大肛肠医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "东大桥路5号(蓝岛大厦南侧)"
        },
        {
          "_id": 22,
          "name": "北京丰益肛肠医院",
          "province": "北京市",
          "city": "北京市",
          "district": "丰台区",
          "address": "西三环丰益桥西100米"
        },
        {
          "_id": 23,
          "name": "北京凤凰妇科医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "将台西路18号"
        },
        {
          "_id": 24,
          "name": "北京肛肠医院",
          "province": "北京市",
          "city": "北京市",
          "district": "丰台区",
          "address": "西三环丰益桥西100米"
        },
        {
          "_id": 25,
          "name": "北京国际医疗中心",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "亮马桥路50号燕莎中心办公楼(近燕莎友谊商城)"
        },
        {
          "_id": 26,
          "name": "北京海华医院",
          "province": "北京市",
          "city": "北京市",
          "district": "丰台区",
          "address": "育菲园东里4号"
        },
        {
          "_id": 27,
          "name": "北京海军总医院",
          "province": "北京市",
          "city": "北京市",
          "district": "海淀区",
          "address": "阜成路6号"
        },
        {
          "_id": 28,
          "name": "北京恒安中医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "南磨房路14号院2"
        },
        {
          "_id": 29,
          "name": "北京华大中医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "劲松中街405号"
        },
        {
          "_id": 30,
          "name": "北京华府妇儿医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "百子湾南二路18号"
        },
        {
          "_id": 31,
          "name": "北京华美美莱整形医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "朝阳门外大街227号美莱大厦"
        },
        {
          "_id": 32,
          "name": "北京华医中西医结合皮肤病医院",
          "province": "北京市",
          "city": "北京市",
          "district": "海淀区",
          "address": "西四环北路29号(四季青政府向北侧)"
        },
        {
          "_id": 33,
          "name": "北京慧慈医院",
          "province": "北京市",
          "city": "北京市",
          "district": "平谷区",
          "address": "新开街7号"
        },
        {
          "_id": 34,
          "name": "北京慧中医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "建华南路6号地杰长安驿B座31层"
        },
        {
          "_id": 35,
          "name": "北京建国医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "西大望路2号"
        },
        {
          "_id": 36,
          "name": "北京健宫医院",
          "province": "北京市",
          "city": "北京市",
          "district": "西城区",
          "address": "菜市口南大街儒福里6号"
        },
        {
          "_id": 37,
          "name": "北京京北医院",
          "province": "北京市",
          "city": "北京市",
          "district": "海淀区",
          "address": "龙岗路6号(清河桥东)"
        },
        {
          "_id": 38,
          "name": "北京京城皮肤病医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "北沙滩桥北双泉堡甲4号"
        },
        {
          "_id": 39,
          "name": "北京军都医院",
          "province": "北京市",
          "city": "北京市",
          "district": "西城区",
          "address": "德胜门外黄寺大街乙25号"
        },
        {
          "_id": 40,
          "name": "北京丽都医疗美容医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "慧忠北里103号洛克时代中心"
        },
        {
          "_id": 41,
          "name": "北京玛丽妇婴医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "和平里北街5号(东土城路北口)"
        },
        {
          "_id": 42,
          "name": "北京麦瑞骨科医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "北苑路甲1号"
        },
        {
          "_id": 43,
          "name": "北京美联臣医疗美容医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "东三环南路乙52-2号"
        },
        {
          "_id": 44,
          "name": "北京民众体检中心",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "外馆东街51号凯景铭座3层301号"
        },
        {
          "_id": 45,
          "name": "北京民众眼科医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "林萃西里22号(近科荟路)"
        },
        {
          "_id": 46,
          "name": "北京年轮骨科医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "八里庄北里88号"
        },
        {
          "_id": 47,
          "name": "北京前海股骨头医院",
          "province": "北京市",
          "city": "北京市",
          "district": "西城区",
          "address": "地安门西大街丙28号"
        },
        {
          "_id": 48,
          "name": "北京瑞京糖尿病医院",
          "province": "北京市",
          "city": "北京市",
          "district": "丰台区",
          "address": "石榴庄南里15号"
        },
        {
          "_id": 49,
          "name": "北京圣保罗男子医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "东三环南路乙52楼"
        },
        {
          "_id": 50,
          "name": "北京圣贝国际牙科",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "南磨房路16号院甲2号"
        },
        {
          "_id": 51,
          "name": "北京天安中医医院",
          "province": "北京市",
          "city": "北京市",
          "district": "东城区",
          "address": "和平里中街31号"
        },
        {
          "_id": 52,
          "name": "北京天伦不孕不育医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "朝阳门南大街12号"
        },
        {
          "_id": 53,
          "name": "北京天桥医院",
          "province": "北京市",
          "city": "北京市",
          "district": "西城区",
          "address": "北纬路11号"
        },
        {
          "_id": 54,
          "name": "北京天使儿童医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "广渠路大郊亭2号"
        },
        {
          "_id": 55,
          "name": "北京五洲女子医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "西大望路24号"
        },
        {
          "_id": 56,
          "name": "北京武警总队第三医院",
          "province": "北京市",
          "city": "北京市",
          "district": "丰台区",
          "address": "小屯路10号"
        },
        {
          "_id": 57,
          "name": "北京西直河仁安医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "西直河村村委会南院"
        },
        {
          "_id": 58,
          "name": "北京祥云京城皮肤病医院",
          "province": "北京市",
          "city": "北京市",
          "district": "丰台区",
          "address": "马家堡路69号院"
        },
        {
          "_id": 59,
          "name": "北京燕都医院",
          "province": "北京市",
          "city": "北京市",
          "district": "石景山区",
          "address": "鲁谷大街重兴嘉园1号楼"
        },
        {
          "_id": 60,
          "name": "北京阳光丽人妇科医院",
          "province": "北京市",
          "city": "北京市",
          "district": "西城区",
          "address": "赵登禹路富国街2号(近少年儿童活动中心)"
        },
        {
          "_id": 61,
          "name": "北京众安康中医骨科医院",
          "province": "北京市",
          "city": "北京市",
          "district": "朝阳区",
          "address": "八里庄87-89号"
        },
        {
          "_id": 62,
          "name": "毕节现代医院",
          "province": "贵州省",
          "city": "毕节市",
          "district": "七星关区",
          "address": "砂石路1号"
        },
        {
          "_id": 63,
          "name": "仓山东大门诊部",
          "province": "福建省",
          "city": "福州市",
          "district": "仓山区",
          "address": "福峡路城门卫生所附近"
        },
        {
          "_id": 64,
          "name": "仓山橘园洲门诊部",
          "province": "福建省",
          "city": "福州市",
          "district": "仓山区",
          "address": "橘园洲工业区洪湾路35号"
        },
        {
          "_id": 65,
          "name": "沧州九龙男科医院",
          "province": "河北省",
          "city": "沧州市",
          "district": "新华区",
          "address": "清池北大道附近"
        },
        {
          "_id": 66,
          "name": "昌邑市博爱医院",
          "province": "山东省",
          "city": "潍坊市",
          "district": "昌邑市",
          "address": "天水路389号"
        },
        {
          "_id": 67,
          "name": "常熟东方妇科医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "常熟市",
          "address": "枫林路151号"
        },
        {
          "_id": 68,
          "name": "常熟仁爱医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "常熟市",
          "address": "虞山镇虞山北路8号"
        },
        {
          "_id": 69,
          "name": "巢湖康平妇产医院",
          "province": "安徽省",
          "city": "合肥市",
          "district": "巢湖市",
          "address": "团结东路新一中隔壁"
        },
        {
          "_id": 70,
          "name": "巢湖市妇幼保健所",
          "province": "安徽省",
          "city": "合肥市",
          "district": "巢湖市",
          "address": "东风西路463号附近"
        },
        {
          "_id": 71,
          "name": "郴州福康医院",
          "province": "湖南省",
          "city": "郴州市",
          "district": "北湖区",
          "address": "国庆北路21号福康医院(汽车总站旁)"
        },
        {
          "_id": 72,
          "name": "成都安琪儿妇产医院",
          "province": "四川省",
          "city": "成都市",
          "district": "武侯区",
          "address": "高攀路3号(毗邻机场路东沿线火车南站东路口)"
        },
        {
          "_id": 73,
          "name": "成都博爱医院",
          "province": "四川省",
          "city": "成都市",
          "district": "锦江区",
          "address": "大慈寺路1号(东风大桥桥头)"
        },
        {
          "_id": 74,
          "name": "成都博大男科医院",
          "province": "四川省",
          "city": "成都市",
          "district": "武侯区",
          "address": "逸都路1号附16号(伊藤洋华堂对面)"
        },
        {
          "_id": 75,
          "name": "成都博润白癜风医院",
          "province": "四川省",
          "city": "成都市",
          "district": "武侯区",
          "address": "佳灵路6号(红牌楼家乐福对面)"
        },
        {
          "_id": 76,
          "name": "成都东大肛肠医院",
          "province": "四川省",
          "city": "成都市",
          "district": "武侯区",
          "address": "科华北路1号"
        },
        {
          "_id": 77,
          "name": "成都华美整形医院",
          "province": "四川省",
          "city": "成都市",
          "district": "武侯区",
          "address": "二环路南三段7号附1号"
        },
        {
          "_id": 78,
          "name": "成都丽人女子医院",
          "province": "四川省",
          "city": "成都市",
          "district": "青羊区",
          "address": "人民中路二段43号(骡马市太平洋百货对面)"
        },
        {
          "_id": 79,
          "name": "成都龙都医院",
          "province": "四川省",
          "city": "成都市",
          "district": "龙泉驿区",
          "address": "龙都南路203号(近龙泉驿区公安局)"
        },
        {
          "_id": 80,
          "name": "成都玛丽亚妇产医院",
          "province": "四川省",
          "city": "成都市",
          "district": "双流县",
          "address": "天府大道南段2039号(海昌极地海洋世界旁)"
        },
        {
          "_id": 81,
          "name": "成都欧亚男科医院",
          "province": "四川省",
          "city": "成都市",
          "district": "青羊区",
          "address": "一环路西一段161号附8号"
        },
        {
          "_id": 82,
          "name": "成都郫县天康医院",
          "province": "四川省",
          "city": "成都市",
          "district": "郫县",
          "address": "岷江街16号"
        },
        {
          "_id": 83,
          "name": "成都仁品耳鼻喉医院",
          "province": "四川省",
          "city": "成都市",
          "district": "青羊区",
          "address": "青华路51号附12号"
        },
        {
          "_id": 84,
          "name": "成都瑞恩糖尿病医院",
          "province": "四川省",
          "city": "成都市",
          "district": "青羊区",
          "address": "锣锅巷98号"
        },
        {
          "_id": 85,
          "name": "成都圣贝牙科医院",
          "province": "四川省",
          "city": "成都市",
          "district": "武侯区",
          "address": "桂溪西街60号"
        },
        {
          "_id": 86,
          "name": "成都市济民女子医院",
          "province": "四川省",
          "city": "成都市",
          "district": "金牛区",
          "address": "一环路北三段25号"
        },
        {
          "_id": 87,
          "name": "成都市青羊区第二人民医院",
          "province": "四川省",
          "city": "成都市",
          "district": "青羊区",
          "address": "鼓楼北四街99号成都市青羊区第二人民医院内"
        },
        {
          "_id": 88,
          "name": "成都市西区医院",
          "province": "四川省",
          "city": "成都市",
          "district": "金牛区",
          "address": "蜀汉路1号(二环路羊西线路口)"
        },
        {
          "_id": 89,
          "name": "成都蜀都乳腺医院",
          "province": "四川省",
          "city": "成都市",
          "district": "青羊区",
          "address": "八宝街130号(新城市广场斜对面)"
        },
        {
          "_id": 90,
          "name": "成都曙光生殖健康医院",
          "province": "四川省",
          "city": "成都市",
          "district": "青羊区",
          "address": "一环路宫十字路口(青羊横街15号)"
        },
        {
          "_id": 91,
          "name": "成都维多利亚女子医院",
          "province": "四川省",
          "city": "成都市",
          "district": "武侯区",
          "address": "一环路南一段27号"
        },
        {
          "_id": 92,
          "name": "成都新世纪肛肠医院",
          "province": "四川省",
          "city": "成都市",
          "district": "金牛区",
          "address": "一环路北二段1号"
        },
        {
          "_id": 93,
          "name": "成都阳光妇科医院",
          "province": "四川省",
          "city": "成都市",
          "district": "金堂县",
          "address": "淮口镇淮口镇淮州大道200号(金堂县淮口镇国土资源管理所西)"
        },
        {
          "_id": 94,
          "name": "成都养和堂综合门诊部",
          "province": "四川省",
          "city": "成都市",
          "district": "青羊区",
          "address": "蜀都大道十二桥路30号"
        },
        {
          "_id": 95,
          "name": "成都永康医院",
          "province": "四川省",
          "city": "成都市",
          "district": "锦江区",
          "address": "莲花中路6号附82号(近牛市口)"
        },
        {
          "_id": 96,
          "name": "成都长征医院",
          "province": "四川省",
          "city": "成都市",
          "district": "崇州市",
          "address": "金带街226-228号"
        },
        {
          "_id": 97,
          "name": "成都中仁泌尿外科医院",
          "province": "四川省",
          "city": "成都市",
          "district": "锦江区",
          "address": "一环路东四段79号"
        },
        {
          "_id": 98,
          "name": "城阳坤如玛丽妇儿医院",
          "province": "山东省",
          "city": "青岛市",
          "district": "城阳区",
          "address": "艳阳路116号"
        },
        {
          "_id": 99,
          "name": "赤峰阳光泌尿专科医院",
          "province": "内蒙古自治区",
          "city": "赤峰市",
          "district": "松山区",
          "address": "玉龙大街54号"
        },
        {
          "_id": 100,
          "name": "重庆爱德华医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "沙坪坝区",
          "address": "天陈路27号"
        },
        {
          "_id": 101,
          "name": "重庆奥林肛肠医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "九龙坡区",
          "address": "兴隆湾144号"
        },
        {
          "_id": 102,
          "name": "重庆东大肛肠医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "渝北区",
          "address": "新溉大道3号(新牌坊转盘)"
        },
        {
          "_id": 103,
          "name": "重庆都市俪人医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "渝北区",
          "address": "松石北路58号"
        },
        {
          "_id": 104,
          "name": "重庆肛泰肛肠医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "江北区",
          "address": "邦兴·北都"
        },
        {
          "_id": 105,
          "name": "重庆国宾妇产医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "渝中区",
          "address": "上清寺路39号"
        },
        {
          "_id": 106,
          "name": "重庆国防医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "南岸区",
          "address": "南滨西路1号"
        },
        {
          "_id": 107,
          "name": "重庆和睦医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "江北区",
          "address": "洋河三村5号中信银行大厦"
        },
        {
          "_id": 108,
          "name": "重庆红楼医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "渝中区",
          "address": "长江二路39号附甲15号(近大黄路竞地花园)"
        },
        {
          "_id": 109,
          "name": "重庆红十字会医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "江北区",
          "address": "建新东路28号附5号"
        },
        {
          "_id": 110,
          "name": "重庆华山医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "渝北区",
          "address": "红锦大道21号(渝通宾馆对面，红旗河沟枢纽站旁)"
        },
        {
          "_id": 111,
          "name": "重庆坤如玛丽医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "九龙坡区",
          "address": "南华街777号"
        },
        {
          "_id": 112,
          "name": "重庆生殖健康医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "江北区",
          "address": "渝澳大道读书梁一村9号"
        },
        {
          "_id": 113,
          "name": "重庆万州和美妇产医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "万州区",
          "address": "白岩路末端中庆花园1号"
        },
        {
          "_id": 114,
          "name": "重庆五洲女子医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "九龙坡区",
          "address": "谢家湾正街3号6幢"
        },
        {
          "_id": 115,
          "name": "重庆现代妇产医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "黔江区",
          "address": "新华大道东段718号"
        },
        {
          "_id": 116,
          "name": "重庆现代女子医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "南岸区",
          "address": "南坪东路8号附5号"
        },
        {
          "_id": 117,
          "name": "重庆协和医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "九龙坡区",
          "address": "渝州路60号重庆协和医院内"
        },
        {
          "_id": 118,
          "name": "重庆新桥医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "沙坪坝区",
          "address": "新桥正街183号"
        },
        {
          "_id": 119,
          "name": "重庆新视界眼科医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "九龙坡区",
          "address": "渝州路79号后工星座B楼"
        },
        {
          "_id": 120,
          "name": "重庆阳光医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "彭水苗族土家族自治县",
          "address": "汉关路79号"
        },
        {
          "_id": 121,
          "name": "慈溪圣爱医院",
          "province": "浙江省",
          "city": "宁波市",
          "district": "慈溪市",
          "address": "新江路243号(三北西大街与新江路交叉口)"
        },
        {
          "_id": 122,
          "name": "慈溪同济医院",
          "province": "浙江省",
          "city": "宁波市",
          "district": "慈溪市",
          "address": "浒崇公路80号(教场山汽车站旁)"
        },
        {
          "_id": 123,
          "name": "达州陆军医院",
          "province": "四川省",
          "city": "达州市",
          "district": "达川区",
          "address": ""
        },
        {
          "_id": 124,
          "name": "大港海港医院",
          "province": "天津市",
          "city": "天津市",
          "district": "滨海新区",
          "address": "育秀街137号"
        },
        {
          "_id": 125,
          "name": "大连武警医院",
          "province": "辽宁省",
          "city": "大连市",
          "district": "中山区",
          "address": "高原街35号"
        },
        {
          "_id": 126,
          "name": "大连新世纪医院",
          "province": "辽宁省",
          "city": "大连市",
          "district": "甘井子区",
          "address": "千山路60号"
        },
        {
          "_id": 127,
          "name": "大连阳光医院",
          "province": "辽宁省",
          "city": "大连市",
          "district": "西岗区",
          "address": "拥警街4号"
        },
        {
          "_id": 128,
          "name": "大同新时代妇科医院",
          "province": "山西省",
          "city": "大同市",
          "district": "城区",
          "address": "新建北路307号"
        },
        {
          "_id": 129,
          "name": "戴南人民医院",
          "province": "江苏省",
          "city": "泰州市",
          "district": "兴化市",
          "address": "戴南镇新泽路6号"
        },
        {
          "_id": 130,
          "name": "德阳耳鼻喉专科医院",
          "province": "四川省",
          "city": "德阳市",
          "district": "旌阳区",
          "address": "泰山北路58号二段"
        },
        {
          "_id": 131,
          "name": "德阳新华西医院",
          "province": "四川省",
          "city": "德阳市",
          "district": "旌阳区",
          "address": ""
        },
        {
          "_id": 132,
          "name": "电白阳光医院",
          "province": "广东省",
          "city": "茂名市",
          "district": "电白区",
          "address": "水东镇水东镇三角圩广南路10号"
        },
        {
          "_id": 133,
          "name": "东莞常平医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "常平镇常板石大道82号"
        },
        {
          "_id": 134,
          "name": "东莞东方泌尿专科医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "东城中路与东纵大道交汇处(大地大厦对面)"
        },
        {
          "_id": 135,
          "name": "东莞港湾医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "长安镇沙头管理区358省道沙头牌坊"
        },
        {
          "_id": 136,
          "name": "东莞玛丽亚妇产医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "莞太路(广彩城酒店旁)"
        },
        {
          "_id": 137,
          "name": "东莞南国妇儿医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "东进路129号"
        },
        {
          "_id": 138,
          "name": "东莞南华妇科医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "大朗富民北路163号"
        },
        {
          "_id": 139,
          "name": "东莞曙光妇科医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "临海南路与金丰路交汇处东北50米"
        },
        {
          "_id": 140,
          "name": "东莞塘厦康桥综合门诊部",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "塘厦镇沿河东路"
        },
        {
          "_id": 141,
          "name": "东莞同仁妇科医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "大岭山镇振华路51号(与教育路交汇处)"
        },
        {
          "_id": 142,
          "name": "东莞同仁妇科医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "大岭山镇振华路51号(与教育路交汇处)"
        },
        {
          "_id": 143,
          "name": "东莞万福妇产医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "虎门长德路180号"
        },
        {
          "_id": 144,
          "name": "东莞现代妇科医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "环城东路桑园路段圃园路口"
        },
        {
          "_id": 145,
          "name": "东莞现代妇科医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "环城东路桑园路段圃园路口"
        },
        {
          "_id": 146,
          "name": "东莞长安乌沙医院",
          "province": "广东省",
          "city": "东莞市",
          "district": "东莞市",
          "address": "长安镇乌沙社区李屋大道乌沙派出所旁"
        },
        {
          "_id": 147,
          "name": "东营同济医院",
          "province": "山东省",
          "city": "东营市",
          "district": "东营区",
          "address": "北二路785号"
        },
        {
          "_id": 148,
          "name": "东营中西医结合医院",
          "province": "山东省",
          "city": "东营市",
          "district": "东营区",
          "address": "北二路717号胜利油田党校东邻"
        },
        {
          "_id": 149,
          "name": "鄂尔多斯市女子妇产医院",
          "province": "内蒙古自治区",
          "city": "鄂尔多斯市",
          "district": "东胜区",
          "address": "铁西公园往南300米玺建祥集团对面"
        },
        {
          "_id": 150,
          "name": "鄂尔多斯同仁医院",
          "province": "内蒙古自治区",
          "city": "鄂尔多斯市",
          "district": "东胜区",
          "address": "宝日陶亥东街(伊克昭公园往东200米)"
        },
        {
          "_id": 151,
          "name": "佛山都市专科医院",
          "province": "广东省",
          "city": "佛山市",
          "district": "禅城区",
          "address": "文昌西路13号(火车站西侧)"
        },
        {
          "_id": 152,
          "name": "佛山肛泰肛肠医院",
          "province": "广东省",
          "city": "佛山市",
          "district": "禅城区",
          "address": "文华北路151号(桂园市场斜对面)"
        },
        {
          "_id": 153,
          "name": "佛山均安仓门社区卫生站",
          "province": "广东省",
          "city": "佛山市",
          "district": "顺德区",
          "address": "仓门常平路商业街50号"
        },
        {
          "_id": 154,
          "name": "佛山三水区女子医院",
          "province": "广东省",
          "city": "佛山市",
          "district": "顺德区",
          "address": "西南广海大道西1号1、2、4、5楼"
        },
        {
          "_id": 155,
          "name": "涪陵博生和美妇产医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "涪陵区",
          "address": "滨江路锦天名都外滩1号"
        },
        {
          "_id": 156,
          "name": "涪陵三峡医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "涪陵区",
          "address": "太极大道2号(四环路口)"
        },
        {
          "_id": 157,
          "name": "福安爱婴美妇产医院",
          "province": "福建省",
          "city": "宁德市",
          "district": "福安市",
          "address": "新华北路53号(福安人民法院旁边)"
        },
        {
          "_id": 158,
          "name": "福安协和医院",
          "province": "福建省",
          "city": "宁德市",
          "district": "福安市",
          "address": "棠旺街棠发路"
        },
        {
          "_id": 159,
          "name": "福鼎同济生殖专科医院",
          "province": "福建省",
          "city": "宁德市",
          "district": "福鼎市",
          "address": "富民山庄A幢1号"
        },
        {
          "_id": 160,
          "name": "福建省军区机关医院",
          "province": "福建省",
          "city": "福州市",
          "district": "鼓楼区",
          "address": "五凤街道白龙支路18号"
        },
        {
          "_id": 161,
          "name": "福清阳光医院",
          "province": "福建省",
          "city": "福州市",
          "district": "福清市",
          "address": "玉屏街道田乾路46号"
        },
        {
          "_id": 162,
          "name": "福清中山医院",
          "province": "福建省",
          "city": "福州市",
          "district": "福清市",
          "address": "江滨路与西门街交叉口东北100米"
        },
        {
          "_id": 163,
          "name": "福州博爱中医院",
          "province": "福建省",
          "city": "福州市",
          "district": "晋安区",
          "address": "福马路424号(省肿瘤医院往五里亭方向100米)"
        },
        {
          "_id": 164,
          "name": "福州东南妇幼医院",
          "province": "福建省",
          "city": "福州市",
          "district": "台江区",
          "address": "光明路1号"
        },
        {
          "_id": 165,
          "name": "福州福兴妇产医院",
          "province": "福建省",
          "city": "福州市",
          "district": "晋安区",
          "address": "福马路480号"
        },
        {
          "_id": 166,
          "name": "福州肛泰肛肠医院",
          "province": "福建省",
          "city": "福州市",
          "district": "仓山区",
          "address": "则徐大道318号"
        },
        {
          "_id": 167,
          "name": "福州格莱美美容医院",
          "province": "福建省",
          "city": "福州市",
          "district": "鼓楼区",
          "address": "东大路6号(省立医院对面,五四路口站)"
        },
        {
          "_id": 168,
          "name": "福州鼓楼医院",
          "province": "福建省",
          "city": "福州市",
          "district": "鼓楼区",
          "address": "五一北路123号(鼓楼交警支队旁)"
        },
        {
          "_id": 169,
          "name": "福州和睦佳妇产医院",
          "province": "福建省",
          "city": "福州市",
          "district": "仓山区",
          "address": "三高路113号"
        },
        {
          "_id": 170,
          "name": "福州和平肛肠医院",
          "province": "福建省",
          "city": "福州市",
          "district": "晋安区",
          "address": "东门塔头路68号"
        },
        {
          "_id": 171,
          "name": "福州晋安中科皮肤门诊部",
          "province": "福建省",
          "city": "福州市",
          "district": "晋安区",
          "address": "前横南路中段2号(前屿东路)"
        },
        {
          "_id": 172,
          "name": "福州空军医院",
          "province": "福建省",
          "city": "福州市",
          "district": "仓山区",
          "address": "洪山桥郭厝里90号"
        },
        {
          "_id": 173,
          "name": "福州美莱华美美容医院",
          "province": "福建省",
          "city": "福州市",
          "district": "晋安区",
          "address": "岳峰镇塔头路177号"
        },
        {
          "_id": 174,
          "name": "福州泌尿专科医院",
          "province": "福建省",
          "city": "福州市",
          "district": "鼓楼区",
          "address": "湖东路155号"
        },
        {
          "_id": 175,
          "name": "福州市阳光门诊部",
          "province": "福建省",
          "city": "福州市",
          "district": "马尾区",
          "address": "琅岐镇政府附近"
        },
        {
          "_id": 176,
          "name": "福州台江医院",
          "province": "福建省",
          "city": "福州市",
          "district": "台江区",
          "address": "五一南路293号"
        },
        {
          "_id": 177,
          "name": "福州武警整形医院",
          "province": "福建省",
          "city": "福州市",
          "district": "鼓楼区",
          "address": "北环西路159号"
        },
        {
          "_id": 178,
          "name": "福州现代妇产医院",
          "province": "福建省",
          "city": "福州市",
          "district": "鼓楼区",
          "address": "北环西路66号"
        },
        {
          "_id": 179,
          "name": "福州誉盛医院",
          "province": "福建省",
          "city": "福州市",
          "district": "晋安区",
          "address": "福光路102-114号"
        },
        {
          "_id": 180,
          "name": "福州总医院第二附属医院",
          "province": "福建省",
          "city": "宁德市",
          "district": "蕉城区",
          "address": "蕉城南路"
        },
        {
          "_id": 181,
          "name": "福州左海医院",
          "province": "福建省",
          "city": "福州市",
          "district": "鼓楼区",
          "address": "铜盘路21-3号"
        },
        {
          "_id": 182,
          "name": "富源阳光医院",
          "province": "云南省",
          "city": "曲靖市",
          "district": "富源县",
          "address": "胜境街276号附近"
        },
        {
          "_id": 183,
          "name": "赣南妇婴医院",
          "province": "江西省",
          "city": "赣州市",
          "district": "章贡区",
          "address": "五洲大道14号"
        },
        {
          "_id": 184,
          "name": "赣南中西医结合医院",
          "province": "江西省",
          "city": "赣州市",
          "district": "章贡区",
          "address": "赞贤路6号"
        },
        {
          "_id": 185,
          "name": "赣州现代泌尿专科医院",
          "province": "江西省",
          "city": "赣州市",
          "district": "章贡区",
          "address": "站前大道(火车站北侧20米)"
        },
        {
          "_id": 186,
          "name": "公主岭市公安创作医院",
          "province": "吉林省",
          "city": "四平市",
          "district": "公主岭市",
          "address": "河南大街"
        },
        {
          "_id": 187,
          "name": "巩义阳光医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "巩义市",
          "address": "新华路2号"
        },
        {
          "_id": 188,
          "name": "广东民安医院",
          "province": "广东省",
          "city": "广州市",
          "district": "越秀区",
          "address": "犀牛路7号"
        },
        {
          "_id": 189,
          "name": "广西壮族自治区南宁市中南医院",
          "province": "广西壮族自治区",
          "city": "南宁市",
          "district": "青秀区",
          "address": "茅桥路3"
        },
        {
          "_id": 190,
          "name": "广州艾玛妇产医院",
          "province": "广东省",
          "city": "广州市",
          "district": "增城区",
          "address": "广深大道东111号"
        },
        {
          "_id": 191,
          "name": "广州东大肛肠医院",
          "province": "广东省",
          "city": "广州市",
          "district": "越秀区",
          "address": "德政中路356号"
        },
        {
          "_id": 192,
          "name": "广州东方俪人医院",
          "province": "广东省",
          "city": "广州市",
          "district": "番禺区",
          "address": "市桥环城中路85号"
        },
        {
          "_id": 193,
          "name": "广州番禺玛莉亚肛肠医院",
          "province": "广东省",
          "city": "广州市",
          "district": "番禺区",
          "address": "市广路316号"
        },
        {
          "_id": 194,
          "name": "广州花都人爱医院",
          "province": "广东省",
          "city": "广州市",
          "district": "花都区",
          "address": "建设北路138号"
        },
        {
          "_id": 195,
          "name": "广州华美整形美容医院",
          "province": "广东省",
          "city": "广州市",
          "district": "天河区",
          "address": "黄埔大道西493号"
        },
        {
          "_id": 196,
          "name": "广州华侨医院分院济慈康复医院",
          "province": "广东省",
          "city": "广州市",
          "district": "增城区",
          "address": "水南大道一路1号"
        },
        {
          "_id": 197,
          "name": "广州健安医院",
          "province": "广东省",
          "city": "广州市",
          "district": "增城区",
          "address": "广深大道中36-44号"
        },
        {
          "_id": 198,
          "name": "广州江南医院",
          "province": "广东省",
          "city": "广州市",
          "district": "海珠区",
          "address": "南敦和路3号"
        },
        {
          "_id": 199,
          "name": "广州军区机关医院",
          "province": "广东省",
          "city": "广州市",
          "district": "越秀区",
          "address": "达道西路7号"
        },
        {
          "_id": 200,
          "name": "广州军区体育医院",
          "province": "广东省",
          "city": "广州市",
          "district": "天河区",
          "address": "广州大道中1268广州体育学院"
        },
        {
          "_id": 201,
          "name": "广州美莱美容医院",
          "province": "广东省",
          "city": "广州市",
          "district": "天河区",
          "address": "林和西横路222号"
        },
        {
          "_id": 202,
          "name": "广州南粤医院",
          "province": "广东省",
          "city": "广州市",
          "district": "番禺区",
          "address": "市桥环城中路85号(星海公园斜对面)"
        },
        {
          "_id": 203,
          "name": "广州女子医院",
          "province": "广东省",
          "city": "广州市",
          "district": "荔湾区",
          "address": "陆居路42号"
        },
        {
          "_id": 204,
          "name": "广州圣贝口腔",
          "province": "广东省",
          "city": "广州市",
          "district": "越秀区",
          "address": "广州大道中611号(索菲特大酒店正对面)"
        },
        {
          "_id": 205,
          "name": "广州圣亚泌尿外科医院",
          "province": "广东省",
          "city": "广州市",
          "district": "越秀区",
          "address": "广州大道中601号"
        },
        {
          "_id": 206,
          "name": "广州现代医院",
          "province": "广东省",
          "city": "广州市",
          "district": "天河区",
          "address": "濂泉路42号"
        },
        {
          "_id": 207,
          "name": "广州新世纪白癜风防治研究院",
          "province": "广东省",
          "city": "广州市",
          "district": "白云区",
          "address": "三元里大道896号(永腾商务大厦对面)"
        },
        {
          "_id": 208,
          "name": "广州伊丽莎白妇产医院",
          "province": "广东省",
          "city": "广州市",
          "district": "荔湾区",
          "address": "康王中路484号"
        },
        {
          "_id": 209,
          "name": "广州益寿医院",
          "province": "广东省",
          "city": "广州市",
          "district": "白云区",
          "address": "三元里棠下益寿路68号(近地铁三元里站)"
        },
        {
          "_id": 210,
          "name": "广州银翔医院",
          "province": "广东省",
          "city": "广州市",
          "district": "越秀区",
          "address": "环市东路475号"
        },
        {
          "_id": 211,
          "name": "广州远东美容医院",
          "province": "广东省",
          "city": "广州市",
          "district": "白云区",
          "address": "远景路54号"
        },
        {
          "_id": 212,
          "name": "广州粤海医院",
          "province": "广东省",
          "city": "广州市",
          "district": "白云区",
          "address": "石井海军陆战学院旁"
        },
        {
          "_id": 213,
          "name": "广州长安医院",
          "province": "广东省",
          "city": "广州市",
          "district": "天河区",
          "address": "天河路502-2号"
        },
        {
          "_id": 214,
          "name": "广州长泰门诊部",
          "province": "广东省",
          "city": "广州市",
          "district": "天河区",
          "address": "长兴路"
        },
        {
          "_id": 215,
          "name": "广州长泰医疗健康超市门诊部",
          "province": "广东省",
          "city": "广州市",
          "district": "天河区",
          "address": "中山大道中1003号"
        },
        {
          "_id": 216,
          "name": "贵阳博爱医院",
          "province": "贵州省",
          "city": "贵阳市",
          "district": "云岩区",
          "address": "枣山路120号"
        },
        {
          "_id": 217,
          "name": "贵阳东大肛肠医院",
          "province": "贵州省",
          "city": "贵阳市",
          "district": "南明区",
          "address": "解放路172号(陈家坡十字路口)"
        },
        {
          "_id": 218,
          "name": "贵阳和美妇产医院",
          "province": "贵州省",
          "city": "贵阳市",
          "district": "南明区",
          "address": "四方河路10号(山水黔城斜对面)"
        },
        {
          "_id": 219,
          "name": "贵阳和谐阳光医院",
          "province": "贵州省",
          "city": "贵阳市",
          "district": "云岩区",
          "address": "三桥南路42号"
        },
        {
          "_id": 220,
          "name": "贵阳丽都医疗美容医院",
          "province": "贵州省",
          "city": "贵阳市",
          "district": "南明区",
          "address": "沙冲南路226号卧龙山庄1-2层"
        },
        {
          "_id": 221,
          "name": "贵阳马王庙医院",
          "province": "贵州省",
          "city": "贵阳市",
          "district": "乌当区",
          "address": "马王街"
        },
        {
          "_id": 222,
          "name": "贵阳现代女子医院",
          "province": "贵州省",
          "city": "贵阳市",
          "district": "云岩区",
          "address": "瑞金北路1号(紫林庵新华书店旁)"
        },
        {
          "_id": 223,
          "name": "贵阳长江医院",
          "province": "贵州省",
          "city": "贵阳市",
          "district": "云岩区",
          "address": "中华中路137号"
        },
        {
          "_id": 224,
          "name": "贵州退休医师医院",
          "province": "贵州省",
          "city": "贵阳市",
          "district": "南明区",
          "address": "兴关路48号"
        },
        {
          "_id": 225,
          "name": "桂林阳光医疗",
          "province": "广西壮族自治区",
          "city": "桂林市",
          "district": "七星区",
          "address": "穿山路七号"
        },
        {
          "_id": 226,
          "name": "哈尔滨和美妇产医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "赣水路13号(福顺天天大酒店对面)"
        },
        {
          "_id": 227,
          "name": "哈尔滨欧亚男科医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "南通大街133号"
        },
        {
          "_id": 228,
          "name": "哈尔滨市生殖保健中心",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "宣化街207-211号(近第二职业中学)"
        },
        {
          "_id": 229,
          "name": "哈尔滨维多利亚妇产医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "道里区",
          "address": "新阳路38-2号"
        },
        {
          "_id": 230,
          "name": "哈尔滨武警黄金医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "保健副路3号"
        },
        {
          "_id": 231,
          "name": "哈尔滨协和不孕不育医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "一曼街177号(近市国土资源局)"
        },
        {
          "_id": 232,
          "name": "哈密红十字会医院",
          "province": "新疆维吾尔自治区",
          "city": "哈密地区",
          "district": "哈密市",
          "address": "阿牙路75号"
        },
        {
          "_id": 233,
          "name": "海门瑞金医院",
          "province": "江苏省",
          "city": "南通市",
          "district": "海门市",
          "address": "叠石桥现代大道999号"
        },
        {
          "_id": 234,
          "name": "杭集镇卫生院镇北分院",
          "province": "江苏省",
          "city": "扬州市",
          "district": "邗江区",
          "address": "宁通高速公路杭集段北侧"
        },
        {
          "_id": 235,
          "name": "杭州阿波罗男子医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "下城区",
          "address": "体育场路58号"
        },
        {
          "_id": 236,
          "name": "杭州艾玛妇产医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "西湖区",
          "address": "古墩路666号"
        },
        {
          "_id": 237,
          "name": "杭州博爱医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "拱墅区",
          "address": "湖墅南路138号"
        },
        {
          "_id": 238,
          "name": "杭州富阳中山门诊部",
          "province": "浙江省",
          "city": "杭州市",
          "district": "富阳区",
          "address": "孙权路128号(大润发超市对面)"
        },
        {
          "_id": 239,
          "name": "杭州肛泰肛肠医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "下城区",
          "address": "绍兴路400弄3号"
        },
        {
          "_id": 240,
          "name": "杭州格莱美医疗美容医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "下城区",
          "address": "体育场路335号"
        },
        {
          "_id": 241,
          "name": "杭州广仁医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "江干区",
          "address": "新塘路327号"
        },
        {
          "_id": 242,
          "name": "杭州和睦医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "拱墅区",
          "address": "莫干山路642号"
        },
        {
          "_id": 243,
          "name": "杭州红房子妇产医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "下城区",
          "address": "体育场路286号"
        },
        {
          "_id": 244,
          "name": "杭州虹桥医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "上城区",
          "address": "清泰街2号"
        },
        {
          "_id": 245,
          "name": "杭州建国医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "下城区",
          "address": "建国北路149号"
        },
        {
          "_id": 246,
          "name": "杭州江北新东方医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "萧山区",
          "address": "萧绍路999号萧山东方医院内"
        },
        {
          "_id": 247,
          "name": "杭州玛莉亚妇女医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "上城区",
          "address": "秋涛路300号"
        },
        {
          "_id": 248,
          "name": "杭州强生泌尿外科医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "下城区",
          "address": "环城北路90号(近公交总公司)"
        },
        {
          "_id": 249,
          "name": "杭州仁德妇产医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "拱墅区",
          "address": "大关路303号"
        },
        {
          "_id": 250,
          "name": "杭州瑞丽医疗美容医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "下城区",
          "address": "中山北路290号浙江民航大厦1-4层"
        },
        {
          "_id": 251,
          "name": "杭州天目山妇产医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "西湖区",
          "address": "古墩路6号"
        },
        {
          "_id": 252,
          "name": "杭州同济医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "西湖区",
          "address": "黄姑山路24号(近颐高旗舰广场)"
        },
        {
          "_id": 253,
          "name": "杭州萧山九龙男科医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "萧山区",
          "address": "育才路962号(汇宇花园旁)"
        },
        {
          "_id": 254,
          "name": "杭州萧山萧然女子医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "萧山区",
          "address": "江寺路63号"
        },
        {
          "_id": 255,
          "name": "杭州新东方女子医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "拱墅区",
          "address": "莫干山路949号"
        },
        {
          "_id": 256,
          "name": "杭州长安医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "上城区",
          "address": "江城路307号"
        },
        {
          "_id": 257,
          "name": "杭州真爱妇科医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "上城区",
          "address": "江城路417号"
        },
        {
          "_id": 258,
          "name": "合肥丹凤朝阳妇产医院",
          "province": "安徽省",
          "city": "合肥市",
          "district": "瑶海区",
          "address": "站西路和临泉路交叉口"
        },
        {
          "_id": 259,
          "name": "合肥肛泰肛肠医院",
          "province": "安徽省",
          "city": "合肥市",
          "district": "庐阳区",
          "address": "蒙城北路392号"
        },
        {
          "_id": 260,
          "name": "合肥丽人妇科医院",
          "province": "安徽省",
          "city": "合肥市",
          "district": "包河区",
          "address": "屯溪路349号"
        },
        {
          "_id": 261,
          "name": "合肥男科医院",
          "province": "安徽省",
          "city": "合肥市",
          "district": "肥西县",
          "address": "芙蓉路与松林路交汇处西北角"
        },
        {
          "_id": 262,
          "name": "合肥市中山医院",
          "province": "安徽省",
          "city": "合肥市",
          "district": "瑶海区",
          "address": "凤阳路8号"
        },
        {
          "_id": 263,
          "name": "合肥喜得儿孕育医院",
          "province": "安徽省",
          "city": "合肥市",
          "district": "庐阳区",
          "address": "阜阳路与临泉路交叉口"
        },
        {
          "_id": 264,
          "name": "合肥新视界眼科医院",
          "province": "安徽省",
          "city": "合肥市",
          "district": "包河区",
          "address": "徽州大道689号(原美菱大道157号)"
        },
        {
          "_id": 265,
          "name": "合肥友好医院",
          "province": "安徽省",
          "city": "合肥市",
          "district": "包河区",
          "address": "徽州大道693号"
        },
        {
          "_id": 266,
          "name": "河南公安医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "金水区",
          "address": "顺河路7-1号"
        },
        {
          "_id": 267,
          "name": "河南省军区医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "金水区",
          "address": "金水路18号"
        },
        {
          "_id": 268,
          "name": "河南省医药科学研究院附属医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "二七区",
          "address": "大学北路47号附近"
        },
        {
          "_id": 269,
          "name": "河南曙光中西医结合医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "金水区",
          "address": "文化路73号(省财经学院对面)"
        },
        {
          "_id": 270,
          "name": "河南新郑妇产医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "新郑市",
          "address": "新建路467号"
        },
        {
          "_id": 271,
          "name": "河南中都皮肤病医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "金水区",
          "address": "商都路18号河南中都皮肤病医院内"
        },
        {
          "_id": 272,
          "name": "黑龙江东北医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "文明街15号"
        },
        {
          "_id": 273,
          "name": "黑龙江东大肛肠医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "先锋路561号(南岗分局旁)"
        },
        {
          "_id": 274,
          "name": "黑龙江和平医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "宣化街457号"
        },
        {
          "_id": 275,
          "name": "黑龙江虹桥不孕不育医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "道里区",
          "address": "尚志大街6号黑龙江虹桥不孕不育医院内"
        },
        {
          "_id": 276,
          "name": "黑龙江玛丽亚妇产医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "宣化街2号"
        },
        {
          "_id": 277,
          "name": "黑龙江瑞京糖尿病医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "先锋路322号(原长城中学)"
        },
        {
          "_id": 278,
          "name": "黑龙江省生殖保健中心",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "道外区",
          "address": "承德街253-3号"
        },
        {
          "_id": 279,
          "name": "黑龙江武警医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "道里区",
          "address": "新阳路558号"
        },
        {
          "_id": 280,
          "name": "黑龙江祥云皮肤病医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "先锋路565号"
        },
        {
          "_id": 281,
          "name": "黑龙江阳光女子专科医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "中山路228"
        },
        {
          "_id": 282,
          "name": "黑龙江长庚耳鼻喉医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "南岗区",
          "address": "通达街69号(原国脉大楼)"
        },
        {
          "_id": 283,
          "name": "呼和浩特东大肛肠医院",
          "province": "内蒙古自治区",
          "city": "呼和浩特市",
          "district": "玉泉区",
          "address": "石羊桥南路丽日花园综合楼"
        },
        {
          "_id": 284,
          "name": "呼和浩特五洲女子医院",
          "province": "内蒙古自治区",
          "city": "呼和浩特市",
          "district": "玉泉区",
          "address": "石羊桥路200号(近五塔寺)"
        },
        {
          "_id": 285,
          "name": "呼和浩特新视界眼科医院",
          "province": "内蒙古自治区",
          "city": "呼和浩特市",
          "district": "回民区",
          "address": "巴彦淖尔南路三联化工小区1号综合楼"
        },
        {
          "_id": 286,
          "name": "湖北省荣军医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "洪山区",
          "address": "卓刀泉路208号"
        },
        {
          "_id": 287,
          "name": "湖南郴州福康医院",
          "province": "湖南省",
          "city": "郴州市",
          "district": "北湖区",
          "address": "国庆北路21号福康医院(汽车总站旁)"
        },
        {
          "_id": 288,
          "name": "湖南省军区机关医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "芙蓉区",
          "address": "八一路473号"
        },
        {
          "_id": 289,
          "name": "湖州曙光医疗美容医院",
          "province": "浙江省",
          "city": "湖州市",
          "district": "吴兴区",
          "address": "苕溪西路39号(全民健身中心对面)"
        },
        {
          "_id": 290,
          "name": "湖州阳光妇科医院",
          "province": "浙江省",
          "city": "湖州市",
          "district": "吴兴区",
          "address": "太湖路41号(项王码头对面)"
        },
        {
          "_id": 291,
          "name": "华南耳鼻喉专科医院",
          "province": "广东省",
          "city": "佛山市",
          "district": "禅城区",
          "address": "文昌西路"
        },
        {
          "_id": 292,
          "name": "淮安生殖医院",
          "province": "江苏省",
          "city": "淮安市",
          "district": "清河区",
          "address": "北京北路27-1号"
        },
        {
          "_id": 293,
          "name": "淮安中山医院",
          "province": "江苏省",
          "city": "淮安市",
          "district": "清河区",
          "address": "健康东路7号"
        },
        {
          "_id": 294,
          "name": "淮北市中医院",
          "province": "安徽省",
          "city": "淮北市",
          "district": "相山区",
          "address": "人民中路186号"
        },
        {
          "_id": 295,
          "name": "淮北阳光心理医院",
          "province": "安徽省",
          "city": "淮北市",
          "district": "相山区",
          "address": "孟山中路寇湾新村(东门)附近"
        },
        {
          "_id": 296,
          "name": "淮北友好妇产",
          "province": "安徽省",
          "city": "淮北市",
          "district": "相山区",
          "address": "孟山北路53号(三马路九州大厦南100米)"
        },
        {
          "_id": 297,
          "name": "黄冈泌尿专科医院",
          "province": "湖北省",
          "city": "黄冈市",
          "district": "黄州区",
          "address": "八一路5-5号"
        },
        {
          "_id": 298,
          "name": "黄石华中福康医院",
          "province": "湖北省",
          "city": "黄石市",
          "district": "西塞山区",
          "address": "黄石大道275号"
        },
        {
          "_id": 299,
          "name": "惠阳女子医院",
          "province": "广东省",
          "city": "惠州市",
          "district": "惠阳区",
          "address": "人民六路与演达路交叉口(琼苑大酒店右50米)"
        },
        {
          "_id": 300,
          "name": "惠州博罗现代医院",
          "province": "广东省",
          "city": "惠州市",
          "district": "博罗县",
          "address": "博义路90号(汽车西站往广州方向600米)"
        },
        {
          "_id": 301,
          "name": "惠州东江泌尿专科医院",
          "province": "广东省",
          "city": "惠州市",
          "district": "惠城区",
          "address": "麦科特大道40号"
        },
        {
          "_id": 302,
          "name": "惠州仁德妇科医院",
          "province": "广东省",
          "city": "惠州市",
          "district": "惠城区",
          "address": "麦地路20号(天悦大酒店往汽车总站方向200米)"
        },
        {
          "_id": 303,
          "name": "惠州伊丽莎白妇产医院",
          "province": "广东省",
          "city": "惠州市",
          "district": "惠城区",
          "address": "麦地东一路5号"
        },
        {
          "_id": 304,
          "name": "吉安市第二人民医院",
          "province": "江西省",
          "city": "吉安市",
          "district": "吉州区",
          "address": "大巷口62号(距城南车站500米)"
        },
        {
          "_id": 305,
          "name": "吉林省总队医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "宽城区",
          "address": "农安南街766号"
        },
        {
          "_id": 306,
          "name": "济南106医院",
          "province": "山东省",
          "city": "济南市",
          "district": "槐荫区",
          "address": "经十西路28722号"
        },
        {
          "_id": 307,
          "name": "济南艾玛妇产医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历下区",
          "address": "窖头路1号"
        },
        {
          "_id": 308,
          "name": "济南白癜风医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "堤口路143号"
        },
        {
          "_id": 309,
          "name": "济南耳鼻喉眼科医院",
          "province": "山东省",
          "city": "济南市",
          "district": "市中区",
          "address": "英雄山路162号"
        },
        {
          "_id": 310,
          "name": "济南妇科医院",
          "province": "山东省",
          "city": "济南市",
          "district": "市中区",
          "address": "经十路21677号"
        },
        {
          "_id": 311,
          "name": "济南复元康复医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历城区",
          "address": "祝舜路869号"
        },
        {
          "_id": 312,
          "name": "济南肛肠医院",
          "province": "山东省",
          "city": "济南市",
          "district": "市中区",
          "address": "英雄山路87"
        },
        {
          "_id": 313,
          "name": "济南股骨头医院",
          "province": "山东省",
          "city": "济南市",
          "district": "市中区",
          "address": "段店南路124号"
        },
        {
          "_id": 314,
          "name": "济南骨科医院",
          "province": "山东省",
          "city": "济南市",
          "district": "市中区",
          "address": "英雄山路36-1号"
        },
        {
          "_id": 315,
          "name": "济南海峡美容整形医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历城区",
          "address": "二环东路2828号(省图书馆北邻)"
        },
        {
          "_id": 316,
          "name": "济南和谐妇科医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历下区",
          "address": "黑虎泉北路61号(老东门附近)"
        },
        {
          "_id": 317,
          "name": "济南华夏医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "北园大街598-1号(长途汽车总站东侧)"
        },
        {
          "_id": 318,
          "name": "济南九龙泌尿专科医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "北园大街349号"
        },
        {
          "_id": 319,
          "name": "济南军区总医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "师范路25号"
        },
        {
          "_id": 320,
          "name": "济南坤如玛丽医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "少年路7号"
        },
        {
          "_id": 321,
          "name": "济南六一儿童医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历城区",
          "address": "二环东路3399-1号"
        },
        {
          "_id": 322,
          "name": "济南美莱整形美容医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历下区",
          "address": "文化东路76号(省杂技团西50米路南)省杂技团斜对面"
        },
        {
          "_id": 323,
          "name": "济南美容整形医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历下区",
          "address": "南门大街2号(泉城广场东临、泉城大酒店1层)"
        },
        {
          "_id": 324,
          "name": "济南青华医院",
          "province": "山东省",
          "city": "济南市",
          "district": "市中区",
          "address": "英雄山路10-4号"
        },
        {
          "_id": 325,
          "name": "济南仁品耳鼻喉专科医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历城区",
          "address": "北园大街204号"
        },
        {
          "_id": 326,
          "name": "济南乳腺病医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "少年路7号"
        },
        {
          "_id": 327,
          "name": "济南神康医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历城区",
          "address": "工业南路41号"
        },
        {
          "_id": 328,
          "name": "济南肾病医院",
          "province": "山东省",
          "city": "济南市",
          "district": "槐荫区",
          "address": "小清河北路西首新沙路1号"
        },
        {
          "_id": 329,
          "name": "济南圣玛丽亚妇产医院",
          "province": "山东省",
          "city": "济南市",
          "district": "市中区",
          "address": "二环南路1701号"
        },
        {
          "_id": 330,
          "name": "济南胃肠病医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "北园大街328-1号"
        },
        {
          "_id": 331,
          "name": "济南五洲医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "无影山路21-2号"
        },
        {
          "_id": 332,
          "name": "济南西京白癜风医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历下区",
          "address": "趵突泉北路6号(五龙潭公园东门对面)"
        },
        {
          "_id": 333,
          "name": "济南现代皮肤病医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历下区",
          "address": "健康路11号"
        },
        {
          "_id": 334,
          "name": "济南哮喘病医院",
          "province": "山东省",
          "city": "济南市",
          "district": "市中区",
          "address": "英雄山路412号(二环南路口东北侧)"
        },
        {
          "_id": 335,
          "name": "济南协和肝病医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "济泺路112-1号"
        },
        {
          "_id": 336,
          "name": "济南血液病医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历城区",
          "address": "祝舜路969号(上海花园北门对过)"
        },
        {
          "_id": 337,
          "name": "济南阳光女子医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历下区",
          "address": "泺源大街168号"
        },
        {
          "_id": 338,
          "name": "济南银屑病医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历城区",
          "address": "工业北路223-1号"
        },
        {
          "_id": 339,
          "name": "济南真爱妇科医院",
          "province": "山东省",
          "city": "济南市",
          "district": "市中区",
          "address": "大纬二路59号"
        },
        {
          "_id": 340,
          "name": "济南中德骨科医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "济齐路22号"
        },
        {
          "_id": 341,
          "name": "济南中山医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历下区",
          "address": "燕子山路10-1号"
        },
        {
          "_id": 342,
          "name": "济南中研皮肤病医院",
          "province": "山东省",
          "city": "济南市",
          "district": "槐荫区",
          "address": "经六路904号(槐荫区法院旁)"
        },
        {
          "_id": 343,
          "name": "济南中医不孕不育医院",
          "province": "山东省",
          "city": "济南市",
          "district": "槐荫区",
          "address": "经六路延长线段北东路21号"
        },
        {
          "_id": 344,
          "name": "济南中医风湿病医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "明湖西路111号"
        },
        {
          "_id": 345,
          "name": "济南中医肝病医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "无影山中路101号(天桥区法院对面)"
        },
        {
          "_id": 346,
          "name": "济南中医精神专科医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历城区",
          "address": "济南二环东路3879号"
        },
        {
          "_id": 347,
          "name": "济南中医静脉曲张医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历下区",
          "address": "工业南路93号"
        },
        {
          "_id": 348,
          "name": "济宁博仕医院",
          "province": "山东省",
          "city": "济宁市",
          "district": "任城区",
          "address": "建设北路(汽车北站北邻)"
        },
        {
          "_id": 349,
          "name": "嘉兴博爱门诊部",
          "province": "浙江省",
          "city": "嘉兴市",
          "district": "南湖区",
          "address": "中山东路265号(近汽车西站斜对面)"
        },
        {
          "_id": 350,
          "name": "嘉兴海宁博爱医院",
          "province": "浙江省",
          "city": "嘉兴市",
          "district": "南湖区",
          "address": "中山东路1291号"
        },
        {
          "_id": 351,
          "name": "嘉兴曙光中西医结合医院",
          "province": "浙江省",
          "city": "嘉兴市",
          "district": "南湖区",
          "address": "中环南路与纺工路交叉口"
        },
        {
          "_id": 352,
          "name": "江门玛丽妇科医院",
          "province": "广东省",
          "city": "江门市",
          "district": "蓬江区",
          "address": "迎宾大道西"
        },
        {
          "_id": 353,
          "name": "江门市福康门诊部",
          "province": "广东省",
          "city": "江门市",
          "district": "蓬江区",
          "address": "建设路49号江门市老汽车总站往广州方向500米"
        },
        {
          "_id": 354,
          "name": "江苏海安华山医院",
          "province": "江苏省",
          "city": "南通市",
          "district": "海安县",
          "address": "宁海南路28号(七战七捷纪念馆向北288米,新文峰向南58米)"
        },
        {
          "_id": 355,
          "name": "江苏省宜兴市十里牌医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "宜兴市",
          "address": "阳泉西路156号"
        },
        {
          "_id": 356,
          "name": "江苏施尔美整形美容医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "秦淮区",
          "address": "太平南路389号凤凰和睿大厦101-201-301室"
        },
        {
          "_id": 357,
          "name": "江苏太仓新安康复医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "太仓市",
          "address": "陆渡镇郑和中路179号"
        },
        {
          "_id": 358,
          "name": "江苏泰州红房子母婴护理中心",
          "province": "江苏省",
          "city": "泰州市",
          "district": "姜堰区",
          "address": "嘉中名苑曲江路63号(人民医院对面)"
        },
        {
          "_id": 359,
          "name": "江西省南昌军区医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "东湖区",
          "address": "爱国路269号"
        },
        {
          "_id": 360,
          "name": "江西武警总队医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "青云谱区",
          "address": "迎宾北大道808号"
        },
        {
          "_id": 361,
          "name": "江西新视界眼科医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "西湖区",
          "address": "永叔路15号信达大厦"
        },
        {
          "_id": 362,
          "name": "江阴东方女子医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "江阴市",
          "address": "绮山路88号"
        },
        {
          "_id": 363,
          "name": "江阴九龙医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "江阴市",
          "address": "人民东路629号"
        },
        {
          "_id": 364,
          "name": "焦作东大肛肠医院",
          "province": "河南省",
          "city": "焦作市",
          "district": "山阳区",
          "address": "建设中路70号(市博物馆西邻)"
        },
        {
          "_id": 365,
          "name": "解放军第105医院",
          "province": "安徽省",
          "city": "合肥市",
          "district": "蜀山区",
          "address": "长江西路424号"
        },
        {
          "_id": 366,
          "name": "解放军第107医院",
          "province": "山东省",
          "city": "烟台市",
          "district": "芝罘区",
          "address": "只楚南路7号"
        },
        {
          "_id": 367,
          "name": "解放军第12医院",
          "province": "新疆维吾尔自治区",
          "city": "喀什地区",
          "district": "疏勒县",
          "address": "疏勒镇阔纳巴扎路13号"
        },
        {
          "_id": 368,
          "name": "解放军第154医院",
          "province": "河南省",
          "city": "信阳市",
          "district": "浉河区",
          "address": "南湖路104号"
        },
        {
          "_id": 369,
          "name": "解放军第155医院",
          "province": "河南省",
          "city": "开封市",
          "district": "禹王台区",
          "address": "医院前街3号中国人民解放军第一五五中心医院内"
        },
        {
          "_id": 370,
          "name": "解放军第159医院",
          "province": "河南省",
          "city": "驻马店市",
          "district": "驿城区",
          "address": "风光路南段1号"
        },
        {
          "_id": 371,
          "name": "解放军第161医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "江岸区",
          "address": "黄浦大街68号"
        },
        {
          "_id": 372,
          "name": "解放军第163医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "开福区",
          "address": "洪山桥1号"
        },
        {
          "_id": 373,
          "name": "解放军第169医院",
          "province": "湖南省",
          "city": "衡阳市",
          "district": "珠晖区",
          "address": "东风南路369号"
        },
        {
          "_id": 374,
          "name": "解放军第184医院",
          "province": "江西省",
          "city": "鹰潭市",
          "district": "月湖区",
          "address": "湖东路4号"
        },
        {
          "_id": 375,
          "name": "解放军第222医院",
          "province": "吉林省",
          "city": "吉林市",
          "district": "船营区",
          "address": "越山路340号"
        },
        {
          "_id": 376,
          "name": "解放军第224医院",
          "province": "黑龙江省",
          "city": "佳木斯市",
          "district": "前进区",
          "address": "中山街437号"
        },
        {
          "_id": 377,
          "name": "解放军第251医院",
          "province": "河北省",
          "city": "张家口市",
          "district": "桥东区",
          "address": "建国路13号"
        },
        {
          "_id": 378,
          "name": "解放军第253医院",
          "province": "内蒙古自治区",
          "city": "呼和浩特市",
          "district": "新城区",
          "address": "爱民路111号"
        },
        {
          "_id": 379,
          "name": "解放军第254医院",
          "province": "天津市",
          "city": "天津市",
          "district": "河北区",
          "address": "黄纬路60号"
        },
        {
          "_id": 380,
          "name": "解放军第263医院",
          "province": "北京市",
          "city": "北京市",
          "district": "通州区",
          "address": "永顺南街141号(近通州八里桥批发市场)"
        },
        {
          "_id": 381,
          "name": "解放军第264医院",
          "province": "山西省",
          "city": "太原市",
          "district": "迎泽区",
          "address": "桥东街30号"
        },
        {
          "_id": 382,
          "name": "解放军第273医院",
          "province": "新疆维吾尔自治区",
          "city": "巴音郭楞蒙古自治州",
          "district": "库尔勒市",
          "address": "铁门关路9号"
        },
        {
          "_id": 383,
          "name": "解放军第285医院",
          "province": "河北省",
          "city": "邯郸市",
          "district": "邯郸县",
          "address": "南环路3号(渚河路邮政社区服务中心西50米)"
        },
        {
          "_id": 384,
          "name": "解放军第303医院",
          "province": "广西壮族自治区",
          "city": "南宁市",
          "district": "青秀区",
          "address": "植物路52号"
        },
        {
          "_id": 385,
          "name": "解放军第307医院",
          "province": "北京市",
          "city": "北京市",
          "district": "丰台区",
          "address": "东大街8号"
        },
        {
          "_id": 386,
          "name": "解放军第309医院",
          "province": "北京市",
          "city": "北京市",
          "district": "海淀区",
          "address": "黑山扈路甲17号"
        },
        {
          "_id": 387,
          "name": "解放军第321医院",
          "province": "吉林省",
          "city": "白城市",
          "district": "洮北区",
          "address": "海明西路81号"
        },
        {
          "_id": 388,
          "name": "解放军第322医院",
          "province": "山西省",
          "city": "大同市",
          "district": "城区",
          "address": "云中路2号"
        },
        {
          "_id": 389,
          "name": "解放军第324医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "江北区",
          "address": "建新东路29号(近十八中)"
        },
        {
          "_id": 390,
          "name": "解放军第371医院",
          "province": "河南省",
          "city": "新乡市",
          "district": "红旗区",
          "address": "文化街210号"
        },
        {
          "_id": 391,
          "name": "解放军第411医院",
          "province": "上海市",
          "city": "上海市",
          "district": "虹口区",
          "address": "东江湾路15号大楼"
        },
        {
          "_id": 392,
          "name": "解放军第422医院",
          "province": "广东省",
          "city": "湛江市",
          "district": "霞山区",
          "address": "海滨三路40号"
        },
        {
          "_id": 393,
          "name": "解放军第44医院",
          "province": "贵州省",
          "city": "贵阳市",
          "district": "花溪区",
          "address": "黄河路64号"
        },
        {
          "_id": 394,
          "name": "解放军第451医院",
          "province": "陕西省",
          "city": "西安市",
          "district": "碑林区",
          "address": "友谊东路269号"
        },
        {
          "_id": 395,
          "name": "解放军第452医院",
          "province": "四川省",
          "city": "成都市",
          "district": "锦江区",
          "address": "九眼桥顺江路18号"
        },
        {
          "_id": 396,
          "name": "解放军第454医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "秦淮区",
          "address": "马路街1号"
        },
        {
          "_id": 397,
          "name": "解放军第457医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "江岸区",
          "address": "工农兵路15号"
        },
        {
          "_id": 398,
          "name": "解放军第458医院",
          "province": "广东省",
          "city": "广州市",
          "district": "越秀区",
          "address": "东风东路801号"
        },
        {
          "_id": 399,
          "name": "解放军第463医院",
          "province": "辽宁省",
          "city": "沈阳市",
          "district": "大东区",
          "address": "小河沿路46号"
        },
        {
          "_id": 400,
          "name": "解放军第464医院",
          "province": "天津市",
          "city": "天津市",
          "district": "南开区",
          "address": "红旗南路600号"
        },
        {
          "_id": 401,
          "name": "解放军第474医院",
          "province": "新疆维吾尔自治区",
          "city": "乌鲁木齐市",
          "district": "新市区",
          "address": "北京中路754号"
        },
        {
          "_id": 402,
          "name": "解放军第476医院",
          "province": "福建省",
          "city": "福州市",
          "district": "仓山区",
          "address": "洪山桥郭厝里90号"
        },
        {
          "_id": 403,
          "name": "解放军第478医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "官渡区",
          "address": "关上双桥路299号空军医院"
        },
        {
          "_id": 404,
          "name": "解放军第534医院",
          "province": "河南省",
          "city": "洛阳市",
          "district": "涧西区",
          "address": "拥军路与瀛洲北路交汇处"
        },
        {
          "_id": 405,
          "name": "解放军第535医院",
          "province": "湖南省",
          "city": "怀化市",
          "district": "鹤城区",
          "address": "迎丰东路535号(怀化学院对面)"
        },
        {
          "_id": 406,
          "name": "解放军第536医院",
          "province": "青海省",
          "city": "西宁市",
          "district": "城东区",
          "address": "门诊大楼1楼"
        },
        {
          "_id": 407,
          "name": "解放军第5医院",
          "province": "宁夏回族自治区",
          "city": "银川市",
          "district": "兴庆区",
          "address": "胜利街893号"
        },
        {
          "_id": 408,
          "name": "解放军第81医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "秦淮区",
          "address": "常府街三十四标34号"
        },
        {
          "_id": 409,
          "name": "解放军第88医院",
          "province": "山东省",
          "city": "泰安市",
          "district": "泰山区",
          "address": "虎山东路6号"
        },
        {
          "_id": 410,
          "name": "解放军第97医院",
          "province": "江苏省",
          "city": "徐州市",
          "district": "云龙区",
          "address": "铜山路226号"
        },
        {
          "_id": 411,
          "name": "解放军火箭军总医院",
          "province": "北京市",
          "city": "北京市",
          "district": "西城区",
          "address": "新街口外大街16号"
        },
        {
          "_id": 412,
          "name": "金华博康生殖医院",
          "province": "浙江省",
          "city": "金华市",
          "district": "金东区",
          "address": "人民东路1405号(近东关邮局)"
        },
        {
          "_id": 413,
          "name": "晋城博大生殖医学专科医院",
          "province": "山西省",
          "city": "晋城市",
          "district": "城区",
          "address": "泽州路1918号(泽州路七天酒店旁)"
        },
        {
          "_id": 414,
          "name": "晋城市妇幼保健院长治分院",
          "province": "山西省",
          "city": "长治市",
          "district": "城区",
          "address": "延安南路108号"
        },
        {
          "_id": 415,
          "name": "晋城现代女子医院",
          "province": "山西省",
          "city": "晋城市",
          "district": "城区",
          "address": "建设北路1489号(12层粉红大楼)"
        },
        {
          "_id": 416,
          "name": "荆州华康医院",
          "province": "湖北省",
          "city": "荆州市",
          "district": "荆州区",
          "address": "江津西路439号(荆州古城东门外100米)"
        },
        {
          "_id": 417,
          "name": "九江玛丽亚医院",
          "province": "江西省",
          "city": "九江市",
          "district": "浔阳区",
          "address": "滨江路75号(原九九商城往前50米)"
        },
        {
          "_id": 418,
          "name": "九江新世纪男科医院",
          "province": "江西省",
          "city": "九江市",
          "district": "浔阳区",
          "address": "庐山路8号(原九九商城往前20米)"
        },
        {
          "_id": 419,
          "name": "库乐勒仁爱妇产医院",
          "province": "新疆维吾尔自治区",
          "city": "巴音郭楞蒙古自治州",
          "district": "库尔勒市",
          "address": "建国北路巴音小区门口"
        },
        {
          "_id": 420,
          "name": "昆明东大肛肠医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "官渡区",
          "address": "环城南路498号(双龙桥往东100米)"
        },
        {
          "_id": 421,
          "name": "昆明肛泰肛肠医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "五华区",
          "address": "青年路1号近昆明动物园"
        },
        {
          "_id": 422,
          "name": "昆明骨科医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "西山区",
          "address": "希望路与日兴东路路口"
        },
        {
          "_id": 423,
          "name": "昆明华美美莱整形医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "五华区",
          "address": "青年路95号(红会医院斜对面)"
        },
        {
          "_id": 424,
          "name": "昆明丽都医疗美容医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "五华区",
          "address": "龙泉路68号"
        },
        {
          "_id": 425,
          "name": "昆明西昌路医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "西山区",
          "address": "西昌路296号"
        },
        {
          "_id": 426,
          "name": "昆明阳光医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "西山区",
          "address": "福康路福海乡田家地219"
        },
        {
          "_id": 427,
          "name": "昆明中英安琪儿妇产医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "五华区",
          "address": "滇缅大道199号"
        },
        {
          "_id": 428,
          "name": "昆山虹桥医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "昆山市",
          "address": "长江中路69号"
        },
        {
          "_id": 429,
          "name": "昆山南站门诊部",
          "province": "江苏省",
          "city": "苏州市",
          "district": "昆山市",
          "address": "中华园路828号"
        },
        {
          "_id": 430,
          "name": "昆山阳光医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "昆山市",
          "address": "永记路"
        },
        {
          "_id": 431,
          "name": "拉萨阳光泌尿生殖医院",
          "province": "西藏自治区",
          "city": "拉萨市",
          "district": "城关区",
          "address": "夺底北路42号(慈松塘路口)"
        },
        {
          "_id": 432,
          "name": "兰州军康医院",
          "province": "甘肃省",
          "city": "兰州市",
          "district": "城关区",
          "address": "正宁路4号"
        },
        {
          "_id": 433,
          "name": "兰州仁和医院",
          "province": "甘肃省",
          "city": "兰州市",
          "district": "城关区",
          "address": "金昌南路3号五泉山公园下广场"
        },
        {
          "_id": 434,
          "name": "兰州瑞京糖尿病医院",
          "province": "甘肃省",
          "city": "兰州市",
          "district": "城关区",
          "address": "火车站东路326号(客运站东侧)"
        },
        {
          "_id": 435,
          "name": "兰州五洲皮肤病医院",
          "province": "甘肃省",
          "city": "兰州市",
          "district": "七里河区",
          "address": "南滨河中路131号小西湖公园北门西侧"
        },
        {
          "_id": 436,
          "name": "兰州西京医院",
          "province": "甘肃省",
          "city": "兰州市",
          "district": "七里河区",
          "address": "西站东路27号"
        },
        {
          "_id": 437,
          "name": "廊坊世纪协和医院",
          "province": "河北省",
          "city": "廊坊市",
          "district": "广阳区",
          "address": "新华路4号(火车站旁)"
        },
        {
          "_id": 438,
          "name": "廊坊万福医院",
          "province": "河北省",
          "city": "廊坊市",
          "district": "广阳区",
          "address": "新华路136号(广阳道和新华路交叉口)"
        },
        {
          "_id": 439,
          "name": "乐清柳台医院",
          "province": "浙江省",
          "city": "温州市",
          "district": "乐清市",
          "address": "柳市镇环城东路401号"
        },
        {
          "_id": 440,
          "name": "连江中山医院",
          "province": "福建省",
          "city": "福州市",
          "district": "连江县",
          "address": "凤城镇玉荷西路623号"
        },
        {
          "_id": 441,
          "name": "凉山妇产医院",
          "province": "四川省",
          "city": "凉山彝族自治州",
          "district": "西昌市",
          "address": "胜利东路96号"
        },
        {
          "_id": 442,
          "name": "凉山华西医院",
          "province": "四川省",
          "city": "凉山彝族自治州",
          "district": "西昌市",
          "address": "凯乐路73号(长安菜市场后门旁)"
        },
        {
          "_id": 443,
          "name": "凉山生殖健康医院",
          "province": "四川省",
          "city": "凉山彝族自治州",
          "district": "西昌市",
          "address": "胜利南路111号(人才市场)"
        },
        {
          "_id": 444,
          "name": "凉山王氏骨科医院",
          "province": "四川省",
          "city": "凉山彝族自治州",
          "district": "西昌市",
          "address": "西郊乡航天大道三段36号"
        },
        {
          "_id": 445,
          "name": "辽宁省军区门诊部",
          "province": "辽宁省",
          "city": "沈阳市",
          "district": "皇姑区",
          "address": "北陵大街49号(近泰山东路)"
        },
        {
          "_id": 446,
          "name": "聊城东昌府三医院",
          "province": "山东省",
          "city": "聊城市",
          "district": "东昌府区",
          "address": "站前街79号"
        },
        {
          "_id": 447,
          "name": "聊城仁爱医院",
          "province": "山东省",
          "city": "聊城市",
          "district": "东昌府区",
          "address": "兴华西路22号"
        },
        {
          "_id": 448,
          "name": "临汾现代女子医院",
          "province": "山西省",
          "city": "临汾市",
          "district": "尧都区",
          "address": "五一西路34号建行小企业中心现代女子医院旁"
        },
        {
          "_id": 449,
          "name": "临沂丽人医院",
          "province": "山东省",
          "city": "临沂市",
          "district": "兰山区",
          "address": "金源路307号(临西一路与金四路交汇处)"
        },
        {
          "_id": 450,
          "name": "临沂中西医结合医院",
          "province": "山东省",
          "city": "临沂市",
          "district": "兰山区",
          "address": "金雀山一路135号"
        },
        {
          "_id": 451,
          "name": "浏阳恒生年轮骨科医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "岳麓区",
          "address": "集里淮川西街20号"
        },
        {
          "_id": 452,
          "name": "柳州东大肛肠医院",
          "province": "广西壮族自治区",
          "city": "柳州市",
          "district": "柳北区",
          "address": "广雅路29号(广雅路与雅儒路交汇处)"
        },
        {
          "_id": 453,
          "name": "柳州福康医院",
          "province": "广西壮族自治区",
          "city": "柳州市",
          "district": "鱼峰区",
          "address": "燎原路20-2号(白云小区旁)"
        },
        {
          "_id": 454,
          "name": "六安艾玛妇产医院",
          "province": "安徽省",
          "city": "六安市",
          "district": "裕安区",
          "address": "磨子潭路东200米"
        },
        {
          "_id": 455,
          "name": "龙岩牡丹妇产医院",
          "province": "福建省",
          "city": "龙岩市",
          "district": "新罗区",
          "address": "曹溪北路146号"
        },
        {
          "_id": 456,
          "name": "龙岩女子医院",
          "province": "福建省",
          "city": "龙岩市",
          "district": "新罗区",
          "address": "曹溪北路西50米"
        },
        {
          "_id": 457,
          "name": "龙岩新阳光医院",
          "province": "福建省",
          "city": "龙岩市",
          "district": "新罗区",
          "address": "西安南路苏溪农贸市场A座"
        },
        {
          "_id": 458,
          "name": "娄底阳光医院",
          "province": "湖南省",
          "city": "娄底市",
          "district": "娄星区",
          "address": "大汉大道东418号"
        },
        {
          "_id": 459,
          "name": "泸州东大肛肠医院",
          "province": "四川省",
          "city": "泸州市",
          "district": "江阳区",
          "address": "澄溪口中平远路1号"
        },
        {
          "_id": 460,
          "name": "罗源中山门诊部",
          "province": "福建省",
          "city": "福州市",
          "district": "罗源县",
          "address": "南大路"
        },
        {
          "_id": 461,
          "name": "洛阳博爱眼科医院",
          "province": "河南省",
          "city": "洛阳市",
          "district": "西工区",
          "address": "中州中路213号(原总工会大厦)"
        },
        {
          "_id": 462,
          "name": "洛阳东大肛肠医院",
          "province": "河南省",
          "city": "洛阳市",
          "district": "涧西区",
          "address": "中州西路与太原路交叉口(消防队西邻)"
        },
        {
          "_id": 463,
          "name": "洛阳牡丹妇产医院",
          "province": "河南省",
          "city": "洛阳市",
          "district": "涧西区",
          "address": "南昌路1号"
        },
        {
          "_id": 464,
          "name": "洛阳武警医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "二七区",
          "address": "康复中街"
        },
        {
          "_id": 465,
          "name": "漯河东方医院",
          "province": "河南省",
          "city": "漯河市",
          "district": "源汇区",
          "address": "滨河路447号"
        },
        {
          "_id": 466,
          "name": "马尾博爱门诊部",
          "province": "福建省",
          "city": "福州市",
          "district": "马尾区",
          "address": "儒江快安路"
        },
        {
          "_id": 467,
          "name": "马尾福兴医院",
          "province": "福建省",
          "city": "福州市",
          "district": "马尾区",
          "address": "福马路480号"
        },
        {
          "_id": 468,
          "name": "马尾罗星塔门诊部",
          "province": "福建省",
          "city": "福州市",
          "district": "马尾区",
          "address": "港口路47号"
        },
        {
          "_id": 469,
          "name": "闽候东方妇科医院",
          "province": "福建省",
          "city": "福州市",
          "district": "闽侯县",
          "address": "国宾大道"
        },
        {
          "_id": 470,
          "name": "闽清中山门诊部",
          "province": "福建省",
          "city": "福州市",
          "district": "闽清县",
          "address": "解放大街闽运长途汽车站2楼"
        },
        {
          "_id": 471,
          "name": "南安五洲医院",
          "province": "福建省",
          "city": "泉州市",
          "district": "南安市",
          "address": "河滨路238号"
        },
        {
          "_id": 472,
          "name": "南昌艾玛妇产医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "西湖区",
          "address": "三眼井街39号(近新四军旧址)"
        },
        {
          "_id": 473,
          "name": "南昌博爱泌尿专科医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "东湖区",
          "address": "胜利路355号(近江西出版大厦)"
        },
        {
          "_id": 474,
          "name": "南昌博大耳鼻咽喉专科医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "青云谱区",
          "address": "洪都南大道237号"
        },
        {
          "_id": 475,
          "name": "南昌东大肛肠专科医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "东湖区",
          "address": "胜利路298号(步步高商场对面)"
        },
        {
          "_id": 476,
          "name": "南昌丰益肛肠医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "青山湖区",
          "address": "上海路377号(17中学对面)"
        },
        {
          "_id": 477,
          "name": "南昌华山不孕不育专科医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "青云谱区",
          "address": "迎宾北大道285号"
        },
        {
          "_id": 478,
          "name": "南昌佳美美容医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "青云谱区",
          "address": "洪都南大道273号"
        },
        {
          "_id": 479,
          "name": "南昌仁爱女子医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "西湖区",
          "address": "洪城路636号"
        },
        {
          "_id": 480,
          "name": "南昌市第五医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "青云谱区",
          "address": "井冈山大道239号"
        },
        {
          "_id": 481,
          "name": "南昌曙光手足外科医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "青云谱区",
          "address": "解放西路99号"
        },
        {
          "_id": 482,
          "name": "南充东大肛肠医院",
          "province": "四川省",
          "city": "南充市",
          "district": "顺庆区",
          "address": "果城路127-129号"
        },
        {
          "_id": 483,
          "name": "南京邦德骨科医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "玄武区",
          "address": "龙蟠中路97号"
        },
        {
          "_id": 484,
          "name": "南京东大医学院专科门诊部",
          "province": "江苏省",
          "city": "南京市",
          "district": "鼓楼区",
          "address": "广州路144"
        },
        {
          "_id": 485,
          "name": "南京肛泰中医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "建邺区",
          "address": "黄山路2号"
        },
        {
          "_id": 486,
          "name": "南京港龙医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "秦淮区",
          "address": "苜蓿园大街48号"
        },
        {
          "_id": 487,
          "name": "南京华美医疗美容医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "玄武区",
          "address": "珠江路655号"
        },
        {
          "_id": 488,
          "name": "南京华厦白癜风研究所",
          "province": "江苏省",
          "city": "南京市",
          "district": "玄武区",
          "address": "红山路175-2号"
        },
        {
          "_id": 489,
          "name": "南京华世佳宝妇产医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "建邺区",
          "address": "水西门大街文体西路9号"
        },
        {
          "_id": 490,
          "name": "南京建国男科医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "秦淮区",
          "address": "长乐路238号"
        },
        {
          "_id": 491,
          "name": "南京江宁博爱医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "江宁区",
          "address": "东山街道同夏路19号(东山总站)"
        },
        {
          "_id": 492,
          "name": "南京军区机关医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "玄武区",
          "address": "龙蟠中路46号"
        },
        {
          "_id": 493,
          "name": "南京康美整形美容医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "秦淮区",
          "address": "洪武路288号康美整形美容医院内"
        },
        {
          "_id": 494,
          "name": "南京空军机关医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "玄武区",
          "address": "北京东路38号(北大门)"
        },
        {
          "_id": 495,
          "name": "南京迈皋桥医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "栖霞区",
          "address": "和燕路290号"
        },
        {
          "_id": 496,
          "name": "南京美迪亚妇科医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "白下区",
          "address": "苜蓿园大街48号"
        },
        {
          "_id": 497,
          "name": "南京栖霞区康豪医疗",
          "province": "江苏省",
          "city": "南京市",
          "district": "栖霞区",
          "address": "尧化门尧佳路33号"
        },
        {
          "_id": 498,
          "name": "南京仁品耳鼻喉医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "秦淮区",
          "address": "中华路528号"
        },
        {
          "_id": 499,
          "name": "南京世纪现代妇产医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "江宁区",
          "address": "天元东路358号(义乌小商品城西行450米)"
        },
        {
          "_id": 500,
          "name": "南京市第一医院东院",
          "province": "江苏省",
          "city": "南京市",
          "district": "秦淮区",
          "address": "石门坎2号"
        },
        {
          "_id": 501,
          "name": "南京曙光医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "秦淮区",
          "address": "中华门外正学路1号(近晨光厂)"
        },
        {
          "_id": 502,
          "name": "南京亚韩医学美容医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "江宁区",
          "address": "金箔路女人街468号"
        },
        {
          "_id": 503,
          "name": "南京阳光肿瘤医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "白下区",
          "address": "苜蓿园大街"
        },
        {
          "_id": 504,
          "name": "南京医科大学附属友谊整形外科医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "鼓楼区",
          "address": "汉中路146号(近南京省中医院)"
        },
        {
          "_id": 505,
          "name": "南京长海医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "浦口区",
          "address": "宁六路38号"
        },
        {
          "_id": 506,
          "name": "南京长江医院",
          "province": "江苏省",
          "city": "南京市",
          "district": "鼓楼区",
          "address": "新门口18号"
        },
        {
          "_id": 507,
          "name": "南京众彩社区卫生服务中心",
          "province": "江苏省",
          "city": "南京市",
          "district": "江宁区",
          "address": "东麒路66号众彩物流园内"
        },
        {
          "_id": 508,
          "name": "南宁肛泰肛肠医院",
          "province": "广西壮族自治区",
          "city": "南宁市",
          "district": "西乡塘区",
          "address": "安吉大道11号"
        },
        {
          "_id": 509,
          "name": "南宁协和医院",
          "province": "广西壮族自治区",
          "city": "南宁市",
          "district": "江南区",
          "address": "五一路156号"
        },
        {
          "_id": 510,
          "name": "南通肛泰肛肠医院",
          "province": "江苏省",
          "city": "南通市",
          "district": "港闸区",
          "address": "工农路689号"
        },
        {
          "_id": 511,
          "name": "南通和美家妇产科医院",
          "province": "江苏省",
          "city": "南通市",
          "district": "崇川区",
          "address": "啬园路8号(体育会展中心南门正对面)"
        },
        {
          "_id": 512,
          "name": "南通现代泌尿专科医院",
          "province": "江苏省",
          "city": "南通市",
          "district": "港闸区",
          "address": "濠西路288号百安谊家广场2号楼(奥特莱斯路对面)"
        },
        {
          "_id": 513,
          "name": "南通长城医院",
          "province": "江苏省",
          "city": "南通市",
          "district": "崇川区",
          "address": "人民西路366号(长途汽车站旁)"
        },
        {
          "_id": 514,
          "name": "南阳768医院",
          "province": "河南省",
          "city": "南阳市",
          "district": "卧龙区",
          "address": "卧龙路1269号(近中建大酒店)"
        },
        {
          "_id": 515,
          "name": "内蒙古天骄医院",
          "province": "内蒙古自治区",
          "city": "呼和浩特市",
          "district": "新城区",
          "address": "通道北街235号"
        },
        {
          "_id": 516,
          "name": "内蒙古祥云皮肤病医院",
          "province": "内蒙古自治区",
          "city": "呼和浩特市",
          "district": "新城区",
          "address": "车站西街五楼"
        },
        {
          "_id": 517,
          "name": "宁波海曙欧亚男科医院",
          "province": "浙江省",
          "city": "宁波市",
          "district": "海曙区",
          "address": "广济街56号"
        },
        {
          "_id": 518,
          "name": "宁波虹桥男科医院",
          "province": "浙江省",
          "city": "宁波市",
          "district": "江东区",
          "address": "中兴路505号"
        },
        {
          "_id": 519,
          "name": "宁波华西博爱医院",
          "province": "浙江省",
          "city": "宁波市",
          "district": "海曙区",
          "address": "蓝天路58号"
        },
        {
          "_id": 520,
          "name": "宁波美莱整形美容医院",
          "province": "浙江省",
          "city": "宁波市",
          "district": "海曙区",
          "address": "灵桥路713号(近宁波日报社)"
        },
        {
          "_id": 521,
          "name": "宁波甬城医院",
          "province": "浙江省",
          "city": "宁波市",
          "district": "江北区",
          "address": "大庆南路636号(东鹰宾馆西侧、日湖旁)"
        },
        {
          "_id": 522,
          "name": "宁德东方医院",
          "province": "福建省",
          "city": "宁德市",
          "district": "蕉城区",
          "address": "后岗蕉城南路87号"
        },
        {
          "_id": 523,
          "name": "宁夏华美整形美容医院",
          "province": "宁夏回族自治区",
          "city": "银川市",
          "district": "兴庆区",
          "address": "民族南街771号"
        },
        {
          "_id": 524,
          "name": "宁夏康源肛肠医院",
          "province": "宁夏回族自治区",
          "city": "银川市",
          "district": "金凤区",
          "address": "通达北街21号(新城西站西侧十字路口向北50米)"
        },
        {
          "_id": 525,
          "name": "宁乡现代妇科医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "宁乡县",
          "address": "花明南路89号"
        },
        {
          "_id": 526,
          "name": "平顶山东大肛肠医院",
          "province": "河南省",
          "city": "平顶山市",
          "district": "新华区",
          "address": "光明路与联盟路交叉口向南50米路东"
        },
        {
          "_id": 527,
          "name": "平顶山市交通医院",
          "province": "河南省",
          "city": "平顶山市",
          "district": "卫东区",
          "address": "矿工路182号"
        },
        {
          "_id": 528,
          "name": "平顶山市武警医院",
          "province": "河南省",
          "city": "平顶山市",
          "district": "新华区",
          "address": "凌云路与建设路交叉口南150米"
        },
        {
          "_id": 529,
          "name": "平果中山医院",
          "province": "广西壮族自治区",
          "city": "百色市",
          "district": "平果县",
          "address": "铝城大道1170号五十米路口"
        },
        {
          "_id": 530,
          "name": "萍乡妇科医院",
          "province": "江西省",
          "city": "萍乡市",
          "district": "安源区",
          "address": "滨河东路516号鹅湖小区秋收起义广场北侧"
        },
        {
          "_id": 531,
          "name": "萍乡新世纪男科医院",
          "province": "江西省",
          "city": "萍乡市",
          "district": "安源区",
          "address": "康庄路2号"
        },
        {
          "_id": 532,
          "name": "莆田肛泰中西医结合医院",
          "province": "福建省",
          "city": "莆田市",
          "district": "城厢区",
          "address": "龙华街道太平居委会胜利南街230弄9号"
        },
        {
          "_id": 533,
          "name": "莆田口腔医院",
          "province": "福建省",
          "city": "莆田市",
          "district": "城厢区",
          "address": "兴安路15号"
        },
        {
          "_id": 534,
          "name": "莆田丽人妇科医院",
          "province": "福建省",
          "city": "莆田市",
          "district": "城厢区",
          "address": "莆阳路嘉新商业城B1座"
        },
        {
          "_id": 535,
          "name": "莆田盛兴医院",
          "province": "福建省",
          "city": "莆田市",
          "district": "秀屿区",
          "address": "笏石镇顶城路1368号"
        },
        {
          "_id": 536,
          "name": "齐河县阳光综合门诊部",
          "province": "山东省",
          "city": "德州市",
          "district": "齐河县",
          "address": "阳光路545号"
        },
        {
          "_id": 537,
          "name": "齐齐哈尔协和医院",
          "province": "黑龙江省",
          "city": "齐齐哈尔市",
          "district": "建华区",
          "address": "二马路裕民一街27号"
        },
        {
          "_id": 538,
          "name": "启东瑞金医院",
          "province": "江苏省",
          "city": "南通市",
          "district": "启东市",
          "address": "紫薇中路818号(西车站向西200米)"
        },
        {
          "_id": 539,
          "name": "启东市中医院",
          "province": "江苏省",
          "city": "南通市",
          "district": "启东市",
          "address": "汇龙镇紫薇中路458号"
        },
        {
          "_id": 540,
          "name": "秦皇岛女子医院",
          "province": "河北省",
          "city": "秦皇岛市",
          "district": "海港区",
          "address": "民族北路1号(市检查院旁边)"
        },
        {
          "_id": 541,
          "name": "青岛第九人民医院",
          "province": "山东省",
          "city": "青岛市",
          "district": "市南区",
          "address": "朝城路号2甲"
        },
        {
          "_id": 542,
          "name": "青岛妇婴医院",
          "province": "山东省",
          "city": "青岛市",
          "district": "市南区",
          "address": "中山路19号"
        },
        {
          "_id": 543,
          "name": "青岛集美整形美容医院",
          "province": "山东省",
          "city": "青岛市",
          "district": "市南区",
          "address": "香港中路5号"
        },
        {
          "_id": 544,
          "name": "青岛坤如玛丽妇产医院",
          "province": "山东省",
          "city": "青岛市",
          "district": "市北区",
          "address": "延吉路108号"
        },
        {
          "_id": 545,
          "name": "青岛诺德医学美容",
          "province": "山东省",
          "city": "青岛市",
          "district": "崂山区",
          "address": "香港东路69号凯旋山庄35栋"
        },
        {
          "_id": 546,
          "name": "青岛曙光男科医院",
          "province": "山东省",
          "city": "青岛市",
          "district": "市南区",
          "address": "银川西路9号"
        },
        {
          "_id": 547,
          "name": "青岛新视界眼科医院",
          "province": "山东省",
          "city": "青岛市",
          "district": "李沧区",
          "address": "峰山路13号"
        },
        {
          "_id": 548,
          "name": "青岛新阳光医院",
          "province": "山东省",
          "city": "青岛市",
          "district": "李沧区",
          "address": "书院路115号"
        },
        {
          "_id": 549,
          "name": "青岛长征医院",
          "province": "山东省",
          "city": "青岛市",
          "district": "市北区",
          "address": "华阳路36号甲"
        },
        {
          "_id": 550,
          "name": "青岛中大泌尿医院",
          "province": "山东省",
          "city": "青岛市",
          "district": "市南区",
          "address": "延安三路101乙"
        },
        {
          "_id": 551,
          "name": "青海东大肛肠医院",
          "province": "青海省",
          "city": "西宁市",
          "district": "城西区",
          "address": "海晏路2号国贸大厦人民公园对面"
        },
        {
          "_id": 552,
          "name": "青海省第四医院",
          "province": "青海省",
          "city": "西宁市",
          "district": "城东区",
          "address": "南山路14号"
        },
        {
          "_id": 553,
          "name": "清远现代妇科医院",
          "province": "广东省",
          "city": "清远市",
          "district": "清城区",
          "address": "小市桥南路4号"
        },
        {
          "_id": 554,
          "name": "曲靖东大肛肠医院",
          "province": "云南省",
          "city": "曲靖市",
          "district": "麒麟区",
          "address": "紫云路408号(消防支队旁)"
        },
        {
          "_id": 555,
          "name": "曲靖九州医院",
          "province": "云南省",
          "city": "曲靖市",
          "district": "麒麟区",
          "address": "花柯路1号"
        },
        {
          "_id": 556,
          "name": "泉州华美美莱整形医院",
          "province": "福建省",
          "city": "泉州市",
          "district": "鲤城区",
          "address": "新华南路27号(新华桥站)"
        },
        {
          "_id": 557,
          "name": "泉州坤如玛丽医院",
          "province": "福建省",
          "city": "泉州市",
          "district": "丰泽区",
          "address": "田安北路305号"
        },
        {
          "_id": 558,
          "name": "泉州南亚医院",
          "province": "福建省",
          "city": "泉州市",
          "district": "丰泽区",
          "address": "田安北路305号"
        },
        {
          "_id": 559,
          "name": "泉州欧菲医疗美容医院",
          "province": "福建省",
          "city": "泉州市",
          "district": "丰泽区",
          "address": "宝洲路万达广场1号门正对面(浦西路口公交站旁)"
        },
        {
          "_id": 560,
          "name": "泉州新阳光女子医院",
          "province": "福建省",
          "city": "泉州市",
          "district": "丰泽区",
          "address": "宝洲街与浦西路交叉口东北50米"
        },
        {
          "_id": 561,
          "name": "瑞安华东康复医院",
          "province": "浙江省",
          "city": "温州市",
          "district": "瑞安市",
          "address": "安强路"
        },
        {
          "_id": 562,
          "name": "瑞安同济医院",
          "province": "浙江省",
          "city": "温州市",
          "district": "瑞安市",
          "address": "玉海街道商城大道362号(老商城对面)"
        },
        {
          "_id": 563,
          "name": "三亚东大肛肠医院",
          "province": "海南省",
          "city": "三亚市",
          "district": "天涯区",
          "address": "迎宾路37号"
        },
        {
          "_id": 564,
          "name": "厦门登特口腔医院",
          "province": "福建省",
          "city": "厦门市",
          "district": "思明区",
          "address": "莲花南路7号经协大厦11层"
        },
        {
          "_id": 565,
          "name": "厦门康乐门诊部",
          "province": "福建省",
          "city": "厦门市",
          "district": "湖里区",
          "address": "兴隆路470-474号"
        },
        {
          "_id": 566,
          "name": "厦门欧菲医疗美容门诊部",
          "province": "福建省",
          "city": "厦门市",
          "district": "思明区",
          "address": "仙岳路聚祥花园463号3层"
        },
        {
          "_id": 567,
          "name": "厦门益康生殖健康门诊部",
          "province": "福建省",
          "city": "厦门市",
          "district": "思明区",
          "address": "湖滨中路7-9号"
        },
        {
          "_id": 568,
          "name": "厦门友好妇科医院",
          "province": "福建省",
          "city": "厦门市",
          "district": "思明区",
          "address": "长青路283之9-12号嘉华大厦"
        },
        {
          "_id": 569,
          "name": "山东东方男科医院",
          "province": "山东省",
          "city": "济南市",
          "district": "市中区",
          "address": "英雄山路162号"
        },
        {
          "_id": 570,
          "name": "山东红十字会医院",
          "province": "山东省",
          "city": "济南市",
          "district": "市中区",
          "address": "英雄山路16号"
        },
        {
          "_id": 571,
          "name": "山东济南泉城白癜风医院",
          "province": "山东省",
          "city": "济南市",
          "district": "天桥区",
          "address": "堤口路143号"
        },
        {
          "_id": 572,
          "name": "山东日照关爱医院",
          "province": "山东省",
          "city": "日照市",
          "district": "东港区",
          "address": "黄海二路6号(日照石臼北京路与黄海二路交会处,汽车东站往西100米)"
        },
        {
          "_id": 573,
          "name": "山东紫荆花医院",
          "province": "山东省",
          "city": "济南市",
          "district": "历下区",
          "address": "解放路17号(近荣军医院)"
        },
        {
          "_id": 574,
          "name": "山西华一肛肠病医院",
          "province": "山西省",
          "city": "太原市",
          "district": "迎泽区",
          "address": "建设南路65号"
        },
        {
          "_id": 575,
          "name": "山西惠民中西医结合医院",
          "province": "山西省",
          "city": "太原市",
          "district": "迎泽区",
          "address": "迎泽南街2号"
        },
        {
          "_id": 576,
          "name": "山西民生医院",
          "province": "山西省",
          "city": "太原市",
          "district": "小店区",
          "address": "南内环街南内环桥东"
        },
        {
          "_id": 577,
          "name": "山西省第二人民医院",
          "province": "山西省",
          "city": "太原市",
          "district": "迎泽区",
          "address": "寇庄西路9号"
        },
        {
          "_id": 578,
          "name": "山西现代女子医院",
          "province": "山西省",
          "city": "太原市",
          "district": "迎泽区",
          "address": "南内环街25号"
        },
        {
          "_id": 579,
          "name": "山西新阳光妇科医院",
          "province": "山西省",
          "city": "晋中市",
          "district": "太谷县",
          "address": "108国道与319省道交叉口南100米"
        },
        {
          "_id": 580,
          "name": "山西长庚耳鼻喉医院",
          "province": "山西省",
          "city": "太原市",
          "district": "迎泽区",
          "address": "建设南路248号"
        },
        {
          "_id": 581,
          "name": "陕西省红十字医院",
          "province": "陕西省",
          "city": "西安市",
          "district": "雁塔区",
          "address": "吉祥路21号"
        },
        {
          "_id": 582,
          "name": "陕西冶金医院",
          "province": "陕西省",
          "city": "西安市",
          "district": "莲湖区",
          "address": "莲湖路206-74号"
        },
        {
          "_id": 583,
          "name": "陕西中西医结合糖尿病医院",
          "province": "陕西省",
          "city": "西安市",
          "district": "碑林区",
          "address": "含光路"
        },
        {
          "_id": 584,
          "name": "汕头妇产医院",
          "province": "广东省",
          "city": "汕头市",
          "district": "龙湖区",
          "address": "珠池路15号"
        },
        {
          "_id": 585,
          "name": "上海阿波罗男子医院",
          "province": "上海市",
          "city": "上海市",
          "district": "黄浦区",
          "address": "陆家浜路1283号(陆家浜路与西藏南路交叉口)"
        },
        {
          "_id": 586,
          "name": "上海安平医院",
          "province": "上海市",
          "city": "上海市",
          "district": "浦东新区",
          "address": "川沙路4425号"
        },
        {
          "_id": 587,
          "name": "上海安真医院",
          "province": "上海市",
          "city": "上海市",
          "district": "松江区",
          "address": "茸梅路208号"
        },
        {
          "_id": 588,
          "name": "上海博爱医院",
          "province": "上海市",
          "city": "上海市",
          "district": "徐汇区",
          "address": "淮海中路1590号"
        },
        {
          "_id": 589,
          "name": "上海博大医院",
          "province": "上海市",
          "city": "上海市",
          "district": "松江区",
          "address": "阔街55号(人民南路良友商厦苏宁电器后面)"
        },
        {
          "_id": 590,
          "name": "上海城市女子医院",
          "province": "上海市",
          "city": "上海市",
          "district": "浦东新区",
          "address": "上南路3288号"
        },
        {
          "_id": 591,
          "name": "上海福华医院",
          "province": "上海市",
          "city": "上海市",
          "district": "浦东新区",
          "address": "惠南镇城南路98号(近衡山度假村)"
        },
        {
          "_id": 592,
          "name": "上海国济男子医院",
          "province": "上海市",
          "city": "上海市",
          "district": "虹口区",
          "address": "曲阳路801号"
        },
        {
          "_id": 593,
          "name": "上海国正医院",
          "province": "上海市",
          "city": "上海市",
          "district": "浦东新区",
          "address": "人民西路99号"
        },
        {
          "_id": 594,
          "name": "上海海淞医院",
          "province": "上海市",
          "city": "上海市",
          "district": "宝山区",
          "address": "淞宝路196号"
        },
        {
          "_id": 595,
          "name": "上海宏康医院",
          "province": "上海市",
          "city": "上海市",
          "district": "普陀区",
          "address": "大渡河路1933号"
        },
        {
          "_id": 596,
          "name": "上海虹桥医院",
          "province": "上海市",
          "city": "上海市",
          "district": "闵行区",
          "address": "虹梅路2181号(近吴中路)"
        },
        {
          "_id": 597,
          "name": "上海鸿慈儿童医院",
          "province": "上海市",
          "city": "上海市",
          "district": "闸北区",
          "address": "宝山路455号"
        },
        {
          "_id": 598,
          "name": "上海沪申五官科医院",
          "province": "上海市",
          "city": "上海市",
          "district": "徐汇区",
          "address": "石龙路269"
        },
        {
          "_id": 599,
          "name": "上海华美医疗美容医院",
          "province": "上海市",
          "city": "上海市",
          "district": "浦东新区",
          "address": "源深路155号1-3层(浦东大道与源深路交叉口东南侧)"
        },
        {
          "_id": 600,
          "name": "上海黄浦区中西医结合医院",
          "province": "上海市",
          "city": "上海市",
          "district": "黄浦区",
          "address": "黄家路163号(近跨龙路)"
        },
        {
          "_id": 601,
          "name": "上海健桥医院",
          "province": "上海市",
          "city": "上海市",
          "district": "闸北区",
          "address": "中兴路1122号"
        },
        {
          "_id": 602,
          "name": "上海江城皮肤病医院",
          "province": "上海市",
          "city": "上海市",
          "district": "杨浦区",
          "address": "黄兴路286号(近周家嘴路)"
        },
        {
          "_id": 603,
          "name": "上海江东医院",
          "province": "上海市",
          "city": "上海市",
          "district": "浦东新区",
          "address": "金桥路300号"
        },
        {
          "_id": 604,
          "name": "上海九龙男子医院",
          "province": "上海市",
          "city": "上海市",
          "district": "长宁区",
          "address": "中山西路333号"
        },
        {
          "_id": 605,
          "name": "上海九州泌尿医院",
          "province": "上海市",
          "city": "上海市",
          "district": "普陀区",
          "address": "真南路685号"
        },
        {
          "_id": 606,
          "name": "上海康沈医院",
          "province": "上海市",
          "city": "上海市",
          "district": "浦东新区",
          "address": "周浦镇康沈路1626号"
        },
        {
          "_id": 607,
          "name": "上海康新医院",
          "province": "上海市",
          "city": "上海市",
          "district": "静安区",
          "address": "余姚路139号(常德路口)"
        },
        {
          "_id": 608,
          "name": "上海蓝十字脑科医院",
          "province": "上海市",
          "city": "上海市",
          "district": "闵行区",
          "address": "七宝镇七莘路2880号(近宝南路)"
        },
        {
          "_id": 609,
          "name": "上海玛丽女子医院",
          "province": "上海市",
          "city": "上海市",
          "district": "青浦区",
          "address": "公园路380号"
        },
        {
          "_id": 610,
          "name": "上海玫瑰医疗美容医院",
          "province": "上海市",
          "city": "上海市",
          "district": "闸北区",
          "address": "长安路1138号(近天目西路)"
        },
        {
          "_id": 611,
          "name": "上海美联臣医疗美容医院",
          "province": "上海市",
          "city": "上海市",
          "district": "虹口区",
          "address": "四平路776号"
        },
        {
          "_id": 612,
          "name": "上海南浦妇科医院",
          "province": "上海市",
          "city": "上海市",
          "district": "浦东新区",
          "address": "浦东南路2250号"
        },
        {
          "_id": 613,
          "name": "上海青城医院",
          "province": "上海市",
          "city": "上海市",
          "district": "青浦区",
          "address": "盈港路468号(世纪华联斜对面)"
        },
        {
          "_id": 614,
          "name": "上海仁爱医院",
          "province": "上海市",
          "city": "徐汇区",
          "district": "徐汇区",
          "address": "漕溪路133号"
        },
        {
          "_id": 615,
          "name": "上海圣爱医院",
          "province": "上海市",
          "city": "上海市",
          "district": "嘉定区",
          "address": "群裕路60号"
        },
        {
          "_id": 616,
          "name": "上海圣贝国际牙科",
          "province": "上海市",
          "city": "上海市",
          "district": "长宁区",
          "address": "虹桥路1386号文广大厦2楼(近伊犁南路)"
        },
        {
          "_id": 617,
          "name": "上海时光整形外科医院",
          "province": "上海市",
          "city": "上海市",
          "district": "黄浦区",
          "address": "普安路187-189曙光大厦3层"
        },
        {
          "_id": 618,
          "name": "上海市闵行区中医院",
          "province": "上海市",
          "city": "上海市",
          "district": "闵行区",
          "address": "合川路3071号"
        },
        {
          "_id": 619,
          "name": "上海市浦东新区传染病医院",
          "province": "上海市",
          "city": "上海市",
          "district": "浦东新区",
          "address": "华夏东路3018弄46号"
        },
        {
          "_id": 620,
          "name": "上海曙康口腔门诊部",
          "province": "上海市",
          "city": "上海市",
          "district": "黄浦区",
          "address": "普安路189号曙光大厦5层"
        },
        {
          "_id": 621,
          "name": "上海松江方塔中医医院",
          "province": "上海市",
          "city": "上海市",
          "district": "松江区",
          "address": "中山东路39号"
        },
        {
          "_id": 622,
          "name": "上海天大整形美容医院",
          "province": "上海市",
          "city": "上海市",
          "district": "长宁区",
          "address": "中山西路339号"
        },
        {
          "_id": 623,
          "name": "上海天伦医院",
          "province": "上海市",
          "city": "上海市",
          "district": "虹口区",
          "address": "凉城路545号"
        },
        {
          "_id": 624,
          "name": "上海天佑医院",
          "province": "上海市",
          "city": "上海市",
          "district": "普陀区",
          "address": "真南路528号"
        },
        {
          "_id": 625,
          "name": "上海同德医院",
          "province": "上海市",
          "city": "上海市",
          "district": "青浦区",
          "address": "盈港路1006号"
        },
        {
          "_id": 626,
          "name": "上海万众口腔医院",
          "province": "上海市",
          "city": "上海市",
          "district": "徐汇区",
          "address": "吴中路2-6号"
        },
        {
          "_id": 627,
          "name": "上海西郊骨科医院",
          "province": "上海市",
          "city": "上海市",
          "district": "长宁区",
          "address": "剑河路595号"
        },
        {
          "_id": 628,
          "name": "上海新虹桥男科医院",
          "province": "上海市",
          "city": "上海市",
          "district": "长宁区",
          "address": "天山路18号"
        },
        {
          "_id": 629,
          "name": "上海新科医院",
          "province": "上海市",
          "city": "上海市",
          "district": "长宁区",
          "address": "长宁路1355号"
        },
        {
          "_id": 630,
          "name": "上海新视界眼科医院",
          "province": "上海市",
          "city": "上海市",
          "district": "长宁区",
          "address": "汇川路18号"
        },
        {
          "_id": 631,
          "name": "上海阳光中医医院",
          "province": "上海市",
          "city": "上海市",
          "district": "闸北区",
          "address": "芷江中路274"
        },
        {
          "_id": 632,
          "name": "上海一品健检(百联中环店)",
          "province": "上海市",
          "city": "上海市",
          "district": "普陀区",
          "address": "真光路1288号百联购物广场4楼B区L415、L416(近梅川路)"
        },
        {
          "_id": 633,
          "name": "上海英港医院",
          "province": "上海市",
          "city": "上海市",
          "district": "宝山区",
          "address": "淞滨路130-02号门诊部"
        },
        {
          "_id": 634,
          "name": "上海远大心胸医院",
          "province": "上海市",
          "city": "上海市",
          "district": "徐汇区",
          "address": "龙漕路218号"
        },
        {
          "_id": 635,
          "name": "上海长安妇科医院",
          "province": "上海市",
          "city": "上海市",
          "district": "浦东新区",
          "address": "惠南镇南团公路8号(城南路交叉口)"
        },
        {
          "_id": 636,
          "name": "上海长江医院",
          "province": "上海市",
          "city": "上海市",
          "district": "虹口区",
          "address": "周家嘴路515号"
        },
        {
          "_id": 637,
          "name": "上海真爱女子医院",
          "province": "上海市",
          "city": "上海市",
          "district": "长宁区",
          "address": "延安西路"
        },
        {
          "_id": 638,
          "name": "上海真美妇科医院",
          "province": "上海市",
          "city": "上海市",
          "district": "杨浦区",
          "address": "宁国路313弄4号"
        },
        {
          "_id": 639,
          "name": "上海中骏医学科学研究所",
          "province": "上海市",
          "city": "上海市",
          "district": "徐汇区",
          "address": "虹漕路461号"
        },
        {
          "_id": 640,
          "name": "上海中亚医院",
          "province": "上海市",
          "city": "上海市",
          "district": "嘉定区",
          "address": "沪宜公路3888号"
        },
        {
          "_id": 641,
          "name": "上海中医药大学附属曙光医院(整形科)",
          "province": "上海市",
          "city": "上海市",
          "district": "浦东新区",
          "address": "张衡路528"
        },
        {
          "_id": 642,
          "name": "上海中医药大学附属曙光医院浦东肝病专科分院",
          "province": "上海市",
          "city": "上海市",
          "district": "浦东新区",
          "address": "华夏东路3018弄46号"
        },
        {
          "_id": 643,
          "name": "上海中佑肛肠医院",
          "province": "上海市",
          "city": "上海市",
          "district": "静安区",
          "address": "陕西北路777号(恒隆广场向北500米,陕西北路与康定路交叉路口)"
        },
        {
          "_id": 644,
          "name": "上饶东大肛肠专科医院",
          "province": "江西省",
          "city": "上饶市",
          "district": "信州区",
          "address": "带湖路60号,汽车站往北300米"
        },
        {
          "_id": 645,
          "name": "上饶协和医院",
          "province": "江西省",
          "city": "上饶市",
          "district": "信州区",
          "address": "滨江西路11号(近工商大夏)"
        },
        {
          "_id": 646,
          "name": "深圳博爱医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "罗湖区",
          "address": "红岭中路2056号"
        },
        {
          "_id": 647,
          "name": "深圳凤凰医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "宝安区",
          "address": "凤凰山大道"
        },
        {
          "_id": 648,
          "name": "深圳福华中西医结合医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "福田区",
          "address": "福华路3号"
        },
        {
          "_id": 649,
          "name": "深圳福永妇科医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "宝安区",
          "address": "和沙路11-1号附近"
        },
        {
          "_id": 650,
          "name": "深圳港龙医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "龙岗区",
          "address": "龙岗大道3012号宏昌大厦A栋1-4层和B栋1-5层"
        },
        {
          "_id": 651,
          "name": "深圳国丹妇科医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "宝安区",
          "address": "东环一路油松第二工业区"
        },
        {
          "_id": 652,
          "name": "深圳韩美医疗美容医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "罗湖区",
          "address": "中民时代广场A座2层"
        },
        {
          "_id": 653,
          "name": "深圳和美妇儿科医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "南山区",
          "address": "深南大道12018号"
        },
        {
          "_id": 654,
          "name": "深圳华南妇科医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "龙岗区",
          "address": "深汕公路224号(坪山电子城旁)"
        },
        {
          "_id": 655,
          "name": "深圳建国泌尿外科医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "南山区",
          "address": "南山大道1112-1"
        },
        {
          "_id": 656,
          "name": "深圳健安医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "宝安区",
          "address": "沙吓工业区169号"
        },
        {
          "_id": 657,
          "name": "深圳健丰医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "龙岗区",
          "address": "高思特工业区(坪山长途汽车站旁)"
        },
        {
          "_id": 658,
          "name": "深圳景田医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "福田区",
          "address": "商报路9号"
        },
        {
          "_id": 659,
          "name": "深圳龙济医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "宝安区",
          "address": "龙观西路342号"
        },
        {
          "_id": 660,
          "name": "深圳罗岗医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "龙岗区",
          "address": "罗岗路76号"
        },
        {
          "_id": 661,
          "name": "深圳美莱医疗美容医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "福田区",
          "address": "深南中路2044号(兴华宾馆西行200米)"
        },
        {
          "_id": 662,
          "name": "深圳仁爱医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "福田区",
          "address": "金地四路2号"
        },
        {
          "_id": 663,
          "name": "深圳仁康医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "罗湖区",
          "address": "草埔吓屋村8号综合楼"
        },
        {
          "_id": 664,
          "name": "深圳曙光医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "罗湖区",
          "address": "红宝路38号"
        },
        {
          "_id": 665,
          "name": "深圳同仁妇科医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "宝安区",
          "address": "宝安大道3186号"
        },
        {
          "_id": 666,
          "name": "深圳五洲中西医结合医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "南山区",
          "address": "科华路7号"
        },
        {
          "_id": 667,
          "name": "深圳武警医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "罗湖区",
          "address": "金湖路8号"
        },
        {
          "_id": 668,
          "name": "深圳雪象医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "龙岗区",
          "address": "雪岗路1136号"
        },
        {
          "_id": 669,
          "name": "深圳阳光医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "罗湖区",
          "address": "宝安南路1048号"
        },
        {
          "_id": 670,
          "name": "深圳怡康妇科医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "罗湖区",
          "address": "红桂路1018号武汉大厦1-5层"
        },
        {
          "_id": 671,
          "name": "深圳远大肛肠医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "罗湖区",
          "address": "沿河南路1015号"
        },
        {
          "_id": 672,
          "name": "深圳远东妇儿科医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "罗湖区",
          "address": "深南东路2097号"
        },
        {
          "_id": 673,
          "name": "深圳中仁泌尿外科医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "宝安区",
          "address": "龙华街道工业西路97号(公交站建泰轮胎厂)"
        },
        {
          "_id": 674,
          "name": "沈阳北陵医院",
          "province": "辽宁省",
          "city": "沈阳市",
          "district": "皇姑区",
          "address": "泰山路13号"
        },
        {
          "_id": 675,
          "name": "沈阳曙光男科医院",
          "province": "辽宁省",
          "city": "沈阳市",
          "district": "和平区",
          "address": "和平北大街122号(和平北大街与北二马路交汇口)"
        },
        {
          "_id": 676,
          "name": "沈阳中都皮肤病医院",
          "province": "辽宁省",
          "city": "沈阳市",
          "district": "和平区",
          "address": "哈尔滨路38号(沈阳十二线)"
        },
        {
          "_id": 677,
          "name": "石家庄东方中西医结合医院",
          "province": "河北省",
          "city": "石家庄市",
          "district": "桥西区",
          "address": "裕华西路8号"
        },
        {
          "_id": 678,
          "name": "石家庄丰益肛泰医院",
          "province": "河北省",
          "city": "石家庄市",
          "district": "桥西区",
          "address": "平安南大街192号"
        },
        {
          "_id": 679,
          "name": "石家庄美联臣医疗美容医院",
          "province": "河北省",
          "city": "石家庄市",
          "district": "桥西区",
          "address": "裕华西路8号"
        },
        {
          "_id": 680,
          "name": "石家庄长城医院",
          "province": "河北省",
          "city": "石家庄市",
          "district": "裕华区",
          "address": "黄河大道84号"
        },
        {
          "_id": 681,
          "name": "石狮科盾医院",
          "province": "福建省",
          "city": "泉州市",
          "district": "石狮市",
          "address": "南环路102号"
        },
        {
          "_id": 682,
          "name": "顺德东方女子医院",
          "province": "广东省",
          "city": "佛山市",
          "district": "顺德区",
          "address": "大良文秀路2号"
        },
        {
          "_id": 683,
          "name": "顺德耳鼻喉专科医院",
          "province": "广东省",
          "city": "佛山市",
          "district": "顺德区",
          "address": "清晖路82号"
        },
        {
          "_id": 684,
          "name": "顺德康复医院",
          "province": "广东省",
          "city": "佛山市",
          "district": "顺德区",
          "address": "大良凤山西路10号"
        },
        {
          "_id": 685,
          "name": "顺德新世纪泌尿医院",
          "province": "广东省",
          "city": "佛山市",
          "district": "顺德区",
          "address": "大良南国西路黄岗路口"
        },
        {
          "_id": 686,
          "name": "顺德新世纪泌尿专科医院",
          "province": "广东省",
          "city": "佛山市",
          "district": "顺德区",
          "address": "大良南国西路黄岗路口"
        },
        {
          "_id": 687,
          "name": "顺德阳光康复医院",
          "province": "广东省",
          "city": "佛山市",
          "district": "顺德区",
          "address": "大良凤山西路10号"
        },
        {
          "_id": 688,
          "name": "顺德庄头医院",
          "province": "广东省",
          "city": "佛山市",
          "district": "顺德区",
          "address": "陈村镇庄头管理区太平路49号"
        },
        {
          "_id": 689,
          "name": "四川肛肠医院",
          "province": "四川省",
          "city": "成都市",
          "district": "武侯区",
          "address": "武侯大道双楠段313号"
        },
        {
          "_id": 690,
          "name": "四川华美紫馨医学美容医院",
          "province": "四川省",
          "city": "绵阳市",
          "district": "涪城区",
          "address": "安昌路18-16号附近"
        },
        {
          "_id": 691,
          "name": "四川绵阳美康医院",
          "province": "四川省",
          "city": "绵阳市",
          "district": "涪城区",
          "address": "荷花北街9之10-11、11"
        },
        {
          "_id": 692,
          "name": "四川省生殖健康研究中心附属专科医院",
          "province": "四川省",
          "city": "成都市",
          "district": "金牛区",
          "address": "一环路西三段13号"
        },
        {
          "_id": 693,
          "name": "四川中医药高等专科学校附属医院",
          "province": "四川省",
          "city": "绵阳市",
          "district": "涪城区",
          "address": "长虹大道中段53号"
        },
        {
          "_id": 694,
          "name": "四平阳光医院",
          "province": "吉林省",
          "city": "四平市",
          "district": "公主岭市",
          "address": "迎宾路1128号"
        },
        {
          "_id": 695,
          "name": "泗洪阳光儿童医院",
          "province": "江苏省",
          "city": "宿迁市",
          "district": "泗洪县",
          "address": "汴东路"
        },
        {
          "_id": 696,
          "name": "苏州大学附属理想眼科医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "姑苏区",
          "address": "干将东路200号"
        },
        {
          "_id": 697,
          "name": "苏州东吴中西医结合医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "姑苏区",
          "address": "桐泾南路81号(近新康花园)"
        },
        {
          "_id": 698,
          "name": "苏州宏葑医疗",
          "province": "江苏省",
          "city": "苏州市",
          "district": "沧浪区",
          "address": "庄先湾路宏葑二村24幢"
        },
        {
          "_id": 699,
          "name": "苏州华美美莱整形医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "姑苏区",
          "address": "干将西路889号"
        },
        {
          "_id": 700,
          "name": "苏州黄埭江南门诊部",
          "province": "江苏省",
          "city": "苏州市",
          "district": "相城区",
          "address": "黄埭镇春丰路239号(近春丰景城)"
        },
        {
          "_id": 701,
          "name": "苏州康立医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "吴中区",
          "address": "东吴南路96号"
        },
        {
          "_id": 702,
          "name": "苏州乐桥皮肤专科医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "姑苏区",
          "address": "憩桥巷9号(近广场酒店)"
        },
        {
          "_id": 703,
          "name": "苏州平江医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "姑苏区",
          "address": "平川路1166"
        },
        {
          "_id": 704,
          "name": "苏州圣爱医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "虎丘区",
          "address": "新区金山路36号"
        },
        {
          "_id": 705,
          "name": "宿迁市妇产医院",
          "province": "江苏省",
          "city": "宿迁市",
          "district": "宿城区",
          "address": "平安大道88号(老院向南200米)"
        },
        {
          "_id": 706,
          "name": "宿州艾玛妇医院",
          "province": "安徽省",
          "city": "宿州市",
          "district": "埇桥区",
          "address": "拂晓大道与淮河西路交汇处(新景第)"
        },
        {
          "_id": 707,
          "name": "台州东方妇产医院",
          "province": "浙江省",
          "city": "台州市",
          "district": "椒江区",
          "address": "经一路326号(开元大酒店旁)"
        },
        {
          "_id": 708,
          "name": "台州协和医院",
          "province": "浙江省",
          "city": "台州市",
          "district": "椒江区",
          "address": "开元路290、296-304"
        },
        {
          "_id": 709,
          "name": "太原丽都整形美容医院",
          "province": "山西省",
          "city": "太原市",
          "district": "小店区",
          "address": "并州南路33号"
        },
        {
          "_id": 710,
          "name": "太原糖尿病专科医院",
          "province": "山西省",
          "city": "太原市",
          "district": "迎泽区",
          "address": "并州东街3号"
        },
        {
          "_id": 711,
          "name": "太原新医医院",
          "province": "山西省",
          "city": "太原市",
          "district": "小店区",
          "address": "建南汽车站旁"
        },
        {
          "_id": 712,
          "name": "太原益民中医院",
          "province": "山西省",
          "city": "太原市",
          "district": "小店区",
          "address": "南内环街8号(南内环街东口)"
        },
        {
          "_id": 713,
          "name": "太原中山生殖医学医院",
          "province": "山西省",
          "city": "太原市",
          "district": "迎泽区",
          "address": "五一东街9号"
        },
        {
          "_id": 714,
          "name": "太原中铁三局集团中心医院",
          "province": "山西省",
          "city": "太原市",
          "district": "小店区",
          "address": "坞城东街2号"
        },
        {
          "_id": 715,
          "name": "泰州东方医院",
          "province": "江苏省",
          "city": "泰州市",
          "district": "海陵区",
          "address": "济川西路386号"
        },
        {
          "_id": 716,
          "name": "泰州海陵女子医院",
          "province": "江苏省",
          "city": "泰州市",
          "district": "海陵区",
          "address": "东进西路222号汽车西站旁"
        },
        {
          "_id": 717,
          "name": "泰州市妇幼保健院",
          "province": "江苏省",
          "city": "泰州市",
          "district": "海陵区",
          "address": "东风南路568号"
        },
        {
          "_id": 718,
          "name": "唐山红十字妇产医院",
          "province": "河北省",
          "city": "唐山市",
          "district": "路北区",
          "address": "北新西道10号"
        },
        {
          "_id": 719,
          "name": "唐山华泰医院",
          "province": "河北省",
          "city": "唐山市",
          "district": "丰润区",
          "address": "端明路165号"
        },
        {
          "_id": 720,
          "name": "唐山冀东妇产医院",
          "province": "河北省",
          "city": "唐山市",
          "district": "路南区",
          "address": "新华西道118号"
        },
        {
          "_id": 721,
          "name": "唐山京城皮肤病医院",
          "province": "河北省",
          "city": "唐山市",
          "district": "路北区",
          "address": "大里路42-2号"
        },
        {
          "_id": 722,
          "name": "唐山美联臣医疗美容医院",
          "province": "河北省",
          "city": "唐山市",
          "district": "路北区",
          "address": "大理南路44号(西山道与大理南路交叉口)"
        },
        {
          "_id": 723,
          "name": "唐山女子医院",
          "province": "河北省",
          "city": "唐山市",
          "district": "路南区",
          "address": "新华西道118号"
        },
        {
          "_id": 724,
          "name": "唐山同仁医院",
          "province": "河北省",
          "city": "唐山市",
          "district": "路北区",
          "address": "站前路3号"
        },
        {
          "_id": 725,
          "name": "唐山中西医骨科医院",
          "province": "河北省",
          "city": "唐山市",
          "district": "路南区",
          "address": "国防西道"
        },
        {
          "_id": 726,
          "name": "天津艾丽莎美容养生会所",
          "province": "天津市",
          "city": "天津市",
          "district": "南开区",
          "address": "迎水道9号益生堂大药店内二楼"
        },
        {
          "_id": 727,
          "name": "天津华北医院",
          "province": "天津市",
          "city": "天津市",
          "district": "河东区",
          "address": "全境新开路373号"
        },
        {
          "_id": 728,
          "name": "天津华厦医院",
          "province": "天津市",
          "city": "天津市",
          "district": "河西区",
          "address": "环湖中道华夏未来对面"
        },
        {
          "_id": 729,
          "name": "天津华山医院",
          "province": "天津市",
          "city": "天津市",
          "district": "南开区",
          "address": "长江道30号"
        },
        {
          "_id": 730,
          "name": "天津蓟县友好医院",
          "province": "天津市",
          "city": "天津市",
          "district": "蓟县",
          "address": "中昌北大道商贸街东口"
        },
        {
          "_id": 731,
          "name": "天津津好医院",
          "province": "天津市",
          "city": "天津市",
          "district": "河西区",
          "address": "友谊路和黑牛城道交口"
        },
        {
          "_id": 732,
          "name": "天津津门中医医院",
          "province": "天津市",
          "city": "天津市",
          "district": "河西区",
          "address": "黑牛城道189号中国工商银行(紫金山支行)旁"
        },
        {
          "_id": 733,
          "name": "天津静海真美妇儿医院",
          "province": "天津市",
          "city": "天津市",
          "district": "静海区",
          "address": "东城开发区金海园小区S82号"
        },
        {
          "_id": 734,
          "name": "天津坤如玛丽妇产医院",
          "province": "天津市",
          "city": "天津市",
          "district": "河西区",
          "address": "解放南路488号"
        },
        {
          "_id": 735,
          "name": "天津乐园医院",
          "province": "天津市",
          "city": "天津市",
          "district": "河西区",
          "address": "隆昌路86号"
        },
        {
          "_id": 736,
          "name": "天津丽人女子医院",
          "province": "天津市",
          "city": "天津市",
          "district": "河东区",
          "address": "大直沽中路128号"
        },
        {
          "_id": 737,
          "name": "天津欧菲整形美容医院",
          "province": "天津市",
          "city": "天津市",
          "district": "南开区",
          "address": "长江道115号众望大厦(长江道南丰路站对面)"
        },
        {
          "_id": 738,
          "name": "天津欧亚肛肠医院",
          "province": "天津市",
          "city": "天津市",
          "district": "和平区",
          "address": "和平路26号(近东马路和平路交口)"
        },
        {
          "_id": 739,
          "name": "天津瑞京代谢病医院",
          "province": "天津市",
          "city": "天津市",
          "district": "河西区",
          "address": "紫金山路3号(与平泉道交口天塔旁)(近平泉道菜市场)"
        },
        {
          "_id": 740,
          "name": "天津维美医疗美容医院",
          "province": "天津市",
          "city": "天津市",
          "district": "河西区",
          "address": "友谊北路广银大厦1-3层"
        },
        {
          "_id": 741,
          "name": "天津西站皮肤病专科医院",
          "province": "天津市",
          "city": "天津市",
          "district": "红桥区",
          "address": "西青道65号"
        },
        {
          "_id": 742,
          "name": "天津现代女子医院",
          "province": "天津市",
          "city": "天津市",
          "district": "河北区",
          "address": "进步道21号(世纪钟旁)"
        },
        {
          "_id": 743,
          "name": "天津怡泰生殖专科医院",
          "province": "天津市",
          "city": "天津市",
          "district": "南开区",
          "address": "长江道90号"
        },
        {
          "_id": 744,
          "name": "天津怡泰医院",
          "province": "天津市",
          "city": "天津市",
          "district": "南开区",
          "address": "长江道90号"
        },
        {
          "_id": 745,
          "name": "天津长庚耳鼻喉医院",
          "province": "天津市",
          "city": "天津市",
          "district": "河北区",
          "address": "天泰路130号"
        },
        {
          "_id": 746,
          "name": "天水同仁医院",
          "province": "甘肃省",
          "city": "天水市",
          "district": "麦积区",
          "address": "天风路与成纪大道东路交叉路口向北200米(风动厂西门)银座对面"
        },
        {
          "_id": 747,
          "name": "天水退休医师医院",
          "province": "甘肃省",
          "city": "天水市",
          "district": "秦州区",
          "address": "名远大酒店附近"
        },
        {
          "_id": 748,
          "name": "天长现代妇产医院",
          "province": "安徽省",
          "city": "滁州市",
          "district": "天长市",
          "address": "天康大道9号(天润城购物中心向东100米)"
        },
        {
          "_id": 749,
          "name": "铁岭市协和医院",
          "province": "辽宁省",
          "city": "铁岭市",
          "district": "银州区",
          "address": "新华街44号天宝西门向北二百米"
        },
        {
          "_id": 750,
          "name": "铜仁华夏医院",
          "province": "贵州省",
          "city": "铜仁市",
          "district": "碧江区",
          "address": "东太大道"
        },
        {
          "_id": 751,
          "name": "万州阳光眼科医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "万州区",
          "address": "天星路366号(三峡医专大门斜对面)"
        },
        {
          "_id": 752,
          "name": "威海现代妇科医院",
          "province": "山东省",
          "city": "威海市",
          "district": "环翠区",
          "address": "青岛北路"
        },
        {
          "_id": 753,
          "name": "潍坊和平医院",
          "province": "山东省",
          "city": "潍坊市",
          "district": "奎文区",
          "address": "东风东街209号"
        },
        {
          "_id": 754,
          "name": "潍坊长安医院",
          "province": "山东省",
          "city": "潍坊市",
          "district": "奎文区",
          "address": "东风东街288号"
        },
        {
          "_id": 755,
          "name": "温岭和平医院",
          "province": "浙江省",
          "city": "台州市",
          "district": "温岭市",
          "address": "泽国镇水仓路1号"
        },
        {
          "_id": 756,
          "name": "温岭小桥头医院",
          "province": "浙江省",
          "city": "台州市",
          "district": "温岭市",
          "address": "中兴西路与人民西路交叉口西南150米"
        },
        {
          "_id": 757,
          "name": "温州爱尔五官科医院",
          "province": "浙江省",
          "city": "温州市",
          "district": "龙湾区",
          "address": "机场大道机场大道上江大楼"
        },
        {
          "_id": 758,
          "name": "温州东方妇产医院",
          "province": "浙江省",
          "city": "温州市",
          "district": "瓯海区",
          "address": "温瑞大道塘东大楼"
        },
        {
          "_id": 759,
          "name": "温州恒大医院",
          "province": "浙江省",
          "city": "温州市",
          "district": "鹿城区",
          "address": "鹿城路153号"
        },
        {
          "_id": 760,
          "name": "温州红房子医院",
          "province": "浙江省",
          "city": "温州市",
          "district": "鹿城区",
          "address": "鹿城路153号"
        },
        {
          "_id": 761,
          "name": "温州红旗医院",
          "province": "浙江省",
          "city": "温州市",
          "district": "鹿城区",
          "address": "百里西路198号"
        },
        {
          "_id": 762,
          "name": "温州建国医院",
          "province": "浙江省",
          "city": "温州市",
          "district": "鹿城区",
          "address": "温州大道洛河路2号"
        },
        {
          "_id": 763,
          "name": "温州玛丽亚妇科医院",
          "province": "浙江省",
          "city": "温州市",
          "district": "瑞安市",
          "address": "里新路与104国道交汇处北100米"
        },
        {
          "_id": 764,
          "name": "温州协和医院",
          "province": "浙江省",
          "city": "温州市",
          "district": "乐清市",
          "address": "北白象镇白象大道338号东方大厦斜对面"
        },
        {
          "_id": 765,
          "name": "温州长征妇产医院",
          "province": "浙江省",
          "city": "温州市",
          "district": "鹿城区",
          "address": "公园路128号"
        },
        {
          "_id": 766,
          "name": "涡阳县阳光医院",
          "province": "安徽省",
          "city": "亳州市",
          "district": "涡阳县",
          "address": "淮中大道172号(近公安局)"
        },
        {
          "_id": 767,
          "name": "乌海现代医院",
          "province": "内蒙古自治区",
          "city": "乌海市",
          "district": "海勃湾区",
          "address": "千里山东街40号(人民公园南门路口)1完小斜对面"
        },
        {
          "_id": 768,
          "name": "乌鲁木齐凤凰妇产医院",
          "province": "新疆维吾尔自治区",
          "city": "乌鲁木齐市",
          "district": "沙依巴克区",
          "address": "西北路132号(近头宫加气站)"
        },
        {
          "_id": 769,
          "name": "乌鲁木齐市爱德华医院",
          "province": "新疆维吾尔自治区",
          "city": "乌鲁木齐市",
          "district": "水磨沟区",
          "address": "西虹东路148号"
        },
        {
          "_id": 770,
          "name": "乌鲁木齐天佑肛肠医院",
          "province": "新疆维吾尔自治区",
          "city": "乌鲁木齐市",
          "district": "沙依巴克区",
          "address": "珠江路24号"
        },
        {
          "_id": 771,
          "name": "乌鲁木齐新军都白癜风医院",
          "province": "新疆维吾尔自治区",
          "city": "乌鲁木齐市",
          "district": "沙依巴克区",
          "address": "沙区西北路73号血站与头宫之间哈密大厦对面"
        },
        {
          "_id": 772,
          "name": "无锡东方肛肠医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "北塘区",
          "address": "通盛路孙巷108号2层"
        },
        {
          "_id": 773,
          "name": "无锡虹桥医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "滨湖区",
          "address": "长江北路150号(百安居对面)"
        },
        {
          "_id": 774,
          "name": "无锡嘉仕恒信医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "滨湖区",
          "address": "蠡溪路203号"
        },
        {
          "_id": 775,
          "name": "无锡建国男科医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "滨湖区",
          "address": "太湖大道往招商城方向20米"
        },
        {
          "_id": 776,
          "name": "无锡玛丽亚医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "崇安区",
          "address": "解放西路323号"
        },
        {
          "_id": 777,
          "name": "无锡美联臣医疗美容医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "崇安区",
          "address": "人民东路301号崇文大夏3-5层"
        },
        {
          "_id": 778,
          "name": "无锡民众体检中心",
          "province": "江苏省",
          "city": "无锡市",
          "district": "滨湖区",
          "address": "鸿桥路889号神洲大厦9-11层"
        },
        {
          "_id": 779,
          "name": "无锡南站医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "滨湖区",
          "address": "塘南路97号无锡建国男子医院(近招商城路)"
        },
        {
          "_id": 780,
          "name": "无锡天一医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "崇安区",
          "address": "勤学路27号-10"
        },
        {
          "_id": 781,
          "name": "无锡同济医疗美容医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "南长区",
          "address": "永丰路黄泥埄57-1号"
        },
        {
          "_id": 782,
          "name": "无锡新区凤凰医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "滨湖区",
          "address": "长江北路20号"
        },
        {
          "_id": 783,
          "name": "芜湖丹凤朝阳妇产医院",
          "province": "安徽省",
          "city": "芜湖市",
          "district": "镜湖区",
          "address": "赤铸山西路86号"
        },
        {
          "_id": 784,
          "name": "芜湖阳光眼科医院",
          "province": "安徽省",
          "city": "六安市",
          "district": "金安区",
          "address": "大别山路"
        },
        {
          "_id": 785,
          "name": "武汉博仕肛肠医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "武昌区",
          "address": "中山路312号凤凰大厦A座"
        },
        {
          "_id": 786,
          "name": "武汉当代佳丽医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "武昌区",
          "address": "雄楚大道113号"
        },
        {
          "_id": 787,
          "name": "武汉华美医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "硚口区",
          "address": "汉口解放大道1063号(武汉蓝天医院旁)"
        },
        {
          "_id": 788,
          "name": "武汉华仁医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "武昌区",
          "address": "武珞路319号"
        },
        {
          "_id": 789,
          "name": "武汉华夏医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "武昌区",
          "address": "丁字桥路2号"
        },
        {
          "_id": 790,
          "name": "武汉环亚白癜风医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "硚口区",
          "address": "解放大道479"
        },
        {
          "_id": 791,
          "name": "武汉黄浦中西医结合医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "江岸区",
          "address": "黄浦大街266号"
        },
        {
          "_id": 792,
          "name": "武汉送子鸟医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "硚口区",
          "address": "解放大道35"
        },
        {
          "_id": 793,
          "name": "武汉现代女子妇科医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "硚口区",
          "address": "中山大道89号(近武胜路家乐福)"
        },
        {
          "_id": 794,
          "name": "武汉友好医院",
          "province": "湖北省",
          "city": "武汉市",
          "district": "汉阳区",
          "address": "鹦鹉大道197号"
        },
        {
          "_id": 795,
          "name": "武警兵团指挥部医院",
          "province": "新疆维吾尔自治区",
          "city": "乌鲁木齐市",
          "district": "水磨沟区",
          "address": "南湖北路9号"
        },
        {
          "_id": 796,
          "name": "武警重庆总队医院",
          "province": "重庆市",
          "city": "重庆市",
          "district": "南岸区",
          "address": "卫国路90号"
        },
        {
          "_id": 797,
          "name": "武警海南总队医院",
          "province": "海南省",
          "city": "海口市",
          "district": "美兰区",
          "address": "文明东路49号"
        },
        {
          "_id": 798,
          "name": "武警河北总队医院",
          "province": "河北省",
          "city": "石家庄市",
          "district": "桥西区",
          "address": "新华西路130号"
        },
        {
          "_id": 799,
          "name": "武警河南总队医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "二七区",
          "address": "康复中街1号"
        },
        {
          "_id": 800,
          "name": "武警黑龙江总队医院",
          "province": "黑龙江省",
          "city": "哈尔滨市",
          "district": "道里区",
          "address": "新阳路558号"
        },
        {
          "_id": 801,
          "name": "武警湖南总队医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "岳麓区",
          "address": "枫林一路222号"
        },
        {
          "_id": 802,
          "name": "武警吉林总队医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "宽城区",
          "address": "农安南街766号"
        },
        {
          "_id": 803,
          "name": "武警江苏总队医院",
          "province": "江苏省",
          "city": "扬州市",
          "district": "广陵区",
          "address": "江都南路8号"
        },
        {
          "_id": 804,
          "name": "武警江西省消防总队医院",
          "province": "江西省",
          "city": "南昌市",
          "district": "西湖区",
          "address": "抚生路168号"
        },
        {
          "_id": 805,
          "name": "武警辽宁总队医院",
          "province": "辽宁省",
          "city": "沈阳市",
          "district": "于洪区",
          "address": "黄河北大街黑山路3号"
        },
        {
          "_id": 806,
          "name": "武警内蒙古总队医院",
          "province": "内蒙古自治区",
          "city": "呼和浩特市",
          "district": "赛罕区",
          "address": "双台什街与金桥一路交叉口东北100米"
        },
        {
          "_id": 807,
          "name": "武警青海总队医院",
          "province": "青海省",
          "city": "西宁市",
          "district": "城东区",
          "address": "七一路252号"
        },
        {
          "_id": 808,
          "name": "武警山西总队医院",
          "province": "山西省",
          "city": "太原市",
          "district": "小店区",
          "address": "狄村街1-28号附近"
        },
        {
          "_id": 809,
          "name": "武警陕西省总队医院",
          "province": "陕西省",
          "city": "西安市",
          "district": "雁塔区",
          "address": "南二环东段88号"
        },
        {
          "_id": 810,
          "name": "武警四川省消防总队医院",
          "province": "四川省",
          "city": "成都市",
          "district": "青羊区",
          "address": "石人南路21号"
        },
        {
          "_id": 811,
          "name": "武警云南省边防总队医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "西山区",
          "address": "西坝路与西福路交叉口西北50米"
        },
        {
          "_id": 812,
          "name": "西安东大肛肠医院",
          "province": "陕西省",
          "city": "西安市",
          "district": "碑林区",
          "address": "兴庆路9号(兴庆公园东门斜对面)"
        },
        {
          "_id": 813,
          "name": "西安国医肿瘤医院",
          "province": "陕西省",
          "city": "西安市",
          "district": "雁塔区",
          "address": "雁南一路13号(原纬一街)"
        },
        {
          "_id": 814,
          "name": "西安俪人医院",
          "province": "陕西省",
          "city": "西安市",
          "district": "雁塔区",
          "address": "科技路30号"
        },
        {
          "_id": 815,
          "name": "西安莲湖京科医院",
          "province": "陕西省",
          "city": "西安市",
          "district": "莲湖区",
          "address": "丰登北路中段72号"
        },
        {
          "_id": 816,
          "name": "西安三桥武警医院",
          "province": "陕西省",
          "city": "西安市",
          "district": "未央区",
          "address": "三桥街道武警路4号"
        },
        {
          "_id": 817,
          "name": "西安神龙中医院",
          "province": "陕西省",
          "city": "西安市",
          "district": "雁塔区",
          "address": "朱雀大街南段36号明德门小区南新区13号楼1-2层"
        },
        {
          "_id": 818,
          "name": "西安阳光医院",
          "province": "陕西省",
          "city": "西安市",
          "district": "新城区",
          "address": "自强东路1040号"
        },
        {
          "_id": 819,
          "name": "西藏博爱医院",
          "province": "西藏自治区",
          "city": "拉萨市",
          "district": "城关区",
          "address": "江苏东路50号附近"
        },
        {
          "_id": 820,
          "name": "西京妇产医院",
          "province": "宁夏回族自治区",
          "city": "银川市",
          "district": "兴庆区",
          "address": "胜利街"
        },
        {
          "_id": 821,
          "name": "西南骨科医院",
          "province": "四川省",
          "city": "成都市",
          "district": "武侯区",
          "address": "武侯大道双楠段38号"
        },
        {
          "_id": 822,
          "name": "湘潭阳光医疗美容中心",
          "province": "湖南省",
          "city": "湘潭市",
          "district": "雨湖区",
          "address": "和平路186号(市中心医院对面)"
        },
        {
          "_id": 823,
          "name": "襄樊东大肛肠医院",
          "province": "湖北省",
          "city": "襄阳市",
          "district": "樊城区",
          "address": "长虹北路16号(诸葛亮广场对面)"
        },
        {
          "_id": 824,
          "name": "襄樊市第五人民医院",
          "province": "湖北省",
          "city": "襄阳市",
          "district": "樊城区",
          "address": "东风路66号"
        },
        {
          "_id": 825,
          "name": "新疆阿克苏白水医院",
          "province": "新疆维吾尔自治区",
          "city": "阿克苏地区",
          "district": "阿克苏市",
          "address": "南大街33号"
        },
        {
          "_id": 826,
          "name": "新疆大西北皮肤病医院",
          "province": "新疆维吾尔自治区",
          "city": "乌鲁木齐市",
          "district": "沙依巴克区",
          "address": "西北路749号(与南昌路交叉口)"
        },
        {
          "_id": 827,
          "name": "新疆华夏医院",
          "province": "新疆维吾尔自治区",
          "city": "乌鲁木齐市",
          "district": "沙依巴克区",
          "address": "友好南路323号(原新华书店对面)西北路车站旁"
        },
        {
          "_id": 828,
          "name": "新疆石河子生殖专科医院",
          "province": "新疆维吾尔自治区",
          "city": "石河子市",
          "district": "石河子市",
          "address": "西一路51号"
        },
        {
          "_id": 829,
          "name": "新疆维吾尔自治区人民医院",
          "province": "新疆维吾尔自治区",
          "city": "乌鲁木齐市",
          "district": "天山区",
          "address": "天池路91号"
        },
        {
          "_id": 830,
          "name": "新密协和医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "新密市",
          "address": "西大街308号"
        },
        {
          "_id": 831,
          "name": "新医科苏州门诊部",
          "province": "江苏省",
          "city": "苏州市",
          "district": "沧浪区",
          "address": "憩桥巷"
        },
        {
          "_id": 832,
          "name": "信阳博士医院",
          "province": "河南省",
          "city": "信阳市",
          "district": "浉河区",
          "address": "申城大道(原大庆路)沁园春旁(信阳博士医院(沁园春旁(信阳博士医院)"
        },
        {
          "_id": 833,
          "name": "兴城阳光医院",
          "province": "辽宁省",
          "city": "葫芦岛市",
          "district": "兴城市",
          "address": "兴海路1段24号"
        },
        {
          "_id": 834,
          "name": "徐州京城皮肤病医院",
          "province": "江苏省",
          "city": "徐州市",
          "district": "云龙区",
          "address": "铜山路246号"
        },
        {
          "_id": 835,
          "name": "许昌凤凰医院",
          "province": "河南省",
          "city": "许昌市",
          "district": "魏都区",
          "address": "颖昌路926号"
        },
        {
          "_id": 836,
          "name": "许昌新时代妇科医院",
          "province": "河南省",
          "city": "许昌市",
          "district": "魏都区",
          "address": "解放路中段"
        },
        {
          "_id": 837,
          "name": "许昌中山医院",
          "province": "河南省",
          "city": "许昌市",
          "district": "魏都区",
          "address": "西大街16号"
        },
        {
          "_id": 838,
          "name": "烟台仁爱医院",
          "province": "山东省",
          "city": "烟台市",
          "district": "芝罘区",
          "address": "大海阳路68号"
        },
        {
          "_id": 839,
          "name": "烟台新东方女子医院",
          "province": "山东省",
          "city": "烟台市",
          "district": "芝罘区",
          "address": "南大街240号"
        },
        {
          "_id": 840,
          "name": "烟台阳光丽人医院",
          "province": "山东省",
          "city": "烟台市",
          "district": "",
          "address": "烟台市西南河路"
        },
        {
          "_id": 841,
          "name": "延安阳光泌尿外科医院",
          "province": "陕西省",
          "city": "延安市",
          "district": "宝塔区",
          "address": "审计局附近"
        },
        {
          "_id": 842,
          "name": "延吉博生现代妇科医院",
          "province": "吉林省",
          "city": "延边朝鲜族自治州",
          "district": "延吉市",
          "address": "爱丹路1009号粉红大厦(老客运站东100米)"
        },
        {
          "_id": 843,
          "name": "盐城协和康复医院",
          "province": "江苏省",
          "city": "盐城市",
          "district": "亭湖区",
          "address": "建军中路与建军路交叉口东南50米"
        },
        {
          "_id": 844,
          "name": "扬州国建男科医院",
          "province": "江苏省",
          "city": "扬州市",
          "district": "邗江区",
          "address": "新城河路508号"
        },
        {
          "_id": 845,
          "name": "扬州施尔美整形美容医院",
          "province": "江苏省",
          "city": "扬州市",
          "district": "邗江区",
          "address": "江阳中路266号"
        },
        {
          "_id": 846,
          "name": "阳泉东方生殖医院",
          "province": "山西省",
          "city": "阳泉市",
          "district": "",
          "address": "阳泉市泉中路1号"
        },
        {
          "_id": 847,
          "name": "伊宁市第十一医院",
          "province": "新疆维吾尔自治区",
          "city": "伊犁哈萨克自治州",
          "district": "伊宁市",
          "address": "江苏路解放西路7巷内"
        },
        {
          "_id": 848,
          "name": "仪征市中山门诊部",
          "province": "江苏省",
          "city": "扬州市",
          "district": "仪征市",
          "address": "真州西路42号(黎明大酒店东侧)"
        },
        {
          "_id": 849,
          "name": "宜宾肛泰肛肠医院",
          "province": "四川省",
          "city": "宜宾市",
          "district": "翠屏区",
          "address": "西郊前进路445号"
        },
        {
          "_id": 850,
          "name": "宜昌康复医院",
          "province": "湖北省",
          "city": "宜昌市",
          "district": "西陵区",
          "address": "隆康路"
        },
        {
          "_id": 851,
          "name": "宜兴丽都皮肤美容医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "宜兴市",
          "address": "人民南路141号"
        },
        {
          "_id": 852,
          "name": "宜兴仁济医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "宜兴市",
          "address": "解放东路150号(解放广场东侧)"
        },
        {
          "_id": 853,
          "name": "宜兴武警医院",
          "province": "江苏省",
          "city": "无锡市",
          "district": "宜兴市",
          "address": "宜城街道龙池路337号"
        },
        {
          "_id": 854,
          "name": "银川凤城医院",
          "province": "宁夏回族自治区",
          "city": "银川市",
          "district": "兴庆区",
          "address": "清河北街782号(北门金三角处)"
        },
        {
          "_id": 855,
          "name": "银川现代丽人医院",
          "province": "宁夏回族自治区",
          "city": "银川市",
          "district": "兴庆区",
          "address": "新华东街307号"
        },
        {
          "_id": 856,
          "name": "永泰东南医院",
          "province": "福建省",
          "city": "福州市",
          "district": "永泰县",
          "address": "龙峰园清水坑125号"
        },
        {
          "_id": 857,
          "name": "榆林阳光医院",
          "province": "陕西省",
          "city": "榆林市",
          "district": "榆阳区",
          "address": "上郡北路8号上郡北路凌霄塔对面"
        },
        {
          "_id": 858,
          "name": "玉林中山医院",
          "province": "广西壮族自治区",
          "city": "玉林市",
          "district": "玉州区",
          "address": "一环东路1号"
        },
        {
          "_id": 859,
          "name": "玉溪九州医院",
          "province": "云南省",
          "city": "玉溪市",
          "district": "红塔区",
          "address": "明珠路12号(高快客运站旁0)"
        },
        {
          "_id": 860,
          "name": "云南九洲泌尿生殖专科医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "盘龙区",
          "address": "白云路229号"
        },
        {
          "_id": 861,
          "name": "云南玛莉亚女子医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "盘龙区",
          "address": "环城北路169号"
        },
        {
          "_id": 862,
          "name": "云南仁爱医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "五华区",
          "address": "龙泉路62号"
        },
        {
          "_id": 863,
          "name": "云南同仁新华医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "盘龙区",
          "address": "金实小区南门小庄立交桥旁"
        },
        {
          "_id": 864,
          "name": "云南协和医院",
          "province": "云南省",
          "city": "昆明市",
          "district": "官渡区",
          "address": "环城南路709号"
        },
        {
          "_id": 865,
          "name": "运城禹都人民医院",
          "province": "山西省",
          "city": "运城市",
          "district": "盐湖区",
          "address": "槐东路68号"
        },
        {
          "_id": 866,
          "name": "湛江东大肛肠医院",
          "province": "广东省",
          "city": "湛江市",
          "district": "霞山区",
          "address": "椹川大道中海河汽配东大肛肠医院左侧第二家"
        },
        {
          "_id": 867,
          "name": "张家港朝阳五官科医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "张家港市",
          "address": "港城大道158号"
        },
        {
          "_id": 868,
          "name": "张家港万春专科医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "张家港市",
          "address": "暨阳中路399号(市二中西侧)"
        },
        {
          "_id": 869,
          "name": "张家港中心医院",
          "province": "江苏省",
          "city": "苏州市",
          "district": "张家港市",
          "address": "泗杨路99号"
        },
        {
          "_id": 870,
          "name": "长春461医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "朝阳区",
          "address": "自由大路108号"
        },
        {
          "_id": 871,
          "name": "长春东大肛肠医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "南关区",
          "address": "大经路1386号(汉斯啤酒城斜对面)"
        },
        {
          "_id": 872,
          "name": "长春公安边防总队医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "宽城区",
          "address": "吴淞路278号"
        },
        {
          "_id": 873,
          "name": "长春骨伤医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "南关区",
          "address": "亚泰大街1085号(亚泰大街与五马路交汇处)"
        },
        {
          "_id": 874,
          "name": "长春关东妇科医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "宽城区",
          "address": "芙蓉路256号(联合书城西侧)"
        },
        {
          "_id": 875,
          "name": "长春华山皮肤病医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "南关区",
          "address": "大经路356号"
        },
        {
          "_id": 876,
          "name": "长春九龙泌尿外科医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "朝阳区",
          "address": "红旗街1599号"
        },
        {
          "_id": 877,
          "name": "长春同济医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "朝阳区",
          "address": "康平街477号"
        },
        {
          "_id": 878,
          "name": "长春协和妇科医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "南关区",
          "address": "民康路1369号"
        },
        {
          "_id": 879,
          "name": "长春阳光妇科医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "南关区",
          "address": "大经路1318号(汉斯国际啤酒城对面)"
        },
        {
          "_id": 880,
          "name": "长春阳光口腔",
          "province": "吉林省",
          "city": "长春市",
          "district": "朝阳区",
          "address": "延安大街99号盛世国际2层"
        },
        {
          "_id": 881,
          "name": "长春阳光女子医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "南关区",
          "address": "大经路1318号(汉斯国际啤酒城对面)"
        },
        {
          "_id": 882,
          "name": "长春长庚耳鼻喉医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "南关区",
          "address": "大经路988号"
        },
        {
          "_id": 883,
          "name": "长春中德骨科医院",
          "province": "吉林省",
          "city": "长春市",
          "district": "宽城区",
          "address": "北京大街1169号"
        },
        {
          "_id": 884,
          "name": "长乐协立门诊部",
          "province": "福建省",
          "city": "福州市",
          "district": "长乐市",
          "address": "航城街道朝阳中路216号"
        },
        {
          "_id": 885,
          "name": "长乐中山妇科医院",
          "province": "福建省",
          "city": "福州市",
          "district": "长乐市",
          "address": "郑和路250号"
        },
        {
          "_id": 886,
          "name": "长沙179医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "雨花区",
          "address": "城南东路133号"
        },
        {
          "_id": 887,
          "name": "长沙安贞妇产医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "雨花区",
          "address": "韶山中路612号"
        },
        {
          "_id": 888,
          "name": "长沙博大泌尿专科医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "雨花区",
          "address": "韶山北路288号"
        },
        {
          "_id": 889,
          "name": "长沙东大肛肠医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "芙蓉区",
          "address": "远大一路820号"
        },
        {
          "_id": 890,
          "name": "长沙恒生手外科医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "雨花区",
          "address": "香樟路229号"
        },
        {
          "_id": 891,
          "name": "长沙华夏医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "长沙县",
          "address": "星沙镇北斗路16号(星沙汽车站斜对面)"
        },
        {
          "_id": 892,
          "name": "长沙丽人妇产医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "芙蓉区",
          "address": "人民中路499号(家润多朝阳店对面)"
        },
        {
          "_id": 893,
          "name": "长沙玛丽亚妇产医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "岳麓区",
          "address": "桐梓坡路1号"
        },
        {
          "_id": 894,
          "name": "长沙南方骨外科医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "长沙县",
          "address": "漓湘西路10号"
        },
        {
          "_id": 895,
          "name": "长沙仁爱妇产医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "开福区",
          "address": "湘雅路212号(凯达园1层)"
        },
        {
          "_id": 896,
          "name": "长沙送子鸟生殖与不孕医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "雨花区",
          "address": "劳动中路59号"
        },
        {
          "_id": 897,
          "name": "长沙现代女子医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "雨花区",
          "address": "劳动中路59号"
        },
        {
          "_id": 898,
          "name": "长沙湘江医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "长沙县",
          "address": "天华中路"
        },
        {
          "_id": 899,
          "name": "长沙星沙年轮骨科医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "长沙县",
          "address": "星沙镇漓湘西路10号(近明城国际大酒店)"
        },
        {
          "_id": 900,
          "name": "长沙阳光医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "天心区",
          "address": "城南西路155号"
        },
        {
          "_id": 901,
          "name": "长沙长海医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "芙蓉区",
          "address": "东二环恒达路1号"
        },
        {
          "_id": 902,
          "name": "长沙长江医院",
          "province": "湖南省",
          "city": "长沙市",
          "district": "芙蓉区",
          "address": "车站北路251号"
        },
        {
          "_id": 903,
          "name": "长治女子医院",
          "province": "山西省",
          "city": "长治市",
          "district": "城区",
          "address": "城西路258号"
        },
        {
          "_id": 904,
          "name": "长治县博爱医院",
          "province": "山西省",
          "city": "长治市",
          "district": "长治县",
          "address": "长陵路27号"
        },
        {
          "_id": 905,
          "name": "肇庆市福康医院",
          "province": "广东省",
          "city": "肇庆市",
          "district": "端州区",
          "address": "前进北路1号(武警支队旁)"
        },
        {
          "_id": 906,
          "name": "浙江黄岩现代妇科医院",
          "province": "浙江省",
          "city": "台州市",
          "district": "黄岩区",
          "address": "世纪大道29号"
        },
        {
          "_id": 907,
          "name": "浙江省玉环县中医院",
          "province": "浙江省",
          "city": "台州市",
          "district": "玉环县",
          "address": "西城路138号"
        },
        {
          "_id": 908,
          "name": "浙江新安国际医院",
          "province": "浙江省",
          "city": "嘉兴市",
          "district": "秀洲区",
          "address": "洪兴路2369号"
        },
        {
          "_id": 909,
          "name": "郑州丰益肛肠医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "二七区",
          "address": "嵩山南路103-6号"
        },
        {
          "_id": 910,
          "name": "郑州华肤皮肤病医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "金水区",
          "address": "南阳路37号"
        },
        {
          "_id": 911,
          "name": "郑州华山医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "中原区",
          "address": "陇海西路180号"
        },
        {
          "_id": 912,
          "name": "郑州华夏中医白癜风医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "管城回族区",
          "address": "紫荆山路与航海路交叉口向南300米路东"
        },
        {
          "_id": 913,
          "name": "郑州集美整形美容医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "管城回族区",
          "address": "西大街238号"
        },
        {
          "_id": 914,
          "name": "郑州金水中医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "金水区",
          "address": "政七街17号(省汇中心对面)"
        },
        {
          "_id": 915,
          "name": "郑州警备区医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "二七区",
          "address": "建设东路34号附8号"
        },
        {
          "_id": 916,
          "name": "郑州丽天整形医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "金水区",
          "address": "经八路17-3号"
        },
        {
          "_id": 917,
          "name": "郑州市二七人民医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "二七区",
          "address": "延陵街19号"
        },
        {
          "_id": 918,
          "name": "郑州西京白癜风医院",
          "province": "河南省",
          "city": "郑州市",
          "district": "二七区",
          "address": "建设东路23号附21号(碧沙岗公园北门斜对面)"
        },
        {
          "_id": 919,
          "name": "中山国丹中医院",
          "province": "广东省",
          "city": "中山市",
          "district": "中山市",
          "address": "沙边路3号"
        },
        {
          "_id": 920,
          "name": "中山和平中医院",
          "province": "广东省",
          "city": "中山市",
          "district": "中山市",
          "address": "小榄镇民安北路45号"
        },
        {
          "_id": 921,
          "name": "中山市阳光门诊部",
          "province": "广东省",
          "city": "中山市",
          "district": "中山市",
          "address": "石岐街道博爱三路沙岗路口(南下新码头对面)"
        },
        {
          "_id": 922,
          "name": "中山现代妇科医院",
          "province": "广东省",
          "city": "中山市",
          "district": "中山市",
          "address": "中山四路12号"
        },
        {
          "_id": 923,
          "name": "舟山市千岛医院",
          "province": "浙江省",
          "city": "舟山市",
          "district": "定海区",
          "address": "千岛路173号附近"
        },
        {
          "_id": 924,
          "name": "舟山新东方专科医院",
          "province": "浙江省",
          "city": "舟山市",
          "district": "定海区",
          "address": "解放西路250-9号"
        },
        {
          "_id": 925,
          "name": "珠海惠爱医院",
          "province": "广东省",
          "city": "珠海市",
          "district": "香洲区",
          "address": "拱北联安路22号水湾酒吧街旁惠爱医院"
        },
        {
          "_id": 926,
          "name": "珠海九龙医院",
          "province": "广东省",
          "city": "珠海市",
          "district": "香洲区",
          "address": "吉大九洲大道中1004号(吉大农行旁)"
        },
        {
          "_id": 927,
          "name": "珠海阳光男科医院",
          "province": "广东省",
          "city": "珠海市",
          "district": "香洲区",
          "address": "九洲大道东1118号(珠海电台对面)"
        },
        {
          "_id": 928,
          "name": "驻马店泌尿专科医院",
          "province": "河南省",
          "city": "驻马店市",
          "district": "驿城区",
          "address": "练江路与文明大道口北100米处"
        },
        {
          "_id": 929,
          "name": "资阳皮肤泌尿专科医院",
          "province": "四川省",
          "city": "资阳市",
          "district": "雁江区",
          "address": "和平南路10号"
        },
        {
          "_id": 930,
          "name": "淄博金盾医院",
          "province": "山东省",
          "city": "淄博市",
          "district": "张店区",
          "address": "潘南西路5号淄博金盾医院(潘南小学向东100米)"
        },
        {
          "_id": 931,
          "name": "淄博丽人医院",
          "province": "山东省",
          "city": "淄博市",
          "district": "张店区",
          "address": "华光路81号"
        },
        {
          "_id": 932,
          "name": "淄博赢和中医医院",
          "province": "山东省",
          "city": "淄博市",
          "district": "张店区",
          "address": "新村西路107号(市博物馆对面)"
        },
        {
          "_id": 933,
          "name": "遵义妇产医院",
          "province": "贵州省",
          "city": "遵义市",
          "district": "汇川区",
          "address": "深圳路145号(茅草铺中心血站旁)"
        },
        {
          "_id": 934,
          "name": "遵义女子医院",
          "province": "贵州省",
          "city": "遵义市",
          "district": "红花岗区",
          "address": "中华北路世贸华庭B栋4单元19-2"
        },
        {
          "_id": 935,
          "name": "杭州萧山华东医院",
          "province": "浙江省",
          "city": "杭州市",
          "district": "萧山区",
          "address": "萧绍路608号(近天虹商场)"
        },
        {
          "_id": 936,
          "name": "深圳昆仑泌尿外科医院",
          "province": "广东省",
          "city": "深圳市",
          "district": "宝安区",
          "address": "宝安大道4003号"
        }
      ]

    }
  }
})
