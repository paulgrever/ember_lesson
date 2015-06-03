import Ember from 'ember';

export default Ember.Controller.extend({
  // these are your controller routes
  title: null, 
  body: null, 
  actions: {
    addNewIdea: function() {
      let title = this.get('title'); 
      let body = this.get('body');
      console.log(title, body);
    }
  }
});
