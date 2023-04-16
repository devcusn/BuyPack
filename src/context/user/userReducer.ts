const initialState = {
  userName: ''
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return { ...state, userName: action.payload }
    default:
      return state
  }
}
