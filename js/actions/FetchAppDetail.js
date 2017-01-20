export const APP_DETAIL = 'APP_DETAIL'

export function fetchAppDetail(appid) {
  return {
    payload: appid,
    type: APP_DETAIL
  }
}