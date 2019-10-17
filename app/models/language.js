import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  iso_639_1: attr('string'),
  name: attr('string'),
  //english_name: attr('string'),
});
