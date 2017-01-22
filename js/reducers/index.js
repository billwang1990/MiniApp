import { APP_LIST } from '../actions/FetchAppList'
import { APP_DETAIL } from '../actions/FetchAppDetail'

const fake_detail = {
  images: [],
  intro: "主要提供科技创新、产业升级、创业投资相关的深度报道与资讯内容。"
}

const initState = {
  appList: [
  ],
  index: 0
};

export default function fetchAppListReducer(state = initState, action) {
    switch (action.type) {
      case APP_LIST:
       return Object.assign({}, {
          appList: action.payload,
          index: 0
        });
      default:
        return state
    }
}