import { Link } from 'react-router-dom';

import { styled } from 'styled-components';

import { Card } from '../components/Card';
import { CardList } from '../components/CardList';
import { Controls } from '../components/Controls';
import { useEffect } from 'react';
import { api } from '../utils/api';

const CardLink = styled(Link)`
  color: var(--colors-text);
  text-decoration: none;
  transition: var(--op-transition);

  & > :hover {
    opacity: var(--opacity);
  }
`;

const Home = ({
  countries,
  setCountries,
  search,
  setSearch,
  region,
  setRegion,
  onSearch,
}) => {
  return (
    <>
      <Controls
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
        onSearch={onSearch}
      />
      <CardList>
        {countries?.map((country) => {
          const countriesInfo = {
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
          return (
            <CardLink
              key={country.name.official}
              to={`/country/${country.name.official}`}
            >
              <Card {...countriesInfo} />
            </CardLink>
          );
        })}
      </CardList>
    </>
  );
};

export { Home };
