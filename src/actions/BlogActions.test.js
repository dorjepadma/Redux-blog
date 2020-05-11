import { addBlog, ADD_BLOG } from './BlogActions';

describe('post a blog', () => {
  it('creates an ADD_BLOG action', () => {
    const action = addBlog({
      title: 'How to become a millionaire',
      body: 'At a young age, invest 10% of your monthly earnings in the S&P 500'
    });

    expect(action).toEqual({
      type: ADD_BLOG,
      payload: {
        title: 'How to become a millionaire',
        body: 'At a young age, invest 10% of your monthly earnings in the S&P 500'
      }
    });
  });
});
