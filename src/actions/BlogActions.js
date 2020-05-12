export const ADD_BLOG = 'ADD_BLOG';
export const addBlog = blog => ({
  type: ADD_BLOG,
  payload: blog
});
export const UPDATE_BLOG = 'UPDATE_BLOG';
export const updateBlog = (index, blog) => ({
  type: UPDATE_BLOG,
  payload: {
    index,
    blog
  }
});
export const DELETE_BLOG = 'DELETE_BLOG';
export const deleteBlog = index => ({
  type: DELETE_BLOG,  
  payload: index
});

