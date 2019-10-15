import DS from 'ember-data';

const apiKey = '72b56103e43843412a992a8d64bf96e9';

export default DS.JSONAPIAdapter.extend({
  host: `https://api.themoviedb.org/`,
  namespace: '3',
  pathForType() {
    return `configuration/languages?api_key=${apiKey}`;
  },
});
