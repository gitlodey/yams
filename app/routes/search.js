import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

    queryParams: {
        query: {
            refreshModel: true
        },
        page: {
            refreshModel: true
        }
    },

    model(params) {

        if (!params.query) {
            this.transitionTo('/');
        }

        const data = {
            query: params.query,
            page: params.page ? params.page : 1,
        };

        return hash({
            genres: this.store.findAll('genre'),
            //languages: this.store.findAll('language'),
            movies: this.store.query('movie', data),
          })
          .then(x => x.movies)
          .catch(e => console.error(e))
        ;
    },
});
