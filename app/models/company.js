import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  logo_path: attr('string'),
  name: attr('string'),
  origin_country: attr('string'),
});
