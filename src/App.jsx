import './App.css';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import apiGpt from './api/gpt';
import apiAirtable from './api/airTable';
import { Form } from './components/Form';
import { Result } from './components/Result';
import { Cases } from './components/Cases';
import { getTextRequest } from './constants/tamplate';

function App() {
  const formState = useSelector((state) => state.form);

  const [openApiReq, { data, isSuccess, isLoading }] =
    apiGpt.useGetDataMutation();

  const [airtableReq, airtable] = apiAirtable.useLazyGetTablesQuery();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      await airtableReq({
        budget: formState.budget,
        companyLevel: formState.companyLevel,
        branch: formState.branch,
      });

      await openApiReq({ content: getTextRequest(formState) });
    },
    [openApiReq, formState]
  );

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      <Result
        isLoading={isLoading}
        isSuccess={isSuccess}
        content={data?.choices[0]?.message?.content}
      />
      <Cases
        data={airtable.data}
        isLoading={airtable.isLoading}
        isSuccess={airtable.isSuccess}
      />
    </div>
  );
}

export default App;
