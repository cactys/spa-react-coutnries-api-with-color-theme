import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
`;

export const Title = styled(Link)`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  transition: var(--op-transition);

  &:hover {
    opacity: var(--opacity);
  }
`;

export const ModeSwitcher = styled.div`
  cursor: pointer;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  display: flex;
  column-gap: 0.75rem;
  align-items: center;
  text-transform: capitalize;
  transition: var(--op-transition);

  &:hover {
    opacity: var(--opacity);
  }
`;
