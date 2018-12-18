var express = require('express');
var router = express.Router();

// 获取滚动提示信息
router.get('/index/firework-backend/app/notice', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [
      {
        desc:
          '欢迎登录弹屏系统,如果您刚注册账号,需要联系对应主管添加权限，系统操作问题，另外可以申请加入弹屏系统群，参考群公告文档',
        id: 2,
        name: 'welcome1'
      },
      { id: 0 }
    ]
  });
});

// 获取AppList
router.get('/index/firework-backend/app/list', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [
      { desc: '喜马拉雅主app', id: 1, name: 'main_app' },
      { desc: '喜马拉雅企业版', id: 9, name: 'enterprise_app' },
      { desc: '喜马拉雅国际版', id: 1999, name: 'himalaya_app' },
      { desc: '喜马拉雅儿童版', id: 6666, name: 'kid_app' }
    ]
  });
});

// 获取状态
router.get('/index/firework-backend/plan/getStatus', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [
      { desc: '创建中', id: 1, name: 'init' },
      { desc: '待审核', id: 2, name: 'audit' },
      { desc: '审核成功，投放中', id: 3, name: 'audit_success' },
      { desc: '审核不通过', id: 4, name: 'audit_fail' },
      { desc: '撤销', id: 5, name: 'cancle' },
      { desc: '投放中止', id: 6, name: 'suspend' },
      { desc: '已过期', id: 7, name: 'expired' },
      { desc: '修改中', id: 8, name: 'modify' },
      { desc: '废弃', id: 9, name: 'discard' }
    ]
  });
});

// 获取投放地址
router.get('/index/firework-backend/location/list', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: [
        {
          appId: 1,
          disName: 'Demo首页',
          fireworkCountOneDay: 3,
          id: 62,
          intervalSeconds: 3600,
          iosValue: 'iting://firework?className=XMRootViewController',
          platform: 2
        },
        {
          appId: 1,
          disName: 'Demo页面',
          fireworkCountOneDay: 3,
          id: 58,
          intervalSeconds: 3600,
          iosValue: 'iting://firework?className=XMViewController',
          platform: 2
        },
        {
          appId: 1,
          disName: '商业财经',
          fireworkCountOneDay: 2,
          id: 55,
          intervalSeconds: 3600,
          iosValue:
            'iting://firework?className=XMCategoryRecViewController&title=商业财经',
          platform: 2
        },
        {
          androidValue:
            'com.ximalaya.ting.android.main.fragment.myspace.child.ManageCenterFragment1:主播工作台',
          appId: 1,
          disName: '主播工作台',
          fireworkCountOneDay: 10,
          id: 54,
          intervalSeconds: 3600,
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.live.fragment.LiveAudioFragment:直播',
          appId: 1,
          disName: 'APP顶部-直播',
          fireworkCountOneDay: 10,
          id: 53,
          intervalSeconds: 6,
          iosValue: 'iting://firework?className=XMLiveHomeViewController',
          platform: 1
        },
        {
          appId: 1,
          disName: 'APP顶部-广播',
          fireworkCountOneDay: 5,
          id: 52,
          intervalSeconds: 3600,
          iosValue: 'iting://firework?className=XMLiveRadioViewController',
          platform: 2
        },
        {
          androidValue:
            'com.ximalaya.ting.android.main.fragment.find.child.RecommendFragment:recommend',
          appId: 1,
          disName: 'App顶部-推荐',
          fireworkCountOneDay: 5,
          id: 51,
          intervalSeconds: 3600,
          iosValue: 'iting://firework?className=XMFindRecommendViewController',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.weike.fragment.homepage.WeikeHomePageFragment:微课首页',
          appId: 1,
          disName: 'live学院',
          fireworkCountOneDay: 4,
          id: 48,
          intervalSeconds: 3600,
          iosValue: 'iting://firework?className=XMWeKeHomePage',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.main.categoryModule.fragment.CategoryRecommendFragment:相声',
          appId: 1,
          disName: 'APP顶部-相声',
          fireworkCountOneDay: 2,
          id: 43,
          intervalSeconds: 20,
          iosValue:
            'iting://firework?className=XMCategoryRecViewController&title=相声',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.main.fragment.find.other.fantasy.BoutiqueFragment:BoutiqueFragment',
          appId: 1,
          disName: 'APP顶部-精品',
          fireworkCountOneDay: 3,
          id: 42,
          intervalSeconds: 0,
          iosValue: 'iting://firework?className=XMPaidRecViewController',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.main.categoryModule.fragment.CategoryRecommendFragment:儿童',
          appId: 1,
          disName: 'APP顶部-儿童',
          fireworkCountOneDay: 3,
          id: 41,
          intervalSeconds: 0,
          iosValue:
            'iting://firework?className=XMCategoryRecViewController&title=儿童',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.main.categoryModule.fragment.CategoryRecommendFragment:小说',
          appId: 1,
          disName: 'APP顶部-小说',
          fireworkCountOneDay: 2,
          id: 40,
          intervalSeconds: 0,
          iosValue:
            'iting://firework?className=XMCategoryRecViewController&title=小说',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.main.fragment.find.vip.VipFragment:VipFragment',
          appId: 1,
          disName: 'APP顶部-vip',
          fireworkCountOneDay: 2,
          id: 39,
          intervalSeconds: 0,
          iosValue: 'iting://firework?className=XMVipChannelViewController',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.main.playModule.PlayFragment:play',
          appId: 1,
          disName: 'APP底部-播放页',
          fireworkCountOneDay: 10,
          id: 38,
          intervalSeconds: 100,
          iosValue: 'iting://firework?className=XMPlayingViewController',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.main.categoryModule.fragment.CategoryRecommendFragment:段子',
          appId: 1,
          disName: 'APP顶部-段子',
          fireworkCountOneDay: 6,
          id: 35,
          intervalSeconds: 10,
          iosValue:
            'iting://firework?className=XMCategoryRecViewController&title=段子',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.live.fragment.LiveAudioFragment:直播首页',
          appId: 1,
          disName: 'APP顶部-直播-tab',
          fireworkCountOneDay: 8,
          id: 34,
          intervalSeconds: 10,
          iosValue: 'iting://firework?className=XMLiveHomeViewController',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.main.fragment.myspace.MySpaceFragment:我的',
          appId: 1,
          disName: 'APP底部-我的',
          fireworkCountOneDay: 2,
          id: 33,
          intervalSeconds: 10,
          iosValue: 'iting://firework?className=XMMeViewController',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.feed.fragment.FeedHomeFragment:发现页',
          appId: 1,
          disName: 'APP底部-发现',
          fireworkCountOneDay: 2,
          id: 32,
          intervalSeconds: 10,
          iosValue: 'iting://firework?className=XMNewDiscoveryViewController',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.main.fragment.child.ListenNoteFragment:ListenNoteFragment',
          appId: 1,
          disName: 'APP底部-我听',
          fireworkCountOneDay: 10,
          id: 31,
          intervalSeconds: 1,
          iosValue: 'iting://firework?className=XMHearViewController',
          platform: 1
        },
        {
          androidValue:
            'com.ximalaya.ting.android.main.fragment.find.child.RecommendFragment:recommend',
          appId: 1,
          disName: 'APP左上角-首页-推荐',
          fireworkCountOneDay: 10,
          id: 30,
          intervalSeconds: 10,
          iosValue: 'iting://firework?className=XMFindRecommendViewController',
          platform: 1
        }
      ],
      maxPageId: 1,
      pageId: 1,
      pageSize: 1000,
      totalCount: 20
    }
  });
});

// 获取首页Table
router.get('/index/firework-backend/plan/list', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: [
        {
          appId: 1,
          clientId: 516,
          createAt: '2018-12-17 18:06:25',
          creator: '蒋飙',
          detail: 'tan屏测试changelog1',
          endAt: '2018-12-28 17:42:47',
          id: 524,
          jumpCount: 0,
          name: 'tan屏测试changelog1',
          openCount: 0,
          startAt: '2018-12-13 17:42:45',
          status: '投放中止',
          statusEn: 'suspend',
          updateAt: '2018-12-17 18:36:11'
        },
        {
          appId: 1,
          clientId: 523,
          createAt: '2018-12-17 17:47:54',
          creator: '蒋飙',
          detail: '弹屏修改内容1',
          endAt: '2018-12-31 17:47:46',
          id: 523,
          jumpCount: 0,
          name: '弹屏修改内容1',
          openCount: 0,
          startAt: '2018-12-17 17:47:43',
          status: '投放中止',
          statusEn: 'suspend',
          updateAt: '2018-12-17 18:06:13'
        },
        {
          appId: 1,
          clientId: 522,
          createAt: '2018-12-17 17:00:37',
          creator: '蒋飙',
          detail: 'system auto create',
          endAt: '2018-12-18 17:00:14',
          id: 522,
          jumpCount: 0,
          name: 'wwwtest',
          openCount: 0,
          startAt: '2018-12-17 17:00:09',
          status: '投放中止',
          statusEn: 'suspend',
          type: 1,
          updateAt: '2018-12-17 17:10:02'
        },
        {
          appId: 1,
          clientId: 521,
          createAt: '2018-12-17 11:33:51',
          creator: '蒋飙',
          detail: '弹屏发布订阅',
          endAt: '2018-12-25 11:33:42',
          id: 521,
          jumpCount: 0,
          name: '弹屏发布订阅',
          openCount: 0,
          startAt: '2018-12-17 11:33:38',
          status: '投放中止',
          statusEn: 'suspend',
          updateAt: '2018-12-17 20:07:58'
        },
        {
          appId: 1,
          clientId: 518,
          createAt: '2018-12-14 17:45:45',
          creator: '蒋飙',
          detail: '弹屏修改内容测试监听者',
          endAt: '2018-12-14 17:53:03',
          id: 519,
          jumpCount: 0,
          name: '弹屏修改内容测试监听者',
          openCount: 0,
          startAt: '2018-12-14 17:41:01',
          status: '投放中止',
          statusEn: 'suspend',
          updateAt: '2018-12-14 17:47:17'
        },
        {
          appId: 1,
          clientId: 514,
          createAt: '2018-12-13 16:52:56',
          creator: '蒋飙',
          detail: '二级页面弹屏3',
          endAt: '2018-12-14 16:50:41',
          id: 515,
          jumpCount: 0,
          name: '二级页面弹屏3',
          openCount: 0,
          startAt: '2018-12-12 16:50:39',
          status: '投放中止',
          statusEn: 'suspend',
          updateAt: '2018-12-13 17:06:25'
        },
        {
          appId: 1,
          clientId: 513,
          createAt: '2018-12-13 16:44:28',
          creator: '蒋飙',
          detail: '二级页面弹屏123',
          endAt: '2018-12-14 16:44:20',
          id: 513,
          jumpCount: 0,
          name: '二级页面弹屏',
          openCount: 0,
          startAt: '2018-12-12 16:44:18',
          status: '投放中止',
          statusEn: 'suspend',
          updateAt: '2018-12-13 16:54:25'
        },
        {
          appId: 1,
          clientId: 511,
          createAt: '2018-12-13 16:41:28',
          creator: '蒋飙',
          detail: '二级弹屏测试',
          endAt: '2018-12-14 16:39:30',
          id: 512,
          jumpCount: 0,
          name: '二级弹屏测试',
          openCount: 0,
          startAt: '2018-12-12 16:39:23',
          status: '投放中止',
          statusEn: 'suspend',
          updateAt: '2018-12-13 16:54:22'
        },
        {
          appId: 1,
          clientId: 503,
          createAt: '2018-12-13 16:34:19',
          creator: '蒋飙',
          detail: 'Demo首页弹屏123',
          endAt: '2018-12-14 11:34:46',
          id: 510,
          jumpCount: 0,
          name: 'Demo首页弹屏',
          openCount: 0,
          startAt: '2018-12-12 11:34:43',
          status: '投放中止',
          statusEn: 'suspend',
          updateAt: '2018-12-13 16:44:07'
        },
        {
          appId: 1,
          clientId: 504,
          createAt: '2018-12-13 16:19:12',
          creator: '蒋飙',
          detail: 'Demo二级页面弹屏计划123',
          endAt: '2018-12-14 11:36:53',
          id: 507,
          jumpCount: 0,
          name: 'Demo二级页面弹屏计划',
          openCount: 0,
          startAt: '2018-12-12 11:36:51',
          status: '投放中止',
          statusEn: 'suspend',
          updateAt: '2018-12-13 16:43:01'
        }
      ],
      maxPageId: 25,
      pageId: 1,
      pageSize: 10,
      totalCount: 241
    }
  });
});

