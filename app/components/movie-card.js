import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    item: null,
    posterUrl: computed('item', function() {
        const baseUrl = 'https://image.tmdb.org/t/p/w342';

        return `${baseUrl}${this.item.poster_path}`;
    }),
    actions: {
        clickHandler() {
            debugger;
        }
    }
});
