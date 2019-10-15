import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '72b56103e43843412a992a8d64bf96e9',
    namespace: '',

    buildURL(modelName, id, snapshot, requestType, query) {
        return `${this.host}?api_key=${this.apiKey}&page=${query.page}&query=${query.query}`;
    },
});
