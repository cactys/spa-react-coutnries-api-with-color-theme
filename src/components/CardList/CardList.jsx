import { useEffect, useState } from 'react';

import { BiChevronsUp } from 'react-icons/bi';
import { CardLink, Wrapper } from './styles';

import { Card } from '../Card/Card';
import { Button } from '../../UI/Button/styles';
import { AnimatedIn, AnimatedOut } from '../../UI/Animated/styles';

const CardList = ({ countries }) => {
  const [visibleCard, setVisibleCard] = useState(12);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;

    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    if (scrolled === 0) {
      setShowScrollButton(false);
    } else {
      setShowScrollButton(true);
    }

    if (scrolled + viewportHeight >= fullHeight) {
      setVisibleCard((prevVisibleCards) => prevVisibleCards + 4);
    }
  };

  const scrolledToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const visibleData = countries?.slice(0, visibleCard);

  return (
    <Wrapper>
      {showScrollButton ? (
        <AnimatedIn>
          <Button $alt onClick={scrolledToTop}>
            <BiChevronsUp size={32} />
          </Button>
        </AnimatedIn>
      ) : (
        <AnimatedOut>
          <Button $alt $disabled>
            <BiChevronsUp size={32} />
          </Button>
        </AnimatedOut>
      )}
      {visibleData.map((country) => {
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
            key={country.name.common}
            to={`/country/${country.name.common}`}
          >
            <Card {...countriesInfo} />
          </CardLink>
        );
      })}
    </Wrapper>
  );
};

export { CardList };
