import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse (store, primaryModelClass, payload, id) {

    const correctMovie = Object
      .keys(payload)
      .filter((key) => {
        const triggers = [
          'id',
          'production_countries',
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

    const includedCountries = payload.production_countries.map((country) => {
      return {
        type: 'country',
        id: Math.round(Math.random() * 10000),
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
        id: Math.round(Math.random() * 10000),
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

    let countryIds = includedCountries
      .map((country) => country.id)
    ;

    movie.attributes.countries = countryIds;

    return {
      data: movie,
      included
    }
  }
});
