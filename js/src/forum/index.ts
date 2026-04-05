import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('dashzeveg-open-links-in-new-tab', () => {
  // console.log('[dashzeveg/flarum-open-links-in-new-tab] Hello, forum!');

  const processLinks = (element: Element) => {
    (element.querySelectorAll('.Post-body a') as NodeListOf<HTMLAnchorElement>).forEach((link) => {
      link.setAttribute('target', '_blank');

      const href = link.getAttribute('href') || '';
      const baseUrl = app.forum.attribute('baseUrl') || '';
      console.log('baseUrl' + baseUrl);
      
      if (href.startsWith('/d/') || href.startsWith('/t/') || href.startsWith('/u/') || href.startsWith('/tags') || href.startsWith('/following') || href.startsWith('/settings') || href.startsWith(baseUrl + '/d/')) {
        link.setAttribute('rel', 'noopener');
      } else {
        link.setAttribute('rel', 'noopener noreferrer ugc nofollow');
      }
    });
  };

  extend(CommentPost.prototype, 'oncreate', function () {
    processLinks(this.element);
  });

  extend(CommentPost.prototype, 'onupdate', function () {
    processLinks(this.element);
  });
});