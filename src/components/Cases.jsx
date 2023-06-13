import styled from '@emotion/styled';
import { Loading } from './Common/Loading';

export const Cases = ({ data, isLoading, isSuccess, handleClickCase }) =>
  (isLoading || isSuccess) && (
    <>
      <Title>Выберете подходящий кейс</Title>
      <Wrapper>
        {isLoading && <Loading />}
        {isSuccess && data?.records.length > 0 && (
          <table cellPadding="0" cellSpacing="0" border="0">
            <TableHead>
              <tr>
                {Object.keys(data?.records[0].fields)
                  .reverse()
                  .map((key) => (
                    <Th>{key}</Th>
                  ))}
              </tr>
            </TableHead>
            <TableContent>
              {data?.records?.map((record) => (
                <CaseTr onClick={() => handleClickCase(record.fields)}>
                  {Object.keys(record.fields)
                    .reverse()
                    .map((key) =>
                      record.fields[key] instanceof Array ? (
                        <Td>
                          {record.fields[key].map((item) => (
                            <span>{item}</span>
                          ))}
                        </Td>
                      ) : (
                        <Td>{record.fields[key] || ''}</Td>
                      )
                    )}
                </CaseTr>
              ))}
            </TableContent>
          </table>
        )}
      </Wrapper>
    </>
  );

const Wrapper = styled.div`
  width: 100%;
  max-height: 400px;
  overflow-x: scroll;
`;

const TableHead = styled.thead`
  background-color: rgba(255, 255, 255, 0.3);
  width: auto;
  min-width: 100%;
`;

const TableContent = styled.tbody`
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: auto;
  min-width: 100%;
`;

const Th = styled.th`
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
`;

const Td = styled.td`
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 14px;
  word-wrap: break-word;
  color: #fff;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
`;

const Title = styled.h2`
  color: #fff;
  font-size: 26px;
`;

const CaseTr = styled.tr`
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