// 待我审批
router.get('/firework-backend/audit/list/auditing', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: [
        {
          appId: 1,
          auditType: '提交审批',
          auditors: [
            { disName: '崔亚飞', id: 21, name: 'cyf' },
            { disName: '蒋飙测试', id: 25, name: 'jiangbiaotest' }
          ],
          createAt: '2018-12-11 16:38:26',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'App审核',
          id: 579,
          operateAt: '2018-12-11 16:38:26',
          planId: 493,
          planName: '播放页测试'
        },
        {
          appId: 1,
          auditType: '提交审批',
          auditors: [{ disName: 'App管理员', id: 18, name: 'app_admin' }],
          createAt: '2018-12-11 16:38:26',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'APP底部-播放页',
          id: 578,
          operateAt: '2018-12-11 16:38:26',
          planId: 493,
          planName: '播放页测试'
        },
        {
          appId: 1,
          auditType: '提交审批',
          auditors: [
            { disName: '崔亚飞', id: 21, name: 'cyf' },
            { disName: '蒋飙测试', id: 25, name: 'jiangbiaotest' }
          ],
          createAt: '2018-12-11 16:38:23',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'App审核',
          id: 577,
          operateAt: '2018-12-11 16:38:23',
          planId: 493,
          planName: '播放页测试'
        },
        {
          appId: 1,
          auditType: '提交审批',
          auditors: [{ disName: 'App管理员', id: 18, name: 'app_admin' }],
          createAt: '2018-12-11 16:38:23',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'APP底部-播放页',
          id: 576,
          operateAt: '2018-12-11 16:38:23',
          planId: 493,
          planName: '播放页测试'
        },
        {
          appId: 1,
          auditType: '提交审批',
          auditors: [{ disName: 'App管理员', id: 18, name: 'app_admin' }],
          createAt: '2018-12-07 13:35:38',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'App审核',
          id: 480,
          operateAt: '2018-12-07 13:35:38',
          planId: 451,
          planName: '测试数据2'
        },
        {
          appId: 1,
          auditType: '提交审批',
          auditors: [{ disName: '王冲', id: 23, name: 'wangchong' }],
          createAt: '2018-12-07 13:35:38',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'APP顶部-直播',
          id: 479,
          operateAt: '2018-12-07 13:35:38',
          planId: 451,
          planName: '测试数据2'
        },
        {
          appId: 1,
          auditType: '提交审批',
          auditors: [
            { disName: '王冲', id: 23, name: 'wangchong' },
            { disName: 'App管理员', id: 18, name: 'app_admin' }
          ],
          createAt: '2018-12-07 12:53:39',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'App审核',
          id: 478,
          operateAt: '2018-12-07 12:53:39',
          planId: 456,
          planName: '数据测试3'
        },
        {
          appId: 1,
          auditType: '提交审批',
          auditors: [{ disName: '王冲', id: 23, name: 'wangchong' }],
          createAt: '2018-12-07 12:53:39',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'APP顶部-直播',
          id: 477,
          operateAt: '2018-12-07 12:53:39',
          planId: 456,
          planName: '数据测试3'
        },
        {
          appId: 1,
          auditType: '提交审批',
          auditors: [{ disName: '陆航', id: 26, name: 'luhang' }],
          createAt: '2018-12-04 13:58:41',
          creatorId: 18,
          creatorName: 'App管理员',
          id: 267,
          operateAt: '2018-12-04 13:58:54',
          planId: 395,
          planName: '弹屏测试修改内容2'
        },
        {
          appId: 1,
          auditType: '提交审批',
          auditors: [{ disName: '陆航', id: 26, name: 'luhang' }],
          createAt: '2018-12-01 13:58:41',
          creatorId: 19,
          creatorName: 'App管理员',
          id: 268,
          operateAt: '2018-12-04 13:58:54',
          planId: 396,
          planName: '弹屏测试修改内容3'
        }
      ],
      maxPageId: 1,
      pageId: 1,
      pageSize: 10,
      totalCount: 11
    }
  });
});
// 我已审核
router.get('/firework-backend/audit/list/audited', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: [
        {
          appId: 1,
          auditType: '审批通过',
          auditorId: 17,
          auditorName: '蒋飙',
          auditors: [{ disName: '朱帮乾', id: 40, name: '朱帮乾' }],
          createAt: '2018-12-17 21:07:11',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'App审核',
          id: 667,
          operateAt: '2018-12-17 21:07:28',
          planId: 496,
          planName: '相声弹屏'
        },
        {
          appId: 1,
          auditType: '审批通过',
          auditorId: 17,
          auditorName: '蒋飙',
          auditors: [{ disName: '王冲', id: 23, name: 'wangchong' }],
          createAt: '2018-12-17 21:07:11',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'APP顶部-直播',
          id: 666,
          operateAt: '2018-12-17 21:07:24',
          planId: 496,
          planName: '相声弹屏'
        },
        {
          appId: 1,
          auditType: '审批通过',
          auditorId: 17,
          auditorName: '蒋飙',
          auditors: [{ disName: '朱帮乾', id: 40, name: '朱帮乾' }],
          createAt: '2018-12-17 18:06:41',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'App审核',
          id: 665,
          operateAt: '2018-12-17 18:07:02',
          planId: 524,
          planName: 'tan屏测试changelog1'
        },
        {
          appId: 1,
          auditType: '审批通过',
          auditorId: 17,
          auditorName: '蒋飙',
          auditors: [{ disName: '审核者', id: 19, name: 'auditor' }],
          createAt: '2018-12-17 18:06:40',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: '商业财经',
          id: 664,
          operateAt: '2018-12-17 18:06:58',
          planId: 524,
          planName: 'tan屏测试changelog1'
        },
        {
          appId: 1,
          auditType: '审批通过',
          auditorId: 17,
          auditorName: '蒋飙',
          auditors: [{ disName: '朱帮乾', id: 40, name: '朱帮乾' }],
          createAt: '2018-12-17 17:48:29',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'App审核',
          id: 663,
          operateAt: '2018-12-17 17:59:22',
          planId: 523,
          planName: '弹屏修改内容1'
        },
        {
          appId: 1,
          auditType: '审批通过',
          auditorId: 17,
          auditorName: '蒋飙',
          auditors: [{ disName: '审核者', id: 19, name: 'auditor' }],
          createAt: '2018-12-17 17:48:28',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: '商业财经',
          id: 662,
          operateAt: '2018-12-17 17:56:18',
          planId: 523,
          planName: '弹屏修改内容1'
        },
        {
          appId: 1,
          auditType: '审批通过',
          auditorId: 17,
          auditorName: '蒋飙',
          auditors: [{ disName: '朱帮乾', id: 40, name: '朱帮乾' }],
          createAt: '2018-12-17 17:00:49',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'App审核',
          id: 661,
          operateAt: '2018-12-17 17:07:46',
          planId: 522,
          planName: 'wwwtest'
        },
        {
          appId: 1,
          auditType: '审批通过',
          auditorId: 17,
          auditorName: '蒋飙',
          auditors: [{ disName: '审核者', id: 19, name: 'auditor' }],
          createAt: '2018-12-17 17:00:49',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: '商业财经',
          id: 660,
          operateAt: '2018-12-17 17:07:43',
          planId: 522,
          planName: 'wwwtest'
        },
        {
          appId: 1,
          auditType: '审批通过',
          auditorId: 17,
          auditorName: '蒋飙',
          auditors: [
            { disName: '朱帮乾', id: 40, name: '朱帮乾' },
            { disName: '崔亚飞', id: 21, name: 'cyf' }
          ],
          createAt: '2018-12-17 11:34:37',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: 'App审核',
          id: 659,
          operateAt: '2018-12-17 18:41:51',
          planId: 521,
          planName: '弹屏发布订阅'
        },
        {
          appId: 1,
          auditType: '审批通过',
          auditorId: 17,
          auditorName: '蒋飙',
          auditors: [{ disName: '审核者', id: 19, name: 'auditor' }],
          createAt: '2018-12-17 11:34:37',
          creatorId: 17,
          creatorName: '蒋飙',
          detail: '主播工作台',
          id: 658,
          operateAt: '2018-12-17 17:45:24',
          planId: 521,
          planName: '弹屏发布订阅'
        }
      ],
      maxPageId: 38,
      pageId: 1,
      pageSize: 10,
      totalCount: 371
    }
  });
});

// 设备管理
router.get('/firework-backend/device/list', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: [
        {
          createAt: '2018-12-18 15:04:26',
          creatorId: 176,
          deviceId: '7',
          id: 176,
          model: '',
          owner: '',
          serialNumber: '',
          userId: 0
        },
        {
          createAt: '2018-12-18 15:04:22',
          creatorId: 175,
          deviceId: '6',
          id: 175,
          model: '',
          owner: '',
          serialNumber: '',
          userId: 0
        },
        {
          createAt: '2018-12-18 15:04:14',
          creatorId: 174,
          deviceId: '5',
          id: 174,
          model: '',
          owner: '',
          serialNumber: '',
          userId: 0
        },
        {
          createAt: '2018-12-18 15:04:11',
          creatorId: 173,
          deviceId: '44',
          id: 173,
          model: '',
          owner: '',
          serialNumber: '',
          userId: 0
        },
        {
          createAt: '2018-12-18 15:04:05',
          creatorId: 172,
          deviceId: '4',
          id: 172,
          model: '',
          owner: '',
          serialNumber: '',
          userId: 0
        },
        {
          createAt: '2018-12-18 15:04:01',
          creatorId: 171,
          deviceId: '3',
          id: 171,
          model: '',
          owner: '',
          serialNumber: '',
          userId: 0
        },
        {
          createAt: '2018-12-18 15:03:58',
          creatorId: 170,
          deviceId: '2',
          id: 170,
          model: '',
          owner: '',
          serialNumber: '',
          userId: 0
        },
        {
          createAt: '2018-12-18 15:03:55',
          creatorId: 169,
          deviceId: '1',
          id: 169,
          model: '',
          owner: '',
          serialNumber: '',
          userId: 0
        },
        {
          createAt: '2018-12-10 11:13:31',
          creatorId: 155,
          deviceId: '72cf5e38-9076-3835-9570-62255ced47fe',
          id: 155,
          model: '',
          owner: '',
          serialNumber: '',
          userId: 0
        },
        {
          createAt: '2018-12-06 18:32:13',
          creatorId: 153,
          deviceId: '6d81be84-7c0a-3a6b-ad06-e01c1b1b47c8',
          id: 153,
          model: 'cyf',
          owner: '',
          serialNumber: '',
          userId: 0
        }
      ],
      maxPageId: 2,
      pageId: 1,
      pageSize: 10,
      totalCount: 12
    }
  });
});

let putPageArr = [
  {
    appId: 1,
    disName: 'Demo首页',
    fireworkCountOneDay: 3,
    id: 62,
    intervalSeconds: 3600,
    iosValue: 'iting://firework?className=XMRootViewController',
    platform: 2
  },
  {
    appId: 1,
    disName: 'Demo页面',
    fireworkCountOneDay: 3,
    id: 58,
    intervalSeconds: 3600,
    iosValue: 'iting://firework?className=XMViewController',
    platform: 2
  },
  {
    appId: 1,
    disName: '商业财经',
    fireworkCountOneDay: 2,
    id: 55,
    intervalSeconds: 3600,
    iosValue:
      'iting://firework?className=XMCategoryRecViewController&title=商业财经',
    platform: 2
  },
  {
    androidValue:
      'com.ximalaya.ting.android.main.fragment.myspace.child.ManageCenterFragment1:主播工作台',
    appId: 1,
    disName: '主播工作台',
    fireworkCountOneDay: 10,
    id: 54,
    intervalSeconds: 3600,
    platform: 1
  },
  {
    androidValue:
      'com.ximalaya.ting.android.live.fragment.LiveAudioFragment:直播',
    appId: 1,
    disName: 'APP顶部-直播',
    fireworkCountOneDay: 10,
    id: 53,
    intervalSeconds: 6,
    iosValue: 'iting://firework?className=XMLiveHomeViewController',
    platform: 1
  }
];
// 投放页面
router.get('/firework-backend/location/list', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: putPageArr,
      maxPageId: 2,
      pageId: 1,
      pageSize: 10,
      totalCount: putPageArr.length
    }
  });
});
// 保存投放页面
router.post('/firework-backend/location/save', (req, res) => {
  let data = req.body;
  let obj = { ...data, id: putPageArr.length + 100 };
  putPageArr.push(obj);
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: putPageArr,
      maxPageId: 2,
      pageId: 1,
      pageSize: 10,
      totalCount: putPageArr.length
    }
  });
});
// 删除投放页面
router.get('/firework-backend/location/delete', (req, res) => {
  let id = req.query.locationId;
  let arr = [];
  putPageArr.forEach(ele => {
    if (ele.id !== id) {
      arr.push(ele);
    }
  });
  putPageArr = [...arr];
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: putPageArr,
      maxPageId: 2,
      pageId: 1,
      pageSize: 10,
      totalCount: putPageArr.length
    }
  });
});

