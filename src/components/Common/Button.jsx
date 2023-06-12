import styled from '@emotion/styled';

export const Button = ({ children }, props) => (
  <ButtonStyled {...props} disabled={!process.env.REACT_APP_GPT_API_KEY}>
    {children}
  </ButtonStyled>
);

const ButtonStyled = styled.button`
  width: 120px;
  height: 1.8em;
  font-size: 18px;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: radial-gradient(100% 100% at 100% 0%, #58d7fa 0%, #3cfad1 100%);
  box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%),
    0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%),
    inset 0px -0.01em 0px rgb(58 65 111 / 50%);
  padding: 0 2em;
  margin-top: 12px;
  border-radius: 0.3em;
  color: #fff;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: box-shadow 0.15s ease, transform 0.15s ease;

  ::hover {
    box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%),
      0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #3c4fe0;
    transform: translateY(-0.1em);
  }

  ::active {
    box-shadow: inset 0px 0.1em 0.6em #3c4fe0;
    transform: translateY(0em);
  }
`;
