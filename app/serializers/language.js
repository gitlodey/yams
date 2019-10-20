import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeArrayResponse (store, primaryModelClass, payload) {
    return {
      data: payload.map((language, index) => {
        return {
          id: index,
          type: 'language',
          attributes: language
        }
      }),
    }
  }
});
