$(function () {


  $(".xuanz").click(function () {
    $(".mask").show();
    $(".xuan_box").show();
  });

  $(".close").click(function () {
    $(".mask").hide();
    $(".xuan_box").hide();
  });


  $(".xuan_box table a").click(function () {
    $(".maskx").show();
    $(".xuanxi").show();
  });

  $(".reelect").click(function () {
    $(".maskx").hide();
    $(".xuanxi").hide();
  });


  $(".xuanxi dd a").click(function () {
    $(".home_ss").val($(this).html());
    $(".mask").hide();
    $(".maskx").hide();
    $(".xuan_box").hide();
    $(".xuanxi").hide();
  });


  $(".esc").click(function () {
    $(".wap_xuan_box").hide();
    $(".wap_xuan_box_c").hide();
    $(this).hide();
  });

  $(".wap_xuan").click(function () {
    $(".wap_xuan_box").show();
    $(".esc").show();
  });

  $(".wap_xuan_box dd li").click(function () {
    $(".wap_xuan_box_c").show();
  });

  $(".wap_xuan_box_c li").click(function () {
    $(".wap_home_ss").val($(this).html());
    $(".wap_xuan_box").hide();
    $(".wap_xuan_box_c").hide();
    $(".esc").hide();
  });

  $("tr:even").css("background", "#f1f1f1");

});

$(function () {
  var tabTitle = ".pro_tab dt a";
  var tabContent = ".pro_dd";
  $(tabTitle + ":first").addClass("hover");
  $(tabContent).not(":first").hide();
  $(tabTitle).unbind("click").bind("click", function () {
    $(this).siblings("a").removeClass("hover").end().addClass("hover");
    var index = $(tabTitle).index($(this));
    $(tabContent).eq(index).siblings(tabContent).hide().end().fadeIn(0);
  });
});

$(function () {
  var tabTitle = ".work_tab dt a";
  var tabContent = ".work_tab dd";
  $(tabTitle + ":first").addClass("hover");
  $(tabContent).not(":first").hide();
  $(tabTitle).unbind("click").bind("click", function () {
    $(this).siblings("a").removeClass("hover").end().addClass("hover");
    var index = $(tabTitle).index($(this));
    $(tabContent).eq(index).siblings(tabContent).hide().end().fadeIn(0);
    if (index === 4) {
      setTimeout(function () {
        myChart0.resize();
        //console.log(1111);
      }, 500)
    }

  });
});

$(function () {
  var tabTitle = ".job_tab li";
  var tabContent = ".job_dd";
  $(tabTitle + ":first").addClass("hover");
  $(tabContent).not(":first").hide();
  $(tabTitle).unbind("click").bind("click", function () {
    $(this).siblings("li").removeClass("hover").end().addClass("hover");
    var index = $(tabTitle).index($(this));
    $(tabContent).eq(index).siblings(tabContent).hide().end().fadeIn(0);
  });
});

//201-11-22
$(function () {
  var tabTitle = ".job_tag li";
  var tabContent = ".job_dd";
  $(tabTitle + ":first").addClass("hover");
  $(tabContent).not(":first").hide();
  $(tabTitle).unbind("click").bind("click", function () {
    var index = $(tabTitle).index($(this)) + 1;
    $(".job_tab li").removeClass("hover");
    $(".job_tab li:eq(" + index + ")").addClass("hover");
    $(tabContent).eq(index).siblings(tabContent).hide().end().fadeIn(0);
  });
});

$(function () {
  var tabTitle = ".trade_tab li";
  var tabContent = ".trade_dd";
  $(tabTitle + ":first").addClass("hover");
  $(tabContent).not(":first").hide();
  $(tabTitle).unbind("click").bind("click", function () {
    $(this).siblings("li").removeClass("hover").end().addClass("hover");
    var index = $(tabTitle).index($(this));
    $(tabContent).eq(index).siblings(tabContent).hide().end().fadeIn(0);
  });
});

