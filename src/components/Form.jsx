import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from './Common/Input';
import { Select } from './Common/Select';
import { Button } from './Common/Button';
import {
  optionsDigitalLavel,
  optionsCompanyLevel,
  optionsCurrency,
  optionsBranch,
} from '../constants/options';
import {
  setBranch,
  setDigitalLevel,
  setcompanyLevel,
  setGeo,
  setTarget,
  setBudget,
  setCurrency,
  setProcesses,
} from '../store/form';

export const Form = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const {
    branch,
    digitalLevel,
    companyLevel,
    geo,
    target,
    budget,
    currency,
    processes,
  } = useSelector((state) => state.form);

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Select
        value={branch}
        setValue={(e) => dispatch(setBranch(e.target.value))}
        id="branch"
        label="Отрасль промышленности"
        options={optionsBranch}
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
          value={companyLevel}
          setValue={(e) => dispatch(setcompanyLevel(e.target.value))}
          options={optionsCompanyLevel}
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
  margin: 28px auto;
  padding: 10px 44px;

  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
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
