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

export const Info = (
  info,
  {
    name = [],
    flags = [],
    capital = [],
    population,
    region,
    subregion,
    currencies = [],
    languages = [],
  }
) => {
  console.log(info);
  return <Wrapper>Info</Wrapper>;
};
