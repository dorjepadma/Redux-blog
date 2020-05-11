import { ADD_BLOG, } from '../actions/BlogActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_BLOG:
      return [...state, action.payload];
  }
}
