import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { api } from '../../utils/api';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

import { Details } from '../../pages/Details/Details';
import { HomePage } from '../../pages/HomePage/HomePage';
import { PageNotFound } from '../../pages/PageNotFound/PageNotFound';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }

    if (search) {
      data = data.filter((country) =>
        country.name.official.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      api
        .getCountries()
        .then((res) => {
          if (res) setCountries(res);
        })
        .catch((err) => console.error(err));
    }
  }, [countries]);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSearch={handleSearch}
                countries={filteredCountries}
                setCountries={setCountries}
                region={region}
                setRegion={setRegion}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route path="/country/:name" element={<Details />} />
          <Route path='*"' element={<PageNotFound />} />
        </Routes>
      </Main>
    </>
  );
};

export { App };
