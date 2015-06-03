import Ember from 'ember';

export default Ember.Controller.extend({
  // these are your controller routes
  title: null, 
  body: null, 
  actions: {
    addNewIdea: function() {
      let idea = this.getProperties('title', 'body');
      this.store.createRecord('idea', idea).save();
    }
  }
});
