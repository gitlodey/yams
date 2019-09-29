import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    tagName: '',
    item: null,
    posterUrl: computed('item', function() {
        const baseUrl = 'https://image.tmdb.org/t/p/w342';

        return `${baseUrl}${this.item.poster_path}`;
    }),

    releaseYear: computed('item', function() {
        const releaseDate = new Date(this.item.release_date);

        return releaseDate.getFullYear();
    }),

    actions: {
        clickHandler() {
            debugger;
        }
    }
});
