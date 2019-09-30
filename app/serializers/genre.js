import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
        const result = JSON.stringify({
            data: payload.genres
        });

        debugger

        return this._super(store, primaryModelClass, payload.genres, id, requestType);
    }
});
