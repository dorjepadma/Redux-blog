import { ADD_BLOG, UPDATE_BLOG } from '../actions/BlogActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_BLOG:
      return [...state, action.payload];
    case UPDATE_BLOG:
      return state.map((blog, i) => {
        if(i === action.payload.index) return action.payload.blog; 
        return blog;
      });
  }
}
