import DS from 'ember-data';
import {singularize} from 'ember-inflector';

export default DS.JSONAPISerializer.extend({
  normalizeArrayResponse (store, primaryModelClass, payload) {

      const meta = {
        page: payload.page,
        totalPages: payload.total_pages,
        totalResults: payload.total_results,
      };

      const correctMovies = payload.results.map((movie) => {
        return {
          id: movie.id,
          type: 'movie',
          attributes: movie,
        }
      });

      return {
        data: correctMovies,
        meta,
      }
  },
  keyForRelationship(key) {
    return `${singularize(key)}_ids`;
  }
});
