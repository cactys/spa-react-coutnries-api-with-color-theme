import { BiHome, BiSolidHome, BiMoon, BiSolidMoon } from 'react-icons/bi';

import { HeaderEl, ModeSwitcher, Title, Wrapper } from './styles';
import { Container } from '../Container/styles';

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title to="/">
            {theme === 'light' ? (
              <BiHome size={32} />
            ) : (
              <BiSolidHome size={32} />
            )}
          </Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <BiMoon size={32} />
            ) : (
              <BiSolidMoon size={32} />
            )}{' '}
            {theme} Theme
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export { Header };
