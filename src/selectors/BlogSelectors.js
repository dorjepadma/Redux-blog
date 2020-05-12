export const getBlog = state => state;

export const getBlogByTitle = (state, title) => 
  getBlog(state).find(blog=> blog.title === title);

export const getBlogBySubject = (state, subject) =>
  getBlog(state).filter(blog => blog.subject > subject);

export const getBlogs = state => Object.keys(state.blogs);
