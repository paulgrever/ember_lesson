import DS from 'ember-data';

let Idea =  DS.Model.extend({
  // seting up what acts like DB
  title: DS.attr('string'),
  body: DS.attr('string')
  
});

Idea.reopenClass({
  FIXTURES:[
    {id: 1, title: "First idea", body: "First body"},
    {id: 2, title: "Second idea", body: "Second body"}
  ]
});

export default Idea;