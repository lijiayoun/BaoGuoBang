var app = getApp()
Page({
  data: {

    userListInfo: [{
      url: "../home/privateMessage/index",
      icon: '../home/icon/message.png',
      text: '私信',
      isunread: true,
      unreadNum: 2
    }, {
        url: "../home/parcelManagement/index",
      icon: '../home/icon/parcel.png',
      text: '包裹管理',
      isunread: false,
      unreadNum: 0
    }, {
      url: "../home/identityBinding/binding",
        icon: '../home/icon/binding.png',
      text: '身份绑定'
    }, {
      url: "../home/feedback/index",
        icon: '../home/icon/feedback.png',
      text: '反馈'
    }]
  }

})