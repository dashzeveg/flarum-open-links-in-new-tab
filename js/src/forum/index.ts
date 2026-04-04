import app from 'flarum/forum/app';

export { default as extend } from './extend';

app.initializers.add('dashzeveg-open-links-in-new-tab', () => {
  console.log('[dashzeveg/flarum-open-links-in-new-tab] Hello, forum!');
});
