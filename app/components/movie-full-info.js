import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    movieImg: computed('movie', function() {
        const baseUrl = 'https://image.tmdb.org/t/p/original';
        const imgPath = this.movie.backdrop_path ? this.movie.backdrop_path : this.movie.poster_path;
        const fullUrl = imgPath ? `${baseUrl}${imgPath}` : 'http://lorempixel.com/g/800/200/abstract/noImage/';
        return fullUrl;
    })
});
