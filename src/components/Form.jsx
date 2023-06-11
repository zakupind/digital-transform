import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from './Common/Input';
import { Select } from './Common/Select';
import { Button } from './Common/Button';
import {
  optionsDigitalLavel,
  optionsCompanyLavel,
  optionsCurrency,
} from '../constants/options';
import {
  setBranch,
  setDigitalLevel,
  setCompanyLavel,
  setGeo,
  setTarget,
  setBudget,
  setCurrency,
  setProcesses,
} from '../store/form';

// 1. Отрасль промышленности input
// 2. Текущий уровень цифровизации компании select
// 3. Размер и масштаб деятельности компании select
// 4. Географическое расположение input
// 5. Цели Цифровой трансфомарции input
// 6. Бюджет на цифровую трансформацию input
// 7. Бизнес-процессы, которые хотите цифровизировать input

export const Form = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const {
    branch,
    digitalLevel,
    companyLavel,
    geo,
    target,
    budget,
    currency,
    processes,
  } = useSelector((state) => state.form);

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        value={branch}
        setValue={(e) => dispatch(setBranch(e.target.value))}
        id="name"
        name="Отрасль промышленности"
      />
      <FullWidth>
        <Select
          id="digital-level"
          label="Текущий уровень цифровизации компании"
          value={digitalLevel}
          setValue={(e) => dispatch(setDigitalLevel(e.target.value))}
          options={optionsDigitalLavel}
        />
        <Select
          id="company-level"
          label="Размер и масштаб деятельности компани"
          value={companyLavel}
          setValue={(e) => dispatch(setCompanyLavel(e.target.value))}
          options={optionsCompanyLavel}
        />
        <Budget>
          <Input
            value={budget}
            setValue={(e) => dispatch(setBudget(e.target.value))}
            id="target"
            name="Бюджет на цифровую трансформацию"
          />
          <Select
            id="currency"
            value={currency}
            setValue={(e) => dispatch(setCurrency(e.target.value))}
            options={optionsCurrency}
          />
        </Budget>
      </FullWidth>
      <Input
        value={geo}
        setValue={(e) => dispatch(setGeo(e.target.value))}
        id="geo"
        name="Географическое расположение"
      />
      <Input
        value={target}
        setValue={(e) => dispatch(setTarget(e.target.value))}
        id="target"
        name="Цели Цифровой трансфомарции"
      />
      <Input
        value={processes}
        setValue={(e) => dispatch(setProcesses(e.target.value))}
        id="processes"
        name="Бизнес-процессы, которые хотите цифровизировать (через запятую)"
      />
      <ButtonWrapper>
        <Button type="submit">Найти</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 28px;
  padding: 10px 44px;

  border-radius: 50px;
  background: #aee8f4;
  box-shadow: 34px 34px 68px #94c5cf, -34px -34px 68px #c8ffff;
`;

const FullWidth = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

const Budget = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
