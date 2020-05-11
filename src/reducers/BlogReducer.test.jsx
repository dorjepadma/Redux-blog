import { addBlog } from '../actions/BlogActions';
import reducer from './BlogReducer';

describe('blog reducer', () => {
  it('handles the ADD_BLOG action', () => {
    const state = [];
    const action = addBlog({
      title: 'How to become a millionaire',
      body: 'At a young age, invest 10% of your monthly earnings in the S&P 500'
    });
    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        title: 'How to become a millionaire',
        body: 'At a young age, invest 10% of your monthly earnings in the S&P 500'
      }
    ]);
  });
});
