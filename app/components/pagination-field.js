import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({

    previousPage: computed('currentPage', function () {
        return this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
    }),

    nextPage: computed('currentPage', function () {
        return this.currentPage < this.totalPages ? this.currentPage + 1 : this.totalPages;
    }),

    pagesLabels: computed('currentPage', function () {
        let pagesLabels = [];

        for (let i = -2; i <= 2; i++) {
            const label = this.currentPage + i;

            if (label > 0 && label <= this.totalPages) {
                pagesLabels.push(label);
            }
        }

        return pagesLabels;
    }),

    actions: {
        clickHandler(page) {
            window.scrollTo({
                top: 0,
                behaviour: 'smooth',
            });
            this.changePage(page);
        }
    }
});
