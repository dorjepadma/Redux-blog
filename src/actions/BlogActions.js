export const ADD_BLOG = 'ADD_BLOG';
export const addBlog = blog => ({
  type: ADD_BLOG,
  payload: blog
});
export const UPDATE_BLOG = 'ADD_BLOG';
export const updateBlog = (index, blog) => ({
  type: UPDATE_BLOG,
  payload: {
    index,
    blog
  }
});
