import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse (store, primaryModelClass, payload, id, requestType) {

    const correctMovie = Object
      .keys(payload)
      .filter((key) => {
        const triggers = [
          'id',
        ];
        return triggers.includes(key) === false;
      })
      .reduce((acc, cv) => {
        acc[cv] = payload[cv];
        return acc;
      }, {});

    const movie = {
      id,
      type: 'movie-full',
      attributes: correctMovie
    };

    console.log(movie);

    const includedCountries = payload.production_countries.map((country, index) => {
      return {
        type: 'country',
        id: index,
        attributes: {
          iso_3166_1: country.iso_3166_1,
          name: country.name,
        },
      }
    });

    const includedCompanies = payload.production_companies.map((company) => {
      return {
        type: 'company',
        id: company.id,
        attributes: {
          logo_path: company.logo_path,
          name: company.name,
          origin_country: company.origin_country,
        },
      }
    });

    const includedLanguages = payload.spoken_languages.map((language, index) => {
      return {
        type: 'language',
        id: index,
        attributes: {
          iso_639_1: language.iso_639_1,
          name: language.name,
        },
      }
    });

    let included = [
      ...includedCountries,
      ...includedCompanies,
      ...includedLanguages,
    ];

    return {
      data: movie,
      included
    }
  }
});
