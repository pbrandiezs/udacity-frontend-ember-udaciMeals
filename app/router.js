import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  model() {
    return EmberRouter.$.get( '/menu/menu.json');
  }
});

Router.map(function() {
  this.route('menu');
  this.route('item', {path: 'item/:item_name'}, function() {
    this.route('nutrition', { path: '/:item_name/nutrition'});
  });
});

export default Router;
