import Component from '@ember/component';

export default Component.extend({
    value: '',
    autoFocus: false,

    actions: {
        enterHandler() {
            this.search({
                query: this.value,
                page: 1,
            });
        }
    }
});
