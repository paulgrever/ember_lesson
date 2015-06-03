import Ember from 'ember';

export default Ember.Route.extend({
  // getting a model for idea
  model: function () {
    return this.store.find('idea');
    // this is eqivelent to Idea.all in rails
  }
});
