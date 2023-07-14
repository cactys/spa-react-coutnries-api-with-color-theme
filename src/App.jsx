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
  const [countries, setCountries] = useState([]);

  const countriesInfo = countries.map((country) => {
    return {
      img: country.flags.png,
      name: country.name.official,
      info: [
        {
          title: 'Population',
          description: country.population.toLocaleString(),
        },
        { title: 'Region', description: country.region },
        { title: 'Capital', description: country.capital },
      ],
    };
  });

  useEffect(() => {
    api
      .getCountries()
      .then((res) => {
        if (res) setCountries(res);
      })
      .catch((err) => console.error(err));
  }, []);

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
              <Home countries={countries} countriesInfo={countriesInfo} />
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
