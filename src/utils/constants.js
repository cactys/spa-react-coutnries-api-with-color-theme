const BASE_URL = 'https://restcountries.com/v3.1';

const ALL_COUNTRIES =
  BASE_URL + '/all?fields=name,capital,flags,population,region';

const searchByCountry = (name) => BASE_URL + '/name/' + name;

const filterByCode = (codes) =>
  BASE_URL + '/alpha?codes=' + codes.join('');

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

export { options, ALL_COUNTRIES, searchByCountry, filterByCode };
