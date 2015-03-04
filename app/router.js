import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landing', { path: '/' });

  this.route('recipes', function() {
    this.route('new');
    this.route('recipe', { path: ':objectId' });
  });
});

export default Router;
