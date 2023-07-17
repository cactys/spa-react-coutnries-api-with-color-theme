import { Link } from 'react-router-dom';

import { styled } from 'styled-components';

import { Card } from '../components/Card';
import { CardList } from '../components/CardList';
import { Controls } from '../components/Controls';

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
  countriesInfo,
  search,
  setSearch,
  region,
  setRegion,
}) => {
  return (
    <>
      <Controls
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
      />
      <CardList>
        {countriesInfo.map((country) => (
          <CardLink key={country.name} to={`/country/${country.name}`}>
            <Card {...country} />
          </CardLink>
        ))}
      </CardList>
    </>
  );
};

export { Home };
