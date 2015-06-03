import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  // this is how you do resources
  // this.resource('ideas', function() {});

  // this is how you do a single path
  this.resource('ideas', {path: '/'});
});
