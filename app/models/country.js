import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  iso_3166_1: attr('string'),
  name: attr('string'),
});
