import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  backdrop_path: attr('string'),
  name: attr('string'),
  poster_path: attr('string'),
});
