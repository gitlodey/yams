import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    tagName: '',
    item: null,
    posterUrl: computed('item', function() {
        const baseUrl = 'https://image.tmdb.org/t/p/w342';
        const imgPath = this.item.poster_path ? this.item.poster_path : this.item.backdrop_path;
        const fullUrl = imgPath ? `${baseUrl}${imgPath}` : 'http://lorempixel.com/g/400/200/abstract/noImage/';
        return fullUrl;

        return `${baseUrl}${this.item.poster_path}`;
    }),

    releaseYear: computed('item', function() {
        const releaseDate = new Date(this.item.release_date);

        return releaseDate.getFullYear();
    }),

    actions: {
        clickHandler() {
            this.clickOnCard(this.item.id);
        }
    }
});
