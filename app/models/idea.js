import DS from 'ember-data';

let Idea =  DS.Model.extend({
  // seting up what acts like DB
  title: DS.attr('string'),
  body: DS.attr('string')
  
});


export default Idea;