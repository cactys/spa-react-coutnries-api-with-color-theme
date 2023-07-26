import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { api } from '../utils/api';

const Wrapper = styled.section``;

const Flag = styled.img``;

const Title = styled.h1``;

const ListGroup = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

const Meta = styled.div``;

const TagGroup = styled.div``;

const Tag = styled.p``;

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
      <Title>{name.official}</Title>
      <ListGroup>
        <List>
          <ListItem>
            <b>Native Name:</b> {name.nativeName?.rus.official}
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
            <b>Currency:</b> {'r'}
          </ListItem>
        </List>
      </ListGroup>
    </Wrapper>
  );
};
