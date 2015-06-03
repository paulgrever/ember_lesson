import Ember from 'ember';

export default Ember.Component.extend({

  editing: false, 

  actions: {
    delete: function() {
      this.get('idea').destroyRecord();
    }
  }
});
