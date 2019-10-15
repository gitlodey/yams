import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
        return {
            data: payload.genres.map((genre) => {
                return {
                    id: genre.id,
                    type: 'genre',
                    attributes: {
                        name: genre.name,
                    }
                }
            }),
        }
    }
});
