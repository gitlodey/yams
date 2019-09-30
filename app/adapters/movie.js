import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://api.themoviedb.org/3/search/movie',
    namespace: '',

    buildURL(modelName, id, snapshot, requestType, query) {
        return `${this.host}?api_key=${query.api_key}&page=${query.page}&query=${query.query}`;
    },
});
