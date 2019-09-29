import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['query', 'page'],
    actions: {
        clickHandler(id) {
            this.transitionToRoute(`/movie/${id}`);
        },
        searchMovie(queryParams) {
            this.transitionToRoute(`/search?page=${queryParams.page}&query=${queryParams.query}`);
        }
    }
});
