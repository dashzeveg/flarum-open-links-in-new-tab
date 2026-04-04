import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('dashzeveg-open-links-in-new-tab', () => {
  // console.log('[dashzeveg/flarum-open-links-in-new-tab] Hello, forum!');

  const processLinks = (element: Element) => {
    (element.querySelectorAll('.Post-body a') as NodeListOf<HTMLAnchorElement>).forEach((link) => {
      link.setAttribute('target', '_blank');

      const href = link.getAttribute('href') || '';
      if (href.startsWith('/d/')) {
        link.setAttribute('rel', 'noopener noreferrer');
      } else {
        link.setAttribute('rel', 'noopener noreferrer nofollow');
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