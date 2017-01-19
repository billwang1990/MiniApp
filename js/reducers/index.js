import { APP_LIST } from '../actions/fetchAppList'

export default function fetchAppListReducer(state = [], action) {
    switch (action.type) {
      case APP_LIST:
        return action.payload
      default:
        return state
    }
}