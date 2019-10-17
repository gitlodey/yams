import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
  adult: attr('boolean'),
  backdrop_path: attr('string'),
  belongs_to_collection: hasMany('collection'),
  budget: attr('number'),
  genres: hasMany('genre'),
  homepage: attr('string'),
  imdb_id: attr('string'),
  original_language: attr('string'),
  original_title: attr('string'),
  overview: attr('string'),
  popularity: attr('number'),
  poster_path: attr('string'),
  production_companies: hasMany('company'),
  production_countries: hasMany('country'),
  release_date: attr('string'),
  revenue: attr('number'),
  runtime: attr('number'),
  spoken_languages: hasMany('language'),
  status: attr('string'),
  tagline: attr('string'),
  title: attr('string'),
  video: attr('boolean'),
  vote_average: attr('number'),
  vote_count: attr('number'),
});
