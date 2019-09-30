import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://api.themoviedb.org/3/search/movie',
    namespace: '',

    buildURL(modelName, id, snapshot, requestType, query) {
        return `${this.host}?api_key=${query.api_key}&page=${query.page}&query=${query.query}`;
    },

    handleResponse (status, headers, payload, requestData) {
        debugger;
    }
});
