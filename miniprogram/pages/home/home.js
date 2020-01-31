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
      isunread: true,
      unreadNum: 2
    }, 
      {
        url: "../home/pacelhistory/history",
        icon: '../home/icon/history.png',
        text: '历史记录',
        isunread: true,
        unreadNum: 3
      },
      {
      url: "../home/identityBinding/binding",
        icon: '../home/icon/binding.png',
      text: '身份绑定'
    }
    ]
  }

})