import Component from '@ember/component';

export default Component.extend({
    value: '',
    autoFocus: false,

    didInsertElement() {
        if (this.autoFocus) {
            this.$().find('input').focus();
        }
    },

    actions: {
        enterHandler() {
            this.search({
                query: this.value,
                page: 1,
            });
        }
    }
});
