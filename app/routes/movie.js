import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        var url =  "https://api.themoviedb.org/3/movie/" + params.movie_id;
    return $.ajax({
        method: "GET",
        url: url,
        data: {
          "api_key": "72b56103e43843412a992a8d64bf96e9"
        }
    }).then(function (data) {
      // prepare & beautify data
      var hours = ~~(data.runtime / 60);
      var minutes = data.runtime - hours * 60;

      data.runtime = {
        total: data.runtime,
        hours: hours,
        minutes: minutes
      };

      if (!data.genres || data.genres.length === 0) {
        data.genres = false;
      }

      var formatter = new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD"
      });

      data.budget = (data.budget === 0) ? false : formatter.format(data.budget);
      data.year = data["release_date"].split('-')[0];

      return data;
    });
    }
});
