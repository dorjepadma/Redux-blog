import { addBlog, ADD_BLOG, updateBlog, UPDATE_BLOG, deleteBlog, DELETE_BLOG } from './BlogActions';

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
  it('creates an UPDATE_Blog action', () => {
    const action = updateBlog(1, {
      title: 'How to become a millionaire',
      body: 'At a young age, invest 15% of your monthly earnings in the S&P 500'
    });

    expect(action).toEqual({
      type: UPDATE_BLOG,
      payload: {
        index: 1,
        blog: {
          title: 'How to become a millionaire',
          body: 'At a young age, invest 15% of your monthly earnings in the S&P 500'
        }
      }
    });
  });
  
  it('creates a DELETE_BLOG method', () => {
    const action = deleteBlog(3);
    expect(action).toEqual({
      type: DELETE_BLOG,
      payload: 3
    });
  });
});
