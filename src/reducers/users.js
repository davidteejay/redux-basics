import { LOG_OUT, SAVE_USER, CHANGE_USER_TYPE } from '../types'

const initialState = {
  userData: null,
  userType: 'boy'
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_USER:
      return {
        ...state,
        userData: payload,
      }
    case CHANGE_USER_TYPE:
      return {
        ...state,
        userType: payload,
      }
    case LOG_OUT:
      return {
        ...state,
        userData: null,
      }
    default:
      return state
  }
}

export default userReducer
