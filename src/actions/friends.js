import { ADD, DELETE } from './Types';

export const addFriend = (friend) => ({
  type: ADD,
  payload: friend,
})

export const deleteFriend = (index) => ({
  type: DELETE,
  payload: index
})