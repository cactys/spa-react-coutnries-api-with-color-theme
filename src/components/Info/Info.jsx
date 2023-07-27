import { useState, useEffect } from 'react';

import {
  Flag,
  List,
  ListGroup,
  ListItem,
  Meta,
  TagGroup,
  TagLink,
  Title,
  Wrapper,
} from './styles';
import { api } from '../../utils/api';

export const Info = ({
  name = [],
  flags = [],
  capital = [],
  population,
  region,
  subregion,
  currencies = [],
  languages = [],
  tld = [],
  borders = [],
}) => {
  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    if (borders.length) {
      api.getCountryFilterByCode(borders).then((data) => {
        setNeighbors(data?.map((i) => i.name));
      });
    }
  }, [borders]);

  return (
    <Wrapper>
      <Flag src={flags.png} alt={name.official} />
      <div>
        <Title>{name.official}</Title>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b>{' '}
              {name.nativeName &&
                Object.keys(name.nativeName).map((key) => {
                  return <span key={key}>{name.nativeName[key].common} </span>;
                })}
            </ListItem>
            <ListItem>
              <b>Population:</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain:</b>{' '}
              {tld.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency:</b>{' '}
              {Object.keys(currencies).map((key) => {
                return <span key={key}>{key}</span>;
              })}
            </ListItem>
            <ListItem>
              <b>Top Level Domain:</b>{' '}
              {Object.keys(languages).map((key) => {
                return <span key={key}>{languages[key]}</span>;
              })}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries:</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((neighbor) => (
                <TagLink
                  key={neighbor.common}
                  to={`/country/${neighbor.common}`}
                >
                  {neighbor.common}
                </TagLink>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
