import DS from 'ember-data';

export default DS.Model.extend({
  // seting up what acts like DB
  title: DS.attr('string'),
  body: DS.attr('string')
  
});
