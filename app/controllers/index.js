import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        searchMovie(queryParams) {
            this.transitionToRoute(`/search?page=${queryParams.page}&query=${queryParams.query}`);
        }
    }
});
