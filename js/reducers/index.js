import { APP_LIST } from '../actions/FetchAppList'
import { APP_DETAIL } from '../actions/FetchAppDetail'

const fake_detail = {
  images: [],
  intro: "主要提供科技创新、产业升级、创业投资相关的深度报道与资讯内容。"
}


const initState = {
  appList: [
    {
      icon: "http://media.ifanrusercontent.com/media/user_files/trochili/8d/32/8d32c03270dcc655b38927ce7795642ac769c0cc-5421571eb7b116c6e992236c5849b1d56618738c.jpg",
      name: "房产估值",
      tags: ["金融", "工具", "娱乐"],
      id: 12345
    },
    {
      icon: "http://media.ifanrusercontent.com/media/user_files/trochili/8d/32/8d32c03270dcc655b38927ce7795642ac769c0cc-5421571eb7b116c6e992236c5849b1d56618738c.jpg",
      name: "房产估值",
      tags: ["金融", "工具", "娱乐"],
      id: 12345
    },
    {
      icon: "http://media.ifanrusercontent.com/media/user_files/trochili/8d/32/8d32c03270dcc655b38927ce7795642ac769c0cc-5421571eb7b116c6e992236c5849b1d56618738c.jpg",
      name: "房产估值",
      tags: ["金融", "工具", "娱乐"],
      id: 12345
    },
    {
      icon: "http://media.ifanrusercontent.com/media/user_files/trochili/8d/32/8d32c03270dcc655b38927ce7795642ac769c0cc-5421571eb7b116c6e992236c5849b1d56618738c.jpg",
      name: "房产估值",
      tags: ["金融", "工具", "娱乐"],
      id: 12345
    },
  ],
  index: 0
};

export default function fetchAppListReducer(state = initState, action) {
    console.log(action.type)
    switch (action.type) {
      case APP_LIST:
        // parse  index 
        return state
      default:
        return state
    }
}