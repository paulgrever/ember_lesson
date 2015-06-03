import Ember from 'ember';

export default Ember.Controller.extend({
  // these are your controller routes
  title: null, 
  body: null, 
  actions: {
    addNewIdea: function() {
      console.log("hi")
    }
  }
});
