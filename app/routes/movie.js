import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    return {
      genres: await this.store.findAll('genre'),
      movie: await this.store.findRecord('movie-full', params.movie_id),
      companies: await this.store.findAll('company'),
      countries: await this.store.findAll('country'),
      languages: await this.store.findAll('language'),
    }
  },
});
