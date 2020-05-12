import { getBlog, getBlogByTitle, getBlogBySubject } from './BlogSelectors';

describe('blog selector', () => {
  it('gets the blogs', () => {
    const state = [
      {
        title: 'How to become a millionaire',
        body: 'At a young age, invest 10% of your monthly earnings in the S&P 500',
        subject: 'wealth' 
      }
    ];
    const blogs = getBlog(state);
    expect(blogs).toEqual([
      {
        title: 'How to become a millionaire',
        body: 'At a young age, invest 10% of your monthly earnings in the S&P 500',
        subject: 'wealth'
      }
    ]);
  });

});