// 授权管理
router.get('/firework-backend/user/all', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [
      { disName: '蒋飙', id: 17, name: 'admin' },
      { disName: 'App管理员', id: 18, name: 'app_admin' },
      { disName: '审核者', id: 19, name: 'auditor' },
      { disName: '创建者', id: 20, name: 'creator' },
      { disName: '崔亚飞', id: 21, name: 'cyf' },
      { disName: '亚飞崔', id: 22, name: 'yafei.cui' },
      { disName: '王冲', id: 23, name: 'wangchong' },
      { disName: '吴成云', id: 24, name: 'wuchengyun' },
      { disName: '蒋飙测试', id: 25, name: 'jiangbiaotest' },
      { disName: '陆航', id: 26, name: 'luhang' },
      { disName: '刘英英', id: 27, name: 'yetta' },
      { disName: '薛冰', id: 28, name: 'elsaxue' },
      { disName: '李乾坤', id: 29, name: 'bert.li' },
      { disName: '徐小纯', id: 30, name: 'elaine.xu' },
      { disName: '陈丽施', id: 31, name: 'mango.chen' },
      { disName: '袁宇岑', id: 32, name: 'taro.yuan' },
      { disName: '苏明歌', id: 33, name: 'neil.su' },
      { disName: '唐晓情', id: 34, name: 'Rebecca.xu' },
      { disName: '儿童页面', id: 35, name: 'test' },
      { disName: '蒋飙二', id: 36, name: 'jiangbiao2' },
      { disName: '徐海洋', id: 37, name: 'ocean.xu' },
      { disName: '王冲', id: 38, name: 'wangchongtest' },
      { disName: '张会阳', id: 39, name: 'heidi.zhang' },
      { disName: '朱帮乾', id: 40, name: '朱帮乾' },
      { disName: '王冲', id: 41, name: 'wangchongtest1' },
      { disName: '肖壹', id: 42, name: 'jason.xiao' }
    ]
  });
});
let authorManagerList = [
  { disName: '肖壹', id: 42, name: 'jason.xiao', type: '应用管理员' },
  { disName: '王冲', id: 41, name: 'wangchongtest1', type: '创建者' },
  { disName: '朱帮乾', id: 40, name: '朱帮乾', type: '审核者' },
  { disName: '张会阳', id: 39, name: 'heidi.zhang', type: '创建者' }
];
// 获取权限列表
router.get('/firework-backend/user/appUser', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: authorManagerList,
      maxPageId: 1,
      pageId: 1,
      pageSize: 10,
      totalCount: authorManagerList.length
    }
  });
});
// 添加权限
router.post('/firework-backend/user/permission', (req, res) => {
  let data = { ...req.body };
  data.id = authorManagerList.length + 100;
  authorManagerList.push(data);
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: authorManagerList,
      maxPageId: 1,
      pageId: 1,
      pageSize: 10,
      totalCount: authorManagerList.length
    }
  });
});
// 删除权限
router.post('/firework-backend/user/permission/delete', (req, res) => {
  let uid = req.body.userId;
  let arr = [];
  authorManagerList.forEach(ele => {
    if (ele.id !== uid) {
      arr.push(ele);
    }
  });
  authorManagerList = [...arr];
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: authorManagerList,
      maxPageId: 2,
      pageId: 1,
      pageSize: 10,
      totalCount: authorManagerList.length
    }
  });
});

let authorPositionList = [
  {
    id: 48,
    locationName: 'Demo首页',
    operatorName: '蒋飙',
    userName: '朱帮乾'
  },
  {
    id: 47,
    locationName: 'APP底部-播放页',
    operatorName: '蒋飙',
    userName: 'App管理员'
  },
  {
    id: 45,
    locationName: 'APP顶部-相声',
    operatorName: '蒋飙',
    userName: '崔亚飞'
  }
];
// 获取位置列表
router.get('/firework-backend/permission/location/admin/list', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: authorPositionList,
      maxPageId: 1,
      pageId: 1,
      pageSize: 10,
      totalCount: authorPositionList.length
    }
  });
});
// 新增位置权限
router.post('/firework-backend/permission/location/admin/add', (req, res) => {
  let data = { ...req.body };
  data.id = authorPositionList.length + 100;
  authorPositionList.push(data);
  res.send({
    msg: '0',
    ret: 0,
    data: {
      list: authorPositionList,
      maxPageId: 1,
      pageId: 1,
      pageSize: 10,
      totalCount: authorPositionList.length
    }
  });
});
// 删除位置
router.post(
  '/firework-backend/permission/location/admin/delete',
  (req, res) => {
    let uid = req.body.id;
    let arr = [];
    authorPositionList.forEach(ele => {
      if (ele.id !== uid) {
        arr.push(ele);
      }
    });
    authorPositionList = [...arr];
    res.send({
      msg: '0',
      ret: 0,
      data: {
        list: authorPositionList,
        maxPageId: 2,
        pageId: 1,
        pageSize: 10,
        totalCount: authorPositionList.length
      }
    });
  }
);

