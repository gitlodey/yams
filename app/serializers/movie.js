import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
        const result = JSON.stringify({
            data: payload.results
        });

        debugger

        return this._super(store, primaryModelClass, result, id, requestType);
      },
      keyForRelationship(key, typeClass, method) {
        return `${singularize(key)}_ids`;
      }
});
