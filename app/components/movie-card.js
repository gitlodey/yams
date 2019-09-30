import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    tagName: '',
    movie: null,
    posterUrl: computed('movie', function() {
        const baseUrl = 'https://image.tmdb.org/t/p/w342';
        const imgPath = this.movie.poster_path ? this.movie.poster_path : this.movie.backdrop_path;
        const fullUrl = imgPath ? `${baseUrl}${imgPath}` : 'http://lorempixel.com/g/400/200/abstract/noImage/';
        return fullUrl;
    }),

    releaseYear: computed('movie', function() {
        const releaseDate = new Date(this.movie.release_date);

        return releaseDate.getFullYear();
    }),

    actions: {
        clickHandler() {
            this.clickOnCard(this.movie.id);
        }
    }
});
