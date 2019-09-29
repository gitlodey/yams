import Component from '@ember/component';

export default Component.extend({
    value: '',

    actions: {
        enterHandler() {
            this.search({
                query: this.value,
                page: 1,
            });
        }
    }
});
