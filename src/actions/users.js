import { SAVE_USER, CHANGE_USER_TYPE, LOG_OUT } from '../types'

export const saveUser = () => ({
  type: SAVE_USER,
  payload: {
    name: 'Ayomide Bajo',
    height: '5 feet 5.5 inch',
    hairColor: 'black'
  }
})

export const changeUserType = () => (dispatch, store) => {
  const { userType } = store().users

  dispatch({
    type: CHANGE_USER_TYPE,
    payload: userType === 'boy' ? 'girl' : 'boy'
  })
}

export const logout = () => ({
  type: LOG_OUT,
  payload: null
});
