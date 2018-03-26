var wxCharts = require('./wxcharts-min.js');
var app = getApp();
var ringChart = null;
Page({
  data: {
  },
  touchHandler: function (e) {
    console.log(ringChart.getCurrentDataIndex(e));
  },
  updateData: function () {
    ringChart.updateData({
      title: {
        name: '80%'
      },
      subtitle: {
        color: '#ff0000'
      }
    });
  },
  onReady: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    ringChart = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas',
      type: 'ring',
      extra: {
        ringWidth: 25,
        pie: {
          offsetAngle: -45
        }
      },
      title: {
        name: '',
        color: '#7cb5ec',
        fontSize: 25
      },
      subtitle: {
        name: '',
        color: '#666666',
        fontSize: 15
      },
      series: [{
        name: '实发工资',
        data: 15000,
        color: '#fc6c49',
        stroke: false
      }, {
        name: '其它',
        data: 3000,
        color: '#ad74fe',
        stroke: false
      }, {
        name: '五险一金',
        data: 1200,
        color: '#67c0ff',
        stroke: false
      }, {
        name: '个人所得税',
        data: 323,
        color: '#ffcb21',
        stroke: false
      }],
      disablePieStroke: true,
      width: windowWidth,
      height: 200,
      dataLabel: false,
      legend: false,//下标
      background: '#f5f5f5',
      padding: 0
    });
    ringChart.addEventListener('renderComplete', () => {
      console.log('renderComplete');
    });
    setTimeout(() => {
      ringChart.stopAnimation();
    }, 500);
  }
});