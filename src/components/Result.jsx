import styled from '@emotion/styled';
import { Loading } from './Common/Loading';

export const Result = ({ isSuccess, isLoading, content }) => (
  <Wrapper>
    {!process.env.REACT_APP_GPT_API_KEY && 'Добавьте API_KEY'}
    {isLoading && <Loading />}
    {isSuccess && content.split(/\n/).map((p) => <p>{p}</p>)}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  padding: 20px 30px;
  overflow-x: scroll;
  margin: 28px auto;
  color: #fff;

  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
`;
