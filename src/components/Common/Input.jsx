import styled from '@emotion/styled';

export const Input = ({ id, name, value, setValue }) => (
  <Label htmlFor={id}>
    {name}
    <StyledInput
      id={id}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </Label>
);

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledInput = styled.input`
  width: 100%;
`;
