import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectCurruntUser = createSelector([selectUser], user => user.currentUser)
