import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { PageNotFound } from './pages/PageNotFound';

import { api } from './utils/api';

function App() {
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
  }, []);

  useEffect(() => {
    handleSearch();
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
              <Home
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
}

export { App };
