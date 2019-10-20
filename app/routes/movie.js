import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    currencyFormatter(currency) {
        const formatter = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
        });

        return formatter.format(currency);
    },
    model(params) {
      return hash({
        genres: this.store.findAll('genre'),
        //languages: this.store.findAll('language'),
        movie: this.store.findRecord('movie-full', params.movie_id),
        companies: this.store.peekAll('company'),
        countries: this.store.peekAll('country'),
        languages: this.store.peekAll('language'),
      }).then((response) => {
        //debugger
        return response//.movie;
      })
      .catch((e) => {
        throw new Error(e);
      });
    }
});