// 报表
router.get('/firework-backend/xlog/open', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [
      { android: 5, ios: 0, total: 5, ts: 1544600874000 },
      { android: 6, ios: 0, total: 6, ts: 1544606448000 },
      { android: 6, ios: 0, total: 6, ts: 1544609625000 },
      { android: 6, ios: 0, total: 6, ts: 1544611927000 },
      { android: 6, ios: 0, total: 6, ts: 1544614063000 },
      { android: 6, ios: 0, total: 6, ts: 1544615639000 },
      { android: 6, ios: 0, total: 6, ts: 1544618750000 },
      { android: 7942, ios: 0, total: 7942, ts: 1544667688000 },
      { android: 7942, ios: 0, total: 7942, ts: 1544668259000 },
      { android: 7942, ios: 0, total: 7942, ts: 1544669174000 },
      { android: 8542, ios: 0, total: 8542, ts: 1544670155000 },
      { android: 8542, ios: 0, total: 8542, ts: 1544670951000 },
      { android: 9166, ios: 0, total: 9166, ts: 1544671862000 },
      { android: 9166, ios: 0, total: 9166, ts: 1544672745000 },
      { android: 9843, ios: 0, total: 9843, ts: 1544673702000 },
      { android: 9843, ios: 0, total: 9843, ts: 1544674541000 },
      { android: 10391, ios: 0, total: 10391, ts: 1544675841000 },
      { android: 10391, ios: 0, total: 10391, ts: 1544676342000 },
      { android: 10953, ios: 0, total: 10953, ts: 1544677264000 },
      { android: 10953, ios: 0, total: 10953, ts: 1544678168000 },
      { android: 11550, ios: 0, total: 11550, ts: 1544679027000 },
      { android: 11550, ios: 0, total: 11550, ts: 1544679991000 },
      { android: 12107, ios: 0, total: 12107, ts: 1544680932000 },
      { android: 12348, ios: 0, total: 12348, ts: 1544681795000 },
      { android: 12541, ios: 0, total: 12541, ts: 1544682683000 },
      { android: 12541, ios: 0, total: 12541, ts: 1544683550000 },
      { android: 12951, ios: 0, total: 12951, ts: 1544684487000 },
      { android: 12951, ios: 0, total: 12951, ts: 1544685329000 },
      { android: 13377, ios: 0, total: 13377, ts: 1544686274000 },
      { android: 13377, ios: 0, total: 13377, ts: 1544687205000 },
      { android: 13789, ios: 0, total: 13789, ts: 1544688071000 },
      { android: 13789, ios: 0, total: 13789, ts: 1544688969000 },
      { android: 14186, ios: 0, total: 14186, ts: 1544689905000 },
      { android: 14186, ios: 0, total: 14186, ts: 1544690850000 },
      { android: 14587, ios: 0, total: 14587, ts: 1544691716000 },
      { android: 14587, ios: 0, total: 14587, ts: 1544692566000 },
      { android: 14986, ios: 0, total: 14986, ts: 1544693487000 },
      { android: 15458, ios: 0, total: 15458, ts: 1544695301000 },
      { android: 15458, ios: 0, total: 15458, ts: 1544696172000 },
      { android: 15909, ios: 0, total: 15909, ts: 1544697127000 },
      { android: 16149, ios: 0, total: 16149, ts: 1544698013000 },
      { android: 16149, ios: 0, total: 16149, ts: 1544698856000 },
      { android: 16654, ios: 0, total: 16654, ts: 1544699735000 },
      { android: 16654, ios: 0, total: 16654, ts: 1544700654000 },
      { android: 17234, ios: 0, total: 17234, ts: 1544701609000 },
      { android: 17234, ios: 0, total: 17234, ts: 1544702484000 },
      { android: 17864, ios: 0, total: 17864, ts: 1544703380000 },
      { android: 17864, ios: 0, total: 17864, ts: 1544704231000 },
      { android: 18550, ios: 0, total: 18550, ts: 1544705152000 },
      { android: 18550, ios: 0, total: 18550, ts: 1544706150000 },
      { android: 19312, ios: 0, total: 19312, ts: 1544706945000 },
      { android: 19312, ios: 0, total: 19312, ts: 1544707875000 },
      { android: 20131, ios: 0, total: 20131, ts: 1544708738000 },
      { android: 20956, ios: 0, total: 20956, ts: 1544709863000 },
      { android: 20956, ios: 0, total: 20956, ts: 1544710557000 },
      { android: 20956, ios: 0, total: 20956, ts: 1544711480000 },
      { android: 21750, ios: 0, total: 21750, ts: 1544712362000 },
      { android: 21750, ios: 0, total: 21750, ts: 1544713288000 },
      { android: 22483, ios: 0, total: 22483, ts: 1544714185000 },
      { android: 23075, ios: 0, total: 23075, ts: 1544715396000 },
      { android: 23075, ios: 0, total: 23075, ts: 1544715958000 },
      { android: 23075, ios: 0, total: 23075, ts: 1544716836000 },
      { android: 23526, ios: 0, total: 23526, ts: 1544717763000 },
      { android: 23526, ios: 0, total: 23526, ts: 1544718658000 },
      { android: 23837, ios: 0, total: 23837, ts: 1544719543000 },
      { android: 23837, ios: 0, total: 23837, ts: 1544720615000 },
      { android: 24105, ios: 0, total: 24105, ts: 1544721371000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544722454000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544723214000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544724093000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544724981000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544725906000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544726909000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544727659000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544728590000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544729486000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544730349000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544731244000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544732615000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544733197000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544733934000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544735045000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544735890000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544736714000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544737552000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544738511000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544739363000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544740303000 },
      { android: 24252, ios: 0, total: 24252, ts: 1544741170000 },
      { android: 25011, ios: 0, total: 25011, ts: 1544742114000 },
      { android: 25231, ios: 0, total: 25231, ts: 1544743428000 },
      { android: 25231, ios: 0, total: 25231, ts: 1544744038000 },
      { android: 25231, ios: 0, total: 25231, ts: 1544744726000 },
      { android: 25436, ios: 0, total: 25436, ts: 1544746195000 },
      { android: 25436, ios: 0, total: 25436, ts: 1544746699000 },
      { android: 25670, ios: 0, total: 25670, ts: 1544747473000 },
      { android: 25670, ios: 0, total: 25670, ts: 1544748331000 },
      { android: 25913, ios: 0, total: 25913, ts: 1544749271000 },
      { android: 25913, ios: 0, total: 25913, ts: 1544750172000 },
      { android: 26195, ios: 0, total: 26195, ts: 1544751532000 },
      { android: 26462, ios: 0, total: 26462, ts: 1544752957000 },
      { android: 26462, ios: 0, total: 26462, ts: 1544753755000 },
      { android: 26746, ios: 0, total: 26746, ts: 1544754648000 },
      { android: 26746, ios: 0, total: 26746, ts: 1544755554000 },
      { android: 26981, ios: 0, total: 26981, ts: 1544756516000 },
      { android: 26981, ios: 0, total: 26981, ts: 1544757388000 },
      { android: 27276, ios: 0, total: 27276, ts: 1544758294000 },
      { android: 27276, ios: 0, total: 27276, ts: 1544759173000 },
      { android: 27586, ios: 0, total: 27586, ts: 1544760157000 },
      { android: 27586, ios: 0, total: 27586, ts: 1544760954000 },
      { android: 27877, ios: 0, total: 27877, ts: 1544761880000 },
      { android: 27877, ios: 0, total: 27877, ts: 1544762851000 },
      { android: 28228, ios: 0, total: 28228, ts: 1544763641000 },
      { android: 28228, ios: 0, total: 28228, ts: 1544764562000 },
      { android: 28584, ios: 0, total: 28584, ts: 1544765597000 },
      { android: 28584, ios: 0, total: 28584, ts: 1544766358000 },
      { android: 28928, ios: 0, total: 28928, ts: 1544767285000 },
      { android: 28928, ios: 0, total: 28928, ts: 1544768152000 },
      { android: 29233, ios: 0, total: 29233, ts: 1544769071000 },
      { android: 29233, ios: 0, total: 29233, ts: 1544770022000 },
      { android: 29569, ios: 0, total: 29569, ts: 1544770912000 },
      { android: 29569, ios: 0, total: 29569, ts: 1544771735000 },
      { android: 29838, ios: 0, total: 29838, ts: 1544772685000 },
      { android: 29838, ios: 0, total: 29838, ts: 1544773600000 },
      { android: 30156, ios: 0, total: 30156, ts: 1544774673000 },
      { android: 30156, ios: 0, total: 30156, ts: 1544775340000 },
      { android: 30441, ios: 0, total: 30441, ts: 1544776283000 },
      { android: 30441, ios: 0, total: 30441, ts: 1544777169000 },
      { android: 30755, ios: 0, total: 30755, ts: 1544778051000 },
      { android: 30755, ios: 0, total: 30755, ts: 1544778961000 },
      { android: 31035, ios: 0, total: 31035, ts: 1544779923000 },
      { android: 31035, ios: 0, total: 31035, ts: 1544780754000 },
      { android: 31348, ios: 0, total: 31348, ts: 1544781667000 },
      { android: 31348, ios: 0, total: 31348, ts: 1544782545000 },
      { android: 31650, ios: 0, total: 31650, ts: 1544783441000 },
      { android: 31650, ios: 0, total: 31650, ts: 1544784389000 },
      { android: 32011, ios: 0, total: 32011, ts: 1544785271000 },
      { android: 32217, ios: 0, total: 32217, ts: 1544786130000 },
      { android: 32424, ios: 0, total: 32424, ts: 1544787103000 },
      { android: 32424, ios: 0, total: 32424, ts: 1544788076000 },
      { android: 32898, ios: 0, total: 32898, ts: 1544788900000 },
      { android: 32898, ios: 0, total: 32898, ts: 1544789739000 },
      { android: 33355, ios: 0, total: 33355, ts: 1544790676000 },
      { android: 33355, ios: 0, total: 33355, ts: 1544791575000 },
      { android: 33877, ios: 0, total: 33877, ts: 1544792454000 },
      { android: 33877, ios: 0, total: 33877, ts: 1544793386000 },
      { android: 34477, ios: 0, total: 34477, ts: 1544794254000 },
      { android: 34477, ios: 0, total: 34477, ts: 1544795185000 },
      { android: 35094, ios: 0, total: 35094, ts: 1544796058000 },
      { android: 35094, ios: 0, total: 35094, ts: 1544796974000 },
      { android: 35673, ios: 0, total: 35673, ts: 1544798068000 },
      { android: 35673, ios: 0, total: 35673, ts: 1544798735000 },
      { android: 36282, ios: 0, total: 36282, ts: 1544799661000 },
      { android: 36585, ios: 0, total: 36585, ts: 1544800525000 },
      { android: 36585, ios: 0, total: 36585, ts: 1544801567000 },
      { android: 37081, ios: 0, total: 37081, ts: 1544802377000 },
      { android: 37081, ios: 0, total: 37081, ts: 1544803244000 },
      { android: 37517, ios: 0, total: 37517, ts: 1544804158000 },
      { android: 37517, ios: 0, total: 37517, ts: 1544805058000 },
      { android: 37858, ios: 0, total: 37858, ts: 1544805947000 },
      { android: 37858, ios: 0, total: 37858, ts: 1544806960000 },
      { android: 38117, ios: 0, total: 38117, ts: 1544807903000 },
      { android: 38117, ios: 0, total: 38117, ts: 1544808654000 },
      { android: 38297, ios: 0, total: 38297, ts: 1544809559000 },
      { android: 38297, ios: 0, total: 38297, ts: 1544810564000 },
      { android: 38468, ios: 0, total: 38468, ts: 1544811407000 },
      { android: 38468, ios: 0, total: 38468, ts: 1544812274000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544813167000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544814058000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544814995000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544816053000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544816743000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544817642000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544818588000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544819489000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544820347000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544821427000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544823761000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544824451000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544825075000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544825903000 },
      { android: 38557, ios: 0, total: 38557, ts: 1544826703000 },
      { android: 39144, ios: 0, total: 39144, ts: 1544828041000 },
      { android: 39144, ios: 0, total: 39144, ts: 1544828549000 },
      { android: 39279, ios: 0, total: 39279, ts: 1544829692000 },
      { android: 39279, ios: 0, total: 39279, ts: 1544830882000 },
      { android: 39476, ios: 0, total: 39476, ts: 1544831393000 },
      { android: 39476, ios: 0, total: 39476, ts: 1544832881000 },
      { android: 39744, ios: 0, total: 39744, ts: 1544833709000 },
      { android: 39744, ios: 0, total: 39744, ts: 1544834521000 },
      { android: 39744, ios: 0, total: 39744, ts: 1544834964000 },
      { android: 40127, ios: 0, total: 40127, ts: 1544836525000 },
      { android: 40127, ios: 0, total: 40127, ts: 1544837072000 },
      { android: 40425, ios: 0, total: 40425, ts: 1544837844000 },
      { android: 40425, ios: 0, total: 40425, ts: 1544838822000 },
      { android: 40749, ios: 0, total: 40749, ts: 1544840014000 },
      { android: 40749, ios: 0, total: 40749, ts: 1544841108000 },
      { android: 41099, ios: 0, total: 41099, ts: 1544841906000 },
      { android: 41099, ios: 0, total: 41099, ts: 1544842232000 },
      { android: 41099, ios: 0, total: 41099, ts: 1544842847000 },
      { android: 41457, ios: 0, total: 41457, ts: 1544843745000 },
      { android: 41457, ios: 0, total: 41457, ts: 1544844638000 },
      { android: 41875, ios: 0, total: 41875, ts: 1544845572000 },
      { android: 41875, ios: 0, total: 41875, ts: 1544846483000 },
      { android: 42226, ios: 0, total: 42226, ts: 1544847378000 },
      { android: 42226, ios: 0, total: 42226, ts: 1544848250000 },
      { android: 42575, ios: 0, total: 42575, ts: 1544849199000 },
      { android: 42575, ios: 0, total: 42575, ts: 1544850142000 },
      { android: 42996, ios: 0, total: 42996, ts: 1544851013000 },
      { android: 42996, ios: 0, total: 42996, ts: 1544851861000 },
      { android: 43408, ios: 0, total: 43408, ts: 1544852765000 },
      { android: 43408, ios: 0, total: 43408, ts: 1544853695000 },
      { android: 43776, ios: 0, total: 43776, ts: 1544854544000 },
      { android: 43776, ios: 0, total: 43776, ts: 1544855466000 },
      { android: 44209, ios: 0, total: 44209, ts: 1544856451000 },
      { android: 44209, ios: 0, total: 44209, ts: 1544857277000 },
      { android: 44595, ios: 0, total: 44595, ts: 1544858171000 },
      { android: 44595, ios: 0, total: 44595, ts: 1544859073000 },
      { android: 48032, ios: 0, total: 48032, ts: 1544873052000 },
      { android: 48032, ios: 0, total: 48032, ts: 1544873448000 },
      { android: 48032, ios: 0, total: 48032, ts: 1544874347000 },
      { android: 48515, ios: 0, total: 48515, ts: 1544875250000 },
      { android: 48515, ios: 0, total: 48515, ts: 1544876167000 },
      { android: 49022, ios: 0, total: 49022, ts: 1544877055000 },
      { android: 49022, ios: 0, total: 49022, ts: 1544878016000 },
      { android: 49565, ios: 0, total: 49565, ts: 1544878874000 },
      { android: 49565, ios: 0, total: 49565, ts: 1544879779000 },
      { android: 50149, ios: 0, total: 50149, ts: 1544880677000 },
      { android: 50149, ios: 0, total: 50149, ts: 1544881641000 },
      { android: 50833, ios: 0, total: 50833, ts: 1544882609000 },
      { android: 50833, ios: 0, total: 50833, ts: 1544883334000 },
      { android: 51493, ios: 0, total: 51493, ts: 1544884441000 },
      { android: 51493, ios: 0, total: 51493, ts: 1544885165000 },
      { android: 52177, ios: 0, total: 52177, ts: 1544886087000 },
      { android: 52177, ios: 0, total: 52177, ts: 1544886943000 },
      { android: 52682, ios: 0, total: 52682, ts: 1544887823000 },
      { android: 52682, ios: 0, total: 52682, ts: 1544888807000 },
      { android: 53176, ios: 0, total: 53176, ts: 1544889649000 },
      { android: 53176, ios: 0, total: 53176, ts: 1544890539000 },
      { android: 53570, ios: 0, total: 53570, ts: 1544891446000 },
      { android: 53570, ios: 0, total: 53570, ts: 1544892333000 },
      { android: 53892, ios: 0, total: 53892, ts: 1544893369000 },
      { android: 53892, ios: 0, total: 53892, ts: 1544894153000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544895283000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544895999000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544896970000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544897756000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544898836000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544899601000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544900480000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544901362000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544902272000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544903205000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544904052000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544904989000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544905886000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544906777000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544907756000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544909051000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544909638000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544910413000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544911273000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544912295000 },
      { android: 54142, ios: 0, total: 54142, ts: 1544913464000 },
      { android: 55093, ios: 0, total: 55093, ts: 1544914402000 },
      { android: 55212, ios: 0, total: 55212, ts: 1544916511000 },
      { android: 55212, ios: 0, total: 55212, ts: 1544917105000 },
      { android: 55212, ios: 0, total: 55212, ts: 1544917621000 },
      { android: 55386, ios: 0, total: 55386, ts: 1544918501000 },
      { android: 55623, ios: 0, total: 55623, ts: 1544919755000 },
      { android: 55623, ios: 0, total: 55623, ts: 1544920394000 },
      { android: 55623, ios: 0, total: 55623, ts: 1544921161000 },
      { android: 55905, ios: 0, total: 55905, ts: 1544922072000 },
      { android: 56220, ios: 0, total: 56220, ts: 1544923423000 },
      { android: 56363, ios: 0, total: 56363, ts: 1544924511000 },
      { android: 56363, ios: 0, total: 56363, ts: 1544924897000 },
      { android: 56363, ios: 0, total: 56363, ts: 1544925666000 },
      { android: 56762, ios: 0, total: 56762, ts: 1544926596000 },
      { android: 56762, ios: 0, total: 56762, ts: 1544927449000 },
      { android: 57106, ios: 0, total: 57106, ts: 1544928358000 },
      { android: 57106, ios: 0, total: 57106, ts: 1544929313000 },
      { android: 57510, ios: 0, total: 57510, ts: 1544930195000 },
      { android: 57510, ios: 0, total: 57510, ts: 1544931053000 },
      { android: 57930, ios: 0, total: 57930, ts: 1544931989000 },
      { android: 57930, ios: 0, total: 57930, ts: 1544932869000 },
      { android: 58305, ios: 0, total: 58305, ts: 1544933758000 },
      { android: 58305, ios: 0, total: 58305, ts: 1544934636000 },
      { android: 58704, ios: 0, total: 58704, ts: 1544935550000 },
      { android: 58704, ios: 0, total: 58704, ts: 1544936467000 },
      { android: 59116, ios: 0, total: 59116, ts: 1544937382000 },
      { android: 59116, ios: 0, total: 59116, ts: 1544938230000 },
      { android: 59493, ios: 0, total: 59493, ts: 1544939157000 },
      { android: 59493, ios: 0, total: 59493, ts: 1544940074000 },
      { android: 59965, ios: 0, total: 59965, ts: 1544940942000 },
      { android: 59965, ios: 0, total: 59965, ts: 1544941860000 },
      { android: 60300, ios: 0, total: 60300, ts: 1544942759000 },
      { android: 60300, ios: 0, total: 60300, ts: 1544943658000 },
      { android: 60720, ios: 0, total: 60720, ts: 1544944593000 },
      { android: 60720, ios: 0, total: 60720, ts: 1544945446000 },
      { android: 60720, ios: 0, total: 60720, ts: 1544946358000 },
      { android: 61321, ios: 0, total: 61321, ts: 1544947264000 },
      { android: 61693, ios: 0, total: 61693, ts: 1544948379000 },
      { android: 61693, ios: 0, total: 61693, ts: 1544949049000 },
      { android: 61693, ios: 0, total: 61693, ts: 1544949952000 },
      { android: 62051, ios: 0, total: 62051, ts: 1544950845000 },
      { android: 62051, ios: 0, total: 62051, ts: 1544951788000 },
      { android: 62442, ios: 0, total: 62442, ts: 1544952635000 },
      { android: 62442, ios: 0, total: 62442, ts: 1544953553000 },
      { android: 62822, ios: 0, total: 62822, ts: 1544954440000 },
      { android: 62822, ios: 0, total: 62822, ts: 1544955347000 },
      { android: 63207, ios: 0, total: 63207, ts: 1544956238000 },
      { android: 63207, ios: 0, total: 63207, ts: 1544957154000 },
      { android: 63580, ios: 0, total: 63580, ts: 1544958066000 },
      { android: 63580, ios: 0, total: 63580, ts: 1544958957000 },
      { android: 64050, ios: 0, total: 64050, ts: 1544959846000 },
      { android: 64050, ios: 0, total: 64050, ts: 1544960745000 },
      { android: 64532, ios: 0, total: 64532, ts: 1544961680000 },
      { android: 64532, ios: 0, total: 64532, ts: 1544962546000 },
      { android: 65088, ios: 0, total: 65088, ts: 1544963463000 },
      { android: 65088, ios: 0, total: 65088, ts: 1544964347000 },
      { android: 65640, ios: 0, total: 65640, ts: 1544965293000 },
      { android: 65640, ios: 0, total: 65640, ts: 1544966142000 },
      { android: 66289, ios: 0, total: 66289, ts: 1544967069000 },
      { android: 66289, ios: 0, total: 66289, ts: 1544967926000 },
      { android: 66940, ios: 0, total: 66940, ts: 1544968895000 },
      { android: 66940, ios: 0, total: 66940, ts: 1544969752000 },
      { android: 67559, ios: 0, total: 67559, ts: 1544970668000 },
      { android: 68164, ios: 0, total: 68164, ts: 1544971676000 },
      { android: 68164, ios: 0, total: 68164, ts: 1544972539000 },
      { android: 68164, ios: 0, total: 68164, ts: 1544973340000 },
      { android: 68712, ios: 0, total: 68712, ts: 1544974247000 },
      { android: 68712, ios: 0, total: 68712, ts: 1544975139000 },
      { android: 69181, ios: 0, total: 69181, ts: 1544976123000 },
      { android: 69181, ios: 0, total: 69181, ts: 1544976924000 },
      { android: 69544, ios: 0, total: 69544, ts: 1544977836000 },
      { android: 69544, ios: 0, total: 69544, ts: 1544978734000 },
      { android: 69791, ios: 0, total: 69791, ts: 1544979846000 },
      { android: 69795, ios: 0, total: 69795, ts: 1544980797000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544981456000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544983115000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544984604000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544985981000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544987792000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544988698000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544989575000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544990495000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544991388000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544992305000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544993142000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544994102000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544995679000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544996361000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544997523000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544998054000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544998703000 },
      { android: 69982, ios: 0, total: 69982, ts: 1544999503000 },
      { android: 70692, ios: 0, total: 70692, ts: 1545001095000 },
      { android: 70817, ios: 0, total: 70817, ts: 1545002402000 },
      { android: 70959, ios: 0, total: 70959, ts: 1545003238000 },
      { android: 71051, ios: 0, total: 71051, ts: 1545004178000 },
      { android: 71051, ios: 0, total: 71051, ts: 1545006011000 },
      { android: 71256, ios: 0, total: 71256, ts: 1545006551000 },
      { android: 71256, ios: 0, total: 71256, ts: 1545007052000 },
      { android: 71436, ios: 0, total: 71436, ts: 1545008204000 },
      { android: 71671, ios: 0, total: 71671, ts: 1545010152000 },
      { android: 71671, ios: 0, total: 71671, ts: 1545011349000 },
      { android: 71885, ios: 0, total: 71885, ts: 1545012617000 },
      { android: 72121, ios: 0, total: 72121, ts: 1545014352000 },
      { android: 72365, ios: 0, total: 72365, ts: 1545015442000 },
      { android: 72365, ios: 0, total: 72365, ts: 1545016645000 },
      { android: 72638, ios: 0, total: 72638, ts: 1545017620000 },
      { android: 72882, ios: 0, total: 72882, ts: 1545018718000 },
      { android: 72882, ios: 0, total: 72882, ts: 1545019333000 },
      { android: 72882, ios: 0, total: 72882, ts: 1545020255000 },
      { android: 73168, ios: 0, total: 73168, ts: 1545021037000 },
      { android: 73168, ios: 0, total: 73168, ts: 1545021975000 },
      { android: 73517, ios: 0, total: 73517, ts: 1545022919000 },
      { android: 73517, ios: 0, total: 73517, ts: 1545023739000 },
      { android: 75050, ios: 0, total: 75050, ts: 1545031473000 },
      { android: 75050, ios: 0, total: 75050, ts: 1545031936000 },
      { android: 75050, ios: 0, total: 75050, ts: 1545032790000 },
      { android: 75324, ios: 0, total: 75324, ts: 1545033802000 },
      { android: 75599, ios: 0, total: 75599, ts: 1545035125000 },
      { android: 75599, ios: 0, total: 75599, ts: 1545035587000 },
      { android: 75599, ios: 0, total: 75599, ts: 1545036358000 },
      { android: 75864, ios: 0, total: 75864, ts: 1545037268000 },
      { android: 76184, ios: 0, total: 76184, ts: 1545039469000 },
      { android: 76486, ios: 0, total: 76486, ts: 1545040381000 },
      { android: 76486, ios: 0, total: 76486, ts: 1545041178000 },
      { android: 76486, ios: 0, total: 76486, ts: 1545041768000 },
      { android: 76808, ios: 0, total: 76808, ts: 1545042794000 },
      { android: 76808, ios: 0, total: 76808, ts: 1545043579000 },
      { android: 77163, ios: 0, total: 77163, ts: 1545044603000 },
      { android: 77163, ios: 0, total: 77163, ts: 1545045355000 },
      { android: 77163, ios: 0, total: 77163, ts: 1545046310000 },
      { android: 77163, ios: 0, total: 77163, ts: 1545047192000 },
      { android: 77163, ios: 0, total: 77163, ts: 1545048076000 },
      { android: 77163, ios: 0, total: 77163, ts: 1545048951000 },
      { android: 77163, ios: 0, total: 77163, ts: 1545049883000 },
      { android: 77163, ios: 0, total: 77163, ts: 1545050754000 },
      { android: 79134, ios: 0, total: 79134, ts: 1545051687000 },
      { android: 79134, ios: 0, total: 79134, ts: 1545052544000 },
      { android: 79134, ios: 0, total: 79134, ts: 1545053484000 },
      { android: 79134, ios: 0, total: 79134, ts: 1545054364000 },
      { android: 79134, ios: 0, total: 79134, ts: 1545055249000 },
      { android: 79134, ios: 0, total: 79134, ts: 1545056191000 },
      { android: 79134, ios: 0, total: 79134, ts: 1545057064000 },
      { android: 83189, ios: 0, total: 83189, ts: 1545058084000 },
      { android: 83189, ios: 0, total: 83189, ts: 1545058854000 },
      { android: 83761, ios: 0, total: 83761, ts: 1545059734000 },
      { android: 84010, ios: 0, total: 84010, ts: 1545060630000 },
      { android: 84264, ios: 0, total: 84264, ts: 1545061577000 },
      { android: 84485, ios: 0, total: 84485, ts: 1545062428000 },
      { android: 84485, ios: 0, total: 84485, ts: 1545063349000 },
      { android: 84871, ios: 0, total: 84871, ts: 1545064255000 },
      { android: 85027, ios: 0, total: 85027, ts: 1545065139000 },
      { android: 85172, ios: 0, total: 85172, ts: 1545066241000 },
      { android: 85357, ios: 0, total: 85357, ts: 1545067287000 },
      { android: 85357, ios: 0, total: 85357, ts: 1545068191000 },
      { android: 85357, ios: 0, total: 85357, ts: 1545068727000 },
      { android: 85515, ios: 0, total: 85515, ts: 1545069677000 },
      { android: 85515, ios: 0, total: 85515, ts: 1545070574000 },
      { android: 85619, ios: 0, total: 85619, ts: 1545071482000 },
      { android: 85619, ios: 0, total: 85619, ts: 1545072354000 },
      { android: 85707, ios: 0, total: 85707, ts: 1545073316000 },
      { android: 85707, ios: 0, total: 85707, ts: 1545074158000 },
      { android: 85782, ios: 0, total: 85782, ts: 1545075082000 },
      { android: 85782, ios: 0, total: 85782, ts: 1545076001000 },
      { android: 85782, ios: 0, total: 85782, ts: 1545076845000 },
      { android: 85782, ios: 0, total: 85782, ts: 1545077836000 },
      { android: 85782, ios: 0, total: 85782, ts: 1545078690000 },
      { android: 85782, ios: 0, total: 85782, ts: 1545079607000 },
      { android: 85782, ios: 0, total: 85782, ts: 1545080595000 },
      { android: 85782, ios: 0, total: 85782, ts: 1545081842000 },
      { android: 85782, ios: 0, total: 85782, ts: 1545082791000 },
      { android: 85782, ios: 0, total: 85782, ts: 1545083507000 },
      { android: 85782, ios: 0, total: 85782, ts: 1545084190000 },
      { android: 85782, ios: 0, total: 85782, ts: 1545084963000 },
      { android: 86104, ios: 0, total: 86104, ts: 1545085880000 },
      { android: 86202, ios: 0, total: 86202, ts: 1545087480000 },
      { android: 86392, ios: 0, total: 86392, ts: 1545089384000 },
      { android: 86392, ios: 0, total: 86392, ts: 1545090106000 },
      { android: 86613, ios: 0, total: 86613, ts: 1545090636000 },
      { android: 86750, ios: 0, total: 86750, ts: 1545092359000 },
      { android: 86750, ios: 0, total: 86750, ts: 1545092850000 },
      { android: 86750, ios: 0, total: 86750, ts: 1545093378000 },
      { android: 87155, ios: 0, total: 87155, ts: 1545094573000 },
      { android: 87418, ios: 0, total: 87418, ts: 1545096331000 },
      { android: 87418, ios: 0, total: 87418, ts: 1545097597000 },
      { android: 87678, ios: 0, total: 87678, ts: 1545098073000 },
      { android: 87678, ios: 0, total: 87678, ts: 1545098781000 },
      { android: 87678, ios: 0, total: 87678, ts: 1545099518000 },
      { android: 87949, ios: 0, total: 87949, ts: 1545100347000 },
      { android: 87949, ios: 0, total: 87949, ts: 1545101193000 },
      { android: 88168, ios: 0, total: 88168, ts: 1545102420000 },
      { android: 88168, ios: 0, total: 88168, ts: 1545102969000 },
      { android: 88435, ios: 0, total: 88435, ts: 1545103880000 },
      { android: 88435, ios: 0, total: 88435, ts: 1545104779000 },
      { android: 88699, ios: 0, total: 88699, ts: 1545105675000 },
      { android: 88699, ios: 0, total: 88699, ts: 1545106574000 },
      { android: 88970, ios: 0, total: 88970, ts: 1545107568000 },
      { android: 88970, ios: 0, total: 88970, ts: 1545108378000 },
      { android: 89291, ios: 0, total: 89291, ts: 1545109328000 },
      { android: 89291, ios: 0, total: 89291, ts: 1545110151000 },
      { android: 89638, ios: 0, total: 89638, ts: 1545111063000 },
      { android: 89638, ios: 0, total: 89638, ts: 1545111992000 },
      { android: 89911, ios: 0, total: 89911, ts: 1545112947000 },
      { android: 89911, ios: 0, total: 89911, ts: 1545113748000 },
      { android: 90163, ios: 0, total: 90163, ts: 1545114661000 },
      { android: 90163, ios: 0, total: 90163, ts: 1545115567000 },
      { android: 90428, ios: 0, total: 90428, ts: 1545116488000 },
      { android: 90428, ios: 0, total: 90428, ts: 1545117475000 },
      { android: 90689, ios: 0, total: 90689, ts: 1545118262000 },
      { android: 91383, ios: 0, total: 91383, ts: 1545123858000 },
      { android: 91383, ios: 0, total: 91383, ts: 1545124559000 },
      { android: 91594, ios: 0, total: 91594, ts: 1545125456000 }
    ]
  });
});
router.get('/firework-backend/xlog/jump', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [
      { android: 5, ios: 0, total: 5, ts: 1544600877000 },
      { android: 5, ios: 0, total: 5, ts: 1544606445000 },
      { android: 5, ios: 0, total: 5, ts: 1544609479000 },
      { android: 5, ios: 0, total: 5, ts: 1544612008000 },
      { android: 5, ios: 0, total: 5, ts: 1544614033000 },
      { android: 5, ios: 0, total: 5, ts: 1544615679000 },
      { android: 5, ios: 0, total: 5, ts: 1544618728000 },
      { android: 2197, ios: 0, total: 2197, ts: 1544667670000 },
      { android: 2197, ios: 0, total: 2197, ts: 1544668296000 },
      { android: 2197, ios: 0, total: 2197, ts: 1544669179000 },
      { android: 2322, ios: 0, total: 2322, ts: 1544670204000 },
      { android: 2322, ios: 0, total: 2322, ts: 1544670958000 },
      { android: 2456, ios: 0, total: 2456, ts: 1544672245000 },
      { android: 2456, ios: 0, total: 2456, ts: 1544672763000 },
      { android: 2579, ios: 0, total: 2579, ts: 1544673860000 },
      { android: 2579, ios: 0, total: 2579, ts: 1544674593000 },
      { android: 2692, ios: 0, total: 2692, ts: 1544675491000 },
      { android: 2692, ios: 0, total: 2692, ts: 1544676464000 },
      { android: 2813, ios: 0, total: 2813, ts: 1544677319000 },
      { android: 2813, ios: 0, total: 2813, ts: 1544678130000 },
      { android: 2920, ios: 0, total: 2920, ts: 1544679060000 },
      { android: 2920, ios: 0, total: 2920, ts: 1544679946000 },
      { android: 3016, ios: 0, total: 3016, ts: 1544680838000 },
      { android: 3065, ios: 0, total: 3065, ts: 1544681831000 },
      { android: 3108, ios: 0, total: 3108, ts: 1544682714000 },
      { android: 3108, ios: 0, total: 3108, ts: 1544683560000 },
      { android: 3194, ios: 0, total: 3194, ts: 1544684457000 },
      { android: 3194, ios: 0, total: 3194, ts: 1544685364000 },
      { android: 3265, ios: 0, total: 3265, ts: 1544686274000 },
      { android: 3265, ios: 0, total: 3265, ts: 1544687146000 },
      { android: 3356, ios: 0, total: 3356, ts: 1544688113000 },
      { android: 3356, ios: 0, total: 3356, ts: 1544688953000 },
      { android: 3435, ios: 0, total: 3435, ts: 1544689854000 },
      { android: 3435, ios: 0, total: 3435, ts: 1544690820000 },
      { android: 3509, ios: 0, total: 3509, ts: 1544691674000 },
      { android: 3509, ios: 0, total: 3509, ts: 1544692579000 },
      { android: 3566, ios: 0, total: 3566, ts: 1544693452000 },
      { android: 3660, ios: 0, total: 3660, ts: 1544695355000 },
      { android: 3660, ios: 0, total: 3660, ts: 1544696133000 },
      { android: 3742, ios: 0, total: 3742, ts: 1544697093000 },
      { android: 3782, ios: 0, total: 3782, ts: 1544697958000 },
      { android: 3782, ios: 0, total: 3782, ts: 1544698893000 },
      { android: 3879, ios: 0, total: 3879, ts: 1544699764000 },
      { android: 3879, ios: 0, total: 3879, ts: 1544700646000 },
      { android: 3977, ios: 0, total: 3977, ts: 1544701609000 },
      { android: 3977, ios: 0, total: 3977, ts: 1544702482000 },
      { android: 4068, ios: 0, total: 4068, ts: 1544703344000 },
      { android: 4068, ios: 0, total: 4068, ts: 1544704339000 },
      { android: 4179, ios: 0, total: 4179, ts: 1544705255000 },
      { android: 4179, ios: 0, total: 4179, ts: 1544706055000 },
      { android: 4311, ios: 0, total: 4311, ts: 1544706946000 },
      { android: 4311, ios: 0, total: 4311, ts: 1544707870000 },
      { android: 4426, ios: 0, total: 4426, ts: 1544708757000 },
      { android: 4426, ios: 0, total: 4426, ts: 1544709677000 },
      { android: 4577, ios: 0, total: 4577, ts: 1544710535000 },
      { android: 4577, ios: 0, total: 4577, ts: 1544711481000 },
      { android: 4710, ios: 0, total: 4710, ts: 1544712370000 },
      { android: 4710, ios: 0, total: 4710, ts: 1544713279000 },
      { android: 4843, ios: 0, total: 4843, ts: 1544714146000 },
      { android: 4843, ios: 0, total: 4843, ts: 1544715070000 },
      { android: 4953, ios: 0, total: 4953, ts: 1544715939000 },
      { android: 4953, ios: 0, total: 4953, ts: 1544716842000 },
      { android: 5044, ios: 0, total: 5044, ts: 1544717742000 },
      { android: 5044, ios: 0, total: 5044, ts: 1544718692000 },
      { android: 5104, ios: 0, total: 5104, ts: 1544719600000 },
      { android: 5104, ios: 0, total: 5104, ts: 1544720651000 },
      { android: 5149, ios: 0, total: 5149, ts: 1544721378000 },
      { android: 5149, ios: 0, total: 5149, ts: 1544722312000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544723191000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544724083000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544725014000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544725877000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544726787000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544727671000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544728586000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544729467000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544730427000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544731256000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544732496000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544733183000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544734102000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544735005000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544735845000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544736674000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544737524000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544738507000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544739386000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544740283000 },
      { android: 5168, ios: 0, total: 5168, ts: 1544741195000 },
      { android: 5318, ios: 0, total: 5318, ts: 1544742119000 },
      { android: 5361, ios: 0, total: 5361, ts: 1544743440000 },
      { android: 5361, ios: 0, total: 5361, ts: 1544744070000 },
      { android: 5361, ios: 0, total: 5361, ts: 1544744757000 },
      { android: 5391, ios: 0, total: 5391, ts: 1544745683000 },
      { android: 5391, ios: 0, total: 5391, ts: 1544746687000 },
      { android: 5421, ios: 0, total: 5421, ts: 1544747484000 },
      { android: 5421, ios: 0, total: 5421, ts: 1544748341000 },
      { android: 5465, ios: 0, total: 5465, ts: 1544749254000 },
      { android: 5465, ios: 0, total: 5465, ts: 1544750257000 },
      { android: 5515, ios: 0, total: 5515, ts: 1544751541000 },
      { android: 5561, ios: 0, total: 5561, ts: 1544752945000 },
      { android: 5561, ios: 0, total: 5561, ts: 1544753755000 },
      { android: 5608, ios: 0, total: 5608, ts: 1544754676000 },
      { android: 5608, ios: 0, total: 5608, ts: 1544755571000 },
      { android: 5653, ios: 0, total: 5653, ts: 1544756449000 },
      { android: 5653, ios: 0, total: 5653, ts: 1544757387000 },
      { android: 5699, ios: 0, total: 5699, ts: 1544758292000 },
      { android: 5699, ios: 0, total: 5699, ts: 1544759180000 },
      { android: 5748, ios: 0, total: 5748, ts: 1544760106000 },
      { android: 5748, ios: 0, total: 5748, ts: 1544760941000 },
      { android: 5790, ios: 0, total: 5790, ts: 1544761868000 },
      { android: 5790, ios: 0, total: 5790, ts: 1544762734000 },
      { android: 5851, ios: 0, total: 5851, ts: 1544763690000 },
      { android: 5903, ios: 0, total: 5903, ts: 1544764624000 },
      { android: 5903, ios: 0, total: 5903, ts: 1544765498000 },
      { android: 5903, ios: 0, total: 5903, ts: 1544766364000 },
      { android: 5952, ios: 0, total: 5952, ts: 1544767320000 },
      { android: 5952, ios: 0, total: 5952, ts: 1544768154000 },
      { android: 6007, ios: 0, total: 6007, ts: 1544769072000 },
      { android: 6007, ios: 0, total: 6007, ts: 1544769972000 },
      { android: 6064, ios: 0, total: 6064, ts: 1544770904000 },
      { android: 6064, ios: 0, total: 6064, ts: 1544771752000 },
      { android: 6100, ios: 0, total: 6100, ts: 1544772700000 },
      { android: 6100, ios: 0, total: 6100, ts: 1544773560000 },
      { android: 6142, ios: 0, total: 6142, ts: 1544774462000 },
      { android: 6142, ios: 0, total: 6142, ts: 1544775359000 },
      { android: 6179, ios: 0, total: 6179, ts: 1544776272000 },
      { android: 6179, ios: 0, total: 6179, ts: 1544777129000 },
      { android: 6228, ios: 0, total: 6228, ts: 1544778133000 },
      { android: 6228, ios: 0, total: 6228, ts: 1544778992000 },
      { android: 6270, ios: 0, total: 6270, ts: 1544779860000 },
      { android: 6270, ios: 0, total: 6270, ts: 1544780767000 },
      { android: 6314, ios: 0, total: 6314, ts: 1544781656000 },
      { android: 6314, ios: 0, total: 6314, ts: 1544782537000 },
      { android: 6355, ios: 0, total: 6355, ts: 1544783474000 },
      { android: 6355, ios: 0, total: 6355, ts: 1544784356000 },
      { android: 6411, ios: 0, total: 6411, ts: 1544785312000 },
      { android: 6439, ios: 0, total: 6439, ts: 1544786140000 },
      { android: 6470, ios: 0, total: 6470, ts: 1544787222000 },
      { android: 6470, ios: 0, total: 6470, ts: 1544787974000 },
      { android: 6545, ios: 0, total: 6545, ts: 1544788963000 },
      { android: 6545, ios: 0, total: 6545, ts: 1544789768000 },
      { android: 6608, ios: 0, total: 6608, ts: 1544790673000 },
      { android: 6608, ios: 0, total: 6608, ts: 1544791557000 },
      { android: 6686, ios: 0, total: 6686, ts: 1544792435000 },
      { android: 6686, ios: 0, total: 6686, ts: 1544793341000 },
      { android: 6760, ios: 0, total: 6760, ts: 1544794255000 },
      { android: 6760, ios: 0, total: 6760, ts: 1544795136000 },
      { android: 6847, ios: 0, total: 6847, ts: 1544796057000 },
      { android: 6847, ios: 0, total: 6847, ts: 1544796964000 },
      { android: 6948, ios: 0, total: 6948, ts: 1544797850000 },
      { android: 6948, ios: 0, total: 6948, ts: 1544798791000 },
      { android: 7047, ios: 0, total: 7047, ts: 1544799674000 },
      { android: 7101, ios: 0, total: 7101, ts: 1544800543000 },
      { android: 7101, ios: 0, total: 7101, ts: 1544801431000 },
      { android: 7185, ios: 0, total: 7185, ts: 1544802363000 },
      { android: 7185, ios: 0, total: 7185, ts: 1544803263000 },
      { android: 7249, ios: 0, total: 7249, ts: 1544804159000 },
      { android: 7249, ios: 0, total: 7249, ts: 1544805071000 },
      { android: 7311, ios: 0, total: 7311, ts: 1544805955000 },
      { android: 7311, ios: 0, total: 7311, ts: 1544806933000 },
      { android: 7352, ios: 0, total: 7352, ts: 1544807899000 },
      { android: 7352, ios: 0, total: 7352, ts: 1544808660000 },
      { android: 7379, ios: 0, total: 7379, ts: 1544809551000 },
      { android: 7379, ios: 0, total: 7379, ts: 1544810466000 },
      { android: 7405, ios: 0, total: 7405, ts: 1544811360000 },
      { android: 7405, ios: 0, total: 7405, ts: 1544812282000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544813182000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544814070000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544814978000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544815858000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544816742000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544817677000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544818547000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544819641000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544820355000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544821455000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544823744000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544824487000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544825070000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544825885000 },
      { android: 7417, ios: 0, total: 7417, ts: 1544826731000 },
      { android: 7506, ios: 0, total: 7506, ts: 1544827970000 },
      { android: 7506, ios: 0, total: 7506, ts: 1544828556000 },
      { android: 7528, ios: 0, total: 7528, ts: 1544829677000 },
      { android: 7528, ios: 0, total: 7528, ts: 1544830770000 },
      { android: 7558, ios: 0, total: 7558, ts: 1544831585000 },
      { android: 7558, ios: 0, total: 7558, ts: 1544833115000 },
      { android: 7602, ios: 0, total: 7602, ts: 1544833716000 },
      { android: 7602, ios: 0, total: 7602, ts: 1544834496000 },
      { android: 7602, ios: 0, total: 7602, ts: 1544834948000 },
      { android: 7666, ios: 0, total: 7666, ts: 1544836481000 },
      { android: 7666, ios: 0, total: 7666, ts: 1544837049000 },
      { android: 7712, ios: 0, total: 7712, ts: 1544837828000 },
      { android: 7712, ios: 0, total: 7712, ts: 1544838817000 },
      { android: 7766, ios: 0, total: 7766, ts: 1544840009000 },
      { android: 7766, ios: 0, total: 7766, ts: 1544840971000 },
      { android: 7817, ios: 0, total: 7817, ts: 1544841837000 },
      { android: 7817, ios: 0, total: 7817, ts: 1544842261000 },
      { android: 7817, ios: 0, total: 7817, ts: 1544842932000 },
      { android: 7867, ios: 0, total: 7867, ts: 1544843753000 },
      { android: 7867, ios: 0, total: 7867, ts: 1544844717000 },
      { android: 7952, ios: 0, total: 7952, ts: 1544845542000 },
      { android: 7952, ios: 0, total: 7952, ts: 1544846485000 },
      { android: 8017, ios: 0, total: 8017, ts: 1544847357000 },
      { android: 8017, ios: 0, total: 8017, ts: 1544848238000 },
      { android: 8069, ios: 0, total: 8069, ts: 1544849160000 },
      { android: 8069, ios: 0, total: 8069, ts: 1544850099000 },
      { android: 8140, ios: 0, total: 8140, ts: 1544850930000 },
      { android: 8140, ios: 0, total: 8140, ts: 1544851841000 },
      { android: 8208, ios: 0, total: 8208, ts: 1544852739000 },
      { android: 8208, ios: 0, total: 8208, ts: 1544853764000 },
      { android: 8265, ios: 0, total: 8265, ts: 1544854564000 },
      { android: 8265, ios: 0, total: 8265, ts: 1544855462000 },
      { android: 8327, ios: 0, total: 8327, ts: 1544856338000 },
      { android: 8327, ios: 0, total: 8327, ts: 1544857244000 },
      { android: 8385, ios: 0, total: 8385, ts: 1544858160000 },
      { android: 8385, ios: 0, total: 8385, ts: 1544859108000 },
      { android: 8907, ios: 0, total: 8907, ts: 1544873005000 },
      { android: 8907, ios: 0, total: 8907, ts: 1544873501000 },
      { android: 8907, ios: 0, total: 8907, ts: 1544874347000 },
      { android: 8984, ios: 0, total: 8984, ts: 1544875287000 },
      { android: 8984, ios: 0, total: 8984, ts: 1544876171000 },
      { android: 9062, ios: 0, total: 9062, ts: 1544877043000 },
      { android: 9062, ios: 0, total: 9062, ts: 1544877947000 },
      { android: 9155, ios: 0, total: 9155, ts: 1544878911000 },
      { android: 9155, ios: 0, total: 9155, ts: 1544879764000 },
      { android: 9237, ios: 0, total: 9237, ts: 1544880676000 },
      { android: 9237, ios: 0, total: 9237, ts: 1544881571000 },
      { android: 9333, ios: 0, total: 9333, ts: 1544882472000 },
      { android: 9333, ios: 0, total: 9333, ts: 1544883363000 },
      { android: 9442, ios: 0, total: 9442, ts: 1544884261000 },
      { android: 9442, ios: 0, total: 9442, ts: 1544885146000 },
      { android: 9547, ios: 0, total: 9547, ts: 1544886069000 },
      { android: 9547, ios: 0, total: 9547, ts: 1544886949000 },
      { android: 9654, ios: 0, total: 9654, ts: 1544887859000 },
      { android: 9654, ios: 0, total: 9654, ts: 1544888726000 },
      { android: 9744, ios: 0, total: 9744, ts: 1544889667000 },
      { android: 9744, ios: 0, total: 9744, ts: 1544890587000 },
      { android: 9815, ios: 0, total: 9815, ts: 1544891453000 },
      { android: 9815, ios: 0, total: 9815, ts: 1544892343000 },
      { android: 9858, ios: 0, total: 9858, ts: 1544893388000 },
      { android: 9858, ios: 0, total: 9858, ts: 1544894200000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544895285000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544896074000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544896900000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544897841000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544898661000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544899568000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544900461000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544901377000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544902262000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544903189000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544904205000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544904969000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544905887000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544906739000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544907880000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544909009000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544909639000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544910345000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544911353000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544912298000 },
      { android: 9897, ios: 0, total: 9897, ts: 1544913464000 },
      { android: 10052, ios: 0, total: 10052, ts: 1544914404000 },
      { android: 10077, ios: 0, total: 10077, ts: 1544916515000 },
      { android: 10077, ios: 0, total: 10077, ts: 1544917104000 },
      { android: 10077, ios: 0, total: 10077, ts: 1544917635000 },
      { android: 10116, ios: 0, total: 10116, ts: 1544918507000 },
      { android: 10149, ios: 0, total: 10149, ts: 1544919546000 },
      { android: 10149, ios: 0, total: 10149, ts: 1544920269000 },
      { android: 10149, ios: 0, total: 10149, ts: 1544921253000 },
      { android: 10204, ios: 0, total: 10204, ts: 1544923050000 },
      { android: 10266, ios: 0, total: 10266, ts: 1544923441000 },
      { android: 10288, ios: 0, total: 10288, ts: 1544924525000 },
      { android: 10288, ios: 0, total: 10288, ts: 1544924872000 },
      { android: 10288, ios: 0, total: 10288, ts: 1544925658000 },
      { android: 10348, ios: 0, total: 10348, ts: 1544926742000 },
      { android: 10348, ios: 0, total: 10348, ts: 1544927466000 },
      { android: 10412, ios: 0, total: 10412, ts: 1544928361000 },
      { android: 10412, ios: 0, total: 10412, ts: 1544929313000 },
      { android: 10484, ios: 0, total: 10484, ts: 1544930207000 },
      { android: 10484, ios: 0, total: 10484, ts: 1544931152000 },
      { android: 10549, ios: 0, total: 10549, ts: 1544932086000 },
      { android: 10549, ios: 0, total: 10549, ts: 1544932895000 },
      { android: 10603, ios: 0, total: 10603, ts: 1544933783000 },
      { android: 10603, ios: 0, total: 10603, ts: 1544934650000 },
      { android: 10660, ios: 0, total: 10660, ts: 1544935539000 },
      { android: 10660, ios: 0, total: 10660, ts: 1544936466000 },
      { android: 10724, ios: 0, total: 10724, ts: 1544937357000 },
      { android: 10724, ios: 0, total: 10724, ts: 1544938241000 },
      { android: 10782, ios: 0, total: 10782, ts: 1544939172000 },
      { android: 10782, ios: 0, total: 10782, ts: 1544940064000 },
      { android: 10859, ios: 0, total: 10859, ts: 1544940952000 },
      { android: 10859, ios: 0, total: 10859, ts: 1544941832000 },
      { android: 10898, ios: 0, total: 10898, ts: 1544942760000 },
      { android: 10898, ios: 0, total: 10898, ts: 1544943684000 },
      { android: 10970, ios: 0, total: 10970, ts: 1544944637000 },
      { android: 10970, ios: 0, total: 10970, ts: 1544945554000 },
      { android: 10970, ios: 0, total: 10970, ts: 1544946359000 },
      { android: 11076, ios: 0, total: 11076, ts: 1544947419000 },
      { android: 11076, ios: 0, total: 11076, ts: 1544948144000 },
      { android: 11129, ios: 0, total: 11129, ts: 1544949108000 },
      { android: 11129, ios: 0, total: 11129, ts: 1544950008000 },
      { android: 11175, ios: 0, total: 11175, ts: 1544950872000 },
      { android: 11175, ios: 0, total: 11175, ts: 1544951766000 },
      { android: 11236, ios: 0, total: 11236, ts: 1544952654000 },
      { android: 11236, ios: 0, total: 11236, ts: 1544953576000 },
      { android: 11295, ios: 0, total: 11295, ts: 1544954465000 },
      { android: 11295, ios: 0, total: 11295, ts: 1544955359000 },
      { android: 11340, ios: 0, total: 11340, ts: 1544956275000 },
      { android: 11340, ios: 0, total: 11340, ts: 1544957150000 },
      { android: 11392, ios: 0, total: 11392, ts: 1544958045000 },
      { android: 11392, ios: 0, total: 11392, ts: 1544958953000 },
      { android: 11461, ios: 0, total: 11461, ts: 1544959839000 },
      { android: 11461, ios: 0, total: 11461, ts: 1544960744000 },
      { android: 11524, ios: 0, total: 11524, ts: 1544961698000 },
      { android: 11524, ios: 0, total: 11524, ts: 1544962551000 },
      { android: 11607, ios: 0, total: 11607, ts: 1544963437000 },
      { android: 11607, ios: 0, total: 11607, ts: 1544964354000 },
      { android: 11698, ios: 0, total: 11698, ts: 1544965267000 },
      { android: 11698, ios: 0, total: 11698, ts: 1544966220000 },
      { android: 11802, ios: 0, total: 11802, ts: 1544967059000 },
      { android: 11802, ios: 0, total: 11802, ts: 1544967937000 },
      { android: 11897, ios: 0, total: 11897, ts: 1544968889000 },
      { android: 11897, ios: 0, total: 11897, ts: 1544969767000 },
      { android: 11993, ios: 0, total: 11993, ts: 1544970644000 },
      { android: 11993, ios: 0, total: 11993, ts: 1544971544000 },
      { android: 12097, ios: 0, total: 12097, ts: 1544972447000 },
      { android: 12097, ios: 0, total: 12097, ts: 1544973343000 },
      { android: 12191, ios: 0, total: 12191, ts: 1544974224000 },
      { android: 12191, ios: 0, total: 12191, ts: 1544975120000 },
      { android: 12281, ios: 0, total: 12281, ts: 1544976041000 },
      { android: 12281, ios: 0, total: 12281, ts: 1544976966000 },
      { android: 12332, ios: 0, total: 12332, ts: 1544977848000 },
      { android: 12332, ios: 0, total: 12332, ts: 1544978739000 },
      { android: 12371, ios: 0, total: 12371, ts: 1544979839000 },
      { android: 12371, ios: 0, total: 12371, ts: 1544980739000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544981488000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544983107000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544984624000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544986071000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544987848000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544988763000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544989559000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544990487000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544991372000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544992267000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544993176000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544994109000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544995596000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544996364000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544997552000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544998060000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544998743000 },
      { android: 12409, ios: 0, total: 12409, ts: 1544999468000 },
      { android: 12547, ios: 0, total: 12547, ts: 1545001101000 },
      { android: 12574, ios: 0, total: 12574, ts: 1545002408000 },
      { android: 12590, ios: 0, total: 12590, ts: 1545003255000 },
      { android: 12607, ios: 0, total: 12607, ts: 1545004193000 },
      { android: 12607, ios: 0, total: 12607, ts: 1545006016000 },
      { android: 12636, ios: 0, total: 12636, ts: 1545006536000 },
      { android: 12636, ios: 0, total: 12636, ts: 1545007039000 },
      { android: 12660, ios: 0, total: 12660, ts: 1545008186000 },
      { android: 12695, ios: 0, total: 12695, ts: 1545009596000 },
      { android: 12695, ios: 0, total: 12695, ts: 1545011295000 },
      { android: 12734, ios: 0, total: 12734, ts: 1545012651000 },
      { android: 12775, ios: 0, total: 12775, ts: 1545014357000 },
      { android: 12813, ios: 0, total: 12813, ts: 1545015449000 },
      { android: 12813, ios: 0, total: 12813, ts: 1545016558000 },
      { android: 12851, ios: 0, total: 12851, ts: 1545017560000 },
      { android: 12851, ios: 0, total: 12851, ts: 1545018403000 },
      { android: 12887, ios: 0, total: 12887, ts: 1545019366000 },
      { android: 12887, ios: 0, total: 12887, ts: 1545020225000 },
      { android: 12925, ios: 0, total: 12925, ts: 1545021067000 },
      { android: 12925, ios: 0, total: 12925, ts: 1545021973000 },
      { android: 12970, ios: 0, total: 12970, ts: 1545022853000 },
      { android: 12970, ios: 0, total: 12970, ts: 1545023751000 },
      { android: 13196, ios: 0, total: 13196, ts: 1545031486000 },
      { android: 13196, ios: 0, total: 13196, ts: 1545031939000 },
      { android: 13196, ios: 0, total: 13196, ts: 1545032780000 },
      { android: 13237, ios: 0, total: 13237, ts: 1545033712000 },
      { android: 13275, ios: 0, total: 13275, ts: 1545034745000 },
      { android: 13275, ios: 0, total: 13275, ts: 1545035618000 },
      { android: 13275, ios: 0, total: 13275, ts: 1545036335000 },
      { android: 13306, ios: 0, total: 13306, ts: 1545037245000 },
      { android: 13353, ios: 0, total: 13353, ts: 1545039478000 },
      { android: 13405, ios: 0, total: 13405, ts: 1545040390000 },
      { android: 13405, ios: 0, total: 13405, ts: 1545041149000 },
      { android: 13405, ios: 0, total: 13405, ts: 1545041737000 },
      { android: 13454, ios: 0, total: 13454, ts: 1545042652000 },
      { android: 13454, ios: 0, total: 13454, ts: 1545043540000 },
      { android: 13499, ios: 0, total: 13499, ts: 1545044473000 },
      { android: 13499, ios: 0, total: 13499, ts: 1545045376000 },
      { android: 13499, ios: 0, total: 13499, ts: 1545046283000 },
      { android: 13499, ios: 0, total: 13499, ts: 1545047157000 },
      { android: 13499, ios: 0, total: 13499, ts: 1545048093000 },
      { android: 13499, ios: 0, total: 13499, ts: 1545048954000 },
      { android: 13499, ios: 0, total: 13499, ts: 1545049929000 },
      { android: 13499, ios: 0, total: 13499, ts: 1545050847000 },
      { android: 13806, ios: 0, total: 13806, ts: 1545051670000 },
      { android: 13806, ios: 0, total: 13806, ts: 1545052543000 },
      { android: 13806, ios: 0, total: 13806, ts: 1545053525000 },
      { android: 13806, ios: 0, total: 13806, ts: 1545054373000 },
      { android: 13806, ios: 0, total: 13806, ts: 1545055274000 },
      { android: 13806, ios: 0, total: 13806, ts: 1545056189000 },
      { android: 14389, ios: 0, total: 14389, ts: 1545057238000 },
      { android: 14389, ios: 0, total: 14389, ts: 1545057980000 },
      { android: 14389, ios: 0, total: 14389, ts: 1545058941000 },
      { android: 14470, ios: 0, total: 14470, ts: 1545059744000 },
      { android: 14512, ios: 0, total: 14512, ts: 1545060665000 },
      { android: 14557, ios: 0, total: 14557, ts: 1545061576000 },
      { android: 14603, ios: 0, total: 14603, ts: 1545062460000 },
      { android: 14603, ios: 0, total: 14603, ts: 1545063331000 },
      { android: 14677, ios: 0, total: 14677, ts: 1545064230000 },
      { android: 14698, ios: 0, total: 14698, ts: 1545065175000 },
      { android: 14726, ios: 0, total: 14726, ts: 1545066218000 },
      { android: 14762, ios: 0, total: 14762, ts: 1545067317000 },
      { android: 14762, ios: 0, total: 14762, ts: 1545068039000 },
      { android: 14762, ios: 0, total: 14762, ts: 1545068766000 },
      { android: 14784, ios: 0, total: 14784, ts: 1545069701000 },
      { android: 14784, ios: 0, total: 14784, ts: 1545070585000 },
      { android: 14803, ios: 0, total: 14803, ts: 1545071500000 },
      { android: 14803, ios: 0, total: 14803, ts: 1545072391000 },
      { android: 14815, ios: 0, total: 14815, ts: 1545073295000 },
      { android: 14815, ios: 0, total: 14815, ts: 1545074176000 },
      { android: 14834, ios: 0, total: 14834, ts: 1545075103000 },
      { android: 14834, ios: 0, total: 14834, ts: 1545075962000 },
      { android: 14834, ios: 0, total: 14834, ts: 1545076882000 },
      { android: 14834, ios: 0, total: 14834, ts: 1545077830000 },
      { android: 14834, ios: 0, total: 14834, ts: 1545078695000 },
      { android: 14834, ios: 0, total: 14834, ts: 1545079579000 },
      { android: 14834, ios: 0, total: 14834, ts: 1545080672000 },
      { android: 14834, ios: 0, total: 14834, ts: 1545081857000 },
      { android: 14834, ios: 0, total: 14834, ts: 1545082767000 },
      { android: 14834, ios: 0, total: 14834, ts: 1545083504000 },
      { android: 14834, ios: 0, total: 14834, ts: 1545084269000 },
      { android: 14834, ios: 0, total: 14834, ts: 1545084973000 },
      { android: 14884, ios: 0, total: 14884, ts: 1545085923000 },
      { android: 14907, ios: 0, total: 14907, ts: 1545087423000 },
      { android: 14942, ios: 0, total: 14942, ts: 1545089400000 },
      { android: 14942, ios: 0, total: 14942, ts: 1545090121000 },
      { android: 14942, ios: 0, total: 14942, ts: 1545090622000 },
      { android: 14992, ios: 0, total: 14992, ts: 1545092361000 },
      { android: 14992, ios: 0, total: 14992, ts: 1545092857000 },
      { android: 14992, ios: 0, total: 14992, ts: 1545093362000 },
      { android: 15051, ios: 0, total: 15051, ts: 1545094547000 },
      { android: 15095, ios: 0, total: 15095, ts: 1545096390000 },
      { android: 15095, ios: 0, total: 15095, ts: 1545097602000 },
      { android: 15141, ios: 0, total: 15141, ts: 1545098070000 },
      { android: 15141, ios: 0, total: 15141, ts: 1545098619000 },
      { android: 15141, ios: 0, total: 15141, ts: 1545099477000 },
      { android: 15171, ios: 0, total: 15171, ts: 1545100266000 },
      { android: 15199, ios: 0, total: 15199, ts: 1545101350000 },
      { android: 15199, ios: 0, total: 15199, ts: 1545102429000 },
      { android: 15199, ios: 0, total: 15199, ts: 1545102964000 },
      { android: 15228, ios: 0, total: 15228, ts: 1545103862000 },
      { android: 15228, ios: 0, total: 15228, ts: 1545104764000 },
      { android: 15258, ios: 0, total: 15258, ts: 1545105676000 },
      { android: 15258, ios: 0, total: 15258, ts: 1545106559000 },
      { android: 15287, ios: 0, total: 15287, ts: 1545107461000 },
      { android: 15287, ios: 0, total: 15287, ts: 1545108364000 },
      { android: 15321, ios: 0, total: 15321, ts: 1545109348000 },
      { android: 15321, ios: 0, total: 15321, ts: 1545110178000 },
      { android: 15369, ios: 0, total: 15369, ts: 1545111048000 },
      { android: 15369, ios: 0, total: 15369, ts: 1545112018000 },
      { android: 15416, ios: 0, total: 15416, ts: 1545112856000 },
      { android: 15416, ios: 0, total: 15416, ts: 1545113766000 },
      { android: 15461, ios: 0, total: 15461, ts: 1545114717000 },
      { android: 15461, ios: 0, total: 15461, ts: 1545115563000 },
      { android: 15492, ios: 0, total: 15492, ts: 1545116476000 },
      { android: 15492, ios: 0, total: 15492, ts: 1545117372000 },
      { android: 15520, ios: 0, total: 15520, ts: 1545118234000 },
      { android: 15626, ios: 0, total: 15626, ts: 1545123843000 },
      { android: 15626, ios: 0, total: 15626, ts: 1545124548000 },
      { android: 15655, ios: 0, total: 15655, ts: 1545125521000 }
    ]
  });
});

