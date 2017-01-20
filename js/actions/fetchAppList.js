export const APP_LIST = 'APP_LIST'

function generateMockAppList(num) {
  // body...
  const appList = []
  for (var i = 0; i < num; i++) {
    appList.push({
      icon: "http://media.ifanrusercontent.com/media/user_files/trochili/8d/32/8d32c03270dcc655b38927ce7795642ac769c0cc-5421571eb7b116c6e992236c5849b1d56618738c.jpg",
      name: "房产估值",
      tags: ["金融", "工具", "娱乐"],
      id: 12345
    })
  }
  return appList
}

export function fetchMiniAppListAction(index) {
  return {
    payload: index,
    type: APP_LIST
  }
}