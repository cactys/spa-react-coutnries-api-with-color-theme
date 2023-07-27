import styled from 'styled-components';

export const Button = styled.button.attrs(({ $alt, $disabled }) => ({
  style: {
    backgroundColor: $alt ? 'var(--colors-ui-button)' : 'var(--colors-ui-base)',
    padding: $alt ? '1rem' : '0.2rem 1rem',
    disabled: $disabled ? true : false,
    cursor: $disabled ? 'default' : 'pointer',
  },
}))`
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--color-text);

  transition: var(--op-transition);

  &:hover {
    opacity: var(--opacity);
  }
`;
