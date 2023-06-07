import styled from '@emotion/styled';
import { Loading } from './Loading';

export const Result = ({ isSuccess, isLoading, content }) => (
  <Wrapper>
    {isLoading && <Loading />}
    {isSuccess && content.split(/\n/).map((p) => <p>{p}</p>)}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 20px 30px;
  overflow-x: scroll;
  border: 1px solid red;
`;
