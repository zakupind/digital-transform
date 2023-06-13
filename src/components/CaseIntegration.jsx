import styled from '@emotion/styled';

import { Loading } from './Common/Loading';

export const CaseIntegration = ({ content, isSuccess, isLoading }) =>
  (isLoading || isSuccess) && (
    <>
      <Title>Кейс интеграции и план интеграции</Title>
      <Wrapper>
        {isLoading && <Loading />}
        {isSuccess && content.split(/\n/).map((p) => <p>{p}</p>)}
      </Wrapper>
    </>
  );

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 20px 30px;
  overflow-x: scroll;
  margin: 0 auto 28px;
  color: #fff;

  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Title = styled.h2`
  color: #fff;
  font-size: 26px;
`;
