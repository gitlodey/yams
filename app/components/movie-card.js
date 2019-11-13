import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    tagName: '',
    movie: null,
    posterUrl: computed('movie', function () {
        const baseUrl = 'https://image.tmdb.org/t/p/w342';
        const imgPath = this.movie.poster_path ? this.movie.poster_path : this.movie.backdrop_path;

        return imgPath ? `${baseUrl}${imgPath}` : 'http://lorempixel.com/g/400/200/abstract/noImage/';
    }),

    releaseYear: computed('movie', function () {
      return new Date(this.movie.release_date).getFullYear();
    }),

    actions: {
        clickHandler() {
            this.clickOnCard(this.movie.id);
        }
    }
});
