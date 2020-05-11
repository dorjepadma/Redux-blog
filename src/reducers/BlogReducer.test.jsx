import { addBlog, updateBlog } from '../actions/BlogActions';
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

  it('handles the UPDATE_BLOG action', () => {
    const state = [
      {
        title: 'How to become a millionaire',
        body: 'At a young age, invest 10% of your monthly earnings in the S&P 500'
      }
    ];

    const action = updateBlog(0, {
      title: 'Quickly become a millionaire',
      body: 'Marry a rich person'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        title: 'Quickly become a millionaire',
        body: 'Marry a rich person'
      }
    ]);
  });
});
