import { ADD } from './Types';

export const addFriend = (friend)=>({
  type: ADD,
  payload: friend,
})