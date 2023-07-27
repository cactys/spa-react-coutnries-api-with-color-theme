import { Wrapper } from './styles';
import { Container } from '../Container/styles';

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export { Main };
