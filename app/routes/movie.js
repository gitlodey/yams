import Route from '@ember/routing/route';

export default Route.extend({
    currencyFormatter(currency) {
        const formatter = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
        });

        return formatter.format(currency);
    },
    model(params) {

        const url = `https://api.themoviedb.org/3/movie/${params.movie_id}`;
        const apiKey = '72b56103e43843412a992a8d64bf96e9';

        return $.ajax({
            method: "GET",
            url: url,
            data: {
                "api_key": apiKey
            }
        }).then((data) => {

            const hours = ~~(data.runtime / 60);
            const minutes = data.runtime - hours * 60;

            data.runtime = {
                total: data.runtime,
                hours: hours,
                minutes: minutes
            };

            if (!data.genres || data.genres.length === 0) {
                data.genres = false;
            }

            data.budget = (data.budget === 0) ? false : this.currencyFormatter(data.budget);
            data.revenue = (data.revenue === 0) ? false : this.currencyFormatter(data.revenue);
            data.year = data["release_date"].split('-')[0];

            return data;
        });
    }
});