import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    model(params) {
      return hash({
        genres: this.store.findAll('genre'),
        movie: this.store.findRecord('movie-full', params.movie_id),
        companies: this.store.peekAll('company'),
        countries: this.store.peekAll('country'),
        languages: this.store.peekAll('language'),
      })
      .catch((e) => {
        console.error(e);
      });
    }
});
