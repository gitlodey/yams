import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    page: DS.attr('number'),
    results: DS.hasMany('movie'),
    total_pages: DS.attr('number'),
    total_results: DS.attr('number'),
});