$(function () {
  var tabTitle = ".xuanxi dt a";
  var tabContent = ".xuanxi dd";
  $(tabTitle + ":first").addClass("hover");
  $(tabContent).not(":first").hide();
  $(tabTitle).unbind("click").bind("click", function () {
    $(this).siblings("a").removeClass("hover").end().addClass("hover");
    var index = $(tabTitle).index($(this));
    $(tabContent).eq(index).siblings(tabContent).hide().end().fadeIn(0);
  });
});
/*地区 岗位选择*/
$(function () {
  var tabTitle = ".search_bot .search_bot_t";
  var tabContent = ".search_bot_in .search_bot_all";
  $(tabTitle + ":first").removeClass("hide");
  $(tabContent).not(":first").hide();
  $(tabTitle).unbind("click").bind("click", function () {
/*    $(this).siblings("div").addClass("hide").end().removeClass("hide");*/
    var index = $(tabTitle).index($(this));
    $(tabContent).eq(index).siblings(tabContent).hide().end().fadeIn(0);

  });

  /*点击设置地区*/
  $(".search_bot_all_l").find("span").on("click",function() {
    console.log(11);
    $("#my_select").html($(this).html())
    console.log($(this).html());
    $(".search_bot").hide()
  })
  /*点击设置职位*/
  $(".search_bot_all_r").find("span").on("click",function() {
    //console.log(11);
    $("#search_inp").val($(this).html())
    console.log($(this).html());
    $(".search_bot").hide()
  })
/*点击搜索*/
  $("#search_inp_img").on("click",function() {
    $(".search_bot").fadeIn(0);
    $(".search_bot_in").hide()
    $(".search_bot_in_search").fadeIn(0);
  })
});

/*搜索*/
$("#search_inp").focus(function () {
  $(".search_bot").show();
  $(".search_bot_in").show();
})



$(function () {
  if ($(window).width() < 751) {
    var tabTitle = ".tab_tit li";
    var tabContent = ".wap_dd";
    $(tabTitle + ":first").addClass("hover");
    $(tabContent).not(":first").hide();
    $(tabTitle).unbind("click").bind("click", function () {
      $(this).siblings("li").removeClass("hover").end().addClass("hover");
      var index = $(tabTitle).index($(this));
      $(tabContent).eq(index).siblings(tabContent).hide().end().fadeIn(0);
    });
  }

});

/*地图js*/
var myChart0 = "";

