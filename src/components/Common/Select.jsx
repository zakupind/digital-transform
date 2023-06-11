import styled from '@emotion/styled';

export const Select = ({ id, label, options, setValue }, props) => (
  <Label htmlFor={id}>
    {label}
    <SelectStyled name={id} id={id} onChange={setValue} {...props}>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </SelectStyled>
  </Label>
);

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const SelectStyled = styled.select`
  width: 100%;
`;
