import './App.css';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import api from './api';
import { getTextRequest } from './constants/tamplate';
import { Form } from './components/Form';
import { Result } from './components/Result';

function App() {
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

  const [openApiReq, { data, isSuccess, isLoading }] = api.useGetDataMutation();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await openApiReq({
        content: getTextRequest({
          branch,
          digitalLevel,
          companyLavel,
          geo,
          target,
          budget,
          currency,
          processes,
        }),
      });
    },
    [
      openApiReq,
      digitalLevel,
      companyLavel,
      geo,
      target,
      budget,
      currency,
      processes,
    ]
  );

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      <Result
        isLoading={isLoading}
        isSuccess={isSuccess}
        content={data?.choices[0]?.message?.content}
      />
    </div>
  );
}

export default App;