$(function () {
  var tabTitle1 = ".self_map a";
  var tabContent1 = ".my_map";
  $(tabTitle1 + ":first").addClass("hover");
  $(tabContent1).not(":first").hide();
  var map_index = "";
  $(tabTitle1).unbind("click").bind("click", function () {
    //  console.log(111);
    /*点击切换*/
    $(this).siblings("a").removeClass("hover").end().addClass("hover");
    map_index = $(tabTitle1).index($(this));
    $(tabContent1).eq(map_index).siblings(tabContent1).hide().end().fadeIn(0);
    $(".my_search").show();
    /*如果为普通图 重置 */
    if (map_index === 0) {
      setTimeout(function () {
        myChart0.resize();
      }, 500)
    }
    /*如果为热力图 重置 */
    if (map_index === 1) {
      setTimeout(function () {
        myChart.resize();
      }, 500)
    }
    /*如果为迁徙图 重置 */
    if (map_index === 2) {
      $($("#move_map")[0]).find(".header");
      $(".my_search").hide();
    }
    /*如果为人员图 重置 */
    if (map_index === 3) {
      mapinit();

    }
    /*如果为图表 重置 */
    if (map_index === 4) {
      $(".my_search").hide();
      setTimeout(function () {
        myChart4_1.resize();
        myChart4_2.resize();
        myChart4_3.resize();
        myChart4_4.resize();
        myChart4_5.resize();
      }, 500)
    }

/*通过判断 map_index的大小来判断*/
    /*热力图全屏*/
    $(".all_print").on("click", function () {

      $(".my_map").removeClass("map_fix").eq(map_index).addClass("map_fix");
      console.log(map_index);
      var all_height = $(window).height();
      var all_width = $(window).width();
      $(".my_map").eq(map_index).height(all_height).width(all_width)
      $(".my_map").eq(map_index).find(".my_map_in").height(all_height).width(all_width)
      setTimeout(function () {
        /*如果为普通图 重置 */
        if (map_index === 0) {
          setTimeout(function () {
            myChart0.resize();
          }, 500)
        }
        /*如果为热力图 重置 */
        if (map_index === 1) {
          setTimeout(function () {
            myChart.resize();
          }, 500)
        }
        /*如果为迁徙图 重置 */
        if (map_index === 2) {
          $($("#move_map")[0]).find(".header");
          $(".my_search").hide();
          $(".my_map").eq(map_index).find("iframe").height(all_height).width(all_width);
          document.getElementById('move_map').src("http://qianxi.baidu.com/?qq-pf-to=pcqq.c2c1").reload(true);
        }
        /*如果为r人员图 重置 */
        if (map_index === 3) {
          mapinit();

        }
        /*如果为图表 重置 */
        if (map_index === 4) {
          $(".my_search").hide();
            myChart4_1.resize();
            myChart4_2.resize();
            myChart4_3.resize();
            myChart4_4.resize();
            myChart4_5.resize();
        }
      }, 500)

    })
  });
  /*热力图全屏*/
  /*  $(".all_print").on("click",function() {
   var all_height=$(window).height();
   var all_width=$(window).width();

   $("#container").height(all_height)
   $("#container").width(all_width)
   $("canvas").height(all_height)
   $("canvas").width(all_width)
   setTimeout(function() {
   myChart.resize();
   },500)

   })*/
  /*热力图*/
  var dom = document.getElementById("container");
  var myChart = echarts.init(dom);
  var app = {};
  var option = null;
  app.title = '热力图与百度地图扩展';

  $.get('data.json', function (data) {
    var data = eval("(" + data + ")");
    var points = [].concat.apply([], data.map(function (track) {
      return track.map(function (seg) {
        return seg.coord.concat([1]);
      });
    }));
    myChart.setOption(option = {
      animation: false,
      bmap: {
        center: [120.13066322374, 30.240018034923],
        zoom: 13,
        roam: true
      },
      visualMap: {
        show: false,
        top: 'top',
        min: 0,
        max: 5,
        seriesIndex: 0,
        calculable: true,
        inRange: {
          color: ['blue', 'blue', 'green', 'yellow', 'red']
        }
      },
      series: [{
        type: 'heatmap',
        coordinateSystem: 'bmap',
        data: points,
        pointSize: 5,
        blurSize: 6
      }]
    });
    // 处理点击事件并且跳转到相应的百度搜索页面
    myChart.on('click', function (params) {
      window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
    });
    if (!app.inNode) {
      // 添加百度地图插件
      var bmap = myChart.getModel().getComponent('bmap').getBMap();
      bmap.addControl(new BMap.MapTypeControl());
    }
  }, "text");
  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }


  $(function () {
    /*普通图*/
    var dom0 = document.getElementById("container0");
    myChart0 = echarts.init(dom0);
    var app = {};
    var option = null;
    app.title = '热力图与百度地图扩展';

    $.get('data.json', function (data) {
      var data = eval("(" + data + ")");
      var points = [].concat.apply([], data.map(function (track) {
        return track.map(function (seg) {
          return seg.coord.concat([1]);
        });
      }));
      myChart0.setOption(option = {
        animation: false,
        bmap: {
          center: [116.4046150000, 39.9141790000],
          zoom: 10,
          roam: true
        },
        visualMap: {
          show: false,
          top: 'top',
          min: 0,
          max: 5,
          seriesIndex: 0,
          calculable: true,
          inRange: {
            color: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)']
          }
        },
        series: [{
          type: 'heatmap',
          coordinateSystem: 'bmap',
          data: points,
          pointSize: 5,
          blurSize: 6
        }]
      });
      // 处理点击事件并且跳转到相应的百度搜索页面
      myChart0.on('click', function (params) {
        window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
      });
      if (!app.inNode) {
        // 添加百度地图插件
        var bmap = myChart0.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl());
      }
    }, "text");
    if (option && typeof option === "object") {
      myChart0.setOption(option, true);
    }
  })


  /*迁徙图*/
  /*  var myChart2 = "";
   $(function() {
   var dom2 = document.getElementById('container2');
   myChart2 = echarts.init(dom2);
   var option = null;

   var geoCoordMap = {
   '上海': [121.4648, 31.2891],
   '东莞': [113.8953, 22.901],
   '东营': [118.7073, 37.5513],
   '中山': [113.4229, 22.478],
   '临汾': [111.4783, 36.1615],
   '临沂': [118.3118, 35.2936],
   '丹东': [124.541, 40.4242],
   '丽水': [119.5642, 28.1854],
   '乌鲁木齐': [87.9236, 43.5883],
   '佛山': [112.8955, 23.1097],
   '保定': [115.0488, 39.0948],
   '兰州': [103.5901, 36.3043],
   '包头': [110.3467, 41.4899],
   '北京': [116.4551, 40.2539],
   '北海': [109.314, 21.6211],
   '南京': [118.8062, 31.9208],
   '南宁': [108.479, 23.1152],
   '南昌': [116.0046, 28.6633],
   '南通': [121.1023, 32.1625],
   '厦门': [118.1689, 24.6478],
   '台州': [121.1353, 28.6688],
   '合肥': [117.29, 32.0581],
   '呼和浩特': [111.4124, 40.4901],
   '咸阳': [108.4131, 34.8706],
   '哈尔滨': [127.9688, 45.368],
   '唐山': [118.4766, 39.6826],
   '嘉兴': [120.9155, 30.6354],
   '大同': [113.7854, 39.8035],
   '大连': [122.2229, 39.4409],
   '天津': [117.4219, 39.4189],
   '太原': [112.3352, 37.9413],
   '威海': [121.9482, 37.1393],
   '宁波': [121.5967, 29.6466],
   '宝鸡': [107.1826, 34.3433],
   '宿迁': [118.5535, 33.7775],
   '常州': [119.4543, 31.5582],
   '广州': [113.5107, 23.2196],
   '廊坊': [116.521, 39.0509],
   '延安': [109.1052, 36.4252],
   '张家口': [115.1477, 40.8527],
   '徐州': [117.5208, 34.3268],
   '德州': [116.6858, 37.2107],
   '惠州': [114.6204, 23.1647],
   '成都': [103.9526, 30.7617],
   '扬州': [119.4653, 32.8162],
   '承德': [117.5757, 41.4075],
   '拉萨': [91.1865, 30.1465],
   '无锡': [120.3442, 31.5527],
   '日照': [119.2786, 35.5023],
   '昆明': [102.9199, 25.4663],
   '杭州': [119.5313, 29.8773],
   '枣庄': [117.323, 34.8926],
   '柳州': [109.3799, 24.9774],
   '株洲': [113.5327, 27.0319],
   '武汉': [114.3896, 30.6628],
   '汕头': [117.1692, 23.3405],
   '江门': [112.6318, 22.1484],
   '沈阳': [123.1238, 42.1216],
   '沧州': [116.8286, 38.2104],
   '河源': [114.917, 23.9722],
   '泉州': [118.3228, 25.1147],
   '泰安': [117.0264, 36.0516],
   '泰州': [120.0586, 32.5525],
   '济南': [117.1582, 36.8701],
   '济宁': [116.8286, 35.3375],
   '海口': [110.3893, 19.8516],
   '淄博': [118.0371, 36.6064],
   '淮安': [118.927, 33.4039],
   '深圳': [114.5435, 22.5439],
   '清远': [112.9175, 24.3292],
   '温州': [120.498, 27.8119],
   '渭南': [109.7864, 35.0299],
   '湖州': [119.8608, 30.7782],
   '湘潭': [112.5439, 27.7075],
   '滨州': [117.8174, 37.4963],
   '潍坊': [119.0918, 36.524],
   '烟台': [120.7397, 37.5128],
   '玉溪': [101.9312, 23.8898],
   '珠海': [113.7305, 22.1155],
   '盐城': [120.2234, 33.5577],
   '盘锦': [121.9482, 41.0449],
   '石家庄': [114.4995, 38.1006],
   '福州': [119.4543, 25.9222],
   '秦皇岛': [119.2126, 40.0232],
   '绍兴': [120.564, 29.7565],
   '聊城': [115.9167, 36.4032],
   '肇庆': [112.1265, 23.5822],
   '舟山': [122.2559, 30.2234],
   '苏州': [120.6519, 31.3989],
   '莱芜': [117.6526, 36.2714],
   '菏泽': [115.6201, 35.2057],
   '营口': [122.4316, 40.4297],
   '葫芦岛': [120.1575, 40.578],
   '衡水': [115.8838, 37.7161],
   '衢州': [118.6853, 28.8666],
   '西宁': [101.4038, 36.8207],
   '西安': [109.1162, 34.2004],
   '贵阳': [106.6992, 26.7682],
   '连云港': [119.1248, 34.552],
   '邢台': [114.8071, 37.2821],
   '邯郸': [114.4775, 36.535],
   '郑州': [113.4668, 34.6234],
   '鄂尔多斯': [108.9734, 39.2487],
   '重庆': [107.7539, 30.1904],
   '金华': [120.0037, 29.1028],
   '铜川': [109.0393, 35.1947],
   '银川': [106.3586, 38.1775],
   '镇江': [119.4763, 31.9702],
   '长春': [125.8154, 44.2584],
   '长沙': [113.0823, 28.2568],
   '长治': [112.8625, 36.4746],
   '阳泉': [113.4778, 38.0951],
   '青岛': [120.4651, 36.3373],
   '韶关': [113.7964, 24.7028]
   };

   var BJData = [
   [{
   name: '北京'
   }, {
   name: '上海',
   value: 95
   }],
   [{
   name: '北京'
   }, {
   name: '广州',
   value: 90
   }],
   [{
   name: '北京'
   }, {
   name: '大连',
   value: 80
   }],
   [{
   name: '北京'
   }, {
   name: '南宁',
   value: 70
   }],
   [{
   name: '北京'
   }, {
   name: '南昌',
   value: 60
   }],
   [{
   name: '北京'
   }, {
   name: '拉萨',
   value: 50
   }],
   [{
   name: '北京'
   }, {
   name: '长春',
   value: 40
   }],
   [{
   name: '北京'
   }, {
   name: '包头',
   value: 30
   }],
   [{
   name: '北京'
   }, {
   name: '重庆',
   value: 20
   }],
   [{
   name: '北京'
   }, {
   name: '常州',
   value: 10
   }]
   ];

   var SHData = [
   [{
   name: '上海'
   }, {
   name: '包头',
   value: 95
   }],
   [{
   name: '上海'
   }, {
   name: '昆明',
   value: 90
   }],
   [{
   name: '上海'
   }, {
   name: '广州',
   value: 80
   }],
   [{
   name: '上海'
   }, {
   name: '郑州',
   value: 70
   }],
   [{
   name: '上海'
   }, {
   name: '长春',
   value: 60
   }],
   [{
   name: '上海'
   }, {
   name: '重庆',
   value: 50
   }],
   [{
   name: '上海'
   }, {
   name: '长沙',
   value: 40
   }],
   [{
   name: '上海'
   }, {
   name: '北京',
   value: 30
   }],
   [{
   name: '上海'
   }, {
   name: '丹东',
   value: 20
   }],
   [{
   name: '上海'
   }, {
   name: '大连',
   value: 10
   }]
   ];

   var GZData = [
   [{
   name: '广州'
   }, {
   name: '福州',
   value: 95
   }],
   [{
   name: '广州'
   }, {
   name: '太原',
   value: 90
   }],
   [{
   name: '广州'
   }, {
   name: '长春',
   value: 80
   }],
   [{
   name: '广州'
   }, {
   name: '重庆',
   value: 70
   }],
   [{
   name: '广州'
   }, {
   name: '西安',
   value: 60
   }],
   [{
   name: '广州'
   }, {
   name: '成都',
   value: 50
   }],
   [{
   name: '广州'
   }, {
   name: '常州',
   value: 40
   }],
   [{
   name: '广州'
   }, {
   name: '北京',
   value: 30
   }],
   [{
   name: '广州'
   }, {
   name: '北海',
   value: 20
   }],
   [{
   name: '广州'
   }, {
   name: '海口',
   value: 10
   }]
   ];

   var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

   var convertData = function(data) {
   var res = [];
   for (var i = 0; i < data.length; i++) {
   var dataItem = data[i];
   var fromCoord = geoCoordMap[dataItem[0].name];
   var toCoord = geoCoordMap[dataItem[1].name];
   if (fromCoord && toCoord) {
   res.push({
   fromName: dataItem[0].name,
   toName: dataItem[1].name,
   coords: [fromCoord, toCoord]
   });
   }
   }
   return res;
   };

   var color = ['#a6c84c', '#ffa022', '#46bee9'];
   var series = [];
   [
   ['北京', BJData],
   ['上海', SHData],
   ['广州', GZData]
   ].forEach(function(item, i) {
   series.push({
   name: item[0] + ' Top10',
   type: 'lines',
   zlevel: 1,
   effect: {
   show: true,
   period: 6,
   trailLength: 0.7,
   color: '#fff',
   symbolSize: 3
   },
   lineStyle: {
   normal: {
   color: color[i],
   width: 0,
   curveness: 0.2
   }
   },
   data: convertData(item[1])
   }, {
   name: item[0] + ' Top10',
   type: 'lines',
   zlevel: 2,
   symbol: ['none', 'arrow'],
   symbolSize: 10,
   effect: {
   show: true,
   period: 6,
   trailLength: 0,
   symbol: planePath,
   symbolSize: 15
   },
   lineStyle: {
   normal: {
   color: color[i],
   width: 1,
   opacity: 0.6,
   curveness: 0.2
   }
   },
   data: convertData(item[1])
   }, {
   name: item[0] + ' Top10',
   type: 'effectScatter',
   coordinateSystem: 'geo',
   zlevel: 2,
   rippleEffect: {
   brushType: 'stroke'
   },
   label: {
   normal: {
   show: true,
   position: 'right',
   formatter: '{b}'
   }
   },
   symbolSize: function(val) {
   return val[2] / 8;
   },
   itemStyle: {
   normal: {
   color: color[i]
   }
   },
   data: item[1].map(function(dataItem) {
   return {
   name: dataItem[1].name,
   value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
   };
   })
   });
   });

   option = {
   backgroundColor: '#000',
   title: {
   text: '人员迁徙',
   subtext: '',
   left: 'center',
   textStyle: {
   color: '#fff'
   }
   },
   tooltip: {
   trigger: 'item'
   },
   legend: {
   orient: 'vertical',
   top: 'bottom',
   left: 'right',
   data: ['北京 Top10', '上海 Top10', '广州 Top10'],
   textStyle: {
   color: '#fff'
   },
   selectedMode: true,
   },
   geo: {
   map: 'china',
   label: {
   emphasis: {
   show: false
   }
   },
   roam: true,
   itemStyle: {
   normal: {
   areaColor: '#eee',
   borderColor: '#404a59'
   },
   emphasis: {
   areaColor: '#ccc'
   }
   }
   },
   series: series
   };


   myChart2.setOption(option)

   });*/
  if (option && typeof option === "object") {
    myChart0.setOption(option, true);
  }


  var markerArr = [
    {
      title: "名称：销售代表",
      point: "113.264531,23.157003",
      address: "广东省广州市广州 ",
      tel: "13845123751",
      type: "0"
    },
    {
      title: "名称：中级销售代表",
      point: "113.300934,23.113401",
      address: "广东省广州市 ",
      tel: "15231479524",
      type: "25"
    },
    {
      title: "名称：互联网销售",
      point: "113.330934,23.113401",
      address: "广东省广州市",
      tel: "18823679524",
      type: "50"
    },
    {
      title: "名称：渠道销售代表",
      point: "113.312213,23.147267",
      address: "广东省广州市广州",
      tel: "13932185427",
      type: "75"
    },
    {
      title: "名称：总销售代表",
      point: "113.372867,23.134274",
      address: "广东省广州市",
      tel: "15631752361",
      type: "100"
    }
  ];

  var map; //Map实例
  var mapinit =  function map_init() {
    map = new BMap.Map("map");
    //第1步：设置地图中心点，广州市
    var point = new BMap.Point(113.312213, 23.147267);
    //第2步：初始化地图,设置中心点坐标和地图级别。
    map.centerAndZoom(point, 12);
    //第3步：启用滚轮放大缩小
    map.enableScrollWheelZoom(true);
    //第4步：向地图中添加缩放控件
    var ctrlNav = new window.BMap.NavigationControl({
      anchor: BMAP_ANCHOR_TOP_LEFT,
      type: BMAP_NAVIGATION_CONTROL_LARGE
    });
    map.addControl(ctrlNav);
    //第5步：向地图中添加缩略图控件
    var ctrlOve = new window.BMap.OverviewMapControl({
      anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
      isOpen: 1
    });
    map.addControl(ctrlOve);

    //第6步：向地图中添加比例尺控件
    var ctrlSca = new window.BMap.ScaleControl({
      anchor: BMAP_ANCHOR_BOTTOM_LEFT
    });
    map.addControl(ctrlSca);

    //第7步：绘制点
    for (var i = 0; i < markerArr.length; i++) {
      var p0 = markerArr[i].point.split(",")[0];
      var p1 = markerArr[i].point.split(",")[1];
      var maker = addMarker(new window.BMap.Point(p0, p1), markerArr[i].type);
      addInfoWindow(maker, markerArr[i], i);
    }
  }

  // 添加标注
  function addMarker(point, index) {
    var myIcon = new BMap.Icon("./images/point.png",
     new BMap.Size(40, 25), {
       offset: new BMap.Size(50, 150),
       imageOffset: new BMap.Size(0, -index)
     });
    var marker = new BMap.Marker(point, {icon: myIcon});
    map.addOverlay(marker);
    return marker;
  }

  // 添加信息窗口
  function addInfoWindow(marker, poi) {
    //pop弹窗标题
    var title = '<div style="font-weight:bold;color:#CE5521;font-size:14px">' + poi.title + '</div>';
    //pop弹窗信息
    var html = [];
    html.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px arial,simsun,sans-serif"><tbody>');
    html.push('<tr>');
    html.push('<td style="vertical-align:top;line-height:16px;width:38px;white-space:nowrap;word-break:keep-all">地址:</td>');
    html.push('<td style="vertical-align:top;line-height:16px">' + poi.address + ' </td>');
    html.push('</tr>');
    html.push('<tr>');
    html.push('<td style="vertical-align:top;line-height:16px;width:38px;white-space:nowrap;word-break:keep-all">状态:</td>');
    html.push('<td style="vertical-align:top;line-height:16px">' + poi.tel + ' </td>');
    html.push('</tr>');
    html.push('</tbody></table>');
    var infoWindow = new BMap.InfoWindow(html.join(""), {
      title: title,
      width: 200
    });

    var openInfoWinFun = function () {
      marker.openInfoWindow(infoWindow);
    };
    marker.addEventListener("click", openInfoWinFun);
    return openInfoWinFun;
  }

  //异步调用百度js
  /*  function map_load() {
   var load = document.createElement("script");
   load.src = "http://api.map.baidu.com/api?v=1.4&callback=map_init";
   document.body.appendChild(load);
   }
   window.onload = map_load;*/





  var myChart4_1;
  /*基本数据展示*/
  $(function () {
    var dom4_1 = document.getElementById("container4_1");
    myChart4_1 = echarts.init(dom4_1);
    var option = {
      title: {
        text: '学历分布情况',
        subtext: '',
        left: '10%',
        top: 'top'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: ['北京', '上海', '成都', '西安', '石家庄'],
        left: '10%',
        width: '80%',
        orient: 'vertical',
        left: 'left',
        top: '10%'
      },
      series: [
        {
          name: '预期',
          type: 'funnel',
          left: '10%',
          width: '80%',
          sort: 'ascending',
          label: {
            normal: {},
            emphasis: {
              position: 'inside',
              formatter: '{b}预期: {c}%'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              opacity: 0.7
            }
          },
          data: [
            {value: 10, name: '成都'},
            {value: 40, name: '西安'},
            {value: 20, name: '石家庄'},
            {value: 80, name: '上海'},
            {value: 100, name: '北京'}
          ]
        },
        {
          name: '实际',
          type: 'funnel',
          left: '10%',
          width: '80%',
          maxSize: '80%',
          sort: 'ascending',
          label: {
            normal: {
              position: 'inside',
              formatter: '{c}%',
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              position: 'inside',
              formatter: '{b}实际: {c}%'
            }
          },
          itemStyle: {
            normal: {
              opacity: 0.5,
              borderColor: '#fff',
              borderWidth: 2
            }
          },
          data: [
            {value: 30, name: '成都'},
            {value: 110, name: '西安'},
            {value: 115, name: '石家庄'},
            {value: 50, name: '上海'},
            {value: 80, name: '北京'}
          ]
        }
      ]
    };
    myChart4_1.setOption(option)
  })


  var myChart4_2;
  /*基本数据展示*/
  $(function () {
    var dom4_2 = document.getElementById("container4_2");
    myChart4_2 = echarts.init(dom4_2);
    var app = {};
    var option = null;
    app.title = '图表';
    option = {
      title: {
        text: '漏斗图(对比)',
        /*  subtext: '纯属虚构',*/
        left: '10%',
        top: 'top'
      },
      grid: {
        top: 80,
        bottom: 30
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        top: 'center',
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: '10%',
        data: ['北京', '上海', '成都', '西安', '石家庄']
      },
      calculable: true,
      series: [
        {
          name: '漏斗图',
          type: 'funnel',
          width: '40%',
          height: '45%',
          left: '5%',
          top: '50%',
          funnelAlign: 'right',

          center: ['25%', '25%'],  // for pie

          data: [
            {value: 60, name: '成都'},
            {value: 30, name: '西安'},
            {value: 10, name: '石家庄'},
            {value: 80, name: '上海'},
            {value: 100, name: '北京'}
          ]
        },
        {
          name: '金字塔',
          type: 'funnel',
          width: '40%',
          height: '45%',
          left: '5%',
          top: '5%',
          sort: 'ascending',
          funnelAlign: 'right',
          center: ['25%', '75%'],  // for pie
          data: [
            {value: 60, name: '成都'},
            {value: 30, name: '西安'},
            {value: 10, name: '石家庄'},
            {value: 80, name: '上海'},
            {value: 100, name: '北京'}
          ]
        },
        {
          name: '漏斗图',
          type: 'funnel',
          width: '40%',
          height: '45%',
          left: '55%',
          top: '5%',
          funnelAlign: 'left',

          center: ['75%', '25%'],  // for pie

          data: [
            {value: 60, name: '成都'},
            {value: 30, name: '西安'},
            {value: 10, name: '石家庄'},
            {value: 80, name: '上海'},
            {value: 100, name: '北京'}
          ]
        },
        {
          name: '金字塔',
          type: 'funnel',
          width: '40%',
          height: '45%',
          left: '55%',
          top: '50%',
          sort: 'ascending',
          funnelAlign: 'left',

          center: ['75%', '75%'],  // for pie
          data: [
            {value: 60, name: '成都'},
            {value: 30, name: '西安'},
            {value: 10, name: '石家庄'},
            {value: 80, name: '上海'},
            {value: 100, name: '北京'}
          ]
        }
      ]
    }
    myChart4_2.setOption(option)
  })

  var myChart4_3;
  /*基本数据展示*/
  $(function () {
    var dom4_3 = document.getElementById("container4_3");
    myChart4_3 = echarts.init(dom4_3);
    var labelRight = {
      normal: {
        position: 'right'
      }
    };
    var option = {
      title: {
        text: '学历分布情况',
        subtext: '',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: 80,
        bottom: 30
      },
      xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {lineStyle: {type: 'dashed'}},
      },
      yAxis: {
        type: 'category',
        axisLine: {show: false},
        axisLabel: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},
        data: ['培训专员/助理', '培训专员/助理', '人力资源专员/助理', '人力资源专员/助理', '培训经理/主管', '培训经理/主管', '人力资源主管', '人力资源主管', '人力资源总监', '人力资源总监']
      },
      series: [
        {
          name: '求职人数',
          type: 'bar',
          stack: '总数',
          label: {
            normal: {
              show: true,
              formatter: '{b}'
            }
          },
          data: [
            {value: -700, label: labelRight},
            {value: -900, label: labelRight},
            {value: -900, label: labelRight},
            {value: -900, label: labelRight},
            {value: 300},
            {value: -700, label: labelRight},
            {value: 360},
            {value: -300, label: labelRight},
            {value: -700, label: labelRight},
            {value: -360, label: labelRight},
          ]
        }
      ]
    };
    myChart4_3.setOption(option)
  });

  var myChart4_4;
  /*基本数据展示*/
  $(function () {
    var dom4_4 = document.getElementById("container4_4");
    myChart4_4 = echarts.init(dom4_4);
    var option = {
      title: {
        text: '学历分布情况',
        subtext: '',
        x: '10%',
        y: 'top'
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,250,0.2)'
      },
      legend: {
        data: (function () {
          var list = [];
          for (var i = 1; i <= 28; i++) {
            list.push((i + 2000) + '');
          }
          return [];
        })()
      },
      visualMap: {
        color: ['red', 'yellow']
      },
      radar: {
        indicator: [
          {text: 'IE8-', max: 400},
          {text: 'IE9+', max: 400},
          {text: 'Safari', max: 400},
          {text: 'Firefox', max: 400},
          {text: 'Chrome', max: 400}
        ]
      },
      series: (function () {
        var series = [];
        for (var i = 1; i <= 28; i++) {
          series.push({
            name: i + 2000,
            type: 'radar',
            symbol: 'none',
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1
                }
              },
              emphasis: {
                areaStyle: {color: 'rgba(0,250,0,0.3)'}
              }
            },
            data: [
              {
                value: [
                  (40 - i) * 10,
                  (38 - i) * 4 + 60,
                  i * 5 + 10,
                  i * 9,
                  i * i / 2
                ],
                name: i + 2000
              }
            ]
          });
        }
        return series;
      })()
    };
    myChart4_4.setOption(option)

  })

  var myChart4_5;
  /*基本数据展示*/
  $(function () {
    var dom4_5 = document.getElementById("container4_5");
    myChart4_5 = echarts.init(dom4_5);
    app.title = '';
    var option = {
      title: {
        text: '薪酬分布情况',
        subtext: '',
        x: '10%',
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'right',
        data: [ ]
      },
      series: [
        {
          name: '来源',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '25%'],

          label: {
            normal: {
              position: 'inner'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {value: 335, name: '知乎', selected: true},
            {value: 679, name: '微博'},
            {value: 1548, name: '豆瓣'}
          ]
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['30%', '40%'],
          label: {
            normal: {
              formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              backgroundColor: '#eee',
              borderColor: '#aaa',
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: '#999',
                  lineHeight: 22,
                  align: 'center'
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: '#aaa',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: '#eee',
                  backgroundColor: '#334455',
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            }
          },
          data: [
            {value: 335, name: '知乎'},
            {value: 310, name: '微博'},
            {value: 234, name: '微博'},
            {value: 135, name: '微博'},
            {value: 1048, name: '百度'},
            {value: 251, name: '谷歌'},
            {value: 147, name: '必应'},
            {value: 102, name: '其他'}
          ]
        }
      ]
    };
    myChart4_5.setOption(option)
  })
});
