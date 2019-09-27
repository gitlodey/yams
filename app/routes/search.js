import Route from '@ember/routing/route';

export default Route.extend({
    url: 'https://api.themoviedb.org/3/search/movie',
    apiKey: "72b56103e43843412a992a8d64bf96e9",
    model(params) {

        console.log(params);

        let data = {
            api_key: this.apiKey,
            query: params.query ? params.query : 'mortal',
        }

        return $.ajax({
            method: "GET",
            url: this.url,
            data
          }).then((res) => {
            return res;
        })
        .then((res) => {
            console.log('>>>', res.results[0])
            return res.results;
        })
        .catch((e) => {
            console.log('error', e);
        });
    },
    actions: {
        cliackHandler() {
            debugger;
        }
    }
});
