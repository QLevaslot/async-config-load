import { combineReducers } from 'redux'
import { CONFIG_INIT } from '../actions'

const config = (state = null, action) => {
  switch (action.type) {
    case CONFIG_INIT:
      return {
        ...action.config
      };
    default:
      return state
  }
}

const rootReducer = combineReducers({
  config
})

export default rootReducer
