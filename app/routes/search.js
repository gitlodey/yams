import Route from '@ember/routing/route';

export default Route.extend({

  queryParams: {
    query: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },

  async model(params) {

    if (!params.query) {
      this.transitionTo('/');
    }

    const data = {
      query: params.query,
      page: params.page ? params.page : 1,
    };

    await this.store.findAll('genre');

    return await this.store.query('movie', data);
  },
});
