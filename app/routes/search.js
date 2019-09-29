import Route from '@ember/routing/route';

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
        console.log('params', params);
        if (!params.query) {
            this.transitionTo('/');
        }

        let data = {
            api_key: this.apiKey,
            query: params.query,
            page: params.page ? params.page: 1,
        }
        
        return $.ajax({
            method: "GET",
            url: this.url,
            data
          })
        .then((res) => { 
            return {
                movies: res.results,
                currentPage: res.page,
                isMultiplePages: res.total_pages > 1,
                totalPages: res.total_pages,
            };
        })
        .catch((e) => {
            console.log('error', e);
            this.transitionTo('/');
        });
    },
});
