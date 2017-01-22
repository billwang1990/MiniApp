import { fetchAppList } from '../api'

export const APP_LIST = 'APP_LIST'

export function fetchMiniAppListAction(index) {
  return function(dispatch){
      fetchAppList().then((data)=>{      // 使用 fetch 调用远程数据
          dispatch({                                // 执行 dispatch(action)
              type: APP_LIST,
              payload: data.data,
          })
      })
  }
}