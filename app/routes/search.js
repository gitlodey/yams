import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    url: 'https://api.themoviedb.org/3/search/movie',
    apiKey: "72b56103e43843412a992a8d64bf96e9",

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
            api_key: this.apiKey,
            query: params.query,
            page: params.page ? params.page : 1,
        };

        return hash({
            genres: this.store.findAll('genre'),
            movies: this.store.query('movie', data),
          }).then(x => x.movies);

        return $.ajax({
            method: "GET",
            url: this.url,
            data
        })
            .then((res) => {
                if (res.success === false) {
                    this.transitionTo('/');
                }
                return {
                    movies: res.results,
                    currentPage: res.page,
                    isMultiplePages: res.total_pages > 1,
                    totalPages: res.total_pages,
                };
            })
            .catch((e) => {
                throw new Error(e);
                this.transitionTo('/');
            });
    },
});
