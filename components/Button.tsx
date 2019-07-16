import styled from 'styled-components';

type TButtonProps = {
  shadow?: boolean;
}

const Button = styled.button<TButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12em;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  border-radius: 40px;
  padding: 1em;
  transition: all .1s ease-in;
  &:hover {
    background-color: rgb(193, 76, 76);
  }
  ${p => p.shadow && `
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  `}
`;

export default Button;