// 审批进度
router.get('/firework-backend/audit/step', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [
      {
        auditorVOS: [{ disName: '殷启明', id: 21, name: 'qiming.yin' }],
        flowId: 90,
        level: 0,
        locationName: '主播工作台',
        operateAt: '2018-12-12 11:38:09',
        operatorName: '殷启明',
        status: '审核通过'
      },
      {
        auditorVOS: [{ disName: '于鲲鹏', id: 31, name: 'seventies' }],
        flowId: 91,
        level: 1,
        locationName: 'App审核',
        operateAt: '2018-12-12 11:46:01',
        operatorName: '于鲲鹏',
        status: '审核通过'
      }
    ]
  });
});
// 保存弹屏详情
router.post('firework-backend/plan/detail', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: {
      appId: 1,
      clientId: 64,
      createAt: '2018-12-12 11:35:59',
      creator: 'heidi.zhang',
      detail: '2018年度主播大赏结果公布，全站宣发公布结果。',
      endAt: '2019-01-07 23:59:59',
      id: 64,
      jumpCount: 1,
      name: '2018年度主播大赏结果公布',
      openCount: 1,
      startAt: '2019-01-03 00:00:00',
      status: '审核成功，投放中',
      statusEn: 'audit_success',
      updateAt: '2018-12-12 11:46:01'
    }
  });
});
// 计划
router.get('/firework-backend/fireworkPlus/list', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [
      {
        contentType: 1,
        expireSeconds: 431999,
        fireworkEndAt: '2019-01-07 23:59:59',
        id: 71,
        jumpType: 1,
        jumpUrl:
          'iting://open?msg_type=14&url=https%3A%2F%2Fm.ximalaya.com%2Fvote%2Fview%2F',
        name: '2018年度主播大赏结果公布',
        payloadMd5: '453fd48677e7371cc0e7cd2b6fbff74f',
        payloadUrl:
          'http://fdfs.xmcdn.com/group53/M08/7E/14/wKgLcVwQgmyx_4CVAAEbXOunXNw249.png',
        prevFireworkId: 0,
        startAt: '2019-01-03 00:00:00'
      }
    ]
  });
});
// 用户位置
router.get('firework-backend/orient/getOrientEnum', (res, req) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [
      { desc: '全部', id: 1, name: 'all' },
      { desc: '新用户', id: 2, name: 'new_user' },
      { desc: '成长用户', id: 3, name: 'grow_user' },
      { desc: '成熟用户', id: 4, name: 'mature_user' },
      { desc: '衰退用户', id: 5, name: 'decline_user' },
      { desc: '流失用户', id: 6, name: 'chum_user' }
    ]
  });
});
router.get('/firework-backend/orient/getOrientEnum', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [
      { desc: '2G', id: 1, name: 'w_2G' },
      { desc: '3G', id: 2, name: 'w_3G' },
      { desc: '4G', id: 3, name: 'w_4G' },
      { desc: 'wifi', id: 4, name: 'wifi' },
      { desc: '其他', id: 5, name: 'other' }
    ]
  });
});
// 获取保存的位置
router.get(
  '/firework-backend/planLocation/getPlanLocationsGroupByPlanId',
  (req, res) => {
    res.send({
      msg: '0',
      ret: 0,
      data: [
        {
          hasCreated: true,
          locationId: 15,
          planId: 64,
          planPlusDTOList: [
            {
              creator: 'jiahao',
              id: 61,
              locationOrder: 15,
              name: '自主投放一周年',
              status: '修改中',
              statusEn: 'modify'
            },
            {
              creator: 'heidi.zhang',
              id: 64,
              locationOrder: 19,
              name: '2018年度主播大赏结果公布',
              status: '审核成功，投放中',
              statusEn: 'audit_success'
            },
            {
              creator: 'heidi.zhang',
              id: 63,
              locationOrder: 20,
              name: '2018年度主播大赏暨人气评选',
              status: '审核成功，投放中',
              statusEn: 'audit_success'
            },
            {
              creator: 'jiahao',
              id: 65,
              locationOrder: 22,
              name: '自主投放一周年',
              status: '待审核',
              statusEn: 'audit'
            },
            {
              creator: 'jiahao',
              id: 66,
              locationOrder: 23,
              name: '微任务-收入狂魔计划',
              status: '待审核',
              statusEn: 'audit'
            }
          ]
        }
      ]
    });
  }
);
// 审批人
router.get('/firework-backend/user/auditors', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [{ disName: '于鲲鹏', id: 31, name: 'seventies', type: '审核者' }]
  });
});
router.get('/firework-backend/orient/detail', (req, res) => {
  res.send({ msg: '0', ret: 0, data: { planId: 64 } });
});
router.get('/firework-backend/audit/detai', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [{ disName: '于鲲鹏', id: 31, name: 'seventies' }]
  });
});
router.get('/firework-backend/audit/detail', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: [{ disName: '于鲲鹏', id: 31, name: 'seventies' }]
  });
});
router.get('/firework-backend/plan/detail', (req, res) => {
  res.send({
    msg: '0',
    ret: 0,
    data: {
      appId: 1,
      clientId: 66,
      createAt: '2018-12-18 15:26:17',
      creator: 'jiahao',
      detail: '微任务-收入狂魔计划',
      endAt: '2018-12-31 15:25:54',
      id: 66,
      jumpCount: 0,
      name: '微任务-收入狂魔计划',
      openCount: 0,
      startAt: '2018-12-18 15:25:48',
      status: '待审核',
      statusEn: 'audit',
      updateAt: '2018-12-18 15:27:32'
    }
  });
});
module.exports = router;
