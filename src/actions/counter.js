import { DEC, INC } from './Types';

export const increment = (number) => ({
  type: INC,
  payload: number,
})

export const decremente = (number) => ({
  type: DEC ,
  payload: number,
})