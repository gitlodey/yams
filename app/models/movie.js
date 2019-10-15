import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
    vote_count: attr('number'),
    video: attr('boolean'),
    vote_average: attr('number'),
    title: attr('string'),
    popularity: attr('number'),
    poster_path: attr('string'),
    original_language: attr('string'),
    original_title: attr('string'),
    genres: hasMany('genre'),
    backdrop_path: attr('string'),
    adult: attr('boolean'),
    overview: attr('string'),
    release_date: attr('date'),
});
