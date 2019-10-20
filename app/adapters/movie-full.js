import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.themoviedb.org/3/movie/',
  apiKey: '72b56103e43843412a992a8d64bf96e9',
  namespace: '',

  buildURL(modelName, id) {
    return `${this.host}${id}?api_key=${this.apiKey}`;
  },
});
