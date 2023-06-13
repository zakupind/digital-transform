import './App.css';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import apiGpt from './api/gpt';
import apiAirtable from './api/airTable';
import { Form } from './components/Form';
import { Result } from './components/Result';
import { Cases } from './components/Cases';
import { getTextStrategyRequest, getTextCaseReq } from './constants/tamplate';
import { CaseIntegration } from './components/CaseIntegration';

function App() {
  const formState = useSelector((state) => state.form);

  const [
    getStrategyReq,
    {
      data: strategy,
      isSuccess: isSuccessStrategy,
      isLoading: isLoadingStrategy,
    },
  ] = apiGpt.useGetDataMutation();

  const [
    getCaseReq,
    {
      data: transformCase,
      isSuccess: isSuccessTransform,
      isLoading: isLoadingTransform,
    },
  ] = apiGpt.useGetDataMutation();

  const [airtableReq, airtable] = apiAirtable.useLazyGetTablesQuery();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      await airtableReq({
        budget: formState.budget,
        companyLevel: formState.companyLevel,
        branch: formState.branch,
      });

      await getStrategyReq({ content: getTextStrategyRequest(formState) });
    },
    [getStrategyReq, formState]
  );

  const handleClickCase = useCallback(
    async (digitalCase) => {
      const caseDigitalTransform = digitalCase['Кейс цифровой трансформации'];
      const target = digitalCase['Цели трансформационного решения'];
      const processes = digitalCase['Бизнес-процессы'];
      const technologyBase = digitalCase['Технологическая база'].join(', ');

      await getCaseReq({
        content: getTextCaseReq({
          branch: formState.branch,
          caseDigitalTransform,
          companyLevel: formState.companyLevel,
          target,
          processes,
          technologyBase,
        }),
      });
    },
    [formState]
  );

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      <Result
        isLoading={isLoadingStrategy}
        isSuccess={isSuccessStrategy}
        content={strategy?.choices[0]?.message?.content}
      />
      <Cases
        data={airtable.data}
        isLoading={airtable.isLoading}
        isSuccess={airtable.isSuccess}
        handleClickCase={handleClickCase}
      />
      <CaseIntegration
        content={transformCase?.choices[0]?.message?.content}
        isSuccess={isSuccessTransform}
        isLoading={isLoadingTransform}
      />
    </div>
  );
}

export default App;
